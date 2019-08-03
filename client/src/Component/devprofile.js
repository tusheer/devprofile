import React, { Component, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import authContext from '../contex/auth/authContext';
import axios from 'axios';

const Devprofile = (props) => {
	const contextAuth = useContext(authContext);

	const { userLoder, token, user, isAuthenticated, seturl } = contextAuth;
	const replace = (props) => {
		props.history.push('/');
	};

	useEffect(() => {
		seturl(props.match.path);
		// eslint-disable-next-line
	}, []);

	return <Dev userLoder={userLoder} token={token} user={user} replace={replace} isAuthenticated={isAuthenticated} />;
};

class Dev extends Component {
	state = {
		data: null,
	};
	componentWillMount() {
		if (this.props.token && !this.props.user) {
			this.props.userLoder();
		}
	}
	async componentDidMount() {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const res = await axios.get('/profile/dev', config);
		this.setState({ data: res.data });
	}
	render() {
		let isloding;
		if (this.state.data) {
			return (isloding = (
				<div className="devprofile padding_top">
					<div className="header">
						<h1>Developar's Profile</h1>
						<p>Connect with developars</p>
					</div>
					<div className="profile container">
						{this.state.data.map((data) => {
							return (
								<div className="col-md-6" key={data._id}>
									<div className="single_profile ">
										<div className="image">
											<div className="image_wraper">
												<img
													src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
													alt=""
												/>
											</div>
										</div>
										<div className="profile_details">
											<div>
												<div className="name">
													<h3>{data.name}</h3>
													<p>{data.position}</p>
												</div>
												<div className="skill">
													<div>
														{data.skill.map((skill) => <span key={skill}>{skill}</span>)}
													</div>
													<div>
														<Link to={`/profile/${data._id}`}>
															<button className="btn">View Profile</button>
														</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			));
		} else {
			return (isloding = (
				<div className="loderwraper">
					<div className="loder" />
				</div>
			));
		}

		//eslint-disable-next-line
		return isloding;
	}
}

export default Devprofile;
