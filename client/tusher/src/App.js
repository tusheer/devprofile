import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import Wellcome from './Component/wellcome';
import Devprofile from './Component/devprofile';
import Personal from './Component/personal';
function App() {
	return (
		<div>
			<Wellcome />
			<Devprofile />
			<Personal />
		</div>
	);
}

export default App;
