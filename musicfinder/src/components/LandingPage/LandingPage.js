import React from 'react';
import Login from '../LoginForm/OAuthGoogle.js'
const LandingPage = (props) => {
	return (
		<>
			<h1>MoodiBeats</h1>
			<div>
				<h2>Find copyright free music by mood.</h2>
			</div>
			<Login />
		</>
	)
}

export default LandingPage;