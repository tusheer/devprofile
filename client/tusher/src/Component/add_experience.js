import React, { Component } from 'react';

export class Experience extends Component {
	render() {
		return (
			<div className="experience_body padding_top">
				<div>
					<h1 className="text-center mt-3 gradient">Add Experience</h1>
					<p className="text-center">Add any job and position that you have had in the past or current</p>
				</div>
				<div className="container">
					<form className="form_wraper">
						<div class="form-group mb-1">
							<label>Company</label>
							<input type="text" class="form-control" placeholder="Company name" />
						</div>
						<div class="form-group mb-1">
							<label>Job title</label>
							<input type="text" class="form-control" placeholder="Enter your job title" />
						</div>
						<div class="form-group mb-1">
							<label>Location</label>
							<input type="text" class="form-control" placeholder="Job location" />
						</div>
						<div class="form-group mb-1">
							<label>From date</label>
							<input type="date" class="form-control" placeholder="Job location" />
						</div>
						<div class="form-group mb-1">
							<label>To date</label>
							<input type="date" class="form-control" placeholder="Job location" />
						</div>
						<div class="form-group mb-1 d-flex align-items-center">
							<input type="checkbox" />
							<label className="mb-0 ml-2">Current Job</label>
						</div>
						<div class="form-group mb-1">
							<label>Job description</label>
							<textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" />
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

export default Experience;
