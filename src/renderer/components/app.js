// -- External Modules
import React from "react"
import ReactDOM from "react-dom"
import {observable} from "mobx"
import {observer} from "mobx-react"

// -- Application Modules
import Console from "./console"

class Store {
	@observable logs = ["the first lg"]
}

export let store = new Store()

@observer
class App extends React.Component {
	addLog(log) {
		store.logs.push(log)
		console.log("Adding log")
	}

	render() {
		console.log("rendering")
		// console.log(store)
		return (
			<div id="app">
				<button onClick={() => this.addLog("The new log.")}>Add Log</button>
				<Console />
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
}

// <Console logs={this.props.store.logs} />
