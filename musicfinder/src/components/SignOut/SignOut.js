import React, { Component } from 'react'
import {Redirect, withRouter} from 'react-router-dom';

class SignOut extends Component {
  signMeOut = () =>{
      if(sessionStorage.getItem('token')){
        sessionStorage.removeItem('token');
        alert("You successfully Signed Out")
      }
  }
  render() {
    if (!sessionStorage.getItem('token')) {
        alert ("You are not logged in, please log in first! ")
        return  (<Redirect to={'/login'}/>)          
    }
    return (
      <div>
          <button onClick ={this.signMeOut}> SignOut</button>  
      </div>
    )
  }
}

export default withRouter(SignOut);

