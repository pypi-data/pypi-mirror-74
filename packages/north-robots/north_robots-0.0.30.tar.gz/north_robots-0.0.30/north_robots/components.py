from typing import Optional, List, Dict, Tuple, Any
import os
import json
import string
from enum import Enum
from itertools import cycle
import logging

from PyQt5.QtGui import QVector2D as Vector2, QVector3D as Vector3, QMatrix4x4 as Matrix4x4, QQuaternion as Quaternion
from north_c9.controller import C9Controller
from north_utils.encoding import convert_base
from north_utils.dict import AttrDict


logger = logging.getLogger(__name__)

SpacingType = Tuple[int, int]
LocationGridType = List[List['Location']]
LocationListType = List['Location']
TrayLocationsType = Dict[str, 'Location']


class ComponentError(Exception):
    pass


class ComponentChildNotFoundError(ComponentError):
    pass


class LocationError(Exception):
    pass


class LocationChildExistsError(LocationError):
    pass


class LocationChildNotFoundError(LocationError):
    pass


class ComponentSettingsError(Exception):
    pass


class ComponentSettingsJsonError(ComponentSettingsError):
    pass


class Location:
    """
    An object representing a position and rotation in 3D space.

    Location objects store the position and rotation in local coordinates which are translated on-the-fly to "world"
    or "root" coordinates for ease of use. Internally a 4x4 transformation matrix is constructed based on the parent-
    child relationship of the location which is used to transform positions between local and world coordinates sytems.

    Positions are stored as a Vector3 (or QVector3d) object and rotations are stored as a Quaternion (or QQuaternion).
    The lower level classes are from the PyQt4 library and handle all of the linear algebra needed.

    Note: Quaternions aren't the most intuitive way to work with rotations, so the Location class tries to use Euler
    angles (x / pitch, y / roll and z / yaw) wherever possible. The Quaternion class used provides `toEulerAngles` and
    `Quaternion.fromEulerAngles(x, y, z)` methods to convert to and from Euler angles when needed.
    """
    root: 'Location' = None

    @classmethod
    def find_root(cls) -> 'Location':
        """
        Returns the root (top-most) location, creating one if needed

        :return: root location
        """
        if cls.root is None:
            cls.root = Location(is_root=True)

        return cls.root

    @classmethod
    def location_from_origin_and_x_vector(cls, origin: Vector3, x_vector: Vector3, parent: Optional['Location']=None) -> 'Location':
        """
        Create a new location using the given origin as a position, with the rotation calculated from the given x axis vector

        :param origin: origin vector to use as position
        :param x_vector: x axis vector used to calculate rotation
        :param parent: [optional] parent location for newly craeted location
        :return: location
        """
        z = Vector3(0, 0, 1)  # Assume we haven't rotated our z vector at all
        x = (x_vector - origin).normalized()
        y = Vector3.crossProduct(z, x)
        rotation = Quaternion.fromAxes(x, y, z)

        return Location(local_position=origin, local_rotation=rotation, parent=parent)

    def __init__(self, x: Optional[float]=None, y: Optional[float]=None, z: Optional[float]=None,
                 rx: Optional[float]=None, ry: Optional[float]=None, rz: Optional[float]=None,
                 position: Optional[Vector3]=None, rotation: Optional[Quaternion]=None,
                 local_position: Optional[Vector3]=None, local_rotation: Optional[Quaternion]=None,
                 component: Optional['Component']=None, parent: Optional['Location']=None, children: Optional['List']=None,
                 is_root: bool=False, located: bool=True, use_probe: bool=False) -> None:
        """
        :param x: x position in world coordinates
        :param y: y position in world coordinates
        :param z: z position in world coordinates
        :param rx: x / pitch rotation in world coordinates
        :param ry: y / roll rotation in world coordinates
        :param rz: z / yaw rotation in world coordinates
        :param position: position vector in world coordinates
        :param rotation: rotation quaternion in world coordinates
        :param local_position: position vector in local coordinates
        :param local_rotation: rotation quaternion in local coordinates
        :param component: component that is referencing this location
        :param parent: location that this location's local coordinates are relative to
        :param children: list of child locations
        :param located: whether or not this location has been "located" by the robot (is not a placeholder)
        :param use_probe: use the robot probe when "locating" (driving the robot to) this location
        """
        self._parent: Location = None
        self.parent = Location.find_root() if parent is None and not is_root else parent
        self.children: List['Location'] = children if children is not None else []
        self.root: Optional[Location] = self.parent.root if self.parent is not None else None
        self._component: Optional[Component] = None
        self.component = component
        self.transform = Matrix4x4()
        self.inverted_transform = Matrix4x4()
        self.located = located
        self.use_probe = use_probe

        if local_position is not None:
            self.local_position = Vector3(local_position)
        elif self.parent is not None and position is not None:
            self.local_position = self.parent.world_position_to_local(position)
        elif self.parent is not None and (x is not None or y is not None or z is not None):
            self.local_position = self.parent.world_position_to_local(Vector3(x or 0, y or 0, z or 0))
        else:
            self.local_position = Vector3(x or 0, y or 0, z or 0)

        if local_rotation is not None:
            self.local_rotation = Quaternion(local_rotation)
        elif self.parent is not None and rotation is not None:
            self.local_rotation = self.parent.world_rotation_to_local(rotation)
        elif self.parent is not None and (rx is not None or ry is not None or rz is not None):
            self.local_rotation = self.parent.world_rotation_to_local(Quaternion.fromEulerAngles(rx or 0, ry or 0, rz or 0))
        else:
            self.local_rotation = Quaternion.fromEulerAngles(rx or 0, ry or 0, rz or 0)

        self.update_transform()

    def __repr__(self) -> str:
        return f'{self.__class__.__name__}({self.x}, {self.y}, {self.z}, {self.rx}, {self.ry}, {self.rz})'

    @property
    def parent(self) -> 'Location':
        """ Get or set the parent location """
        return self._parent

    @parent.setter
    def parent(self, value: 'Location'):
        self._parent = value
        if self._parent is not None:
            self._parent.add_child(self)

    def update_transform(self):
        self.transform = Matrix4x4()
        self.transform.translate(self.local_position)
        self.transform.rotate(self.local_rotation)
        self.inverted_transform = self.transform.inverted()[0]

    @property
    def world_to_local_transform(self):
        """ Calculate a transformation matrix for transforming from the world to the local reference frame """
        if self.parent is None:
            return self.transform

        return self.parent.world_to_local_transform * self.inverted_transform

    @property
    def local_to_world_transform(self):
        """ Calculate a transformation matrix for transforming from the local to the world reference frame """
        if self.parent is None:
            return self.inverted_transform

        return self.parent.local_to_world_transform * self.transform

    @property
    def component(self) -> Optional['Component']:
        """ Get or set the Component instance associated with this Location """
        return self._component

    @component.setter
    def component(self, component: 'Component'):
        self._component = component

    @property
    def position(self) -> Vector3:
        """ Get or set the position of this location using the world reference frame """
        if self.parent is None:
            return self.local_position

        return self.parent.local_position_to_world(self.local_position)

    @position.setter
    def position(self, position: Vector3):
        if self.parent is None:
            self.local_position = position
        else:
            self.local_position = self.parent.world_position_to_local(position)

    @property
    def x(self):
        """ Get or set the x position of this location in the world reference frame """
        return self.position[0]

    @x.setter
    def x(self, value: float):
        self.local_position.setX(value)

    @property
    def y(self):
        """ Get or set the y position of this location in the world reference frame """
        return self.position[1]

    @y.setter
    def y(self, value: float):
        self.local_position.setY(value)

    @property
    def xy(self) -> Dict[str, float]:
        """ Get a dictionary with the x and y position for this location """
        return {
            'x': self.x,
            'y': self.y
        }

    @property
    def z(self):
        """ Get or set the y position of this location in the world reference frame """
        return self.position[2]

    @z.setter
    def z(self, value: float):
        self.local_position.setZ(value)

    @property
    def rotation(self):
        """ Get or set the rotation of this location in the world reference frame """
        if self.parent is None:
            return self.local_rotation

        return self.parent.local_rotation_to_world(self.local_rotation)

    @rotation.setter
    def rotation(self, rotation: Quaternion):
        if self.parent is None:
            self.local_rotation = rotation
        else:
            self.local_rotation = self.world_rotation_to_local(rotation)

    @property
    def rx(self):
        """ Get the rotation around the x axis in the world reference frame """
        return self.rotation.getEulerAngles()[0]

    @property
    def ry(self):
        """ Get the rotation around the y axis in the world reference frame """
        return self.rotation.getEulerAngles()[1]

    @property
    def rz(self):
        """ Get the rotation around the z axis in the world reference frame """
        return self.rotation.getEulerAngles()[2]

    def copy(self, **kwargs):
        """
        Create and return a copy of this location instance

        :param kwargs: optional kwargs to change on the copied location
        :return: copied location
        """
        location_copy = self.__class__(local_position=self.local_position, local_rotation=self.local_rotation, parent=self.parent,
                                       component=self._component, children=self.children, located=self.located, use_probe=self.use_probe)

        for name, value in kwargs.items():
            setattr(location_copy, name, value)

        return location_copy

    def copy_from_list(self, location_list: List[float], parent: Optional['Location']=None) -> 'Location':
        """
        Create and return a copy of this location instance using the given list as arguments to the constructor

        :param location_list: list of arguments for Location constructor
        :param parent: optional parent for location copy
        :return: copied location
        """
        return self.copy().update_from_list(location_list, parent)

    def to_list(self) -> List[float]:
        """
        Create a list with the current location's x, y, z, rx, ry and rz that can be used with the copy and update from list methods
        :return: list of Location constructor arguments
        """
        pos = self.position
        rot = self.rotation.toEulerAngles()
        return [pos[0], pos[1], pos[2], rot[0], rot[1], rot[2]]

    def update_from_list(self, location_list: List[float], parent: Optional['Location']=None) -> 'Location':
        """
        Update the current location using a location list

        :param location_list: list of x, y, z, rx, ry and rz elements
        :param parent: optional parent for location copy
        :return: self
        """
        if parent is not None:
            self.parent = parent

        self.position = Vector3(*location_list[0:3])
        self.rotation = Quaternion.fromEulerAngles(*location_list[3:6])
        self.located = True

        self.update_transform()

        return self

    def world_position_to_local(self, position: Vector3) -> Vector3:
        """
        Convert a position in the world coordinate system to this component's local coordinate system

        :param position: world position vector
        :return: local position vector
        """
        if self.parent is None:
            return position

        return self.world_to_local_transform * position

    def local_position_to_world(self, position: Vector3) -> Vector3:
        """
        Convert a position in this component's local coordinate system to the world coordinate system

        :param position: local position vector
        :return: world position vector
        """
        if self.parent is None:
            return position

        return self.local_to_world_transform * position

    def world_rotation_to_local(self, rotation: Quaternion) -> Quaternion:
        """
        Convert a rotation in the world coordinate system to this component's local coordinate system

        :param position: world rotatation quaternion
        :return: local rotation quaternion
        """
        if self.parent is None:
            return rotation

        return self.parent.rotation.inverted() * rotation

    def local_rotation_to_world(self, rotation: Quaternion) -> Quaternion:
        """
        Convert a rotation this component's local coordinate system to the world coordinate system

        :param position: world rotatation quaternion
        :return: local rotation quaternion
        """
        if self.parent is None:
            return rotation

        return self.parent.rotation * rotation

    def add_child(self, location: 'Location'):
        """
        Add a child location, replacing the given location's parent if needed

        :param location: child location
        """
        if location in self.children:
            raise LocationChildExistsError(f'Location child already exists')

        if location.parent is not None:
            location.parent.remove_child(location, ignore_missing=True)

        self.children.append(location)

        location._parent = self

    def remove_child(self, location: 'Location', ignore_missing: bool=False):
        """
        Remove the given location from this location's list of children, along with the location parent

        :param location: child location to remove
        :param ignore_missing: don't raise an exception if location is not a child
        :raises LocationChildNotFoundError: raised if location is not a child
        """
        if location not in self.children:
            if ignore_missing:
                return

            raise LocationChildNotFoundError(f'Unable to remove, child not found')

        self.children.remove(location)
        location._parent = None


