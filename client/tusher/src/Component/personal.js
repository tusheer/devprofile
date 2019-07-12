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

export default personal;
