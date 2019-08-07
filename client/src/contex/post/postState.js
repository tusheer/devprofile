import React, { useReducer } from 'react';
import { POST, GETPOST, LIKE } from '../type';
import postContext from './postContext';
import postReducer from './postReducer';

export default function PostState(props) {
	const initialState = {
		post: [],
	};
	const [ state, dispatch ] = useReducer(postReducer, initialState);

	const postsend = (data) => {
		dispatch({
			type: POST,
			payload: data,
		});
	};

	const getpost = (data) => {
		dispatch({
			type: GETPOST,
			payload: data,
		});
	};
	const like = (data, id) => {
		dispatch({
			type: LIKE,
			payload: { data, id },
		});
	};
	// const unlike = (data, id) => {
	// 	dispatch({
	// 		type: UNLIKE,
	// 		payload: { ...data, id: id },
	// 	});
	// };

	return (
		<postContext.Provider
			value={{
				...state,
				postsend,
				getpost,
				like,
				// unlike,
			}}
		>
			{props.children}
		</postContext.Provider>
	);
}
