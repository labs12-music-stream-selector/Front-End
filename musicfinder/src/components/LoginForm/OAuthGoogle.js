import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class OAuthGoogle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }
  signup = (res, type) => {
    let postData;
    if (type === "google" && res.w3.U3) {
      postData = {
        name: res.w3.ig,
        provider: type,
        email: res.w3.U3,
        provider_id: res.El,
        token: res.Zi.id_token,
        provider_pic: res.w3.Paa
      };
    }
    if (postData) {
      // console.log(postData);
      PostData(postData).then(result => {
        sessionStorage.setItem(
          "token",
          result.data.token,
          "id",
          result.data.id
        );
        this.setState({ redirect: true });
      });
    } else {
    }
  };
  render() {
    if (this.state.redirect || sessionStorage.getItem("token")) {
      return <Redirect to={"/home"} />;
    }
    const responseGoogle = response => {
      this.signup(response, "google");
    };
    return (
      <div>
        <GoogleLogin
          clientId="1023911349266-1shu9chae4s2otlf4rro221ectmoh8sb.apps.googleusercontent.com"
          scope="https://www.googleapis.com/auth/youtube.force-ssl"
          discoveryDocs="https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </div>
    );
  }
}

export function PostData(userData) {
  const url =
    /*process.env.REACT_APP_BE_URL ||*/ "https://fantabulous-music-finder.herokuapp.com/api/register/oauth";
  return new Promise((resolve, reject) => {
    try {
      axios
        .post(url, {
          name: userData.name,
          email: userData.email,
          token: userData.token
        })
        .then(res => {
          resolve(res);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("id", res.data.id);
        })
        .catch(error => {
          reject(error);
        });
      alert("successfully logged in");
    } catch (err) {
      console.log({ Mesage: { err } });
    }
  });
}
