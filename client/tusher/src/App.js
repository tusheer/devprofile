import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import Wellcome from './Component/wellcome';
import Devprofile from './Component/devprofile';

function App() {
	return (
		<div>
			<Wellcome />
			<Devprofile />
		</div>
	);
}

export default App;
