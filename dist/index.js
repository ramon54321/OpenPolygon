"use strict";

var _electron = require("electron");

var _electron2 = _interopRequireDefault(_electron);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _url = require("url");

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let mainWindow;

_electron2.default.app.on("ready", () => {
	console.log("[INFO] Electron starting");

	// -- Create default window options
	let windowOptions = {
		width: 1200, height: 1000

		// -- Set development window options
	};if (process.argv.includes("debug")) {
		windowOptions = {
			width: 1800, height: 1000, titleBarStyle: "hidden"
		};
	}

	// -- Create new main window
	mainWindow = new _electron2.default.BrowserWindow(windowOptions);

	// -- Set up shared object with renderer
	mainWindow.sharedData = {
		isDebug: process.argv.includes("debug") ? true : false

		// -- Load index.html
	};mainWindow.loadURL(_url2.default.format({
		pathname: _path2.default.join(__dirname, "../static/index.html"),
		protocol: "file:",
		slashes: true
	}));

	// -- Remove the menu
	mainWindow.setMenu(null);

	// -- Open developer tools
	if (process.argv.includes("debug")) {
		mainWindow.webContents.openDevTools();
	}

	// -- On window closed
	mainWindow.on("closed", () => {
		// -- Remove window
		mainWindow = null;
	});
});

_electron2.default.app.on("window-all-closed", () => {
	console.log("[INFO] Electron closing");
	_electron2.default.app.quit();
});