// -- External Modules
// import $ from "jquery"


// -- Application Modules
import * as window from "./window"
import * as input from "./input"
import * as application from "./components/app"
import * as viewport from "./viewport/viewport"

// -- Set window title
window.setTitle("Open Polygon")

// -- Bind input to functions
input.bind()

// -- Render react
application.render("root")

// -- Viewport
viewport.init("canvas")
