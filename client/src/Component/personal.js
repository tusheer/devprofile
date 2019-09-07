import React, { Component, useContext, useEffect, useState } from 'react';
import authContext from '../contex/auth/authContext';
import profileContext from '../contex/profile/profileContext';
import SinglePost from './singlePost';
import svgWriting from './svg/writing.svg';
import axios from 'axios';
import moment from 'moment';

const Personal = (props) => {
	const contextAuth = useContext(authContext);
	const profileAuth = useContext(profileContext);
	const { user, token, isAuthenticated, userLoder, seturl } = contextAuth;
	const { getPro, data } = profileAuth;
	const [ post, setPost ] = useState([]);

	// eslint-disable-next-line
	useEffect(() => seturl(props.match.path), []);

	const getprofile = async () => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			await userLoder();
			const res = await axios.get('/profile', config);
			if (!res.data) {
				props.history.push('/editprofile');
			}
			getPro(res.data);

			const resdata = await axios.get(`/post/${res.data._id}`, config);
			setPost([ ...resdata.data ]);
		} catch (error) {
			console.log(error);
		}
	};

	const replace = () => {
		props.history.push('/login');
	};
	return (
		<div>
			<Profile
				getprofile={getprofile}
				user={user}
				token={token}
				isAuth={isAuthenticated}
				userLoder={userLoder}
				replace={replace}
				post={post}
				data={data}
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
		}
	}
	componentDidMount() {
		this.props.getprofile();
	}
	render() {
		// const { skill, name, company, companyWebsite, position, location, experience, education } = this.props.data;
		return this.props.data ? (
			<BodyWraper
				change={this.onChange}
				upload={this.props.upload}
				post={this.props.post}
				user={this.props.user}
				data={this.props.data}
			/>
		) : (
			<Loder />
		);
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
	const [ url, setUrl ] = useState(null);

	const onChange = async (e) => {
		const avatar = e.target.files;

		const form = new FormData();
		form.append('avatar', avatar[0]);
		form.append('name', 'tusher');

		if (avatar) {
			try {
				const res = await axios.post('api/users/image/upload', form);
				await props.upload(res.data);
				console.log(res.data);
				await setUrl(res.data);
				console.log(url);

				// if (res.data.length < 1)
			} catch (error) {}
		} else {
			console.log('select a picture');
		}
	};

	const verifi = (like, id) => {
		let tusher = {};
		for (let i = 0; i < like.length; i++) {
			if (like[i].user === id) {
				tusher.tusher = true;
				break;
			}
		}
		return tusher.tusher;
	};

	// const Tusher = <img className="img" src={props.url} alt="Profile" />;

	return (
		<div>
			<div className="header container-fluid">
				<div className="row">
					<div className="col-sm-5 col-md-4 col-lg-3 image_wraper pl-3 pr-3 ">
						<div className="image_inner h-100   position-relative">
							<img className="img" src={'/api/users/image/' + props.user._id} alt="profile" />

							<div className="image2">
								<div className="btn  btn_image position-relative">
									<i className="fa fa-camera d-inline-block text-white" />
									<span className="text-center d-block">Upload your photo</span>
									<input onChange={onChange} className="position-absolute h-100 w-100" type="file" />
								</div>
							</div>
						</div>
					</div>

					<div className="profile_details col-sm-7 col-md-8 col-lg-9">
						<div>
							<h1>{props.user ? props.user.name : ' '}</h1>
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
				user={props.user}
				post={props.post}
				verifi={verifi}
			/>
		</div>
	);
}
//Icon set
function Icon() {
	return (
		<div className="icon">
			<a className="text-light" href="https://www.facebook.com/janealam.tusher" target="_blank">
				<i className="fa fa-facebook-square" />
			</a>
			<a className="text-light" href="https://www.linkedin.com/in/jane-alam-tusher-00398b158/" target="_blank">
				<i className="fa fa-linkedin-square" />
			</a>

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
							<p>{props.bio ? props.bio : <h2 className="center">No bio</h2>}</p>
						</div>
						<div className="skill">
							<div>
								<h3>
									<i className="fa fa-pencil" />Skill Set
								</h3>
							</div>
							<div className="span_wraper">
								{props.skill ? (
									<React.Fragment>
										{props.skill.map((skill) => <span key={skill}>{skill}</span>)}
									</React.Fragment>
								) : (
									<h2 className="center">No skill</h2>
								)}
							</div>
						</div>

						<React.Fragment>
							{props.education || props.education.length > 0 ? (
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
														<span>{moment(education.from).format('MMM Do YY')}</span> -{' '}
														<span>{moment(education.to).format('MMM Do YY')}</span>
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
							) : (
								<div className="education">
									<div className="education_wraper">
										<h4 className="text-justify">
											Here is no education dtata.Please add education data from dashboard
										</h4>
									</div>
								</div>
							)}
						</React.Fragment>
					</div>

					<div className="col-md-7 col-lg-8 right">
						<div className="experience">
							<h3>
								<i className="fa fa-briefcase" /> Experience
							</h3>
							<div className="experience_wraper">
								{props.experience.length > 0 ? (
									<React.Fragment>
										{props.experience.map((exp) => {
											return (
												<div key={exp._id} className="single_experience">
													<h4>{exp.company}</h4>
													<p>
														<span>{moment(exp.fromDate).format('MMM Do YY')}</span> -{' '}
														<span>{moment(exp.toDate).format('MMM Do YY')}</span>
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
									</React.Fragment>
								) : (
									<h2 className="center">No experience data.Please add from dashboard</h2>
								)}
							</div>
						</div>

						<div className="post">
							<div className="post_header">
								<h3 className="post_icon m-0">
									<img alt="post" height="28px" src={svgWriting} />{' '}
									{props.user.name.split(' ')[0] + "'s"} post
								</h3>
								<div className="post_wraper2">
									{props.post.length > 0 ? (
										<React.Fragment>
											{props.post.map((post) => {
												return (
													<SinglePost
														url={'/api/users/image'}
														data={post}
														key={post._id}
														isliked={props.verifi(post.likes, props.user._id)}
													/>
												);
											})}
										</React.Fragment>
									) : (
										<h1>You have no post</h1>
									)}
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
