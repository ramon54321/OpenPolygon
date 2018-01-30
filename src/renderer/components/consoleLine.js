// -- External Modules
import React from "react"
import {PropTypes} from "prop-types"
import {observer} from "mobx-react"

// -- Application Modules
// import store from "../store"

@observer
export default class ConsoleLine extends React.Component {
	render() {
		return (
			<div className="consoleLine">{this.props.line}</div>
		)
	}
}

ConsoleLine.propTypes = {
	line: PropTypes.string,
}
