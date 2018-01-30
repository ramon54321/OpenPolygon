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

/**
 * Set panels to defaults.
 */
export function setPanelSizeDefault() {
	console.log("[DEBUG] Setting panel size to default")
	let panelLeft = document.getElementById("panelLeft")
	let panelRight = document.getElementById("panelRight")
	let panelRightTop = document.getElementById("panelRightTop")
	let panelRightBottom = document.getElementById("panelRightBottom")
	panelLeft.style.width = "300px"
	panelRight.style.width = "calc(100% - 300px)"
	panelRightTop.style.height = "calc(100% - 200px)"
	panelRightBottom.style.height = "199px"
}
