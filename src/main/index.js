import electron from "electron"
import path from "path"
import url from "url"
import fs from "fs"
import {exec} from "child_process"

// -- Define project root directory
let rootDir = __dirname + "/../"

let mainWindow

electron.app.on("ready", () => {
	console.log("[INFO] Electron starting")

	// -- Create default window options
	let windowOptions = {
		width: 1200, height: 1000,
	}

	// -- Set development window options
	if (process.argv.includes("debug")) {
		windowOptions = {
			width: 1800, height: 1000, titleBarStyle: "hidden",
		}
	}

	// -- Create new main window
	mainWindow = new electron.BrowserWindow(windowOptions)

	// -- Set up shared object with renderer
	mainWindow.sharedData = {
		isDebug: process.argv.includes("debug") ? true : false,
	}

	// -- Load index.html
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, "../static/index.html"),
		protocol: "file:",
		slashes: true,
	}))

	// -- Set up file watcher
	let allowWatch = true
	if (process.argv.includes("debug")) {
		let fileChanged = (eventType, filename) => {
			if (!allowWatch) {
				return
			}
			console.log("[DEBUG] Reloading window due to file change")
			mainWindow.reload()
		}
		fs.watch(rootDir + "static/", (eventType, filename) => {
			fileChanged(eventType, filename)
		})
		fs.watch(rootDir + "dist/", (eventType, filename) => {
			fileChanged(eventType, filename)
		})
	}

	// -- Remove the menu
	mainWindow.setMenu(null)

	// -- Set debug menu
	if (process.argv.includes("debug")) {
		const template = [{
			label: "Debug",
			submenu: [
				{label: "Reload",
				/**
				 * Reload the main window.
				 */
				click() {
					mainWindow.reload()
				}},
				{label: "Build Client",
				/**
				 * Build client.
				 */
				click() {
					allowWatch = false
					exec("npm run lint && " +
					"npm run build-renderer-dev && npm run build-style", {
						cwd: rootDir,
					}, (error, stdout, stderr) => {
						console.log("[DEBUG] Built renderer and style")
						if (error) {
							console.log("[DEBUG ERROR] " + error)
						}
						console.log("[DEBUG] Reloading window")
						mainWindow.reload
						allowWatch = true
					})
				}},
			],
		}]

		const menu = electron.Menu.buildFromTemplate(template)
		mainWindow.setMenu(menu)
	}

	// -- Open developer tools
	if (process.argv.includes("debug")) {
		mainWindow.webContents.openDevTools()
	}

	// -- On window closed
	mainWindow.on("closed", () => {
		// -- Remove window
		mainWindow = null
	})
})

electron.app.on("window-all-closed", () => {
	console.log("[INFO] Electron closing")
	electron.app.quit()
})
