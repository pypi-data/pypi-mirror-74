from __future__ import annotations

import logging
import signal
import sys
from functools import partial

from pywayland.server import Display

from wlroots.backend import Backend
from wlroots.renderer import Renderer
from wlroots.wlr_types import (
    Compositor,
    Cursor,
    DataDeviceManager,
    OutputLayout,
    Seat,
    XCursorManager,
    XdgShell,
)
from wlroots.util.log import log_init

from .server import TinywlServer


def sig_cb(display, sig_num, frame):
    print("shutdown on terminate")
    display.terminate()


def main(argv):
    with Display() as display:
        signal.signal(signal.SIGINT, partial(sig_cb, display))

        with Backend(display) as backend:
            renderer = Renderer(backend, display)
            compositor = Compositor(display, renderer)  # noqa: F841
            device_manager = DataDeviceManager(display)  # noqa: F841
            xdg_shell = XdgShell(display)
            with OutputLayout() as output_layout, Cursor(output_layout) as cursor, XCursorManager(
                24
            ) as xcursor_manager, Seat(display, "seat0") as seat:
                tinywl_server = TinywlServer(  # noqa: F841
                    display=display,
                    backend=backend,
                    renderer=renderer,
                    xdg_shell=xdg_shell,
                    cursor=cursor,
                    cursor_manager=xcursor_manager,
                    seat=seat,
                    output_layout=output_layout,
                )

                socket = display.add_socket()
                print("socket:", socket.decode())
                backend.start()
                display.run()


if __name__ == "__main__":
    log_init(logging.DEBUG)
    logging.basicConfig(level=logging.INFO)

    main(sys.argv[1:])
