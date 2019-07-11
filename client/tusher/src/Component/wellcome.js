import React, { Component } from 'react';

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
					<button>Sing in</button>
					<button>Log in</button>
				</div>
			</div>
		);
	}
}
