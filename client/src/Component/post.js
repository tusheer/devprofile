import React from 'react';
import SinglePost from './singlePost';

const Post = () => {
	return (
		<div className=" post padding_top ">
			<div className="container edit_post">
				<div className="posting p-2">
					<h4>Write your post</h4>
					<form action="">
						<textarea className="w-100 h-100"  className=""
						width='100%'
						rows="2"/>
						<input className="btn" type="submit" value="Post" />
					</form>
				</div>
			</div>
			<div className="post_wraper container">
				<SinglePost />
				<SinglePost />
			</div>
		</div>
	);
};

export default Post;
