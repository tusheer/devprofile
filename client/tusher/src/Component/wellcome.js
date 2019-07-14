import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Wellcome extends Component {
	render() {
		return (
			<div className="wellcome">
				<div className="head">
					<h1>
						<span>Developar</span> Connection
					</h1>
					<p>Here is some great developar. You can see them profile and show your profile also</p>
				</div>
				<div className="button">
					<Link to="signup">
						<button>Sing up</button>
					</Link>
					<Link to="login">
						<button>Log in</button>
					</Link>
				</div>
			</div>
		);
	}
}
