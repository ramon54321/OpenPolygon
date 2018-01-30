// -- External Modules
import React from "react"
import ReactDOM from "react-dom"
import {observer} from "mobx-react"

// -- Application Modules
import store from "../store"
import Console from "./console"

@observer
class App extends React.Component {
	render() {
		return (
			<div id="app">
				<div id="panelLeft" className="panel">
					h
				</div>
				<div id="panelRight" className="panel">
					<div id="panelRightTop" className="panel">
						t
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
}
