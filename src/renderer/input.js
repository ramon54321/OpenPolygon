// -- External Modules
import mousetrap from "mousetrap"

// -- Application Modules
// import Console from "./components/console"

import {store} from "./components/app"

/**
 * Bind all functions to inputs.
 */
export function bind() {
	mousetrap.bind("4", () => {
		console.log("4 pressed")
		store.logs.push("from the number")
	})

	mousetrap.bind("1", () => {
		console.log("1 pressed")
		store.logs[store.logs.length - 3] = "uber"
	})
}
