import React, { PureComponent } from 'react';
import PropTypes from "prop-types";

import "./Modal.scss";

class Modal extends PureComponent {
	static propTypes = {
		headerText: PropTypes.string,
		closeIcon: PropTypes.element,
		bodyText: PropTypes.string,
		bodyQuestion: PropTypes.string,
		buttons: PropTypes.node,
	}
	static defaultProps = {
		headerText: "This is a modal window",
		// closeIcon: PropTypes.element,
		bodyText: "You are about to make an action.",
		bodyQuestion: "Are you sure that you want to proceed?",
		// buttons: 
	}
	render() {
		const { headerText, closeIcon, bodyText, bodyQuestion, buttons } = this.props;
		return (
			<div className="modal">
				<div className="modal__header">
					<h3 className="modal__header-text">
						{headerText}
						{closeIcon}
					</h3>
				</div>
				<div className="modal__body">
					<div className="modal__body-text">
						{bodyText}
					</div>
					<div className="modal__body-question">
						{bodyQuestion}
					</div>
				</div>
				<div className="modal__footer">
					{buttons}
				</div>
			</div>
		)
	}
}

export default Modal;