class LocationPlaceholder(Location):
    """
    A location instance that can be used as a "placeholder" location that can be located by driving a robot to it.

    LocationPlaceholder instances can be used as class variables in Component classes. These locations will be updated
    from data in a components.json file if one exists, or can be located by driving a robot using the Component.locate_all
    method. These updated placeholder location will be added as insance attributes to the newly-created component.

    Usage:

        class MyComponent(Component):
            location_one = PlaceholderLocation()
            location_two = PlaceholderLocation()
    """
    pass


class ComponentSettings:
    """
    Loads and saves component settings to a component.json file
    """
    data: Dict[str, Dict[str, Any]] = {}

    @classmethod
    def load_settings(cls, filepath: str) -> Dict[str, Any]:
        if filepath in cls.data:
            return cls.data[filepath]

        try:
            with open(filepath, 'r') as settings_file:
                cls.data[filepath] = json.loads(settings_file.read())
        except json.decoder.JSONDecodeError as err:
            raise ComponentSettingsJsonError(err)
        except FileNotFoundError:
            cls.data[filepath] = {}

        return cls.data[filepath]

    @classmethod
    def save_settings(cls, filepath: str, settings_key: str, settings: Dict[str, Any]):
        if filepath not in cls.data:
            cls.data[filepath] = {}

        cls.data[filepath][settings_key] = settings

        with open(filepath, 'w') as settings_file:
            settings_file.write(json.dumps(cls.data[filepath], indent=2))

    def __init__(self, component: 'Component', filename: Optional[str]=None, path: Optional[str]=None):
        if filename is None and path is None and component.parent is not None:
            self.filepath = component.parent.settings.filepath
        else:
            self.filepath = os.path.join(path or '.', filename or 'components.json')

        self.component = component
        self.data: Dict[str, Any] = None

        self.load()

    def load(self):
        component_settings = self.load_settings(self.filepath)
        self.data = component_settings.get(self.component.path, {})

    def save(self):
        self.save_settings(self.filepath, self.component.path, self.data)


