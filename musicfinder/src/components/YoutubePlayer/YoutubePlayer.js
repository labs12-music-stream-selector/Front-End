import React, { useState } from 'react';
import YouTube from 'react-youtube';

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
<<<<<<< HEAD
      <iframe width="400" height="300" src={`https://www.youtube.com/embed/${urlConstructor(url, playlist)}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
=======
      <iframe width="400" height="300" src={`https://www.youtube.com/embed/${urlConstructor(props.url, props.playlist)}`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
>>>>>>> c5dfacecda5d522e8428c0d36600cc09d726a963
    </>
  )
}

export default YoutubePlayer;