import React, { useReducer, useState } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducers';
import setAuthToken from './axiosSet';
import { SIGN_UP, LOG_IN, USER, LOGOUT } from '../type';

import ProfileState from '../profile/profileState';

const AuthState = (props) => {
	const initialState = {
		token: localStorage.getItem('token'),
		isAuthenticated: false,
		loading: true,
		user: null,
		error: null,
	};

	const [ url, setUrl ] = useState('');

	const [ state, dispatch ] = useReducer(authReducer, initialState);
	const userLoder = async () => {
		const token = localStorage.getItem('token');
		if (token) {
			setAuthToken(token);
		}

		try {
			const res = await axios.get('/api/users/');
			dispatch({
				type: USER,
				payload: res.data,
			});
			return res.data;
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
	const logout = () => {
		dispatch({
			type: LOGOUT,
		});
	};

	const seturl = (url) => {
		setUrl(url);
	};

	return (
		<AuthContext.Provider
			value={{
				...state,
				register,
				log_in,
				userLoder,
				logout,
				url,
				seturl,
			}}
		>
			<ProfileState>{props.children}</ProfileState>
		</AuthContext.Provider>
	);
};
export default AuthState;
