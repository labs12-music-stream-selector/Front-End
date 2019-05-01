import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

export default class OAuthGoogle extends Component {
    constructor(props){
        super(props);
            this.state = {
                redirect :false,
            };
    }

    signup = (res, type)=> {
        let postData;

        if (type === 'google' && res.w3.U3) {
            postData = {
                name: res.w3.ig,
                provider: type,
                email: res.w3.U3,
                provider_id: res.El,
                token: res.Zi.access_token,
                provider_pic: res.w3.Paa
              };
        }
        if (postData) {
            PostData(postData).then((result) => {
            let responseJson = result;
            sessionStorage.setItem("userData", JSON.stringify(responseJson));
            this.setState({redirect: true});
            });
            } else {}
    }
    render() {
        if (this.state.redirect || sessionStorage.getItem('userData')) {
            console.log("I am passes");
            return (<Redirect to={'/'}/>)
            
        }
        const responseGoogle = (response) => {
		this.signup(response, 'google');
	}
    return (
      <div>   
          <GoogleLogin
					clientId="557783495237-jqq3d269c5ee4uvbg0bv74rs1sb91g90.apps.googleusercontent.com"
					buttonText="Login with Google"
					onSuccess={responseGoogle}
					onFailure={responseGoogle}/>
      </div>
    )
 }
}

export function PostData(userData){
    const url = process.env.REACT_APP_BE_URL || "https://fantabulous-music-finder.herokuapp.com/api/register/oauth";
    return new Promise((resolve, reject) =>{
        try{
            console.log(userData);
            const response = axios.post(`${url}` , {
                 name: userData.name,
                 email: userData.email,
                 token: userData.token })
            
                .then((response) => console.log("success") ||console.log(response) )
                .then((res) => {  resolve(res);}) 
                .catch((error) => {reject(error);}); 
                alert('successfully logged in');
			    localStorage.setItem('token', response.data.token);         
                
        } catch(err){
            console.log({Mesage: err});
        }
    });
}
