import electron from "electron"
import path from "path"
import url from "url"

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

	// -- Remove the menu
	mainWindow.setMenu(null)

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
