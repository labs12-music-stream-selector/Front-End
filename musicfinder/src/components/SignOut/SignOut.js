import React, { Component } from 'react'
import {Redirect, withRouter} from 'react-router-dom';
import styled from 'styled-components';

class SignOut extends Component {
  signMeOut = () =>{
      if(sessionStorage.getItem('token')){
        sessionStorage.removeItem('token');
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        alert("You successfully Signed Out")
      }
  }
  render() {
    if (!sessionStorage.getItem('token')) {
        alert ("You are not logged in, please log in first! ")
        return  (<Redirect to={'/login'}/>)          
    }
    return (
      <SignBar>
          <button onClick ={this.signMeOut}> SignOut</button>  
      </SignBar>
    )
  }
}

export default withRouter(SignOut);

const SignBar = styled.div`
    button{
      background: #EB5757;
      border-radius: 5px;
      color : white;
      margin: 15px;
      height : 40px;
      font: bold;
      width : 90px;
    }
    button:hover{
      background: black;
      cursor : pointer;
      font-size: 17px;
    }
`
