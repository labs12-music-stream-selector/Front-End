import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';
export default class OAuthGoogle extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
  async function handleLogin(type, userdata) {
    const url = process.env.REACT_APP_FE_URL || "https://fantabulous-music-finder.herokuapp.com";
    
    return new Promise((resolve, reject) =>{
        axios.post(`${url}/api/login`, {
            body: JSON.stringify(userData)
        })
        .then((response) => response.json())
        .then((res) => {
            resolve(res);
        })
        .catch((error) => {
           reject(error);
        });
        
        });
        }
}
