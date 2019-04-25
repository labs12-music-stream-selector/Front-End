import React from 'react';
import axios from 'axios';
const baseUrl = process.env.REACT_APP_FE_URL || "https://fantabulous-music-finder.herokuapp.com";
class Register extends React.Component {
  constructor() {
      super();
      this.state = {
          username: '',
          password: '',
          confirmPassword: '',
          email: '',
      };
  }
  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  };
  handleSubmit = e => {
    if (this.state.confirmPassword === this.state.password){
       axios
        .post(`${baseUrl}/api/register`, this.state)
        .then(res => { 
          console.log(res);
          this.props.history.push(`api/login`);
       })
       .catch(err => console.log(err),
       )
    } else {
        console.log("Password doesn't match")
    }
 }
  render(){
    return(
      <div className ='login-box'>
          <form  className ='login-form' onSubmit={this.handleSubmit}>
          <div className='input-form' >
              <input 
                  className ='input-form'
                  type="text"
                  placeholder="username"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInput}
              />
              <input 
                  className ='input-form'
                  type="text"
                  placeholder="email"
                  name="username"
                  value={this.state.email}
                  onChange={this.handleInput}
              />
              <input
                  className ='input-form'
                  type= 'password'
                  placeholder= 'Password'
                  name='password'
                  value={this.state.password}
                  onChange={this.handleInput} 
              />
            <input
                  className ='input-form'
                  type= 'password'
                  placeholder= 'Confirm Password'
                  name='confirmPassword'
                  value={this.state.confirmPassword}
                  onChange={this.handleInput} 
              /> 
              
              <button  onClick={this.handleSubmit}> Register</button>  
              </div>  
          </form>
      </div>
    );
  }
}  
export default Register;

