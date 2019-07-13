import React, { Component } from 'react';

export class personal extends Component {
	render() {
		return (
			<div>
				<div className="header container-fluid">
					<div className="row">
						<div className="col-sm-5 col-md-4 col-lg-3 image_wraper">
							<img
								src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
								alt="Profile"
							/>
						</div>
						<div className="profile_details col-sm-7 col-md-8 col-lg-9">
							<div>
								<h1>Jane Alam Tusher</h1>
								<p>Full Stack Web Developar</p>
								<p>Bangladsh,Comilla</p>
							</div>
							<Icon />
						</div>
					</div>
				</div>
				<Body />
			</div>
		);
	}
}

//Icon set
function Icon() {
	return (
		<div className="icon">
			<i class="fa fa-facebook-square" />
			<i class="fa fa-linkedin-square" />
			<i class="fa fa-twitter-square" />
			<i class="fa fa-instagram" />
		</div>
	);
}

function Body() {
	return (
		<div className="body container-fluid">
			<div className="container">
				<div className="row">
					<div className="col-md-5 col-lg-4 left">
						<div className="bio">
							<h3>
								<i class="fa fa-info-circle" />Bio
							</h3>
							<p>
								I love proggraming. I have been worked 3 years. And enjoy every little moment when I
								coding
							</p>
						</div>
						<div className="skill">
							<div>
								<h3>
									<i class="fa fa-pencil" />Skill Set
								</h3>
							</div>
							<div className="span_wraper">
								<span>Html</span>
								<span>Css</span>
								<span>React js</span>
								<span>JavaScript</span>
								<span>Node js</span>
								<span>Angular</span>
								<span>Redux</span>
								<span>MongoDB</span>
							</div>
						</div>
						<div className="education">
							<h3>
								<i class="fa fa-graduation-cap" />Education
							</h3>
							<div className="education_wraper">
								<div className="single_education">
									<h4>University of Chittagong</h4>
									<p>
										<span>2016/02</span> - <span>2019/01</span>
									</p>
									<p>
										<b>location: </b>
										<span>Chittagong, Bangladesh</span>
									</p>
									<p>
										<b>Discription:</b> <span>Full Stack Web Developar</span>
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-7 col-lg-8 right">
						<div className="experience">
							<h3>
								<i class="fa fa-briefcase" /> Experience
							</h3>
							<div className="experience_wraper">
								<div className="single_experience">
									<h4>TechTop Software Ltd.</h4>
									<p>
										<span>2016/02</span> - <span>Now</span>
									</p>
									<p>
										<b>location: </b> <span>Dhaka, Bangladesh</span>
									</p>
									<p>
										<b>Discription:</b> <span>Full Stack Web Developar</span>
									</p>
								</div>
								<div className="single_experience">
									<h4>TechTop Software Ltd.</h4>
									<p>
										<span>2016/02</span> - <span>Now</span>
									</p>
									<p>
										<b>Position: </b>
										<span>Senior Developar</span>
									</p>
									<p>
										<b>location: </b>
										<span>Dhaka, Bangladesh</span>
									</p>
									<p>
										<b>Discription: </b>
										<span>Full Stack Web Developar</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default personal;
