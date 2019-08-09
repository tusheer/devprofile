import React, { Component, useContext, useEffect } from 'react';
import SinglePost from './singlePost';
import authContext from '../contex/auth/authContext';
import axios from 'axios';
import svgWriting from './svg/writing.svg';
import moment from 'moment';
const SingleProfile = (props) => {
	const contextAuth = useContext(authContext);
	const { user, token, isAuthenticated, userLoder, seturl } = contextAuth;
	const id = props.match.params.id;

	useEffect(() => {
		seturl(props.match.path);
		// eslint-disable-next-line
	}, []);

	return (
		<div>
			<Profile id={id} user={user} token={token} isAuth={isAuthenticated} userLoder={userLoder} />
		</div>
	);
};

class Profile extends Component {
	state = {
		data: null,
		post: [],
	};
	componentWillMount() {
		if (this.props.token && !this.props.user) {
			this.props.userLoder();
		}
	}
	async componentDidMount() {
		const res = await axios.get(`/profile/profile/${this.props.id}`);
		const resdata = await axios.get(`/post/${this.props.id}`);

		this.setState({ data: res.data, post: [ ...resdata.data ] });
	}

	render() {
		// const { skill, name, company, companyWebsite, position, location, experience, education } = this.props.data;
		return this.state.data ? (
			<BodyWraper
				user={this.state.data.name}
				data={this.state.data}
				post={this.state.post}
				profile={this.props.user._id}
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
	return (
		<div className="devprofile">
			<div className="header container-fluid">
				<div className="container">
					<div className="row">
						<div className="col-sm-5 col-md-4 col-lg-3 image_wraper2">
							<img src={'/' + props.data.userId.avatar} alt="Profile" />
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
			</div>
			<Body
				bio={props.data.bio}
				skill={props.data.skill}
				company={props.data.company}
				experience={props.data.experience}
				education={props.data.education}
				companyWebsite={props.data.companyWebsite}
				user={props.user}
				profile={props.data.userId}
				post={props.post}
				id={props.profile}
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
	const verifi = (like,id)=>{
		let tusher = {}
		for (let i = 0; i < like.length; i++) { 
  		if (like[i].user === id){
    	tusher.tusher = true;
    	break;
  		}
		}
		return tusher.tusher;
	}
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
							</div>
						</div>

						<div className="post">
							<div className="post_header">
								<h3 className="post_icon m-0">
									<img alt="post" height="28px" src={svgWriting} /> {props.user.split(' ')[0] + "'s"}{' '}
									post
								</h3>
								<div className="post_wraper2">
									{props.post.length > 0 ? (
										<React.Fragment>
											{props.post.map((data) => {
												return (
													<SinglePost
														data={data}
														key={data._id}
														isliked={verifi(data.likes,props.id)}
													/>
												);
											})}
										</React.Fragment>
									) : (
										<div className="loderwraper">
											<div className="loder" />
										</div>
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

export default SingleProfile;
