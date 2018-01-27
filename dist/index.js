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

	// -- Create new main window
	mainWindow = new _electron2.default.BrowserWindow({
		width: 800, height: 600
	});

	// -- Load index.html
	mainWindow.loadURL(_url2.default.format({
		pathname: _path2.default.join(__dirname, "../static/index.html"),
		protocol: "file:",
		slashes: true
	}));

	// -- Remove the menu
	mainWindow.setMenu(null);

	// -- Open developer tools
	mainWindow.webContents.openDevTools();

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