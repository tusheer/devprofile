import React, { Component } from 'react';

export class Education extends Component {
	render() {
		return (
			<div className="education_body padding_top">
				<div>
					<h1 className="text-center mt-3 gradient">Add Education</h1>
					<p className="text-center">Add any School,University,bootcamp that you have attend.</p>
				</div>
				<div className="container">
					<form className="form_wraper">
						<div class="form-group mb-1">
							<label>Institute </label>
							<input type="text" class="form-control" placeholder="Enter institute name" />
						</div>
						<div class="form-group mb-1">
							<label>Degree</label>
							<input type="text" class="form-control" placeholder="Degree or certification" />
						</div>
						<div class="form-group mb-1">
							<label>Field of study</label>
							<input type="text" class="form-control" />
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
							<label>Program description</label>
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

export default Education;
