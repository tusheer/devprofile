import React, { Component, useContext, useEffect, useState } from 'react';
import authContext from '../contex/auth/authContext';
import profileContext from '../contex/profile/profileContext';
import education from '../validation/education';
// import isEmpty from '../validation/is-empty';

const Education = (props) => {
	const contextAuth = useContext(authContext);
	const contextPro = useContext(profileContext);
	const { user, token, isAuthenticated, userLoder, seturl } = contextAuth;
	const { addedu } = contextPro;
	const replace = () => {
		props.history.push('/');
	};
	const push = () => {
		props.history.push('/dashboard');
	};

	useEffect(() => {
		seturl(props.match.path);
	}, []);

	const [ error, setError ] = useState(false);

	const errorHandle = (data) => setError(data);

	return (
		<div>
			<Edu
				addedu={addedu}
				userLoder={userLoder}
				user={user}
				token={token}
				isAuth={isAuthenticated}
				replace={replace}
				push={push}
				error={error}
				errorHandle={errorHandle}
				setError={setError}
			/>
		</div>
	);
};

class Edu extends Component {
	state = {
		degree: '',
		current: '',
		description: '',
		school: '',
		fieldofstudy: '',
		from: '',
		to: '',
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
		this.props.setError(([ `${e.target.name}Error` ]: false));
	};
	onCheck = (e) => {
		this.setState({ ...this.state, current: e.target.checked });
	};
	onSubmit = (e) => {
		e.preventDefault();
		const { errors, isValid } = education(this.state);
		if (!isValid) {
			this.props.errorHandle(errors);
		} else {
			this.props.addedu(this.state);
			this.props.push();
		}
	};

	render() {
		const { school, degree, fieldofstudy, from, to, current, description } = this.state;

		return (
			<div className="education_body padding_top">
				<div>
					<h1 className="text-center mt-3 gradient">Add Education</h1>
					<p className="text-center">Add any School,University,bootcamp that you have attend.</p>
				</div>
				<div className="container">
					<form className="form_wraper" onSubmit={this.onSubmit}>
						<div className="form-group mb-1 ">
							<label>Institute </label>
							<input
								value={school}
								name="school"
								onChange={this.onChange}
								type="text"
								placeholder="Enter institute name"
								className={this.props.error.schoolError ? 'form-control  is-invalid' : 'form-control'}
							/>
							{!this.props.error.schoolError ? null : (
								<div class="invalid-feedback">{this.props.error.schoolError}</div>
							)}
						</div>
						<div className="form-group mb-1">
							<label>Degree</label>
							<input
								value={degree}
								name="degree"
								onChange={this.onChange}
								type="text"
								className={this.props.error.degreeError ? ' is-invalid form-control' : 'form-control'}
								placeholder="Degree or certification"
							/>
							{!this.props.error.degreeError ? null : (
								<div className="invalid-feedback">{this.props.error.degreeError}</div>
							)}
						</div>
						<div className="form-group mb-1">
							<label>Field of study</label>
							<input
								value={fieldofstudy}
								name="fieldofstudy"
								onChange={this.onChange}
								type="text"
								className={
									this.props.error.fieldofstudyError ? ' is-invalid form-control' : 'form-control'
								}
							/>
							{!this.props.error.fieldofstudyError ? null : (
								<div className=" invalid-feedback">{this.props.error.fieldofstudyError}</div>
							)}
						</div>
						<div className="form-group mb-1">
							<label>From date</label>
							<input
								value={from}
								name="from"
								onChange={this.onChange}
								type="date"
								className={this.props.error.fromError ? ' is-invalid form-control' : 'form-control'}
								placeholder="Job location"
							/>
							<div className=" invalid-feedback">{this.props.error.fromError}</div>
						</div>
						<div className="form-group mb-1">
							<label>To date</label>
							<input value={to} name="to" onChange={this.onChange} className="form-control" type="date" />
						</div>
						<div className="form-group mb-1 d-flex align-items-center">
							<input value={current} name="current" onChange={this.onCheck} type="checkbox" />
							<label className="mb-0 ml-2">Current Job</label>
						</div>
						<div className="form-group mb-1">
							<label>Program description</label>
							<textarea
								value={description}
								name="description"
								onChange={this.onChange}
								className="form-control"
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

export default Education;
