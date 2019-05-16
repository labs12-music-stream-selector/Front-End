import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const YoutubePlayer = (props) => {

  let url = props.url;
  let playlist = props.playlist;

  function urlConstructor(id, playlist) {
    if (playlist) {
      return `${id}?list=${playlist}`;
    } else {
      return `${id}`
      // return `Vrd8uDWRmx0`;
    }
  }
  return (
    <PlayerContainer>
      <div className="player-wrapper">
        <iframe
          id="player"
          src={`https://www.youtube.com/embed/${urlConstructor(props.track.url, props.playlist)}?enablejsapi=1${props.autoPlay}`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
      </div>
    </PlayerContainer>
  )
}
const PlayerContainer = styled.div`
  max-width: 800px;
  width: 100%;
  margin-top: 11px;
  margin-left: auto;
  margin-right: auto;
  z-index: 0;
  @media (max-width: 800px){
    margin-left: 0;
    margin-right: 0;
  }
  .player-wrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;
    #player {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0px;
    }
  }
    
`;

export default YoutubePlayer;