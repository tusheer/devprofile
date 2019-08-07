import React, { useState, useContext, useEffect } from 'react';
import heart from './svg/heart-regular.svg';
import heartSolid from './svg/heart-solid.svg';
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
import postContext from '../contex/post/postContext';

export default function SinglePost(props) {
	const context = useContext(postContext);
	const { like } = context;
	const [ likes, setLikes ] = useState(false);
	const [ likecount, setLikecount ] = useState(0);
	const onClick = async (id) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		console.log(id);
		try {
			if (likes) {
				setLikes(false);
				setLikecount(likecount - 1);

				const res = await axios.put(`/post/unlike/${id}`, config);
				like(res.send, id);
			} else {
				setLikes(true);
				setLikecount(likecount + 1);
				const res = await axios.put(`/post/like/${id}`, config);
				like(res.send, id);
			}
		} catch (error) {}
	};

	useEffect(() => {
		setLikes(props.isliked[0]);
		setLikecount(props.data.likes.length);
		//eslint-disable-next-line
	}, []);

	return (
		<div className="single_post mb-3">
			<div className="header_post d-flex justify-content-start align-items-center">
				<img className="rounded-circle" src={'/' + props.data.avatar} alt="" height="55px" width="55px" />
				<div>
					<h5 className="m-0 ml-2">
						<Link to={`/profile/${props.data.profileId}`}>{props.data.name}</Link>
					</h5>
					<p className="time p-0 m-0 ml-2 small">{moment(props.data.date).format('MMM Do YY')}</p>
				</div>
			</div>
			<div className="post_body">{props.data.text}</div>
			<div className="like d-flex  align-items-center">
				<div onClick={() => onClick(props.data._id)}>
					{likes ? (
						<img src={heartSolid} alt="" height="30px" width="30px" />
					) : (
						<img src={heart} alt="" height="30px" width="30px" />
					)}
				</div>
				<p className="m-0 ml-2">{likecount}</p>
			</div>
		</div>
	);
}
