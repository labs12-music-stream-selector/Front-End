import React, { useState } from 'react';

const YoutubePlayer = (props) => {

  let url = props.url;
  let playlist = props.playlist;

  function urlConstructor(id, playlist) {
    if (playlist) {
      return `${id}?list=${playlist}`;
    } else {
      return `${id}`
    }
  }

  return (
    <>
      <iframe
        style={{ boxShadow: "0px 4px 8px #272727" }}
        width="400"
        height="300"
        src={`https://www.youtube.com/embed/${urlConstructor(props.url, props.playlist)}`}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
      </iframe>
    </>
  )
}

export default YoutubePlayer;