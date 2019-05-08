import React, { Component } from "react";

export default class NewPlaylist extends Component {
  componentDidMount = () => {
    // let gapi = window.gapi;
    // console.log(gapi);
    // console.log(process.env.API_KEY);
    // gapi.load("client", () => {
    //   gapi.client.setApiKey(process.env.API_KEY);
    //   gapi.client.setClientId(process.env.CLIENT_ID);
    //   gapi.client.setDiscoveryDocs(process.env.DISCOVERY_DOCS);
    //   gapi.client.setScope(process.env.SCOPE);
    //   gapi.client.load("client:auth2", "v3", () => {
    //     console.log("gapi is ready");
    //     this.setState({ gapiReady: true });
    //   });
    // });
    // var user = gapi.auth2.getAuthInstance().currentUser.get();
    // var oauthToken = user.getAuthResponse().access_token;
    // var xhr = new XMLHttpRequest();
    // xhr.open("GET", "https://people.googleapis.com/v1/people/me/connections");
    // xhr.setRequestHeader("Authorization", "Bearer " + oauthToken);
    // xhr.send();
  };

  render() {
    return <div />;
  }
}