class Component:
    """
    WARNING: This class is being deprecated for a simpler workflow based around hard-coded locations

    Represents a real-world component with a location and optional placeholder locations. This class is meant to be
    sub-classed for use in your own components.

    Child classes can override the `load_settings` method to update attributes from saved settings, along with the
    `get_settings` method to return extra settings to be saved (always call the super-class method for these two).
    The `locate` method can be overridden for custom behaviour when locating locations in this component by driving a robot.

    The `Component.locate_all` method is available to locate all placeholder locations and unlocated components by
    driving a robot. This should be called after creating your component instances, but before performing any movements.
    """

    @classmethod
    def locate_all(cls, controller: C9Controller, root: Optional[Location]=None):
        """
        Locate all components attached to the root recursively. This will prompt the user to drive the robot to any
        placeholder location that isn't in a components.json file.

        :param controller:
        :param root:
        """
        root = root if root is not None else Location.find_root()

        for location in root.children:
            if location.component is not None:
                location.component.locate(controller, stop=False)

            cls.locate_all(controller, location)

    def __init__(self, name: str, location: Optional[Location]=None, parent: Optional['Component']=None, use_probe: bool=False, settings: Optional['ComponentSettings']=None):
        """
        Creates a new Component instance

        :param name: component instance name
        :param location: component instance location
        :param parent: component instance parent
        :param use_probe: use the robot probe when "locating" locations for this component
        :param settings: optional ComponentSettings instance
        """
        self.logger = logger.getChild(self.__class__.__name__)
        self.logger.warning(f'Component class is deprecated and will be removed in the future')

        self.name = name
        self._location: Location = None
        self.placeholders: Dict[str, LocationPlaceholder] = {}
        self.location = location if location is not None else Location(located=False)
        self.location.use_probe = use_probe
        if parent is not None:
            self.location.parent = parent.location

        self.location.component = self
        self.settings = settings if settings is not None else ComponentSettings(self)
        self.load_settings()

        # create instances for location placeholders
        for name, placeholder in self.__class__.__dict__.items():  # loop through all the class attributes
            if isinstance(placeholder, LocationPlaceholder):
                try:
                    location_list: List[float] = self.settings.data[name]
                    print(f"{name}.location={location_list}")
                    location = placeholder.copy_from_list(location_list, parent=self.location)
                except KeyError:
                    location = placeholder.copy(located=False, parent=self.location)

                setattr(self, name, location)
                self.placeholders[name] = location

    @property
    def path(self):
        if self.parent is None:
            return self.name

        return f'{self.parent.path}.{self.name}'

    @property
    def location(self) -> Location:
        return self._location

    @location.setter
    def location(self, location: Location):
        self._location = location
        self._location.component = self

    @property
    def parent(self):
        return self.location.parent.component if self.location.parent is not None else None

    @property
    def children(self):
        return [location.component for location in self.location.children if location.component is not None]

    def load_settings(self):
        if 'location' in self.settings.data:
            print(f"{self.name}.location={self.settings.data['location']}")
            self.location.update_from_list(self.settings.data['location'])

    def get_settings(self) -> Dict[str, Any]:
        return {
            'location': self.location.to_list(),
            **{name: placeholder.to_list() for name, placeholder in self.placeholders.items()}
        }

    def save_settings(self):
        self.settings.data.update(self.get_settings())
        self.settings.save()

    def add_child(self, component: 'Component'):
        self.location.add_child(component.location)

    def remove_child(self, component: 'Component'):
        self.location.remove_child(component.location)

    def locate(self, controller: C9Controller, stop: bool=True, if_needed: bool=True):
        if if_needed and self.location.located:
            return

        position = controller.joystick.record_position_vector(f'Please drive robot to the {self.name} location and press Record / Start', use_probe=self.location.use_probe)
        self.location = Location(position=position, parent=self.location.parent)
        self.locate_placeholders(controller)
        self.save_settings()

        if stop:
            controller.joystick.stop_moving()

    def locate_placeholders(self, controller: C9Controller):
        for name, placeholder in self.placeholders.items():
            if not placeholder.located:
                placeholder.position = controller.joystick.record_position_vector(f'Please drive robot to the {self.name} {name} location and press Record / Start', use_probe=placeholder.use_probe)
                placeholder.located = True


