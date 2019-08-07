import React, { useReducer, useState } from 'react';
import axios from 'axios';
import AuthContext from './authContext';

import authReducer from './authReducers';
import setAuthToken from './axiosSet';
import { SIGN_UP, LOG_IN, USER, LOGOUT, UPLOAD } from '../type';

import ProfileState from '../profile/profileState';
import PostState from '../post/postState';

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

	const register = (formData) => {
		dispatch({
			type: SIGN_UP,
			payload: formData,
		});
	};

	const log_in = (formData) => {
		dispatch({
			type: LOG_IN,
			payload: formData,
		});
	};
	const logout = () => {
		dispatch({
			type: LOGOUT,
		});
	};

	const seturl = (url) => {
		setUrl(url);
	};

	const upload = (data) => {
		dispatch({
			type: UPLOAD,
			payload: data,
		});
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
				upload,
			}}
		>
			<ProfileState>
				<PostState>{props.children}</PostState>
			</ProfileState>
		</AuthContext.Provider>
	);
};
export default AuthState;
