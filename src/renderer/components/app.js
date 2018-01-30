// -- External Modules
import React from "react"
import ReactDOM from "react-dom"
import {observer} from "mobx-react"
import split from "split.js"

// -- Application Modules
import store from "../store"
import {setPanelSizeDefault} from "../interface"
import Console from "./console"
import Toolbox from "./toolbox"

import fileToolbox from "../toolboxes/file"
import meshToolbox from "../toolboxes/mesh"

@observer
class App extends React.Component {
	render() {
		return (
			<div id="app">
				<div id="panelLeft" className="panel">
					<Toolbox toolbox={fileToolbox}/>
					<Toolbox toolbox={meshToolbox}/>
				</div>
				<div id="panelRight" className="panel">
					<div id="panelRightTop" className="panel">
						Viewport
					</div>
					<div id="panelRightBottom" className="panel">
						<Console />
					</div>
				</div>
			</div>
		)
	}
}

/**
 * Render the main App component into the given element.
 * @param {string} elementId The id of the element to render the app into.
 */
export function render(elementId) {
	ReactDOM.render(
		<App />,
		document.getElementById(elementId)
	)

	// -- Initial interface setup
	let initString = "[INFO] Running on Node " + process.versions.node + ", "
	initString += "Chrome " + process.versions.chrome + " and Electron "
	initString += process.versions.electron + ". "
	store.addLog(initString)

	// -- Configure split
	split(["#panelLeft", "#panelRight"], {
	    sizes: [25, 75],
		minSize: [240, 500],
		gutterSize: 10,
		direction: "horizontal",
		elementStyle: (dimension, elementSize, gutterSize) => {
			return {"width": "calc(" + elementSize + "%)"}
		},
	})
	split(["#panelRightTop", "#panelRightBottom"], {
	    sizes: [75, 25],
		gutterSize: 10,
		direction: "vertical",
		elementStyle: (dimension, elementSize, gutterSize) => {
			// -- -1px is needed to prevent overflow
			return {"height": "calc(" + elementSize + "% - 1px)"}
		},
	})

	setPanelSizeDefault()
}
