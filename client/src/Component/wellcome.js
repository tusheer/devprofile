import React, { useContext, Component } from 'react';
import { Link } from 'react-router-dom';
import authContext from '../contex/auth/authContext';

const Wellcome = () => {
	const context = useContext(authContext);
	const { isAuthenticated, userLoder, token } = context;

	return (
		<div className="wellcome padding_top">
			<div className="head">
				<h1>
					<span>Developar</span> Connection
				</h1>
				<p>Here is some great developar. You can see them profile and show your profile also</p>
			</div>
			<LoginLogout loder={userLoder} isAuth={isAuthenticated} token={token} />
		</div>
	);
};

class LoginLogout extends Component {
	state = {
		isAuth: false,
	};
	componentWillMount() {
		if (this.props.token) {
			this.props.loder();
		}
	}
	render() {
		return (
			!this.props.isAuth && (
				<div>
					<div className="button">
						<Link to="signup">
							<button>Sing up</button>
						</Link>
						<Link to="login">
							<button>Log in</button>
						</Link>
					</div>
				</div>
			)
		);
	}
}

export default Wellcome;
