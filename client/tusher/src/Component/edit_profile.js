import React, { Component } from 'react';

export default class Editprofile extends Component {
	render() {
		return (
			<div className="edit_profile">
				<div>
					<h1 className="text-center mt-3 gradient">Edit Profile</h1>
				</div>
				<form className="container">
					<div class="form-group">
						<label for="exampleInputEmail1">Name</label>
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
						<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
					</div>
					<div class="form-group">
						<label for="exampleInputPassword1">Password</label>
						<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
					</div>
					<div class="form-group">
						<label for="exampleInputPassword1">Password</label>
						<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
					</div>
					<div class="form-group">
						<label for="exampleInputPassword1">Password</label>
						<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
					</div>
					<div class="form-group">
						<label for="exampleInputPassword1">Password</label>
						<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
					</div>
					<div class="form-check">
						<input type="checkbox" class="form-check-input" id="exampleCheck1" />
						<label class="form-check-label" for="exampleCheck1">
							Check me out
						</label>
					</div>
					<button type="submit" class="btn btn-primary">
						Submit
					</button>
				</form>
				<div />
			</div>
		);
	}
}
