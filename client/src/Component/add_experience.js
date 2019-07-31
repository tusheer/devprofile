import React, { Component, useContext } from 'react';

import authContext from '../contex/auth/authContext';
import profileContext from '../contex/profile/profileContext';

const Experience = (props) => {
	const contextAuth = useContext(authContext);
	const profileAuth = useContext(profileContext);
	const { user, token, isAuthenticated, userLoder } = contextAuth;
	const { exp } = profileAuth;
	const replace = () => {
		props.history.push('/');
	};
	return (
		<div>
			<Exp exp={exp} userLoder={userLoder} user={user} token={token} isAuth={isAuthenticated} replace={replace} />
		</div>
	);
};

class Exp extends Component {
	state = {
		company: '',
		jobTitle: '',
		location: '',
		fromDate: '',
		toDate: '',
		isCurrent: '',
		description: '',
	};

	componentWillMount() {
		if (this.props.token && !this.props.user) {
			this.props.userLoder();
		} else {
			if (!this.props.isAuth) {
				this.props.replace();
			}
		}
	}

	onChange = (e) => {
		this.setState({ ...this.state, [e.target.name]: e.target.value });
	};
	onCheck = (e) => {
		this.setState({ ...this.state, isCurrent: e.target.checked });
	};
	onSubmit = (e) => {
		e.preventDefault();
		this.props.exp(this.state);
		console.log(this.state);
	};

	render() {
		return (
			<div className="experience_body padding_top">
				<div>
					<h1 className="text-center mt-3 gradient">Add Experience</h1>
					<p className="text-center">Add any job and position that you have had in the past or current</p>
				</div>
				<div className="container">
					<form className="form_wraper" onSubmit={this.onSubmit}>
						<div className="form-group mb-1">
							<label>Company</label>
							<input
								onChange={this.onChange}
								name="company"
								value={this.state.company}
								type="text"
								className="form-control"
								placeholder="Company name"
							/>
						</div>
						<div className="form-group mb-1">
							<label>Job title</label>
							<input
								onChange={this.onChange}
								name="jobTitle"
								value={this.state.jobTitle}
								type="text"
								className="form-control"
								placeholder="Enter your job title"
							/>
						</div>
						<div className="form-group mb-1">
							<label>Location</label>
							<input
								onChange={this.onChange}
								name="location"
								value={this.state.location}
								type="text"
								className="form-control"
								placeholder="Job location"
							/>
						</div>
						<div className="form-group mb-1">
							<label>From date</label>
							<input
								onChange={this.onChange}
								name="fromDate"
								value={this.state.fromDate}
								type="date"
								className="form-control"
								placeholder="Job location"
							/>
						</div>
						<div className="form-group mb-1">
							<label>To date</label>
							<input
								onChange={this.onChange}
								name="toDate"
								value={this.state.toDate}
								type="date"
								className="form-control"
								placeholder="Job location"
							/>
						</div>
						<div className="form-group mb-1 d-flex align-items-center">
							<input
								onChange={this.onCheck}
								name="isCurrent"
								value={this.state.isCurrent}
								type="checkbox"
							/>
							<label className="mb-0 ml-2">Current Job</label>
						</div>
						<div className="form-group mb-1">
							<label>Job description</label>
							<textarea
								onChange={this.onChange}
								name="description"
								value={this.state.description}
								className="form-control rounded-0"
								id="exampleFormControlTextarea2"
								rows="3"
							/>
						</div>

						<button type="submit" className="btn btn-primary mb-5 gradient_bg mt-1 p-6">
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
