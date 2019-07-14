import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {
	render() {
		return (
			<div className="dashboard">
				<div className="dashboard_header mb-3">
					<h1 className="pt-2 text-center">Dashboard</h1>
					<p className="text-center ">
						Wellcome to <Link to="/personal">Jane Alam Tusher</Link>
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
								<i class="fa fa-info mr-1" />Edit Experience
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
								<tr>
									<td>Traversy Media</td>
									<td>Instractor</td>
									<td>2016/02 - now</td>
									<td>
										<button className="btn btn-danger">Delete</button>
									</td>
								</tr>
								<tr>
									<td>Bangladesh Soft Company</td>
									<td>Full stack web developar</td>
									<td>2014 - 2016</td>
									<td>
										<button className="btn btn-danger">Delete</button>
									</td>
								</tr>
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
								<tr>
									<td>Chittagong University</td>
									<td>Computer Science</td>
									<td>2016/02</td>
									<td>
										<button className="btn btn-danger">Delete</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<button className="btn btn-danger mb-3">Delete my acoount</button>
				</div>
			</div>
		);
	}
}
