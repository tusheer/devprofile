import { SIGN_UP, LOG_IN, USER, LOGOUT } from '../type';

export default (state, action) => {
	switch (action.type) {
		case SIGN_UP:
			localStorage.setItem('token', action.payload.token);
			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				loading: false,
			};
		case LOG_IN:
			localStorage.setItem('token', action.payload.token);
			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				loading: false,
			};
		case USER:
			return {
				...state,
				user: action.payload,
				isAuthenticated: true,
				loading: false,
			};
		case LOGOUT:
			localStorage.removeItem('token');
			return {
				...state,
				isAuthenticated: false,
				loading: false,
				token: null,
			};
		default:
			break;
	}
};
