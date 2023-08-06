# Copyright Sean Vig (c) 2020

import enum
from weakref import WeakKeyDictionary

from pywayland.server import Signal

from wlroots import ffi, lib

_weakkeydict: WeakKeyDictionary = WeakKeyDictionary()


@enum.unique
class KeyboardLed(enum.IntFlag):
    NUM_LOCK = lib.WLR_LED_NUM_LOCK
    CAPS_LOCK = lib.WLR_LED_CAPS_LOCK
    SCROLL_LOCK = lib.WLR_LED_SCROLL_LOCK


@enum.unique
class KeyboardModifier(enum.IntFlag):
    SHIFT = lib.WLR_MODIFIER_SHIFT
    CAPS = lib.WLR_MODIFIER_CAPS
    CTRL = lib.WLR_MODIFIER_CTRL
    ALT = lib.WLR_MODIFIER_ALT
    MOD2 = lib.WLR_MODIFIER_MOD2
    MOD3 = lib.WLR_MODIFIER_MOD3
    LOGO = lib.WLR_MODIFIER_LOGO
    MOD5 = lib.WLR_MODIFIER_MOD5


@enum.unique
class KeyState(enum.IntEnum):
    KEY_RELEASED = lib.WLR_KEY_RELEASED
    KEY_PRESSED = lib.WLR_KEY_PRESSED


class KeyboardKeyEvent:
    def __init__(self, ptr) -> None:
        """Event that a key has been pressed or release

        This event is emitted before the xkb state of the keyboard has been
        updated (including modifiers).
        """
        self._ptr = ffi.cast("struct wlr_event_keyboard_key *", ptr)

    @property
    def time_msec(self) -> int:
        """Time of the key event"""
        return self._ptr.time_msec

    @property
    def keycode(self) -> int:
        """Keycode triggering the event"""
        return self._ptr.keycode

    @property
    def update_state(self) -> bool:
        """If backend doesn't update modifiers on its own"""
        return self._ptr.update_state

    @property
    def state(self) -> KeyState:
        """The state of the keycode triggering the event"""
        return KeyState(self._ptr.state)


class Keyboard:
    def __init__(self, ptr) -> None:
        """The Keyboard wlroots object

        :param ptr:
            The wlr_keyboard cdata pointer for the given keyboard
        """
        self._ptr = ptr

        self.modifiers_event = Signal(ptr=ffi.addressof(self._ptr.events.modifiers))
        self.key_event = Signal(
            ptr=ffi.addressof(self._ptr.events.key), data_wrapper=KeyboardKeyEvent
        )

    def set_keymap(self, keymap) -> None:
        """Set the keymap associated with the keyboard"""
        lib.wlr_keyboard_set_keymap(self._ptr, keymap._keymap)

    def set_repeat_info(self, rate, delay) -> None:
        """Sets the keyboard repeat info

        :param rate:
            The keyrepeats made per second
        :param delay:
            The delay in milliseconds before repeating
        """
        lib.wlr_keyboard_set_repeat_info(self._ptr, rate, delay)

    @property
    def keycodes(self):
        """Keycodes associated with the keyboard"""
        return self._ptr.keycodes

    @property
    def num_keycodes(self) -> int:
        """The number of keycodes"""
        return self._ptr.num_keycodes

    @property
    def modifiers(self) -> "KeyboardModifiers":
        """The modifiers associated with the keyboard"""
        modifiers_ptr = ffi.addressof(self._ptr.modifiers)
        _weakkeydict[modifiers_ptr] = self._ptr
        return KeyboardModifiers(modifiers_ptr)

    @property
    def modifier(self) -> KeyboardModifier:
        """The enum representing the currently active modifier keys"""
        modifiers = lib.wlr_keyboard_get_modifiers(self._ptr)
        return KeyboardModifier(modifiers)


class KeyboardModifiers:
    def __init__(self, ptr) -> None:
        """Modifiers of a given keyboard

        :param ptr:
            The wlr_keyboard_modifiers cdata struct.
        """
        self._ptr = ptr

    @property
    def depressed(self) -> int:
        """Depressed modifiers"""
        return self._ptr.depressed

    @property
    def latched(self) -> int:
        """Latched modifiers"""
        return self._ptr.latched

    @property
    def locked(self) -> int:
        """The locked keyboard modifiers"""
        return self._ptr.locked

    @property
    def group(self) -> int:
        """The modifier group"""
        return self._ptr.group
