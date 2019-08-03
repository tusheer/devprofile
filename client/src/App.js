import React, { Fragment } from 'react';
// import './App.css';
import './Re.scss';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Menu from './Component/menu';
import Wellcome from './Component/wellcome';
import SingleProfile from './Component/singleprofile';
import Devprofile from './Component/devprofile';
import Personal from './Component/personal';
import Login from './Component/login';
import Signup from './Component/signup';
import Dashboard from './Component/Dashboard';
import Editprofile from './Component/edit_profile';
import Experience from './Component/add_experience';
import Post from './Component/post';
import Education from './Component/education';

import AuthState from './contex/auth/authState';

function App() {
	return (
		<AuthState>
			<Router>
				<Fragment>
					<Menu />
					<Switch>
						<Route exact path="/" component={Wellcome} />
						<Route path="/personal" component={Personal} />
						<Route path="/developars" component={Devprofile} />
						<Route path="/feed" component={Post} />
						<Route path="/signup" component={Signup} />
						<Route path="/login" component={Login} />
						<Route path="/dashboard" component={Dashboard} />
						<Route path="/editprofile" component={Editprofile} />
						<Route path="/editexperience" component={Experience} />
						<Route path="/editeducation" component={Education} />
						<Route path="/profile/:id" component={SingleProfile} />
					</Switch>
				</Fragment>
			</Router>
		</AuthState>
	);
}

export default App;
