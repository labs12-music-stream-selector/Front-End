import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import GoogleLogin from 'react-google-login';

import {AuthForm, Input} from '../styledComps';

const LoginForm = (props) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const responseGoogle = (response) => {
		console.log("google console");
		console.log(response);
		this.signup(response, 'google');
	}

	return(
		<>
			<h1>Login</h1>
			<AuthForm onSubmit = {e => e.preventDefault()}>
				<Input value = {username} type = 'text' placeholder='username' onChange = {e => setUsername(e.target.value)}/>
				<Input value = {password} type = 'password' placeholder='password' onChange = {e => setPassword(e.target.value)}/>
				<Input bgColor = '#EB5757' type = 'submit' value = 'Login' onClick = {() => handleLogin(username, password)}/>		
			</AuthForm>
			<GoogleLogin
					clientId="Your Google ID"
					buttonText="Login with Google"
					onSuccess={responseGoogle}
					onFailure={responseGoogle}/>
			
			<Link to="/register">Don't have an account? Register Here!</Link>
		</>
	)
	

	async function handleLogin(username, password) {
		const url = process.env.REACT_APP_FE_URL || "https://fantabulous-music-finder.herokuapp.com";

		if(username.length === 0 || password.length === 0){
			alert('Please provide username and password');
			return;
		}
		
		try {
			const response = await axios.post(`${url}/api/login`, {
				username: username,
				password: password
			});
			alert('successfully logged in')
			localStorage.setItem('authToken', response.data.token);
		} catch (error) {
			alert(error);
		}
	}
}

export default LoginForm;