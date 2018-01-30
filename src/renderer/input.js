// -- External Modules
import mousetrap from "mousetrap"

// -- Application Modules
import store from "./store"

/**
 * Bind all functions to inputs.
 */
export function bind() {
	mousetrap.bind("4", () => {
		store.addLog("New log message")
	})
}
