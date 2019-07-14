import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Menu from './Component/menu';
import Wellcome from './Component/wellcome';
import Devprofile from './Component/devprofile';
import Personal from './Component/personal';
import Login from './Component/login';
import Signup from './Component/signup';
import Dashboard from './Component/Dashboard';
import Editprofile from './Component/edit_profile';
function App() {
	return (
		<Router>
			<Menu />
			<Switch>
				<Route exact path="/" component={Wellcome} />
				<Route path="/personal" component={Personal} />
				<Route path="/developars" component={Devprofile} />
				<Route path="/signup" component={Signup} />
				<Route path="/login" component={Login} />
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/editprofile" component={Editprofile} />
			</Switch>
		</Router>
	);
}

export default App;