class Grid(Component):
    """
    A component that contains a grid of locations. Useful for vial racks, pipette holders, or anything else with a grid.

    Grid locations are sorted similar to Excel by default, with columns labelled A-Z from left-to-right along with rows
    numbered in descending order top-to-bottom.

    Example grid labels:

        A1 B1 C1
        A2 B2 C2
    """

    COLUMN_ROW = 0
    ROW_COLUMN = 1

    @staticmethod
    def to_grid_index(row: int, column: int) -> str:
        """
        Create a grid index label from the given row and column

        :param row: row number, starting at 0
        :param column: colum number, starting at 0
        :return: grid index label
        """
        column_string = convert_base(column, string.ascii_uppercase)

        return f'{column_string}{row + 1}'

    def __init__(self, name: str, location: Optional[Location]=None, rows: int=5, columns: int=5, spacing: Tuple[int, int]=(10, 10), **kwargs) -> None:
        """
        Create a new grid instance.

        :param name: component instance name
        :param location: optional component location
        :param rows: number of grid rows, defaults to 5
        :param columns: number of grid columns, defaults to 5
        :param spacing: 2-element tuple of row and column spacing, defaults to (10, 10)
        :param kwargs: optional Component keyword arguments
        """
        Component.__init__(self, name, location, **kwargs)
        self.logger.warning(f'The Grid class is deprecated, please use the simpler Tray classes')

        self.locations: Dict[str, Location] = AttrDict()
        self.grid: List[List[Location]] = []
        self.rows = rows
        self.columns = columns
        self.spacing = spacing

        self.generate_grid_and_locations()

    def generate_grid_and_locations(self):
        for column in range(0, self.columns):
            self.grid.append([])

            for row in range(0, self.rows):
                location = self.calculate_location(row, column)
                index = self.to_grid_index(row, column)
                self.locations[index] = location
                self.grid[column].append(location)

    def calculate_location(self, row, column):
        row_index = self.rows - row - 1
        x = column * self.spacing[0]
        y = row_index * self.spacing[1]

        return Location(local_position=Vector3(x, y, 0), parent=self.location)

    def grid_indexes(self, order: int=ROW_COLUMN, reverse_columns: bool=False, reverse_rows: bool=False):
        """
        Return a list containing all the grid indexes in this grid

        :param order: the order of indexes (Grid.ROW_COLUMN or Grid.COLUMN_ROW), defaults to Grid.ROW_COLUMN
        :param reverse_columns: reverses the order of columns if True
        :param reverse_rows: reverses the order of rows if True
        :return: list of grid indexes
        """
        indexes = []
        rows = list(range(0, self.rows))
        columns = list(range(0, self.columns))

        if reverse_columns:
            columns.reverse()

        if reverse_rows:
            rows.reverse()

        if order == self.ROW_COLUMN:
            for row in rows:
                for col in columns:
                    indexes.append(self.to_grid_index(row, col))
        else:
            for col in columns:
                for row in rows:
                    indexes.append(self.to_grid_index(row, col))

        return indexes

    def load_settings(self):
        Component.load_settings(self)

        if 'spacing' in self.settings.data:
            self.spacing = tuple(self.settings.data['spacing'])

    def get_settings(self):
        return {
            **Component.get_settings(self),
            'spacing': self.spacing,
        }

    def locate(self, controller: C9Controller, stop: bool=True, if_needed: bool=True):
        """
        Ask the user to locate the grid by moving the robot to 3 locations that define the bounds of the grid.

        :param controller: C9Controller instance
        :param stop: stop using the joystick after locating if True (defaults to True)
        :param if_needed: only locate placeholder locations if they are needed (defaults to True)
        """
        if if_needed and self.location.located:
            return

        y = controller.joystick.record_position_vector(f'Drive robot to the "A" {self.name} grid index location and press Record / Start', use_probe=self.location.use_probe)
        origin = controller.joystick.record_position_vector(f'Drive robot to the "B" {self.name} grid index location and press Record / Start', use_probe=self.location.use_probe)
        x = controller.joystick.record_position_vector(f'Drive robot to the "C" {self.name} grid index location and press Record / Start', use_probe=self.location.use_probe)

        self.spacing = ((x - origin).length() / (self.columns - 1), (y - origin).length() / (self.rows - 1))
        self.location = Location.location_from_origin_and_x_vector(origin, x, parent=self.location.parent)
        self.locate_placeholders(controller)
        self.generate_grid_and_locations()
        self.save_settings()

        if stop:
            controller.joystick.stop_moving()


