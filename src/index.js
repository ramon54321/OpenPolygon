import electron from "electron"
import path from "path"
import url from "url"

let mainWindow

electron.app.on("ready", () => {
	console.log("[INFO] Electron starting")

	// -- Create new main window
	mainWindow = new electron.BrowserWindow({
		width: 800, height: 600,
	})

	// -- Load index.html
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, "../static/index.html"),
		protocol: "file:",
		slashes: true,
	}))

	// -- Remove the menu
	mainWindow.setMenu(null)

	// -- Open developer tools
	mainWindow.webContents.openDevTools()

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
