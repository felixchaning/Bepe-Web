import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import style from 'react-bootstrap'


class Header extends Component {
	render () {
		return (
			<div className="hero">
				<div className="container">
					<h1>Bepe</h1>
					<h4>A behance client.</h4>
				</div>
			</div>
		);
	}
}

export default Header