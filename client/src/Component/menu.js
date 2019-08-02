import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import authContext from '../contex/auth/authContext';

const Menu = (props) => {
	const context = useContext(authContext);
	const { isAuthenticated, user, logout, url } = context;

	return (
		<div className="menu">
			<MenuWraper isAuthenticated={isAuthenticated} user={user} logout={logout} url={url} />
		</div>
	);
};

const MenuWraper = (props) => {
	const onClick = () => {
		props.logout();
	};
	return (
		<div>
			<div className="menu">
				<nav>
					<div className="left_side">
						<p className="brand_name">
							<Link to="/">DevConnection</Link>
						</p>
						<p className={props.url === '/developars' ? 'black' : null}>
							<Link to="/developars">Developars</Link>
						</p>
					</div>

					{props.isAuthenticated ? (
						<div className="right_side">
							<p className={props.url === '/personal' ? 'black' : null}>
								<Link to="/personal">{props.user && props.user.name}</Link>
							</p>
							<p className={props.url === '/dashboard' ? 'black' : null}>
								<Link to="/feed">Feed</Link>
							</p>
							<p className={props.url === '/dashboard' ? 'black' : null}>
								<Link to="/dashboard">Dashboard</Link>
							</p>
							<p onClick={onClick}>
								<Link to="/">Logout</Link>
							</p>
						</div>
					) : (
						<div className="right_side">
							<p className={props.url === '/signup' ? 'black' : null}>
								<Link to="/signup">Sign up</Link>
							</p>
							<p className={props.url === '/login' ? 'black' : null}>
								<Link to="/login">Login</Link>
							</p>
						</div>
					)}
				</nav>
			</div>
		</div>
	);
};

export default Menu;
