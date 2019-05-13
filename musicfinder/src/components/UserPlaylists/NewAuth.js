import React, { Component } from "react";
import GoogleButton from "../../imgs/googleButtons/smallGoogleButtons/btn_google_signin_light_normal_web.png";

export default class NewAuth extends Component {
  state = {
    userPlaylists: [],
    GoogleAuth: {}
  };

  componentDidMount() {
    this.loadClient();
  }

  componentDidUpdate() {
    console.log(this.state);
    this.signIn();
  }

  loadClient = () => {
    window.gapi.load("client:auth2", () => {});
  };

  // This initializes permissions and libraries we need
  // to load a user in. This also initializes the libraries we can use
  // to interact with a user's Youtube Channel.
  initClient = () => {
    window.gapi.client
      .init({
        apiKey: "AIzaSyAH1-rFnzv6nhFdVyw7SwTlSvuOi-ZpxYQ",
        clientId:
          "1023911349266-uh3fvbbt7d652443db15q3f477v3oa9v.apps.googleusercontent.com",
        scope: "https://www.googleapis.com/auth/youtube.force-ssl",
        discoveryDocs: [
          "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"
        ]
      })
      .then(() => {
        console.log(".gapi.client.init.then running");
        this.setState({
          GoogleAuth: window.gapi.auth2.getAuthInstance()
        });
        // GoogleAuth = window.gapi.auth2.getAuthInstance();
      })
      .catch(err => console.log(err));
    console.log();
  };

  signIn = () => {
    // After initialization succeeds, then we ask the user for permission.
    // On permission success, the library sends the access token
    // so that we can get a user's playlists.
    this.state.GoogleAuth.signIn()
      .then(
        res => {
          console.log(window.gapi.auth2.getAuthInstance());
          console.log(res);
          this.props.responseGoogle(res);
        },
        err => {
          console.log(err);
        }
      )
      .catch(err => {
        console.log(err);
      });
  };

  request = () => {
    console.log("request() running");
    window.gapi.client
      .request({
        path: "/youtube/v3/playlists",
        method: "GET",
        params: {
          part: "contentDetails, id, snippet, status",
          mine: true,
          maxResults: 25
        }
      })
      .execute(res => {
        const { items } = res;
        this.setState({ userPlaylists: items });
        console.log(items);
        console.log(res);
        console.log(this.state);
      });
  };

  render() {
    return (
      <div>
        <button>
          <img
            src={GoogleButton}
            alt="Google Sign in"
            onClick={this.initClient}
          />
        </button>
      </div>
    );
  }
}
