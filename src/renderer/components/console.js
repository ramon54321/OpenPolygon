// -- External Modules
import React from "react"
import {PropTypes} from "prop-types"
import {observer} from "mobx-react"

import {store} from "./app"

@observer
export default class Console extends React.Component {
	render() {
		return (
			<div id="console">
				{store.logs.map((log, index) => {
					return <li key={index}>{log}</li>
				})}
			</div>
		)
	}
}

Console.propTypes = {
	logs: PropTypes.arrayOf(PropTypes.string),
}
