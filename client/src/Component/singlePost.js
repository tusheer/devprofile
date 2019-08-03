import React from 'react';
import heart from './svg/heart-regular.svg';
import heartSolid from './svg/heart-solid.svg';
export default function SinglePost() {
	return (
		<div className="single_post mb-3">
			<div className="header_post d-flex justify-content-start align-items-center">
				<img
					className="rounded-circle"
					src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
					alt=""
					height="55px"
					width="55px"
				/>
				<div>
					<h5 className="m-0 ml-2">Janel Alam Tusher</h5>
					<p className="time p-0 m-0 ml-2 small">12pm 27 june</p>
				</div>
			</div>
			<div className="post_body">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolor corrupti rem at quibusdam. Ullam,
				accusantium nisi, ipsum odit delectus facilis temporibus magnam itaque minima voluptates minus,
				asperiores iusto dolorem!
			</div>
			<div className="like d-flex  align-items-center">
				<div>
					<img src={heart} alt="" height="30px" width="30px" />
					<img src={heartSolid} alt="" height="30px" width="30px" />
				</div>
				<p className="m-0 ml-2">30 Likes</p>
			</div>
		</div>
	);
}
