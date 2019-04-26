import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import {AuthForm, Input} from '../styledComps';

const LoginForm = (props) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	return(
		<>
			<h1>Login</h1>
			<AuthForm onSubmit = {e => e.preventDefault()}>
				<Input value = {username} type = 'text' placeholder='username' onChange = {e => setUsername(e.target.value)}/>
				<Input value = {password} type = 'password' placeholder='password' onChange = {e => setPassword(e.target.value)}/>
				<Input bgColor = '#EB5757' type = 'submit' value = 'Login' onClick = {() => handleLogin(username, password)}/>
				<Link to = '/register' style = {{color: 'white', 
												fontSize: '.9em', 
												textDecoration: 'none',
												width: 'fitContent',
    											alignSelf: 'flex-end'}}>SignUp</Link>
			</AuthForm>
		</>
	)

	async function handleLogin(username, password) {
		// TODO: axios.post() to login route here
		const url = process.env.REACT_APP_BASEURL || 'http://localhost:5000/';
		if(username.length === 0 || password.length === 0){
			alert('Please provide username and password');
			return;
		}
		
		try {
			const response = await axios.post(`${url}/login`, {
				username,
				password
			});

			localStorage.setItem('authToken', response.data);
		} catch (error) {
			alert(error);
		}
	}
}

export default LoginForm;