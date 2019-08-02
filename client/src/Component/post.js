import React from 'react';

const Post = () => {
	return (
		<div className="post padding_top ">
			<div className="post_wraper container">
				<div className="single_post">
					<div className="header_post d-flex justify-content-start align-items-center">
						<img
							className="rounded-circle"
							src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
							alt=""
							height="40px"
							width="40px"
						/>
						<h5 className="m-0 ml-2">Janel Alam Tusher</h5>
					</div>
					<div className="post_body">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolor corrupti rem at quibusdam.
						Ullam, accusantium nisi, ipsum odit delectus facilis temporibus magnam itaque minima voluptates
						minus, asperiores iusto dolorem!
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
