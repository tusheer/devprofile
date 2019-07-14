import React, { Component } from 'react';

export default class login extends Component {
	render() {
		return (
			<div className="login">
				<div className="login_header pt-4">
					<h1 className="text-center">Log in</h1>
					<p className="text-center">Log in to your DevConnector account</p>
				</div>
				<div className="login_form container">
					<div className="login_form_wraper">
						<form>
							<div class="form-group">
								<label for="exampleInputEmail1">Email address</label>
								<input
									type="email"
									class="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									placeholder="Enter email"
								/>
								<small id="emailHelp" class="form-text text-muted">
									We'll never share your email with anyone else.
								</small>
							</div>
							<div class="form-group">
								<label for="exampleInputPassword1">Password</label>
								<input
									type="password"
									class="form-control"
									id="exampleInputPassword1"
									placeholder="Password"
								/>
							</div>

							<button type="submit" class="btn btn-primary">
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
