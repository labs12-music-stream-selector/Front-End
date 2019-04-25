import React, {useState} from 'react';

const LoginForm = (props) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	return(
		<>
			<h1>Login</h1>
			<form onSubmit = {e => e.preventDefault()}>
				<input value = {username} type = 'text' placeholder='username' onChange = {e => setUsername(e.target.value)}/>
				<input value = {password} type = 'password' placeholder='password' onChange = {e => setPassword(e.target.value)}/>
				<input type = 'submit' value = 'Login' onClick = {() => handleLogin(username, password)}/>
			</form>
		</>
	)

	function handleLogin(username, password) {
		// TODO: axios.post() to login route here
		console.log(username, password)		
	}
}

export default LoginForm;