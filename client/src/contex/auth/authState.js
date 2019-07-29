import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducers';
import setAuthToken from './axiosSet';
import { SIGN_UP, LOG_IN, USER } from '../type';

const AuthState = (props) => {
	const initialState = {
		token: localStorage.getItem('token'),
		isAuthenticated: null,
		loading: true,
		user: null,
		error: null,
	};

	const [ state, dispatch ] = useReducer(authReducer, initialState);
	const userLoder = async () => {
		if (localStorage.token) {
			setAuthToken(localStorage.token);
		}
		console.log(localStorage.token);
		try {
			const res = await axios.get('/api/users/');
			dispatch({
				type: USER,
				payload: res.data,
			});
			console.log(res.data);
		} catch (error) {}
	};

	const register = async (formData) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			const res = await axios.post('/api/users/signup', formData, config);
			console.log(res.data);
			dispatch({
				type: SIGN_UP,
				payload: res.data,
			});
			userLoder();
		} catch (err) {
			console.log(err);
		}
	};

	const log_in = async (formData) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			const res = await axios.post('/api/users/login', formData, config);
			dispatch({
				type: LOG_IN,
				payload: res.data,
			});
			userLoder();
		} catch (error) {}
	};

	return (
		<AuthContext.Provider
			value={{
				...state,
				register,
				log_in,
				userLoder,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};
export default AuthState;
