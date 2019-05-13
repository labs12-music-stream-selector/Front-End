import React, { Component } from "react";

export default class GetUserPlaylists extends Component {
  state = {
    userPlaylists: []
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  loadClient = GoogleAuth => {
    window.gapi.load("client:auth2", () => {
      this.initClient(GoogleAuth);
    });
  };

  // This initializes permissions and libraries we need
  // to load a user in. This also initializes the libraries we can use
  // to interact with a user's Youtube Channel.
  initClient = GoogleAuth => {
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
        GoogleAuth = window.gapi.auth2.getAuthInstance();

        // After initialization succeeds, then we ask the user for permission.
        // On permission success, the library sends the access token
        // so that we can get a user's playlists.
        GoogleAuth.signIn().then(
          res => {
            console.log(window.gapi.auth2.getAuthInstance());
            console.log(res);
            this.request();
          },
          err => {
            console.log(err);
          }
        );
      })
      .catch(err => console.log(err));
  };

  // updateSigninStatus = isSignedIn => {
  //   if (isSignedIn) {
  //     isAuthorized = true;
  //     this.sendAuthorizedApiRequest();
  //   } else {
  //     isAuthorized = false;
  //   }
  // };

  // sendAuthorizedApiRequest() {
  //   if (isAuthorized) {
  //     this.request();
  //   } else {
  //     //GoogleAuth.signIn();
  //   }
  // }

  request = () => {
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
    let GoogleAuth;
    return (
      <div>
        <input
          type="image"
          src="../../../googleButtons/googleButtons/btn_google_signin_light_normal_web@2x.png"
          alt="Google Sign in Button"
          onClick={this.loadClient(GoogleAuth)}
        />
      </div>
    );
  }
}
