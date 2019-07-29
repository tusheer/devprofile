import React, { useContext, useState, useEffect } from 'react';
import authContext from '../contex/auth/authContext';

const Signup = (props) => {
	const context = useContext(authContext);
	const { register, isAuthenticated } = context;
	const [ form, setFrom ] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push('/');
		}
	});

	const onChange = (e) => setFrom({ ...form, [e.target.name]: e.target.value });
	const onSubmit = (e) => {
		e.preventDefault();

		register(form);
	};
	const { name, email, password, password2 } = form;

	return (
		<div className="signup padding_top">
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
