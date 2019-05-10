import React, { Component } from "react";
import { GoogleAuth, isAuthorized, currentApiRequest } from "./global.js";

export default class GetUserPlaylists extends Component {
  componentDidMount() {
    this.loadClient();
  }

  loadClient = () => {
    window.gapi.load("client:auth2", () => {
      this.initClient();
    });
  };

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
      .then(GoogleAuth => {
        GoogleAuth = window.gapi.auth2.getAuthInstance();

        GoogleAuth.isSignedIn.listen(this.updateSigninStatus);
      });
  };

  updateSigninStatus = isSignedIn => {
    if (isSignedIn) {
      isAuthorized = true;
      this.sendAuthorizedApiRequest();
    } else {
      isAuthorized = false;
    }
  };

  sendAuthorizedApiRequest() {
    if (isAuthorized) {
      this.request();
    } else {
      GoogleAuth.signIn();
    }
  }

  request = () => {
    window.gapi.client
      .request({
        path: "/youtube/v3/playlists",
        method: "GET",
        params: {
          part: "contentDetails, id, snippet, status",
          mine: true
        }
      })
      .execute(res => {
        console.log(res);
      });
  };

  getPlaylists = () => {
    window.gapi.client.youtube.playlists
      .list({
        part: "snippet,contentDetails",
        maxResults: 25,
        mine: true
      })
      .then(
        function(response) {
          // Handle the results here (response.result has the parsed body).
          console.log("Response", response.result);
        },
        function(err) {
          console.error("Execute error", err);
        }
      );
  };

  render() {
    return <div />;
  }
}
