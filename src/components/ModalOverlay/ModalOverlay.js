import React, { PureComponent } from 'react';

import "./ModalOverlay.scss";

class ModalOverlay extends PureComponent {
	render() {
		const { inner, action } = this.props; 
		return (
			<div className="modal__overlay" onClick={action}> { inner } </div>
		);
	};
};

export default ModalOverlay;