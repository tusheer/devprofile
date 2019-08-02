import React, { Component, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profileContext from '../contex/profile/profileContext';
import authContext from '../contex/auth/authContext';

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
	}, []);
	return (
		<Dashbody
			deledu={deledu}
			delexp={delexp}
			getPro={getPro}
			userLoder={userLoder}
			token={token}
			user={user}
			replace={replace}
			isAuthenticated={isAuthenticated}
			data={data}
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
			this.props.getPro();
		}
	}
	render() {
		const data = this.props.data;
		let isloding;
		if (data) {
			return (isloding = (
				<div className="dashboard padding_top">
					<div className="dashboard_header mb-3">
						<h1 className="pt-2 text-center">Dashboard</h1>
						<p className="text-center ">
							Wellcome to <Link to="/personal">{this.props.data ? this.props.data.name : ' '}</Link>
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
									<i class="fa fa-graduation-cap mr-1" />Edit Education
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
									{this.props.data.experience.map((exp) => {
										return (
											<React.Fragment>
												<tr>
													<td>{exp.company}</td>
													<td>{exp.jobTitle}</td>
													<td>
														{exp.fromDate + ' '}-{' ' + exp.toDate}
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
									{this.props.data.education.map((edu) => {
										return (
											<React.Fragment>
												<tr>
													<td>{edu.school}</td>
													<td>{edu.degree}</td>
													<td>
														{edu.from + ' '}-{' ' + edu.to}
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
								</tbody>
							</table>
						</div>
						<button className="btn btn-danger mb-3">Delete my acoount</button>
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
