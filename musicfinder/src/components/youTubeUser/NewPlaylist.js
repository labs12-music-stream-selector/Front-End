import React, { Component } from "react";
import axios from "axios";

export default class NewPlaylist extends Component {
  componentDidMount = () => {
    axios.create({
      headers: {
        Authorization: `Bearer ya29.GlwCB9AkYBkW3pDMFIeA8owhWa2Dkvm5A1rV9cM_hlYAL…XjzVmjVASchh8zghURj5spNsMQSTZTqEaQRaf_3ghMv_oYHVA`,
        Accept: "application/json",
        "Access-Control-Allow-Origin": "https://musimood.netlify.com"
      }
    });
    axios
      .get(
        "https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.channels.list?part=id&forUsername=jbernalwrc"
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
