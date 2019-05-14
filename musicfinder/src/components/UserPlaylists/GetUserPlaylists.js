import React, { Component } from "react";

export default class GetUserPlaylists extends Component {
  state = {
    playlists: []
  };

  request = () => {
    window.gapi.client.youtube.playlists
      .list({
        part: "contentDetails, id, snippet, status, player",
        mine: true,
        maxResults: 50
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return <div />;
  }
}
