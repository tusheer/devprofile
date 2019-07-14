import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class menu extends Component {
	render() {
		return (
			<div className="menu">
				<nav>
					<div className="left_side">
						<p className="brand_name">
							<Link to="/">DevConnection</Link>
						</p>
						<p>
							<Link to="/developars">Developars</Link>
						</p>
					</div>
					<div className="right_side">
						<p>
							<Link to="/signup">Sign up</Link>
						</p>
						<p>
							<Link to="/login">Login</Link>
						</p>
					</div>
				</nav>
			</div>
		);
	}
}
