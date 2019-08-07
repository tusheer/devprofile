import React, { useReducer } from 'react';
import axios from 'axios';
import profileContext from './profileContext';
import { EDITPRO, ADDEDU, ADDEXP, GETPRO, DELEXP, DELEDU } from '../type';
import profileReducer from './profileReducer';

export default function ProfileState(props) {
	const inisialState = {
		isEdited: false,
		data: null,
	};

	const [ state, dispatch ] = useReducer(profileReducer, inisialState);

	const getPro = (data) => {
		dispatch({
			type: GETPRO,
			payload: data,
		});
	};

	const exp = async (formdata) => {
		console.log(formdata);
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		try {
			const res = await axios.post('/profile/addexp', { ...formdata }, config);

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

			dispatch({
				type: ADDEDU,
				payload: res.data,
			});
		} catch (error) {}
	};

	const delexp = async (id) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			const res = await axios.delete(`/profile/exp/${id}`, config);

			dispatch({
				type: DELEXP,
				payload: res.data,
			});
		} catch (error) {}
	};

	const deledu = async (id) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			const res = await axios.delete(`/profile/edu/${id}`, config);

			dispatch({
				type: DELEDU,
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
				getPro,
				deledu,
				delexp,
			}}
		>
			{props.children}
		</profileContext.Provider>
	);
}
