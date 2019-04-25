import React, {useState} from 'react';
import {Link} from 'react-router-dom';

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

	function handleLogin(username, password) {
		// TODO: axios.post() to login route here
		console.log(username, password)		
	}
}

export default LoginForm;