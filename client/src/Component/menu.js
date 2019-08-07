import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import authContext from '../contex/auth/authContext';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Menubar = (props) => {
	const context = useContext(authContext);
	const { isAuthenticated, user, logout, url } = context;

	return (
		<div>
			<MenuWraper className="menu" isAuthenticated={isAuthenticated} user={user} logout={logout} url={url} />

			{props.children}
		</div>
	);
};

const MenuWraper = (props) => {
	const [ open, setOpen ] = useState(false);

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
						<p className={props.url === '/developers' ? 'black none' : 'none'}>
							<Link className="none" to="/developers">
								Developars
							</Link>
						</p>
					</div>

					{props.isAuthenticated ? (
						<div className="right_side">
							<p className={props.url === '/personal' ? 'black' : null}>
								<Link to="/personal">{props.user && props.user.name}</Link>
							</p>
							<p className={props.url === '/feed' ? 'black dnone' : 'dnone'}>
								<Link to="/feed">Feed</Link>
							</p>
							<p className={props.url === '/dashboard' ? 'black none' : 'none'}>
								<Link className="none" to="/dashboard">
									Dashboard
								</Link>
							</p>
							<p className="none" onClick={onClick}>
								<Link className="none" to="/">
									Logout
								</Link>
							</p>

							<img
								onClick={() => setOpen(!open)}
								className=" dn mr-2"
								src="https://img.icons8.com/android/24/000000/menu.png"
								alt="menu"
							/>
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
			<div>
				<Drawer className="drawer" anchor="right" open={open} onClose={() => setOpen(false)}>
					<div onClick={() => setOpen(false)} onKeyDown={() => setOpen(false)}>
						<List>
							{[
								{ name: 'Developers', link: '/developers' },
								{ name: 'Your Profile', link: 'personal' },
								{ name: 'Dashboard', link: 'dashboard' },
								{ name: 'Feed', link: 'feed' },
							].map((text) => (
								<ListItem button key={text}>
									<ListItemText>
										<Link className="text-dark" to={text.link}>
											{text.name}
										</Link>
									</ListItemText>
								</ListItem>
							))}
							<ListItem className="none" onClick={onClick}>
								<Link className="text-dark" to="/">
									Logout
								</Link>
							</ListItem>
						</List>
					</div>
				</Drawer>
			</div>
		</div>
	);
};

export default Menubar;
