// -- External Modules
// import $ from "jquery"

// -- Application Modules
import * as window from "./window"
import * as input from "./input"
import * as application from "./components/app"

// -- Set window title
window.setTitle("Open Polygon")

// -- Bind input to functions
input.bind()

// -- Render react
application.render("root")

import split from "split.js"

split(["#panelLeft", "#panelRight"], {
    sizes: [25, 75],
	gutterSize: 6,
})

split(["#panelRightTop", "#panelRightBottom"], {
    sizes: [75, 25],
	gutterSize: 6,
	direction: "vertical",
})
