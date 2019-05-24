import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import GetUserPlaylists from "../UserPlaylists/GetUserPlaylists.js";

class OAuthGoogle extends Component {
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
        token: res.Zi.access_token,
        provider_pic: res.w3.Paa
      };
    }
    if (postData) {
      PostData(postData).then(result => {
        sessionStorage.setItem(
          "token",
          result.data.token,
          "id",
          result.data.id
        );
        this.setState({ redirect: true });
        this.props.history.push("/home");
      });
    } else {
    }
  };
  render() {
    const responseGoogle = response => {
      this.signup(response, "google");
    };
    // Md's Client ID from Google
    // "557783495237-jqq3d269c5ee4uvbg0bv74rs1sb91g90.apps.googleusercontent.com"
    // const CLIENTID_MD =
    //   "557783495237-jqq3d269c5ee4uvbg0bv74rs1sb91g90.apps.googleusercontent.com";

    // Logan's Client ID from Google
    // "1023911349266-uh3fvbbt7d652443db15q3f477v3oa9v.apps.googleusercontent.com"
    // const CLIENTID_LOGAN =
    //   "1023911349266-uh3fvbbt7d652443db15q3f477v3oa9v.apps.googleusercontent.com";

    const CLIENTID_JON =
      "609694193472-8raeak24684f9qq5jr8qthaerev50jht.apps.googleusercontent.com";

    function keyChanger() {
      if (process.env.NODE_ENV !== "") {
        return (
          <GoogleLogin
            clientId={CLIENTID_JON}
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
        );
      } else {
        return <GetUserPlaylists responseGoogle={responseGoogle} />;
      }
    }
    return <Router>{keyChanger()}</Router>;
  }
}
export default withRouter(OAuthGoogle);

export function PostData(userData) {
  // const url = "http://localhost:5000/api/register/oauth"

  const url =
    "https://fantabulous-music-finder.herokuapp.com/api/register/oauth";
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
    } catch (err) {
      console.log({ Mesage: { err } });
    }
  });
}
