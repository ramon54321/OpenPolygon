import {remote} from "electron"
import $ from "jquery"

// -- Get global handle to sharedData
let sharedData = remote.getCurrentWindow().sharedData

/**
 * Sets the title of the application.
 * @param {string} title The title to be set to.
 */
export function setTitle(title) {
	if (sharedData.isDebug) {
		$("#title").text("Debug - " + title)
	} else {
		$("#title").text("Production - " + title)
	}
}
