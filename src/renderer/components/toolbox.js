// -- External Modules
import React from "react"
import {PropTypes} from "prop-types"
import {observer} from "mobx-react"

// -- Application Modules
// import store from "../store"
import ToolboxButton from "./toolboxButton"

@observer
export default class Toolbox extends React.Component {
	constructor(props) {
		super(props)
		this.state = {open: false}
		this.toggleExpand = this.toggleExpand.bind(this)
	}
	toggleExpand() {
		this.setState({open: !this.state.open})
	}
	render() {
		return (
			<div className="toolbox">
				<div className="toolboxTitle" onClick={this.toggleExpand}>
					{this.props.toolbox.title}
				</div>
				{this.state.open && (
					<div className="toolboxBlock">
						{this.props.toolbox.elements.map((item, index) => {
							return (<ToolboxButton
								key={index} text={item.text}
								onClick={item.action} />)
						})}
					</div>)
				}
			</div>
		)
	}
}

Toolbox.propTypes = {
	toolbox: PropTypes.object,
}
