import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import authContext from '../contex/auth/authContext';

const Menu = (props) => {
	const context = useContext(authContext);
	const { isAuthenticated, user, logout } = context;
	const onClick = () => {
		logout();
	};
	return (
		<div className="menu">
			<nav>
				<div className="left_side">
					<p className="brand_name">
						<Link to="/">DevConnection</Link>
					</p>
					<p>
						<Link to="/developars">Developars</Link>
					</p>
				</div>

				{isAuthenticated ? (
					<div className="right_side">
						<p>
							<Link to="/personal">{user && user.name}</Link>
						</p>
						<p>
							<Link to="/dashboard">Dashboard</Link>
						</p>
						<p onClick={onClick}>
							<Link to="/">Logout</Link>
						</p>
					</div>
				) : (
					<div className="right_side">
						<p>
							<Link to="/signup">Sign up</Link>
						</p>
						<p>
							<Link to="/login">Login</Link>
						</p>
					</div>
				)}
			</nav>
		</div>
	);
};
export default Menu;
