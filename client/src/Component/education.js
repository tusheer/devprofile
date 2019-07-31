import React, { Component, useContext } from 'react';
import authContext from '../contex/auth/authContext';
import profileContext from '../contex/profile/profileContext';

const Education = (props) => {
	const contextAuth = useContext(authContext);
	const contextPro = useContext(profileContext);
	const { user, token, isAuthenticated, userLoder } = contextAuth;
	const { addedu } = contextPro;
	const replace = () => {
		props.history.push('/');
	};
	return (
		<div>
			<Edu
				addedu={addedu}
				userLoder={userLoder}
				user={user}
				token={token}
				isAuth={isAuthenticated}
				replace={replace}
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
	};
	onCheck = (e) => {
		this.setState({ ...this.state, current: e.target.checked });
	};
	onSubmit = (e) => {
		e.preventDefault();
		this.props.addedu(this.state);
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
						<div className="form-group mb-1">
							<label>Institute </label>
							<input
								value={school}
								name="school"
								onChange={this.onChange}
								type="text"
								className="form-control"
								placeholder="Enter institute name"
							/>
						</div>
						<div className="form-group mb-1">
							<label>Degree</label>
							<input
								value={degree}
								name="degree"
								onChange={this.onChange}
								type="text"
								className="form-control"
								placeholder="Degree or certification"
							/>
						</div>
						<div className="form-group mb-1">
							<label>Field of study</label>
							<input
								value={fieldofstudy}
								name="fieldofstudy"
								onChange={this.onChange}
								type="text"
								className="form-control"
							/>
						</div>
						<div className="form-group mb-1">
							<label>From date</label>
							<input
								value={from}
								name="from"
								onChange={this.onChange}
								type="date"
								className="form-control"
								placeholder="Job location"
							/>
						</div>
						<div className="form-group mb-1">
							<label>To date</label>
							<input
								value={to}
								name="to"
								onChange={this.onChange}
								type="date"
								className="form-control"
								placeholder="Job location"
							/>
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

export default Education;
