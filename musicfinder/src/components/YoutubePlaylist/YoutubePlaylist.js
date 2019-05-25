import React, { useState } from "react";
import YoutubePlayer from "../YoutubePlayer/YoutubePlayer.js";
import axios from "axios";
const KEY =
  "557783495237-jqq3d269c5ee4uvbg0bv74rs1sb91g90.apps.googleusercontent.com";
console.log(key);

axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});

const YoutubePlaylist = props => {
  return <>{/* <YoutubePlayer url={url} playlist={playlist} /> */}</>;
};

export default YoutubePlaylist;
