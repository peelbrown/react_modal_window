import React, { PureComponent } from 'react';
import PropTypes from "prop-types"; 
import classNames from "classnames";

import "./Button.scss";

class Button extends PureComponent {
	static propTypes = {
		text: PropTypes.string,
		action: PropTypes.func,
	}

	static defaultProps = {
		text: "Button",
		action: () => {},
	}
	
	render() {
		const { action, text, style, className } = this.props;
		const classes = classNames(
			"btn",
			className
		);
		return (
			<button className={classes} style={style} onClick={action}> {text} </button>		
		)
	}
}

export default Button;