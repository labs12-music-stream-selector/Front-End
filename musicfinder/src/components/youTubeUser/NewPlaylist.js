import React, { Component } from "react";
import axios from "axios";

export default class NewPlaylist extends Component {
  componentDidMount = () => {
    const authKey = axios.create({
      headers: {
        Authorization: `Bearer ${localStorage.getItem(token)}`,
        Accept: "application / json"
      }
    });
    axios
      .get(
        "https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.channels.list?part=id&forUsername=GoogleDevelopers"
      )
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
