import { POST, GETPOST, LIKE } from '../type';

const postReducer = (state, action) => {
	switch (action.type) {
		case POST:
			return {
				...state,
				post: [ action.payload, ...state.post ],
			};
		case GETPOST:
			return {
				...state,
				post: [ ...action.payload ],
			};
		case LIKE:
			return {
				...state,
				post: state.post.map(
					(post) => (post._id === action.payload._id ? { ...post, likes: action.payload.likes } : post),
				),
			};

		default:
			break;
	}
};
export default postReducer;