class Tray:
    """
    A tray is a simple base class used to manage groups of locations. Each tray has a location along with a dict mapping
    indexes to locations. It also has a `build_indexes()` method that returns a list of indexes for iteration, along
    with a `gripper_rotation(index)` method that returns a suggested gripper rotation for an index, or None.

    Subclasses should reimplement the `build_indexes` and `gripper_rotation` methods as needed.
    """

    def __init__(self, locations: Optional[TrayLocationsType]=None):
        """
        :param locations: a list of locations for this tray
        """
        self.locations: TrayLocationsType = {} if locations is None else locations

    def build_indexes(self) -> List[str]:
        """
        Build a list of index strings, useful for looping through tray locations

        :return: list of index strings
        """
        return list(self.locations.keys())

    def gripper_rotation(self, index: str) -> Optional[float]:
        """
        Get the preferred gripper rotation for the given tray index. This can be overridden in subclasses to rotate the
        gripper out of the way of trays.

        :return: gripper rotation in degrees, or None
        """
        return None


class GridTrayError(Exception):
    pass


class GridTray(Tray):
    """
    A Tray that groups locations in a grid.

    Grid locations are sorted similar to Excel by default, with columns labelled A-Z from left-to-right along with rows
    numbered in descending order top-to-bottom.

    Example grid labels:

        A1 B1 C1
        A2 B2 C2
    """
    LEFT = 'left'
    RIGHT = 'right'
    UP = 'up'
    DOWN = 'down'

    TOP_LEFT = 'top_left'
    TOP_RIGHT = 'top_right'
    BOTTOM_LEFT = 'bottom_left'
    BOTTOM_RIGHT = 'bottom_right'

    @staticmethod
    def to_grid_index(letter: int, number: int) -> str:
        """
        Create a grid index label from the given letter and number

        :param number: label number, starting at 0
        :param letter: label letter index, starting at 0 (for A)
        :return: grid index label
        """
        letter_string = convert_base(letter, string.ascii_uppercase)

        return f'{letter_string}{number + 1}'

    def __init__(self, location: Location, rows: int, columns: int, spacing: Optional[Tuple[float, float]],
                 row_spacing: Optional[float]=None, column_spacing: Optional[float]=None,
                 label_start: str=TOP_LEFT, label_direction: str=DOWN,
                 index_start: str=BOTTOM_LEFT, index_direction: str=RIGHT):
        """
        :param location: origin (bottom-left) location of the GridTray (this location also defines the tray rotation)
        :param rows: the number of rows in the grid
        :param columns: the number of columns in the grid
        :param spacing: a tuple specifying the spacing between the locations in this grid [(row spacing, column spacing)]
        :param order: the default order to use when generating a list of indexes, defaults to row then column
        :param reverse_columns: reverse the column order in the generated list of indexes, defaults to False
        :param reverse_rows: reverse the row order in the generated list of indexes, defaults to True
        """
        Tray.__init__(self)
        self.location = location
        self.rows = rows
        self.columns = columns
        self.label_start = label_start
        self.label_direction = label_direction
        self.index_start = index_start
        self.index_direction = index_direction
        self.locations: Dict[str, Location] = {}
        self.grid: List[List[Location]] = []
        self.indexes: List[List[str]] = []

        if spacing is None:
            if row_spacing is None and column_spacing is None:
                raise GridTrayError('Either spacing or row_spacing and column_spacing required')
            elif row_spacing is None or column_spacing is None:
                raise GridTrayError('Both row_spacing and column_spacing required')

            self.spacing = (column_spacing, row_spacing)
        else:
            self.spacing = spacing

        self.generate_grid_and_locations()

    def check_start_and_direction(self, start: str, direction: str):
        """
        Check the given start and direction combo and raise an error if they are invalid

        :param start: The starting corner, one of: GridTray.TOP_LEFT, GridTray.TOP_RIGHT, GridTray.BOTTOM_LEFT, GridTray.BOTTOM_RIGHT
        :param direction: The direction, one of: GridTray.RIGHT, GridTray.LEFT, GridTray.UP, GridTray.DOWN
        """

        if start is self.TOP_LEFT:
            if direction not in (self.RIGHT, self.DOWN):
                raise GridTrayError('Invalid direction, TOP_LEFT must use RIGHT or DOWN')
        elif start is self.TOP_RIGHT:
            if direction not in (self.LEFT, self.DOWN):
                raise GridTrayError('Invalid direction, TOP_RIGHT must use LEFT or DOWN')
        elif start is self.BOTTOM_LEFT:
            if direction not in (self.RIGHT, self.UP):
                raise GridTrayError('Invalid direction, BOTTOM_LEFT must use RIGHT or UP')
        elif start is self.BOTTOM_RIGHT:
            if direction not in (self.LEFT, self.UP):
                raise GridTrayError('Invalid direction, BOTTOM_RIGHT must use LEFT or UP')
        else:
            raise GridTrayError(f'Invalid index or label start: {start.upper()}')

    def generate_grid_and_locations(self):
        self.check_start_and_direction(self.label_start, self.label_direction)

        for row in range(0, self.rows):
            self.grid.append([])
            self.indexes.append([])

            for column in range(0, self.columns):
                if self.label_direction in (self.LEFT, self.RIGHT):
                    index = self.to_grid_index(row, column)
                else:
                    index = self.to_grid_index(column, row)

                location = self.calculate_location(row, column)
                self.locations[index] = location
                self.grid[row].append(location)
                self.indexes[row].append(index)

            if self.label_start in (self.TOP_RIGHT, self.BOTTOM_RIGHT):
                self.indexes[row].reverse()

        if self.label_start in (self.BOTTOM_LEFT, self.BOTTOM_RIGHT):
            self.indexes.reverse()

    def calculate_location(self, row, column) -> Location:
        """
        Calculate the location for the given row and column

        :return: location instance for the given row and column
        """
        row_index = self.rows - row - 1
        x = column * self.spacing[0]
        y = row_index * self.spacing[1]

        return Location(local_position=Vector3(x, y, 0), parent=self.location)

    def gripper_rotation(self, index: str):
        """
        Return the suggested gripper rotation for the given index

        :param index: GridTray index
        :return: Suggested gripper rotation
        """
        return -self.location.rz

    def build_indexes(self, index_start: Optional[str]=None, index_direction: Optional[str]=None):
        """
        Return a list containing all the grid indexes in this grid

        :param index_start: [Optional] grid corner to start building index list from, one of: GridTray.TOP_LEFT, GridTray.TOP_RIGHT, GridTray.BOTTOM_LEFT, GridTray.BOTTOM_RIGHT
        :param index_direction: [Optional] direction to move across grid when building index list, one of: GridTray.RIGHT, GridTray.LEFT, GridTray.UP, GridTray.DOWN
        :return: list of grid indexes
        """
        index_start = self.index_start if index_start is None else index_start
        index_direction = self.index_direction if index_direction is None else index_direction
        self.check_start_and_direction(index_start, index_direction)

        if index_start in (self.TOP_RIGHT, self.BOTTOM_RIGHT):
            columns = range(self.columns - 1, -1, -1)
        else:
            columns = range(0, self.columns)

        if index_start in (self.BOTTOM_LEFT, self.BOTTOM_RIGHT):
            rows = range(self.rows - 1, -1, -1)
        else:
            rows = range(0, self.rows)

        indexes = []

        if index_direction in (self.LEFT, self.RIGHT):
            for row in rows:
                for column in columns:
                    index = self.indexes[row][column]
                    indexes.append(index)
        else:
            for column in columns:
                for row in rows:
                    index = self.indexes[row][column]
                    indexes.append(index)

        return indexes
