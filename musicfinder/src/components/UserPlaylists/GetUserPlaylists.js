import React, { Component } from "react";
import PlaylistSelect from "./PlaylistSelect.js";

export default class GetUserPlaylists extends Component {
  state = {
    userPlaylists: [{}]
  };

  componentDidMount() {
    let GoogleAuth;
    this.loadClient(GoogleAuth);
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  loadClient = GoogleAuth => {
    window.gapi.load("client:auth2", () => {
      this.initClient(GoogleAuth);
    });
  };

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
        console.log(GoogleAuth);

        GoogleAuth.signIn().then(
          res => {
            this.setState({ userPlaylists: res.items });
            this.request();
            console.log(res.items);
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
        console.log(res);
        console.log(this.state);
      });
  };

  render() {
    return <div />;
  }
}
