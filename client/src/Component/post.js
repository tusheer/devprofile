import React, { useState, useContext, Component, useEffect, Fragment } from 'react';
import SinglePost from './singlePost';
import postContext from '../contex/post/postContext';
import authContext from '../contex/auth/authContext';
import axios from 'axios';

const Post = (props) => {
	const [ postchange, setPostchange ] = useState({ text: '' });
	const contextAuth = useContext(authContext);
	const { token, isAuthenticated, userLoder, seturl, user } = contextAuth;
	// const [ error, setError ] = useState(false);
	const [ postData, setPostData ] = useState([]);
	const context = useContext(postContext);
	const { postsend, getpost } = context;

	// eslint-disable-next-line
	useEffect(() => seturl(props.match.path), []);

	const replace = () => {
		props.history.push('/login');
	};

	const onChange = (e) => {
		setPostchange({ ...postchange, [e.target.name]: e.target.value });
	};

	const tusher = async (e) => {
		e.preventDefault();

		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};
			const res = await axios.post('/post', postchange, config);
			postsend(res.data);
			setPostData([ res.data, ...postData ]);
			setPostchange({ text: '' });
		} catch (error) {}
	};

	const getallpost = async () => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};
			const res = await axios.get('post/', config);
			console.log(res.data);
			getpost(res.data);
			setPostData([ ...res.data ]);
		} catch (error) {}
	};

	return (
		<PostWraper
			onChange={onChange}
			onSubmit={tusher}
			postchange={postchange}
			replace={replace}
			postData={postData}
			token={token}
			isAuthenticated={isAuthenticated}
			userLoder={userLoder}
			seturl={seturl}
			getallpost={getallpost}
			user={user}
		/>
	);
};

class PostWraper extends Component {
	componentWillMount() {
		if (this.props.token && !this.props.user) {
			this.props.userLoder();
		} else {
			if (!this.props.isAuthenticated) {
				this.props.replace();
			}
			this.props.getallpost();
		}
	}

	componentDidMount() {
		this.props.getallpost();
	}
	render() {
		return (
			<div className=" post padding_top ">
				<div className="container edit_post">
					<div className="posting p-2">
						<h4>Write your post</h4>
						<form onSubmit={this.props.onSubmit}>
							<textarea
								value={this.props.postchange.text}
								name="text"
								className="w-100 h-100"
								width="100%"
								rows="2"
								onChange={this.props.onChange}
							/>
							<input className="btn" type="submit" />
						</form>
					</div>
				</div>
				<div className="post_wraper container">
					{this.props.postData.length > 0 ? (
						<Fragment>
							{this.props.postData.map((data) => {
								return (
									<SinglePost
										data={data}
										key={data._id}
										isliked={data.likes.map(
											(like) => (like.user === this.props.user.id ? false : true),
										)}
									/>
								);
							})}
						</Fragment>
					) : (
						<div className="loderwraper">
							<div className="loder" />
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default Post;
