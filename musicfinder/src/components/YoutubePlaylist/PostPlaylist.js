import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class PostPlaylist extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.loadClient();
  }

  loadClient = () => {
    window.gapi.load("client:auth2", () => {
      this.initClient();
    });
  };

  initClient = () => {
    window.gapi.client.init({
      apiKey: "AIzaSyAH1-rFnzv6nhFdVyw7SwTlSvuOi-ZpxYQ",
      clientId:
        "1023911349266-uh3fvbbt7d652443db15q3f477v3oa9v.apps.googleusercontent.com",
      scope: "https://www.googleapis.com/auth/youtube.force-ssl",
      discoveryDocs: [
        "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"
      ]
    })
      .then(res => {
        console.log(window.gapi.client);
      })
  }

  request = () => {
    window.gapi.client.request({
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
    window.gapi.client.youtube.playlists.list({
      part: "snippet, contentDetails",
      maxResults: 25,
      mine: true
    })
      .then(
        function (response) {
          // Handle results here (response.result)
          console.log("Response: ", response.result);
        },
        function (err) {
          console.error("Error: ", err);
        }
      )
  }
  // 'https://www.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=25&key=AIzaSyBePzOXc7R0cxD2JuDaQ4I-eaGh41d3cJs`',

  render() {
    return (
      <div>

      </div>
    );
  }
}