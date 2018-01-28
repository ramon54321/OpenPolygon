"use strict";

var _electron = require("electron");

var _electron2 = _interopRequireDefault(_electron);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _url = require("url");

var _url2 = _interopRequireDefault(_url);

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _child_process = require("child_process");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -- Define project root directory
let rootDir = __dirname + "/../";

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

	// -- Set up file watcher
	let allowWatch = true;
	if (process.argv.includes("debug")) {
		let fileChanged = (eventType, filename) => {
			if (!allowWatch) {
				return;
			}
			console.log("[DEBUG] Reloading window due to file change");
			mainWindow.reload();
		};
		_fs2.default.watch(rootDir + "static/", (eventType, filename) => {
			fileChanged(eventType, filename);
		});
		_fs2.default.watch(rootDir + "dist/", (eventType, filename) => {
			fileChanged(eventType, filename);
		});
	}

	// -- Remove the menu
	mainWindow.setMenu(null);

	// -- Set debug menu
	if (process.argv.includes("debug")) {
		const template = [{
			label: "Debug",
			submenu: [{ label: "Reload",
				/**
     * Reload the main window.
     */
				click() {
					mainWindow.reload();
				} }, { label: "Build Client",
				/**
     * Build client.
     */
				click() {
					allowWatch = false;
					(0, _child_process.exec)("npm run lint && " + "npm run build-renderer-dev && npm run build-style", {
						cwd: rootDir
					}, (error, stdout, stderr) => {
						console.log("[DEBUG] Built renderer and style");
						if (error) {
							console.log("[DEBUG ERROR] " + error);
						}
						console.log("[DEBUG] Reloading window");
						mainWindow.reload;
						allowWatch = true;
					});
				} }]
		}];

		const menu = _electron2.default.Menu.buildFromTemplate(template);
		mainWindow.setMenu(menu);
	}

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