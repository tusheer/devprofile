import React, { Component, useContext, useEffect } from 'react';
import authContext from '../contex/auth/authContext';
import profileContext from '../contex/profile/profileContext';

const Personal = (props) => {
	const contextAuth = useContext(authContext);
	const profileAuth = useContext(profileContext);
	const { user, token, isAuthenticated, userLoder, seturl } = contextAuth;
	const { getPro, data } = profileAuth;

	useEffect(() => seturl(props.match.path), []);

	const replace = () => {
		props.history.push('/login');
	};
	return (
		<div>
			<Profile
				data={data}
				getPro={getPro}
				user={user}
				token={token}
				isAuth={isAuthenticated}
				userLoder={userLoder}
				replace={replace}
			/>
		</div>
	);
};

class Profile extends Component {
	componentWillMount() {
		if (this.props.token && !this.props.user) {
			this.props.userLoder();
		} else {
			if (!this.props.isAuth) {
				this.props.replace();
			}
			this.props.getPro();
		}
	}
	componentDidMount() {
		this.props.getPro();
	}

	render() {
		// const { skill, name, company, companyWebsite, position, location, experience, education } = this.props.data;
		return this.props.data ? <BodyWraper data={this.props.data} /> : <Loder />;
	}
}

function Loder() {
	return (
		<div className="loderwraper">
			<div className="loder" />
		</div>
	);
}

function BodyWraper(props) {
	return (
		<div>
			<div className="header container-fluid">
				<div className="row">
					<div className="col-sm-5 col-md-4 col-lg-3 image_wraper">
						<img
							src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
							alt="Profile"
						/>
						<div>
							<input type="file" />
						</div>
					</div>

					<div className="profile_details col-sm-7 col-md-8 col-lg-9">
						<div>
							<h1>{props.data.name}</h1>
							<p>{props.data.position}</p>
							<p>{props.data.location}</p>
						</div>
						<Icon />
					</div>
				</div>
			</div>
			<Body
				bio={props.data.bio}
				skill={props.data.skill}
				company={props.data.company}
				experience={props.data.experience}
				education={props.data.education}
				companyWebsite={props.data.companyWebsite}
			/>
		</div>
	);
}
//Icon set
function Icon() {
	return (
		<div className="icon">
			<i className="fa fa-facebook-square" />
			<i className="fa fa-linkedin-square" />
			<i className="fa fa-twitter-square" />
			<i className="fa fa-instagram" />
		</div>
	);
}

function Body(props) {
	return (
		<div className="body container-fluid">
			<div className="container">
				<div className="row">
					<div className="col-md-5 col-lg-4 left">
						<div className="bio">
							<h3>
								<i className="fa fa-info-circle" />Bio
							</h3>
							<p>{props.bio}</p>
						</div>
						<div className="skill">
							<div>
								<h3>
									<i className="fa fa-pencil" />Skill Set
								</h3>
							</div>
							<div className="span_wraper">
								{props.skill.map((skill) => <span key={skill}>{skill}</span>)}
							</div>
						</div>
						<div className="education">
							<h3>
								<i className="fa fa-graduation-cap" />Education
							</h3>
							<div className="education_wraper">
								{props.education.map((education) => {
									return (
										<div key={education._id} className="single_education">
											<h4>{education.school}</h4>

											<p>
												<span>{education.from}</span> - <span>{education.to}</span>
											</p>
											<p>
												<b>Degree: </b>
												<span>{education.degree}</span>
											</p>
											<p>
												<b>Field of study:</b> <span>{education.fieldofstudy}</span>
											</p>
											<p>
												<b>Description:</b> <span>{education.description}</span>
											</p>
										</div>
									);
								})}
							</div>
						</div>
					</div>

					<div className="col-md-7 col-lg-8 right">
						<div className="experience">
							<h3>
								<i className="fa fa-briefcase" /> Experience
							</h3>
							<div className="experience_wraper">
								{props.experience.map((exp) => {
									return (
										<div key={exp._id} className="single_experience">
											<h4>{exp.company}</h4>
											<p>
												<span>{exp.fromDate}</span> - <span>{exp.toDate}</span>
											</p>
											<p>
												<b>location: </b> <span>{exp.location}</span>
											</p>
											<p>
												<b>Description:</b> <span>{exp.description}</span>
											</p>
										</div>
									);
								})}
							</div>
						</div>

						<div className="post">
							<div className="post_header">
								<div className="post_wraper">
									<div className="single_post">
										<div className="header_post d-flex justify-content-start align-items-center">
											<img
												className="rounded-circle"
												src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
												alt=""
												height="40px"
												width="40px"
											/>
											<h5 className="m-0 ml-2">Janel Alam Tusher</h5>
										</div>
										<div className="post_body">
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolor corrupti
											rem at quibusdam. Ullam, accusantium nisi, ipsum odit delectus facilis
											temporibus magnam itaque minima voluptates minus, asperiores iusto dolorem!
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Personal;
