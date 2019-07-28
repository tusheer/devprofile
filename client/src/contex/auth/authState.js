import React, { useReducer } from 'react';
import AuthContext from './authContext';

const AuthState = (props) => {
	const initialState = {
		token: localStorage.getItem('token'),
		isAuthenticated: null,
		loading: true,
		user: null,
		error: null,
	};

	const [ state ] = useReducer(initialState);

	const register = async (formData) => {
		console.log('tusher');
	};

	return (
		<AuthContext.Provider
			value={{
				...state,
				register,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};
export default AuthState;
