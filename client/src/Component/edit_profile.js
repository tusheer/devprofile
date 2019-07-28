import React, { Component } from 'react';

export default class Editprofile extends Component {
	render() {
		return (
			<div className="edit_profile padding_top">
				<div>
					<h1 className="text-center mt-3 gradient">Edit Profile</h1>
				</div>
				<div className="container">
					<form className="form_wraper">
						<div class="form-group mb-1">
							<label>Name</label>
							<input type="text" class="form-control" placeholder="Enter your name" />
							<small id="emailHelp" class="form-text text-muted">
								A unique handle for your profle URL.Your ful name, company name,nick Name.
							</small>
						</div>

						<div class="form-group mb-1">
							<label>Enter your position</label>
							<select class="form-control" id="sel1">
								<option>Senior Developar</option>
								<option>Junior Developar</option>
								<option>Instractor or Teacher</option>
								<option>Frontend Developar</option>
								<option>Backend Developar</option>
								<option>FullStack Developar</option>
								<option>Othes</option>
							</select>
						</div>
						<div class="form-group mb-1">
							<label>Company Name</label>
							<input class="form-control" placeholder="your company name" />
							<small class="form-text text-muted">Could be your own company or one you work for.</small>
						</div>
						<div class="form-group mb-1">
							<label>Company website</label>
							<input type="url" class="form-control" placeholder="Your company website" />
							<small class="form-text text-muted">Could be your own web site or a company one.</small>
						</div>
						<div class="form-group mb-1">
							<label>Location</label>
							<input type="text" class="form-control" placeholder="Your current location" />
							<small class="form-text text-muted">City or city & state suggested (eg. Boston, MA)</small>
						</div>
						<div class="form-group mb-1">
							<label>Skill</label>
							<input type="text" class="form-control" placeholder="html,css,php,React js" />
							<small class="form-text text-muted">
								Please use comma separeted values (eg. html,css,javascript)
							</small>
						</div>
						<div class="form-group mb-1">
							<label>Bio</label>
							<textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" />
							<small class="form-text text-muted">Tell us about your self.</small>
						</div>

						<button type="submit" class="btn btn-primary mb-5 gradient_bg mt-1 p-6">
							Submit
						</button>
					</form>
				</div>
				<div />
			</div>
		);
	}
}
