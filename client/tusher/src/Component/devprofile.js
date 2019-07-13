import React, { Component } from 'react';

export class devprofile extends Component {
	render() {
		return (
			<div className="devprofile">
				<div className="header">
					<h1>Developar Profile</h1>
					<p>Connect with developars</p>
				</div>
				<div className="profile container">
					<div className="col-md-6">
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
										<h3>Jane Alam Tusehr</h3>
										<p>Full Stack Web developar</p>
									</div>
									<div className="skill">
										<div>
											<span>Html</span>
											<span>Css</span>
											<span>React js</span>
											<span>JavaScript</span>
											<span>Node js</span>
											<span>Angular</span>
											<span>Redux</span>
											<span>MongoDB</span>
										</div>
										<div>
											<button className="btn">View Profile</button>
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
}

export default devprofile;
