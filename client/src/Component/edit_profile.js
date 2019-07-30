import React, { Component, useContext } from 'react';
import profileContext from '../contex/profile/profileContext';
import authContext from '../contex/auth/authContext';

const Editprofile = (props) => {
	const contextProfile = useContext(profileContext);
	const contextAuth = useContext(authContext);
	const { editprofile } = contextProfile;
	const { userLoder, token, user, isAuthenticated } = contextAuth;
	const replace = () => {
		props.history.push('/');
	};

	return (
		<Profile
			editprofile={editprofile}
			userLoder={userLoder}
			token={token}
			user={user}
			replace={replace}
			isAuthenticated={isAuthenticated}
		/>
	);
};

class Profile extends Component {
	state = {
		name: '',
		position: '',
		company: '',
		companyWebsite: '',
		location: '',
		skill: '',
		bio: '',
	};

	componentWillMount() {
		if (this.props.token && !this.props.user) {
			this.props.userLoder();
		} else {
			if (!this.props.isAuthenticated) {
				this.props.replace();
			}
		}
	}
	onChange = (e) => {
		this.setState({ ...this.state, [e.target.name]: e.target.value });
	};
	onSubmit = (e) => {
		e.preventDefault();
		this.props.editprofile(this.state);
	};
	render() {
		return (
			<div>
				<div className="edit_profile padding_top">
					<div>
						<h1 className="text-center mt-3 gradient">Edit Profile</h1>
					</div>
					<div className="container">
						<form className="form_wraper" onSubmit={this.onSubmit}>
							<div className="form-group mb-1">
								<label>Name</label>
								<input
									onChange={this.onChange}
									value={this.state.name}
									name="name"
									type="text"
									className="form-control"
									placeholder="Enter your name"
								/>
								<small id="emailHelp" className="form-text text-muted">
									A unique handle for your profle URL.Your ful name, company name,nick Name.
								</small>
							</div>

							<div className="form-group mb-1">
								<label>Enter your position</label>
								<select
									onChange={this.onChange}
									name="position"
									value={this.state.postion}
									className="form-control"
									id="sel1"
								>
									<option>Senior Developar</option>
									<option>Junior Developar</option>
									<option>Instractor or Teacher</option>
									<option>Frontend Developar</option>
									<option>Backend Developar</option>
									<option>FullStack Developar</option>
									<option>Othes</option>
								</select>
							</div>
							<div className="form-group mb-1">
								<label>Company Name</label>
								<input
									onChange={this.onChange}
									name="company"
									value={this.state.company}
									className="form-control"
									placeholder="your company name"
								/>
								<small className="form-text text-muted">
									Could be your own company or one you work for.
								</small>
							</div>
							<div className="form-group mb-1">
								<label>Company website</label>
								<input
									onChange={this.onChange}
									name="companyWebsite"
									value={this.state.companyWebsite}
									type="url"
									className="form-control"
									placeholder="Your company website"
								/>
								<small className="form-text text-muted">
									Could be your own web site or a company one.
								</small>
							</div>
							<div className="form-group mb-1">
								<label>Location</label>
								<input
									onChange={this.onChange}
									name="location"
									value={this.state.location}
									type="text"
									className="form-control"
									placeholder="Your current location"
								/>
								<small className="form-text text-muted">
									City or city & state suggested (eg. Boston, MA)
								</small>
							</div>
							<div className="form-group mb-1">
								<label>Skill</label>
								<input
									onChange={this.onChange}
									name="skill"
									value={this.state.skill}
									type="text"
									className="form-control"
									placeholder="html,css,php,React js"
								/>
								<small className="form-text text-muted">
									Please use comma separeted values (eg. html,css,javascript)
								</small>
							</div>
							<div className="form-group mb-1">
								<label>Bio</label>
								<textarea
									onChange={this.onChange}
									name="bio"
									value={this.state.value}
									className="form-control rounded-0"
									id="exampleFormControlTextarea2"
									rows="3"
								/>
								<small className="form-text text-muted">Tell us about your self.</small>
							</div>

							<button type="submit" className="btn btn-primary mb-5 gradient_bg mt-1 p-6">
								Submit
							</button>
						</form>
					</div>
					<div />
				</div>
			</div>
		);
	}
}

export default Editprofile;
