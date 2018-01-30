// -- External Modules


// -- Application Modules


/**
 * Set console scroll to last line.
 */
export function setConsoleScrollToLastLine() {
	console.log("[DEBUG] Setting console scroll")
	let element = document.getElementById("console")
	element.scrollTop = element.scrollHeight
}
