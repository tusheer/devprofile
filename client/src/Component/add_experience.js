import React, { Component, useContext, useEffect, useState } from 'react';

import authContext from '../contex/auth/authContext';
import profileContext from '../contex/profile/profileContext';
import experience from '../validation/experience';
import svg from './svg/left-arrow.svg';
import { Link } from 'react-router-dom';

const Experience = (props) => {
	const contextAuth = useContext(authContext);
	const profileAuth = useContext(profileContext);
	const { user, token, isAuthenticated, userLoder, seturl } = contextAuth;
	const { exp } = profileAuth;
	const replace = () => {
		props.history.push('/login');
	};
	const push = () => {
		props.history.push('/dashboard');
	};
	//eslint-disable-next-line
	useEffect(() => seturl(props.match.path), []);
	const [ error, setError ] = useState(false);

	const errorHandle = (data) => setError(data);
	return (
		<div>
			<Exp
				push={push}
				exp={exp}
				userLoder={userLoder}
				user={user}
				token={token}
				isAuth={isAuthenticated}
				replace={replace}
				error={error}
				errorHandle={errorHandle}
				setError={setError}
			/>
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
		isCurrent: false,
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
		//eslint-disable-next-line
		this.props.setError({ [`${e.target.name}Error`]: false });
	};
	onCheck = (e) => {
		this.setState({ ...this.state, isCurrent: e.target.checked });
	};
	onSubmit = (e) => {
		e.preventDefault();
		const { errors, isValid } = experience(this.state);
		if (!isValid) {
			this.props.errorHandle(errors);
		} else {
			this.props.exp(this.state);
			this.props.push();
		}
	};

	render() {
		return (
			<div className="experience_body padding_top">
				<Link to="/dashboard">
					<button className="btn ml-4 mt-2 ">
						<img src={svg} alt="" height="30px" width="30px" />
					</button>
				</Link>
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
								className={this.props.error.companyError ? 'form-control  is-invalid' : 'form-control'}
								placeholder="Company name"
							/>
							{!this.props.error.companyError ? null : (
								<div class="invalid-feedback">{this.props.error.companyError}</div>
							)}
						</div>

						<div className="form-group mb-1">
							<label>Job title</label>
							<input
								onChange={this.onChange}
								name="jobTitle"
								value={this.state.jobTitle}
								type="text"
								className={this.props.error.jobTitleError ? 'form-control  is-invalid' : 'form-control'}
								placeholder="Enter your job title"
							/>
							{!this.props.error.jobTitleError ? null : (
								<div class="invalid-feedback">{this.props.error.jobTitleError}</div>
							)}
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
								className={this.props.error.fromDateError ? 'form-control  is-invalid' : 'form-control'}
								placeholder="Job location"
							/>
							{!this.props.error.fromDateError ? null : (
								<div class="invalid-feedback">{this.props.error.fromDateError}</div>
							)}
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
