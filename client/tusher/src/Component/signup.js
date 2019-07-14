import React, { Component } from 'react';

export default class Signup extends Component {
	render() {
		return (
			<div className="signup">
				<div className="signup_header pt-4">
					<h1 className="text-center">Sign up</h1>
					<p className="text-center">Create your DevConnect account.</p>
				</div>
				<div className="signup_form container">
					<div className="signup_form_wraper">
						<form>
							<div class="form-group">
								<label for="exampleInputEmail1">Name</label>
								<input type="text" class="form-control" placeholder="Enter your name" />
							</div>
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

							<div class="form-group">
								<label for="exampleInputPassword1">Confirm Password</label>
								<input
									type="password"
									class="form-control"
									id="exampleInputPassword1"
									placeholder="Confirm Password"
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
