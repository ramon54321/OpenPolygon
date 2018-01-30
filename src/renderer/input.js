// -- External Modules
import mousetrap from "mousetrap"

// -- Application Modules
import store from "./store"
import * as interfaceLib from "./interface"

/**
 * Bind all functions to inputs.
 */
export function bind() {
	mousetrap.bind("4", () => {
		store.addLog("New log message")
	})

	mousetrap.bind("1", () => {
		interfaceLib.setPanelSizeDefault()
	})
}
