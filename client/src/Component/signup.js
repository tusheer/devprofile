import React, { useContext, useState, useEffect } from 'react';
import authContext from '../contex/auth/authContext';
import axios from 'axios';
const Signup = (props) => {
	const context = useContext(authContext);
	const { register, isAuthenticated, seturl, token, userLoder } = context;
	const [ form, setFrom ] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	useEffect(() => {
		if (isAuthenticated && token) {
			props.history.push('/');
		}
	});
	useEffect(() => {
		seturl(props.match.path);
		//eslint-disable-next-line
	}, []);
	const [ error, setError ] = useState(null);
	const onChange = (e) => setFrom({ ...form, [e.target.name]: e.target.value });
	const onSubmit = async (e) => {
		e.preventDefault();
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			const res = await axios.post('/api/users/signup', form, config);
			if (res.data) {
				register(res.data);
				userLoder();
			}

			userLoder();
		} catch (err) {
			setError({ ...err.response.data });
			console.log(error);

			setTimeout(() => {
				setError(null);
			}, 4000);
		}
	};
	const { name, email, password, password2 } = form;

	return (
		<div className="signup padding_top">
			{error && (
				<React.Fragment>
					<React.Fragment>
						{error.password && (
							<div className="alert alert-danger mb-0" role="alert">
								{error.password}
							</div>
						)}
					</React.Fragment>
					<React.Fragment>
						{error.password2 && (
							<div className="alert alert-danger mb-0" role="alert">
								{error.password2}
							</div>
						)}
					</React.Fragment>
					<React.Fragment>
						{error.err && (
							<div className="alert alert-danger mb-0" role="alert">
								{error.err}
							</div>
						)}
					</React.Fragment>
					<React.Fragment>
						{error.name && (
							<div className="alert alert-danger mb-0" role="alert">
								{error.name}
							</div>
						)}
					</React.Fragment>
				</React.Fragment>
			)}
			<div className="signup_header pt-4">
				<h1 className="text-center">Sign up</h1>
				<p className="text-center">Create your DevConnect account.</p>
			</div>
			<div className="signup_form container">
				<div className="signup_form_wraper">
					<form onSubmit={onSubmit}>
						<div className="form-group">
							<label htmlFor="exampleInputEmail1">Name</label>
							<input
								type="text"
								className="form-control"
								placeholder="Enter your name"
								name="name"
								value={name}
								onChange={onChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputEmail1">Email address</label>
							<input
								value={email}
								type="email"
								className="form-control"
								aria-describedby="emailHelp"
								placeholder="Enter email"
								name="email"
								onChange={onChange}
							/>
							<small id="emailHelp" className="form-text text-muted">
								We'll never share your email with anyone else.
							</small>
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputPassword1">Password</label>
							<input
								value={password}
								type="password"
								className="form-control"
								placeholder="Password"
								name="password"
								onChange={onChange}
							/>
						</div>

						<div className="form-group">
							<label htmlFor="exampleInputPassword1">Confirm Password</label>
							<input
								value={password2}
								type="password"
								className="form-control"
								placeholder="Confirm Password"
								name="password2"
								onChange={onChange}
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
export default Signup;
