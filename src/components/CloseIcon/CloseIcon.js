import React, { PureComponent } from 'react';
import "./CloseIcon.scss";
import PropTypes from "prop-types";

class CloseIcon extends PureComponent {
	render() {
		const { action } = this.props;
		return (
			<span className="close-icon" onClick={action}></span>
		)
	}
}

CloseIcon.propTypes = {
	action: PropTypes.func.isRequired
}

CloseIcon.defaultProps = {
	action: () => console.log("No function passed..")
}

export default CloseIcon;