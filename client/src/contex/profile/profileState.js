import React, { useReducer } from 'react';
import axios from 'axios';
import profileContext from './profileContext';
import { EDITPRO, ADDEDU, ADDEXP } from '../type';
import profileReducer from './profileReducer';

export default function ProfileState(props) {
	const inisialState = {
		isEdited: false,
	};

	const [ state, dispatch ] = useReducer(profileReducer, inisialState);
	const exp = async (formdata) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		try {
			const res = await axios.post('/profile/addexp', { ...formdata }, config);
			console.log(res.data);
			dispatch({
				type: ADDEXP,
				payload: res.data,
			});
		} catch (error) {}
	};
	const editprofile = async (formdata) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		try {
			const res = await axios.post('/profile/', { ...formdata }, config);
			console.log(res.data);
			dispatch({
				type: EDITPRO,
				payload: res.data,
			});
		} catch (error) {}
	};

	const addedu = async (formdata) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		try {
			const res = await axios.post('/profile/addedu', { ...formdata }, config);
			console.log(res.data);
			dispatch({
				type: ADDEDU,
				payload: res.data,
			});
		} catch (error) {}
	};

	return (
		<profileContext.Provider
			value={{
				...state,
				editprofile,
				addedu,
				exp,
			}}
		>
			{props.children}
		</profileContext.Provider>
	);
}
