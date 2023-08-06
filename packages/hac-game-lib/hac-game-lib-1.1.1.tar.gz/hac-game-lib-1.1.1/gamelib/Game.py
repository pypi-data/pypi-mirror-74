from gamelib.HacExceptions import (
    HacInvalidTypeException,
    HacInvalidLevelException,
    HacException,
)
from gamelib.Board import Board
from gamelib.BoardItem import BoardItemVoid
from gamelib.Characters import NPC, Player
from gamelib.Movable import Projectile
from gamelib.Actuators.SimpleActuators import (
    RandomActuator,
    PathActuator,
    PatrolActuator,
)
from gamelib.Actuators.AdvancedActuators import PathFinder
import gamelib.Structures as Structures
import gamelib.Constants as Constants
import gamelib.Utils as Utils
import random
import json

"""
The Game.py module has only one class: Game. It is what could be called the game engine.
It holds a lot of methods that helps taking care of some complex mechanics behind the
curtain.
"""


class Game:
    """A class that serve as a game engine.

    This object is the central system that allow the management of a game. It holds
    boards (see :class:`gamelib.Board.Board`), associate it to level, takes care of
    level changing, etc.

    :param name: The Game name.
    :type name: str
    :param boards: A dictionnary of boards with the level number as key and a board
        reference as value.
    :type boards: dict
    :param menu: A dictionnary of menus with a category (str) as key and another
        dictionnary (key: a shortcut, value: a description) as value.
    :type menu: dict
    :param current_level: The current level.
    :type current_level: int
    :param enable_partial_display: A boolean to tell the Game object to enable or not
        partial display of boards. Default: False.
    :type enable_partial_display: bool
    :param partial_display_viewport: A 2 int elements array that gives the **radius**
        of the partial display in number of row and column. Please see
        :func:`~gamelib.Board.Board.display_around()`.
    :type partial_display_viewport: list

    .. note:: The game object has an object_library member that is always an empty array
        except just after loading a board. In this case, if the board have a "library"
        field, it is going to be used to populate object_library. This library is
        accessible through the Game object mainly so people have access to it across
        different Boards during level design in the editor. That architecture decision
        is debatable.

    .. note:: The constructor of Game takes care of initializing the terminal to
        properly render the colors on Windows.

    .. important:: The Game object automatically assumes ownership over the Player.

    """

    def __init__(
        self,
        name="Game",
        boards={},
        menu={},
        current_level=None,
        enable_partial_display=False,
        partial_display_viewport=None,
    ):
        self.name = name
        self._boards = boards
        self._menu = menu
        self.current_level = current_level
        self.player = None
        self.state = Constants.RUNNING
        self.enable_partial_display = enable_partial_display
        self.partial_display_viewport = partial_display_viewport
        self._config = None
        self._configuration = None
        self._configuration_internals = None
        self.object_library = []
        Utils.init_term_colors()

    def add_menu_entry(self, category, shortcut, message, data=None):
        """Add a new entry to the menu.

        Add another shortcut and message to the specified category.

        Categories help organize the different sections of a menu or dialogues.

        :param category: The category to which the entry should be added.
        :type category: str
        :param shortcut: A shortcut (usually one key) to display.
        :type shortcut: str
        :param message: a message that explains what the shortcut does.
        :type message: str
        :param data: a data that you can get from the menu object.
        :type message: various

        The shortcut and data is optional.

        Example::

            game.add_menu_entry('main_menu','d','Go right',Constants.RIGHT)
            game.add_menu_entry('main_menu',None,'-----------------')
            game.add_menu_entry('main_menu','v','Change game speed')

        """
        if category in self._menu.keys():
            self._menu[category].append(
                {"shortcut": shortcut, "message": message, "data": data}
            )
        else:
            self._menu[category] = [
                {"shortcut": shortcut, "message": message, "data": data}
            ]

    def delete_menu_category(self, category=None):
        """Delete an entire category from the menu.

        That function removes the entire list of messages that are attached to the
        category.

        :param category: The category to delete.
        :type category: str
        :raise HacInvalidTypeException: If the category is not a string

        .. important:: If the entry have no shortcut it's advised not to try to update
            unless you have only one NoneType as a shortcut.

        Example::

            game.add_menu_entry('main_menu','d','Go right')
            game.update_menu_entry('main_menu','d','Go LEFT',Constants.LEFT)

        """
        if type(category) is str and category in self._menu:
            del self._menu[category]
        else:
            raise HacInvalidTypeException(
                "in Game.delete_menu_entry(): category cannot be anything else but a"
                "string."
            )

    def update_menu_entry(self, category, shortcut, message, data=None):
        """Update an entry of the menu.

        Update the message associated to a category and a shortcut.

        :param category: The category in which the entry is located.
        :type category: str
        :param shortcut: The shortcut of the entry you want to update.
        :type shortcut: str
        :param message: a message that explains what the shortcut does.
        :type message: str
        :param data: a data that you can get from the menu object.
        :type message: various

        .. important:: If the entry have no shortcut it's advised not to try to update
            unless you have only one NoneType as a shortcut.

        Example::

            game.add_menu_entry('main_menu','d','Go right')
            game.update_menu_entry('main_menu','d','Go LEFT',Constants.LEFT)

        """
        for e in self._menu[category]:
            if e["shortcut"] == shortcut:
                e["message"] = message
                if data is not None:
                    e["data"] = data

    def get_menu_entry(self, category, shortcut):
        """Get an entry of the menu.

        This method return a dictionnary with 3 entries :
            * shortcut
            * message
            * data

        :param category: The category in which the entry is located.
        :type category: str
        :param shortcut: The shortcut of the entry you want to get.
        :type shortcut: str
        :return: The menu entry or None if none was found
        :rtype: dict

        Example::

            ent = game.get_menu_entry('main_menu','d')
            game.move_player(int(ent['data']),1)

        """
        if category in self._menu:
            for e in self._menu[category]:
                if e["shortcut"] == shortcut:
                    return e
        return None

    def display_menu(
        self, category, orientation=Constants.ORIENTATION_VERTICAL, paginate=10
    ):
        """Display the menu.

        This method display the whole menu for a given category.

        :param category: The category to display. **Mandatory** parameter.
        :type category: str
        :param orientation: The shortcut of the entry you want to get.
        :type orientation: :class:`gamelib.Constants.Constants`
        :param paginate: pagination parameter (how many items to display before
                        changing line or page).
        :type paginate: int

        Example::

            game.display_menu('main_menu')
            game.display_menu('main_menu', Constants.ORIENTATION_HORIZONTAL, 5)

        """
        line_end = "\n"
        if orientation == Constants.ORIENTATION_HORIZONTAL:
            line_end = " | "
        if category not in self._menu:
            raise HacException(
                "invalid_menu_category",
                f"The '{category}' category is not registered in the menu. Did you add"
                f"a menu entry in that category with Game.add_menu_entry('{category}',"
                f"'some shortcut','some message') ? If yes, then you should check "
                f"for typos.",
            )
        pagination_counter = 1
        for k in self._menu[category]:
            if k["shortcut"] is None:
                print(k["message"], end=line_end)
            else:
                print(f"{k['shortcut']} - {k['message']}", end=line_end)
                pagination_counter += 1
                if pagination_counter > paginate:
                    print("")
                    pagination_counter = 1

    def clear_screen(self):
        """
        Clear the whole screen (i.e: remove everything written in terminal)
        """
        Utils.clear_screen()

    def load_config(self, filename, section="main"):
        """
        Load a configuration file from the disk.
        The configuration file must respect the INI syntax.
        The goal of these methods is to simplify configuration files management.

        :param filename: The filename to load. does not check for existence.
        :type filename: str
        :param section: The section to put the read config file into. This allow for
            multiple files for multiple purpose. Section is a human readable unique
            identifier.
        :type section: str
        :raise FileNotFoundError: If filename is not found on the disk.
        :raise json.decoder.JSONDecodeError: If filename could not be decoded as JSON.
        :returns: The parsed data.
        :rtype: dict

        .. warning:: **breaking changes:** before v1.1.0 that method use to load file
            using the configparser module. This have been dumped in favor of json files.
            Since that methods was apparently not used, there is no backward
            compatibility.

        Example::

            mygame.load_config('game_controls.json','game_control')

        """
        if self._configuration is None:
            self._configuration = {}
        if self._configuration_internals is None:
            self._configuration_internals = {}

        if section not in self._configuration_internals:
            self._configuration_internals[section] = {}

        with open(filename) as config_file:
            config_content = json.load(config_file)
            if section not in self._configuration.keys():
                self._configuration[section] = config_content
                self._configuration_internals[section]["loaded_from"] = filename
                return config_content

    def config(self, section="main"):
        """Get the content of a previously loaded configuration section.

        :param section: The name of the section.
        :type section: str

        Example::

            if mygame.config('main')['hgl-version-required'] < 10100:
                print('The hac-game-lib version 1.1.0 or greater is required.')
                exit()
        """
        if section in self._configuration:
            return self._configuration[section]

    def create_config(self, section):
        """Initialize a new config section.

        The new section is a dictionary.

        :param section: The name of the new section.
        :type section: str

        Example::

            if mygame.config('high_scores') is None:
                mygame.create_config('high_scores')
            mygame.config('high_scores')['first_place'] = mygame.player.name
        """
        if self._configuration is None:
            self._configuration = {}
        if self._configuration_internals is None:
            self._configuration_internals = {}
        self._configuration[section] = {}
        self._configuration_internals[section] = {}

    def save_config(self, section=None, filename=None, append=False):
        """
        Save a configuration section.

        :param section: The name of the section to save on disk.
        :type section: str
        :param filename: The file to write in. If not provided it will write in the file
            that was used to load the given section. If section was not loaded from a
            file, save will raise an exception.
        :type filename: str
        :param append: Do we need to append to the file or replace the content
            (True = append, False = replace)
        :type append: bool

        Example::

            mygame.save_config('game_controls', 'data/game_controls.json')
        """
        if section is None:
            raise HacInvalidTypeException("Game.save_config: section cannot be None.")
        elif section not in self._configuration:
            raise HacException("unknown section", f"section {section} does not exists.")
        if (
            filename is None
            and "loaded_from" not in self._configuration_internals[section]
        ):
            raise HacInvalidTypeException(
                "filename cannot be None if section is new or was loaded manually."
            )
        elif filename is None:
            filename = self._configuration_internals[section]["loaded_from"]
        mode = "w"
        if append:
            mode = "a"
        with open(filename, mode) as file:
            json.dump(self._configuration[section], file)

    def add_board(self, level_number, board):
        """Add a board for the level number.

        This method associate a Board (:class:`gamelib.Board.Board`) to a level number.

        Example::

            game.add_board(1,myboard)

        :param level_number: the level number to associate the board to.
        :type level_number: int
        :param board: a Board object corresponding to the level number.
        :type board: gamelib.Board.Board

        :raises HacInvalidTypeException: If either of these parameters are not of the
            correct type.
        """
        if type(level_number) is int:
            if isinstance(board, Board):
                # Add the board to our list
                self._boards[level_number] = {
                    "board": board,
                    "npcs": [],
                    "projectiles": [],
                }
                # Taking ownership
                board.parent = self
            else:
                raise HacInvalidTypeException(
                    "The board paramater must be a gamelib.Board.Board() object."
                )
        else:
            raise HacInvalidTypeException("The level number must be an int.")

    def get_board(self, level_number):
        """
        This method returns the board associated with a level number.
        :param level_number: The number of the level.
        :type level_number: int

        :raises HacInvalidTypeException: if the level_number is not an int.

        Example::

            level1_board = mygame.get_board(1)
        """
        if type(level_number) is int:
            return self._boards[level_number]["board"]
        else:
            raise HacInvalidTypeException("The level number must be an int.")

    def current_board(self):
        """
        This method return the board object corresponding to the current_level.

        Example::

            game.current_board().display()

        If current_level is set to a value with no corresponding board a HacException
        exception is raised with an invalid_level error.
        """
        if self.current_level in self._boards.keys():
            return self._boards[self.current_level]["board"]
        else:
            raise HacInvalidLevelException(
                "The current level does not correspond to any board."
            )

    def change_level(self, level_number):
        """
        Change the current level, load the board and place the player to the right
        place.

        Example::

            game.change_level(1)

        :param level_number: the level number to change to.
        :type level_number: int

        :raises HacInvalidTypeException: If parameter is not an int.
        """
        if type(level_number) is int:
            if self.player is None:
                raise HacException(
                    "undefined_player",
                    "Game.player is undefined. We cannot change level without a player."
                    " Please set player in your Game object: mygame.player = Player()",
                )
            # If it's not already the case, taking ownership of player
            if self.player.parent != self:
                self.player.parent = self
            if level_number in self._boards.keys():
                if self.player.pos[0] is not None or self.player.pos[1] is not None:
                    self._boards[self.current_level]["board"].clear_cell(
                        self.player.pos[0], self.player.pos[1]
                    )
                self.current_level = level_number
                b = self._boards[self.current_level]["board"]
                b.place_item(
                    self.player,
                    b.player_starting_position[0],
                    b.player_starting_position[1],
                )
            else:
                raise HacInvalidLevelException(
                    f"Impossible to change level to an unassociated level (level number"
                    f" {level_number} is not associated with any board).\nHave you "
                    f"called:\ngame.add_board({level_number},Board()) ?"
                )
        else:
            raise HacInvalidTypeException(
                "level_number needs to be an int in change_level(level_number)."
            )

    def add_npc(self, level_number, npc, row=None, column=None):
        """
        Add a NPC to the game. It will be placed on the board corresponding to the
        level_number. If row and column are not None, the NPC is placed at these
        coordinates. Else, it's randomly placed in an empty cell.

        Example::

            game.add_npc(1,my_evil_npc,5,2)

        :param level_number: the level number of the board.
        :type level_number: int
        :param npc: the NPC to place.
        :type npc: gamelib.Characters.NPC
        :param row: the row coordinate to place the NPC at.
        :type row: int
        :param column: the column coordinate to place the NPC at.
        :type column: int

        If either of these parameters are not of the correct type, a
        HacInvalidTypeException exception is raised.

        .. Important:: If the NPC does not have an actuator, this method is going to
            affect a gamelib.Actuators.SimpleActuators.RandomActuator() to
            npc.actuator. And if npc.step == None, this method sets it to 1
        """
        if type(level_number) is int:
            if isinstance(npc, NPC):
                if row is None or column is None:
                    retry = 0
                    while True:
                        if row is None:
                            row = random.randint(
                                0, self._boards[level_number]["board"].size[1] - 1
                            )
                        if column is None:
                            column = random.randint(
                                0, self._boards[level_number]["board"].size[0] - 1
                            )
                        if isinstance(
                            self._boards[level_number]["board"].item(row, column),
                            BoardItemVoid,
                        ):
                            break
                        else:
                            row = None
                            column = None
                            retry += 1
                if type(row) is int:
                    if type(column) is int:
                        if npc.actuator is None:
                            npc.actuator = RandomActuator(
                                moveset=[
                                    Constants.UP,
                                    Constants.DOWN,
                                    Constants.LEFT,
                                    Constants.RIGHT,
                                ]
                            )
                        if npc.step is None:
                            npc.step = 1
                        self._boards[level_number]["board"].place_item(npc, row, column)
                        self._boards[level_number]["npcs"].append(npc)
                    else:
                        raise HacInvalidTypeException("column must be an int.")
                else:
                    raise HacInvalidTypeException("row must be an int.")
            else:
                raise HacInvalidTypeException(
                    "The npc paramater must be a gamelib.Characters.NPC() object."
                )
        else:
            raise HacInvalidTypeException("The level number must be an int.")

    def actuate_npcs(self, level_number):
        """Actuate all NPCs on a given level

        This method actuate all NPCs on a board associated with a level. At the moment
        it means moving the NPCs but as the Actuators become more capable this method
        will evolve to allow more choice (like attack use objects, etc.)

        :param level_number: The number of the level to actuate NPCs in.
        :type int:

        Example::

            mygame.actuate_npcs(1)

        .. note:: This method only move NPCs when their actuator state is RUNNING. If it
            is PAUSED or STOPPED, theNPC is not moved.
        """
        if self.state == Constants.RUNNING:
            if type(level_number) is int:
                if level_number in self._boards.keys():
                    for npc in self._boards[level_number]["npcs"]:
                        if npc.actuator.state == Constants.RUNNING:
                            self._boards[level_number]["board"].move(
                                npc, npc.actuator.next_move(), npc.step
                            )
                else:
                    raise HacInvalidLevelException(
                        f"Impossible to actuate NPCs for this level (level number "
                        f"{level_number} is not associated with any board)."
                    )
            else:
                raise HacInvalidTypeException(
                    "In actuate_npcs(level_number) the level_number must be an int."
                )

    def add_projectile(self, level_number, projectile, row=None, column=None):
        """
        Add a Projectile to the game. It will be placed on the board corresponding to
        level_number. Neither row nor column can be None.

        Example::

            game.add_projectile(1, fireball, 5, 2)

        :param level_number: the level number of the board.
        :type level_number: int
        :param projectile: the Projectile to place.
        :type projectile: :class:`~gamelib.Movable.Projectile`
        :param row: the row coordinate to place the Projectile at.
        :type row: int
        :param column: the column coordinate to place the Projectile at.
        :type column: int

        If either of these parameters are not of the correct type, a
        HacInvalidTypeException exception is raised.

        .. Important:: If the Projectile does not have an actuator, this method is going
            to affect gamelib.Actuators.SimpleActuators.RandomActuator(moveset=[RIGHT])
            to projectile.actuator. And if projectile.step == None, this method sets it
            to 1.
        """
        if type(level_number) is int:
            if isinstance(projectile, Projectile):
                if row is None or column is None:
                    raise HacInvalidTypeException(
                        "In Game.add_projectile neither row nor column can be None."
                    )
                if type(row) is int:
                    if type(column) is int:
                        # If we're trying to send a projectile out of the board's bounds
                        # We do nothing and return.
                        if (
                            row >= self._boards[level_number]["board"].size[1]
                            or column >= self._boards[level_number]["board"].size[0]
                            or row < 0
                            or column < 0
                        ):
                            return
                        # If there is something were we should put the projectile,
                        # then we consider it an immediate hit.
                        check_object = self._boards[level_number]["board"].item(
                            row, column
                        )
                        if not isinstance(check_object, BoardItemVoid):
                            if projectile.is_aoe:
                                # AoE is easy, just return everything in range
                                projectile.hit(
                                    self.neighbors(projectile.aoe_radius, check_object)
                                )
                                return
                            else:
                                projectile.hit([check_object])
                                return
                        if projectile.actuator is None:
                            projectile.actuator = RandomActuator(
                                moveset=[Constants.RIGHT]
                            )
                        if projectile.step is None:
                            projectile.step = 1
                        self._boards[level_number]["board"].place_item(
                            projectile, row, column
                        )
                        self._boards[level_number]["projectiles"].append(projectile)
                    else:
                        raise HacInvalidTypeException("column must be an int.")
                else:
                    raise HacInvalidTypeException("row must be an int.")
            else:
                raise HacInvalidTypeException(
                    "The projectile paramater must be a "
                    "gamelib.Characters.Projectile() object."
                )
        else:
            raise HacInvalidTypeException("The level number must be an int.")

    def remove_npc(self, level_number, npc):
        """This methods remove the NPC from the level in parameter.

        :param level: The number of the level from where the NPC is to be removed.
        :type level: int
        :param npc: The NPC object to remove.
        :type npc: :class:`~gamelib.Characters.NPC`

        Example::

            mygame.remove_npc(1, dead_npc)
        """
        self._boards[level_number]["npcs"].remove(npc)
        self.current_board().clear_cell(npc.pos[0], npc.pos[1])

    def actuate_projectiles(self, level_number):
        """Actuate all Projectiles on a given level

        This method actuate all Projectiles on a board associated with a level.
        This method differs from actuate_npcs() as some logic is involved with
        projectiles that NPC do not have.
        This method decrease the available range by projectile.step each time it's
        called.
        It also detects potential collisions.
        If the available range falls to 0 or a collision is detected the projectile
        hit_callback is called.

        :param level_number: The number of the level to actuate Projectiles in.
        :type int:

        Example::

            mygame.actuate_projectiles(1)

        .. note:: This method only move Projectiles when their actuator state is
            RUNNING. If it is PAUSED or STOPPED, the Projectile is not moved.
        """
        if self.state == Constants.RUNNING:
            if type(level_number) is int:
                if level_number in self._boards.keys():
                    board = self._boards[level_number]["board"]
                    for proj in self._boards[level_number]["projectiles"]:
                        if proj.actuator.state == Constants.RUNNING:
                            if proj.range > 0:
                                init_position = proj.pos
                                direction = proj.actuator.next_move()
                                board.move(proj, direction, proj.step)
                                proj.range -= proj.step
                                # If range was positive and position did not change
                                # it means something is blocking the projectile path
                                # in other words: we detected a collision.
                                if proj.pos == init_position:
                                    if proj.is_aoe:
                                        # AoE is easy, just return everything in range
                                        proj.hit(self.neighbors(proj.aoe_radius, proj))
                                    else:
                                        # directional hit requires us to get the item
                                        # that blocked our path
                                        proj.hit([BoardItemVoid()])
                                        new_x = None
                                        new_y = None
                                        if direction == Constants.UP:
                                            new_x = proj.pos[0] - proj.step
                                            new_y = proj.pos[1]
                                        elif direction == Constants.DOWN:
                                            new_x = proj.pos[0] + proj.step
                                            new_y = proj.pos[1]
                                        elif direction == Constants.LEFT:
                                            new_x = proj.pos[0]
                                            new_y = proj.pos[1] - proj.step
                                        elif direction == Constants.RIGHT:
                                            new_x = proj.pos[0]
                                            new_y = proj.pos[1] + proj.step
                                        elif direction == Constants.DRUP:
                                            new_x = proj.pos[0] - proj.step
                                            new_y = proj.pos[1] + proj.step
                                        elif direction == Constants.DRDOWN:
                                            new_x = proj.pos[0] + proj.step
                                            new_y = proj.pos[1] + proj.step
                                        elif direction == Constants.DLUP:
                                            new_x = proj.pos[0] - proj.step
                                            new_y = proj.pos[1] - proj.step
                                        elif direction == Constants.DLDOWN:
                                            new_x = proj.pos[0] + proj.step
                                            new_y = proj.pos[1] - proj.step
                                        if (
                                            new_x is not None
                                            and new_y is not None
                                            and new_x >= 0
                                            and new_y >= 0
                                            and new_x < board.size[1]
                                            and new_y < board.size[0]
                                        ):
                                            proj.hit([board.item(new_x, new_y)])
                            elif proj.range == 0:
                                if proj.is_aoe:
                                    proj.hit(self.neighbors(proj.aoe_radius, proj))
                                else:
                                    proj.hit([BoardItemVoid()])
                            else:
                                self._boards[level_number]["projectiles"].remove(proj)
                                board.clear_cell(proj.pos[0], proj.pos[1])
                        elif proj.actuator.state == Constants.STOPPED:
                            self._boards[level_number]["projectiles"].remove(proj)
                            board.clear_cell(proj.pos[0], proj.pos[1])
                else:
                    raise HacInvalidLevelException(
                        f"Impossible to actuate NPCs for this level (level number "
                        f"{level_number} is not associated with any board)."
                    )
            else:
                raise HacInvalidTypeException(
                    "In actuate_npcs(level_number) the level_number must be an int."
                )

    def animate_items(self, level_number):
        """That method goes through all the BoardItems of a given map and call
        Animation.next_frame()
        :param level_number: The number of the level to animate items in.
        :type level_number: int

        :raise: :class:`gamelib.HacExceptions.HacInvalidLevelException`
            class:`gamelib.HacExceptions.HacInvalidTypeException`

        Example::

            mygame.animate_items(1)
        """
        if self.state == Constants.RUNNING:
            if type(level_number) is int:
                if level_number in self._boards.keys():
                    for item in self._boards[level_number]["board"].get_immovables():
                        if item.animation is not None:
                            item.animation.next_frame()
                    for item in self._boards[level_number]["board"].get_movables():
                        if item.animation is not None:
                            item.animation.next_frame()
                else:
                    raise HacInvalidLevelException(
                        "Impossible to animate items for this level (level number "
                        f"{level_number} is not associated with any board)."
                    )
            else:
                raise HacInvalidTypeException(
                    "In animate_items(level_number) the level_number must be an int."
                )

    def display_player_stats(
        self, life_model=Utils.RED_RECT, void_model=Utils.BLACK_RECT
    ):
        """Display the player name and health.

        This method print the Player name, a health bar (20 blocks of life_model). When
        life is missing the complement (20-life missing) is printed using void_model.
        It also display the inventory value as "Score".

        :param life_model: The character(s) that should be used to represent the
            *remaining* life.
        :type life_model: str
        :param void_model: The character(s) that should be used to represent the
            *lost* life.
        :type void_model: str

        .. note:: This method might change in the future. Particularly it could take a
            template of what to display.

        """
        if self.player is None:
            return ""
        info = ""
        info += f" {self.player.name}"
        nb_blocks = int((self.player.hp / self.player.max_hp) * 20)
        info += " [" + life_model * nb_blocks + void_model * (20 - nb_blocks) + "]"
        info += "     Score: " + str(self.player.inventory.value())
        print(info)

    def move_player(self, direction, step):
        """
        Easy wrapper for Board.move().

        Example::

            mygame.move_player(Constants.RIGHT,1)
        """
        if self.state == Constants.RUNNING:
            self._boards[self.current_level]["board"].move(self.player, direction, step)

    def display_board(self):
        """Display the current board.

        The behavior of that function is dependant on how you configured this object.
        If you set enable_partial_display to True AND partial_display_viewport is set
        to a correct value, it will call Game.current_board().display_around() with the
        correct parameters.
        The partial display will be centered on the player (Game.player).
        Otherwise it will just call Game.current_board().display().

        Example::

            mygame.enable_partial_display = True
            # Number of rows, number of column (on each side, total viewport
            # will be 20x20 in that case).
            mygame.partial_display_viewport = [10, 10]
            # This will call Game.current_board().display_around()
            mygame.display()
            mygame.enable_partial_display = False
            # This will call Game.current_board().display()
            mygame.display()
        """
        if (
            self.enable_partial_display
            and self.partial_display_viewport is not None
            and type(self.partial_display_viewport) is list
        ):
            # display_around(self, object, p_row, p_col)
            self.current_board().display_around(
                self.player,
                self.partial_display_viewport[0],
                self.partial_display_viewport[1],
            )
        else:
            self.current_board().display()

    def neighbors(self, radius=1, object=None):
        """Get a list of neighbors (non void item) around an object.

        This method returns a list of objects that are all around an object between the
        position of an object and all the cells at **radius**.

        :param radius: The radius in which non void item should be included
        :type radius: int
        :param object: The central object. The neighbors are calculated for that object.
            If None, the player is the object.
        :type object: gamelib.BoardItem.BoardItem
        :return: A list of BoardItem. No BoardItemVoid is included.
        :raises HacInvalidTypeException: If radius is not an int.

        Example::

            for item in game.neighbors(2):
                print(f'{item.name} is around player at coordinates '
                    '({item.pos[0]},{item.pos[1]})')
        """
        if type(radius) is not int:
            raise HacInvalidTypeException(
                "In Game.neighbors(radius), radius must be an integer."
            )
        if object is None:
            object = self.player
        return_array = []
        for x in range(-radius, radius + 1, 1):
            for y in range(-radius, radius + 1, 1):
                if x == 0 and y == 0:
                    continue
                true_x = object.pos[0] + x
                true_y = object.pos[1] + y
                if (
                    true_x < self.current_board().size[1]
                    and true_y < self.current_board().size[0]
                ) and not isinstance(
                    self.current_board().item(true_x, true_y), BoardItemVoid
                ):
                    return_array.append(self.current_board().item(true_x, true_y))
        return return_array

    def load_board(self, filename, lvl_number=0):
        """Load a saved board

        Load a Board saved on the disk as a JSON file. This method creates a new Board
        object, populate it with all the elements (except a Player) and then return it.

        If the filename argument is not an existing file, the open function is going to
        raise an exception.

        This method, load the board from the JSON file, populate it with all BoardItem
        included, check for sanity, init the board with BoardItemVoid and then associate
        the freshly created board to a lvl_number.
        It then create the NPCs and add them to the board.

        :param filename: The file to load
        :type filename: str
        :param lvl_number: The level number to associate the board to. Default is 0.
        :type lvl_number: int
        :returns: a newly created board (see :class:`gamelib.Board.Board`)

        Example::

            mynewboard = game.load_board( 'awesome_level.json', 1 )
            game.change_level( 1 )
        """
        with open(filename, "r") as f:
            data = json.load(f)
        local_board = Board()
        data_keys = data.keys()
        if "name" in data_keys:
            local_board.name = data["name"]
        if "size" in data_keys:
            local_board.size = data["size"]
        if "player_starting_position" in data_keys:
            local_board.player_starting_position = data["player_starting_position"]
        if "ui_border_top" in data_keys:
            local_board.ui_border_top = data["ui_border_top"]
        if "ui_border_bottom" in data_keys:
            local_board.ui_border_bottom = data["ui_border_bottom"]
        if "ui_border_left" in data_keys:
            local_board.ui_border_left = data["ui_border_left"]
        if "ui_border_right" in data_keys:
            local_board.ui_border_right = data["ui_border_right"]
        if "ui_board_void_cell" in data_keys:
            local_board.ui_board_void_cell = data["ui_board_void_cell"]
        # Now we need to recheck for board sanity
        local_board.check_sanity()
        # and re-initialize the board (mainly to attribute a new model to the void cells
        # as it's not dynamic).
        local_board.init_board()
        # Then add board to the game
        self.add_board(lvl_number, local_board)

        # Now load the library if any
        if "library" in data_keys:
            self.object_library = []
            for e in data["library"]:
                self.object_library.append(Game._ref2obj(e))
        # Now let's place the good stuff on the board
        if "map_data" in data_keys:
            for pos_x in data["map_data"].keys():
                x = int(pos_x)
                for pos_y in data["map_data"][pos_x].keys():
                    y = int(pos_y)
                    ref = data["map_data"][pos_x][pos_y]
                    obj_keys = ref.keys()
                    if "object" in obj_keys:
                        o = Game._ref2obj(ref)
                        if not isinstance(o, NPC) and not isinstance(o, BoardItemVoid):
                            local_board.place_item(o, x, y)
                        elif isinstance(o, NPC):
                            self.add_npc(lvl_number, o, x, y)
                            if isinstance(o.actuator, PathFinder):
                                o.actuator.game = self
                                o.actuator.add_waypoint(x, y)

                    else:
                        Utils.warn(
                            f"while loading the board in {filename}, at coordinates "
                            f'[{pos_x},{pos_y}] there is an entry without "object" '
                            "attribute. NOT LOADED."
                        )
        return local_board

    def save_board(self, lvl_number, filename):
        """Save a board to a JSON file

        This method saves a Board and everything in it but the BoardItemVoid.

        Not check are done on the filename, if anything happen you get the exceptions
        from open().

        :param lvl_number: The level number to get the board from.
        :type lvl_number: int
        :param filename: The path to the file to save the data to.
        :type filename: str

        :raises HacInvalidTypeException: If any parameter is not of the right type
        :raises HacInvalidLevelException: If the level is not associated with a Board.

        Example::

            game.save_board( 1, 'hac-maps/level1.json')

        If Game.object_library is not an empty array, it will be saved also.
        """
        if type(lvl_number) is not int:
            raise HacInvalidTypeException(
                "lvl_number must be an int in Game.save_board()"
            )
        if type(filename) is not str:
            raise HacInvalidTypeException("filename must be a str in Game.save_board()")
        if lvl_number not in self._boards:
            raise HacInvalidLevelException(
                f"lvl_number {lvl_number}"
                " does not correspond to any level associated with a board in "
                "Game.save_board()"
            )

        data = {}
        local_board = self._boards[lvl_number]["board"]
        data["name"] = local_board.name
        data["player_starting_position"] = local_board.player_starting_position
        data["ui_border_left"] = local_board.ui_border_left
        data["ui_border_right"] = local_board.ui_border_right
        data["ui_border_top"] = local_board.ui_border_top
        data["ui_border_bottom"] = local_board.ui_border_bottom
        data["ui_board_void_cell"] = local_board.ui_board_void_cell
        data["size"] = local_board.size
        data["map_data"] = {}

        if len(self.object_library) > 0:
            data["library"] = []
            for o in self.object_library:
                data["library"].append(Game._obj2ref(o))

        # Now we need to run through all the cells to store
        # anything that is not a BoardItemVoid
        for x in self.current_board()._matrix:
            for y in x:
                if not isinstance(y, BoardItemVoid) and not isinstance(y, Player):
                    # print(f"Item: name={y.name} pos={y.pos} type={y.type}")
                    if str(y.pos[0]) not in data["map_data"].keys():
                        data["map_data"][str(y.pos[0])] = {}

                    data["map_data"][str(y.pos[0])][str(y.pos[1])] = Game._obj2ref(y)
        with open(filename, "w") as f:
            json.dump(data, f)

    def start(self):
        """Set the game engine state to RUNNING.

        The game has to be RUNNING for actuate_npcs() and move_player() to do anything.

        Example::

            mygame.start()
        """
        self.state = Constants.RUNNING

    def pause(self):
        """Set the game engine state to PAUSE.

        Example::

            mygame.pause()
        """
        self.state = Constants.PAUSED

    def stop(self):

        """Set the game engine state to STOPPED.

        Example::

            mygame.stop()
        """
        self.state = Constants.STOPPED

    # Here are some utility functions not really meant to be used outside of the Game
    # object itself.
    @staticmethod
    def _obj2ref(obj):
        ref = {
            "object": str(obj.__class__),
            "name": obj.name,
            "pos": obj.pos,
            "model": obj.model,
            "type": obj.type,
        }

        if isinstance(obj, Structures.Wall):
            ref["size"] = obj.size()
        elif isinstance(obj, Structures.Treasure):
            ref["value"] = obj.value
            ref["size"] = obj.size()
        elif isinstance(obj, Structures.GenericActionableStructure) or isinstance(
            obj, Structures.GenericStructure
        ):
            ref["value"] = obj.value
            ref["size"] = obj.size()
            ref["overlappable"] = obj.overlappable()
            ref["pickable"] = obj.pickable()
            ref["restorable"] = obj.restorable()
        elif isinstance(obj, Structures.Door):
            ref["value"] = obj.value
            ref["size"] = obj.size()
            ref["overlappable"] = obj.overlappable()
            ref["pickable"] = obj.pickable()
            ref["restorable"] = obj.restorable()
        elif isinstance(obj, NPC):
            ref["hp"] = obj.hp
            ref["max_hp"] = obj.max_hp
            ref["step"] = obj.step
            ref["remaining_lives"] = obj.remaining_lives
            ref["attack_power"] = obj.attack_power
            if obj.actuator is not None:
                if isinstance(obj.actuator, RandomActuator):
                    ref["actuator"] = {
                        "type": "RandomActuator",
                        "moveset": obj.actuator.moveset,
                    }
                elif isinstance(obj.actuator, PatrolActuator):
                    ref["actuator"] = {
                        "type": "PatrolActuator",
                        "path": obj.actuator.path,
                    }
                elif isinstance(obj.actuator, PathActuator):
                    ref["actuator"] = {
                        "type": "PathActuator",
                        "path": obj.actuator.path,
                    }
                elif isinstance(obj.actuator, PathFinder):
                    ref["actuator"] = {
                        "type": "PathFinder",
                        "waypoints": obj.actuator.waypoints,
                        "circle_waypoints": obj.actuator.circle_waypoints,
                    }
        return ref

    @staticmethod
    def _string_to_constant(s):
        if type(s) is int:
            return s
        elif s == "UP":
            return Constants.UP
        elif s == "DOWN":
            return Constants.DOWN
        elif s == "RIGHT":
            return Constants.RIGHT
        elif s == "LEFT":
            return Constants.LEFT
        elif s == "DRUP":
            return Constants.DRUP
        elif s == "DRDOWN":
            return Constants.DRDOWN
        elif s == "DLDOWN":
            return Constants.DLDOWN
        elif s == "DLUP":
            return Constants.DLUP

    @staticmethod
    def _ref2obj(ref):
        obj_keys = ref.keys()
        local_object = BoardItemVoid()
        if "Wall" in ref["object"]:
            local_object = Structures.Wall()
        elif "Treasure" in ref["object"]:
            local_object = Structures.Treasure()
            if "value" in obj_keys:
                local_object.value = ref["value"]
            if "size" in obj_keys:
                local_object._size = ref["size"]
        elif "GenericStructure" in ref["object"]:
            local_object = Structures.GenericStructure()
            if "value" in obj_keys:
                local_object.value = ref["value"]
            if "size" in obj_keys:
                local_object._size = ref["size"]
            if "pickable" in obj_keys:
                local_object.set_pickable(ref["pickable"])
            if "overlappable" in obj_keys:
                local_object.set_overlappable(ref["overlappable"])
        elif "Door" in ref["object"]:
            local_object = Structures.Door()
            if "value" in obj_keys:
                local_object.value = ref["value"]
            if "size" in obj_keys:
                local_object._size = ref["size"]
            if "pickable" in obj_keys:
                local_object.set_pickable(ref["pickable"])
            if "overlappable" in obj_keys:
                local_object.set_overlappable(ref["overlappable"])
            if "restorable" in obj_keys:
                local_object.set_restorable(ref["restorable"])
        elif "GenericActionableStructure" in ref["object"]:
            local_object = Structures.GenericActionableStructure()
            if "value" in obj_keys:
                local_object.value = ref["value"]
            if "size" in obj_keys:
                local_object._size = ref["size"]
            if "pickable" in obj_keys:
                local_object.set_pickable(ref["pickable"])
            if "overlappable" in obj_keys:
                local_object.set_overlappable(ref["overlappable"])
        elif "NPC" in ref["object"]:
            local_object = NPC()
            if "value" in obj_keys:
                local_object.value = ref["value"]
            if "size" in obj_keys:
                local_object._size = ref["size"]
            if "hp" in obj_keys:
                local_object.hp = ref["hp"]
            if "max_hp" in obj_keys:
                local_object.max_hp = ref["max_hp"]
            if "step" in obj_keys:
                local_object.step = ref["step"]
            if "remaining_lives" in obj_keys:
                local_object.remaining_lives = ref["remaining_lives"]
            if "attack_power" in obj_keys:
                local_object.attack_power = ref["attack_power"]
            if "actuator" in obj_keys:
                if "RandomActuator" in ref["actuator"]["type"]:
                    local_object.actuator = RandomActuator(moveset=[])
                    if "moveset" in ref["actuator"].keys():
                        for m in ref["actuator"]["moveset"]:
                            local_object.actuator.moveset.append(
                                Game._string_to_constant(m)
                            )
                elif "PathActuator" in ref["actuator"]["type"]:
                    local_object.actuator = PathActuator(path=[])
                    if "path" in ref["actuator"].keys():
                        for m in ref["actuator"]["path"]:
                            local_object.actuator.path.append(
                                Game._string_to_constant(m)
                            )
                elif "PatrolActuator" in ref["actuator"]["type"]:
                    local_object.actuator = PatrolActuator(path=[])
                    if "path" in ref["actuator"].keys():
                        for m in ref["actuator"]["path"]:
                            local_object.actuator.path.append(
                                Game._string_to_constant(m)
                            )
                elif "PathFinder" in ref["actuator"]["type"]:
                    local_object.actuator = PathFinder(game=Game(), parent=local_object)
                    if "circle_waypoints" in ref["actuator"].keys():
                        local_object.actuator.circle_waypoints = ref["actuator"][
                            "circle_waypoints"
                        ]
                    if "waypoints" in ref["actuator"].keys():
                        for m in ref["actuator"]["waypoints"]:
                            local_object.actuator.add_waypoint(m[0], m[1])
        # Now what remains is what is common to all BoardItem
        if not isinstance(local_object, BoardItemVoid):
            if "name" in obj_keys:
                local_object.name = ref["name"]
            if "model" in obj_keys:
                local_object.model = ref["model"]
            if "type" in obj_keys:
                local_object.type = ref["type"]
        return local_object
