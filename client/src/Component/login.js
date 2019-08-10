import React, { useEffect, useContext, useState } from 'react';
import authContext from '../contex/auth/authContext';
import axios from 'axios';
const Login = (props) => {
	const context = useContext(authContext);
	const { log_in, isAuthenticated, seturl, token, userLoder } = context;
	useEffect(() => {
		if (isAuthenticated && token) {
			props.history.push('/developers');
		}
	});
	useEffect(() => {
		seturl(props.match.path);
		//eslint-disable-next-line
	}, []);

	const [ form, setForm ] = useState({
		email: '',
		password: '',
	});

	const [ error, setError ] = useState(null);
	const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
	const onSubmit = async (e) => {
		e.preventDefault();

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			const res = await axios.post('/api/users/login', form, config);
			if (res.data) {
				log_in(res.data);
				userLoder();
			}
		} catch (err) {
			setError(err.response.data);
			console.log(err.response.data);
			setTimeout(() => {
				setError(null);
			}, 4000);
		}
	};
	const { email, password } = form;
	return (
		<div className="login padding_top">
			{error && (
				<div className="alert alert-danger" role="alert">
					{error.err}
				</div>
			)}
			<div className="login_header pt-4">
				<h1 className="text-center">Log in</h1>
				<p className="text-center">Log in to your DevConnector account</p>
			</div>
			<div className="login_form container">
				<div className="login_form_wraper">
					<form onSubmit={onSubmit}>
						<div className="form-group">
							<label htmlFor="exampleInputEmail1">Email address</label>
							<input
								value={email}
								onChange={onChange}
								type="email"
								className="form-control"
								aria-describedby="emailHelp"
								placeholder="Enter email"
								name="email"
							/>
							<small id="emailHelp" className="form-text text-muted">
								We'll never share your email with anyone else.
							</small>
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputPassword1">Password</label>
							<input
								value={password}
								onChange={onChange}
								type="password"
								className="form-control"
								placeholder="Password"
								name="password"
							/>
						</div>

						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
export default Login;
