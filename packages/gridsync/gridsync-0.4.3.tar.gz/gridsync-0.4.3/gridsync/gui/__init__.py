# -*- coding: utf-8 -*-

from gridsync.desktop import notify
from gridsync.gui.debug import DebugExporter
from gridsync.gui.welcome import WelcomeDialog
from gridsync.gui.main_window import MainWindow
from gridsync.gui.preferences import PreferencesWindow
from gridsync.gui.systray import SystemTrayIcon


class Gui:
    def __init__(self, core):
        self.core = core
        self.welcome_dialog = WelcomeDialog(self)
        self.main_window = MainWindow(self)
        self.preferences_window = PreferencesWindow()
        self.systray = SystemTrayIcon(self)
        self.debug_exporter = DebugExporter(core)
        self.unread_messages = []

    def show_message(self, title, message, duration=5000):
        notify(self.systray, title, message, duration)

    def show_welcome_dialog(self):
        self.welcome_dialog.showNormal()
        self.welcome_dialog.show()
        self.welcome_dialog.raise_()
        self.welcome_dialog.activateWindow()

    def show_main_window(self):
        self.main_window.showNormal()
        self.main_window.show()
        self.main_window.raise_()
        self.main_window.activateWindow()

    def show_preferences_window(self):
        self.preferences_window.showNormal()
        self.preferences_window.show()
        self.preferences_window.raise_()
        self.preferences_window.activateWindow()

    def show_systray(self):
        if self.systray.isSystemTrayAvailable():
            self.systray.show()
        else:
            self.show_main_window()

    def show(self):
        self.systray.show()
        if self.main_window.gateways:
            self.show_main_window()
        else:
            self.show_welcome_dialog()

    def hide(self):
        self.systray.hide()
        self.main_window.hide()
        self.preferences_window.hide()

    def toggle(self):
        if self.main_window.isVisible():
            self.main_window.hide()
        else:
            self.show_main_window()

    def populate(self, gateways):
        self.main_window.populate(gateways)

    def show_debug_exporter(self):
        self.debug_exporter.show()
        self.debug_exporter.raise_()
        self.debug_exporter.load()
