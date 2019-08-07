import React, { Component, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import profileContext from '../contex/profile/profileContext';
import authContext from '../contex/auth/authContext';
import axios from 'axios';
import moment from 'moment';
const Dashboard = (props) => {
	const contextProfile = useContext(profileContext);
	const contextAuth = useContext(authContext);
	const { getPro, data, delexp, deledu } = contextProfile;
	const { userLoder, token, user, isAuthenticated, seturl } = contextAuth;
	const replace = () => {
		props.history.push('/login');
	};

	useEffect(() => {
		seturl(props.match.path);
		//eslint-disable-next-line
	}, []);
	const [ pro, setPro ] = useState(false);
	const getprofile = async () => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			const res = await axios.get('/profile', config);
			getPro(res.data);
			setPro(res.data);
			console.log(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Dashbody
			deledu={deledu}
			delexp={delexp}
			getprofile={getprofile}
			userLoder={userLoder}
			token={token}
			user={user}
			replace={replace}
			isAuthenticated={isAuthenticated}
			data={data}
			pro={pro}
			setPro={setPro}
		/>
	);
};

class Dashbody extends Component {
	state = {
		data: this.props.data,
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
	componentDidMount() {
		if (!this.props.data) {
			this.props.getprofile();
		} else {
			this.props.setPro(this.props.data);
		}
	}
	render() {
		const data = this.props.pro;
		let isloding;
		if (data) {
			return (isloding = (
				<div className="dashboard padding_top">
					<div className="dashboard_header mb-3">
						<h1 className="pt-2 text-center">Dashboard</h1>
						<p className="text-center ">
							Wellcome to <Link to="/personal">{this.props.pro ? this.props.pro.name : ' '}</Link>
						</p>
						<div className="edit_panel d-flex justify-content-center m-2">
							<Link to="/editprofile">
								{' '}
								<div className="p-1 ml-1 edit">
									<i class="fa fa-user-circle mr-1" />Edit Profile
								</div>
							</Link>
							<Link to="/editexperience">
								<div className="p-1 ml-1 edit">
									<i class="fa fa-info mr-1" />Add Experience
								</div>
							</Link>
							<Link to="/editeducation">
								<div className="p-1 ml-1 edit">
									<i class="fa fa-graduation-cap mr-1" />Add Education
								</div>
							</Link>
						</div>
					</div>
					<div className="container">
						<div className="mb-3">
							<h3>Experience credientials</h3>
							<table class="table">
								<thead>
									<tr>
										<th scope="col">Company</th>
										<th scope="col">Title</th>
										<th scope="col">Years</th>
										<th />
									</tr>
								</thead>

								<tbody>
									{this.props.pro.experience ? (
										<React.Fragment>
											{this.props.pro.experience.map((exp) => {
												return (
													<React.Fragment>
														<tr>
															<td>{exp.company}</td>
															<td>{exp.jobTitle}</td>
															<td>
																{moment(exp.fromDate).format('MMM Do YY') + ' '}-{' ' + moment(exp.toDate).format('MMM Do YY')}
															</td>
															<td>
																<button
																	onClick={() => this.props.delexp(exp._id)}
																	className="btn btn-danger"
																>
																	Delete
																</button>
															</td>
														</tr>
													</React.Fragment>
												);
											})}
										</React.Fragment>
									) : (
										<h1 className="center"> Add experience</h1>
									)}
								</tbody>
							</table>
						</div>
						<div className="mt-2">
							<h3>Education credentials</h3>
							<table class="table">
								<thead>
									<tr>
										<th scope="col">School</th>
										<th scope="col">Degree</th>
										<th scope="col">Years</th>
										<th />
									</tr>
								</thead>
								<tbody>
									{this.props.pro.education.length > 0 ? (
										<React.Fragment>
											{this.props.pro.education.map((edu) => {
												return (
													<React.Fragment>
														<tr>
															<td>{edu.school}</td>
															<td>{edu.degree}</td>
															<td>
																{moment(edu.from).format('MMM Do YY') + ' '}-{' ' + moment(edu.to).format('MMM Do YY')}
															</td>
															<td>
																<button
																	onClick={() => this.props.deledu(edu._id)}
																	className="btn btn-danger"
																>
																	Delete
																</button>
															</td>
														</tr>
													</React.Fragment>
												);
											})}
										</React.Fragment>
									) : (
										<h1 classNmae="center"> Add education</h1>
									)}
								</tbody>
							</table>
						</div>
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

export default Dashboard;
