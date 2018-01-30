// -- External Modules
import React from "react"
import {PropTypes} from "prop-types"
import {observer} from "mobx-react"

// -- Application Modules
import store from "../store"
import ConsoleLine from "./consoleLine"
import {setConsoleScrollToLastLine} from "../interface"

@observer
export default class Console extends React.Component {
	componentDidUpdate() {
		setConsoleScrollToLastLine()
	}

	render() {
		return (
			<div id="console">
				{store.logs.map((log, index) => {
					return <ConsoleLine key={index} line={log} />
				})}
			</div>
		)
	}
}

Console.propTypes = {
	logs: PropTypes.arrayOf(PropTypes.string),
}
