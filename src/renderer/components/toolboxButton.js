// -- External Modules
import React from "react"
import {PropTypes} from "prop-types"
import {observer} from "mobx-react"

// -- Application Modules
// import store from "../store"

@observer
export default class ToolboxButton extends React.Component {
	render() {
		return (
			<div className="toolboxButton"
				onClick={this.props.onClick}>{this.props.text}</div>
		)
	}
}

ToolboxButton.propTypes = {
	onClick: PropTypes.func.isRequired,
	text: PropTypes.string,
}
