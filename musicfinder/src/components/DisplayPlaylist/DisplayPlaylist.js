import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Track from '../Track/Track.js';

const DisplayPlaylist = (props) => {

  const [tracks, setTracks] = useState([{
    url: '-QQUaWtMW3w'
  },
  {
    url: 'n9kBbDQr5kM'
  },
  {
    url: 'MghsT0OpDUM'
  }
  ]);

  useEffect(() => {
    // axios.get('url here').then(res => {
    //   setTracks(res.data)
    // }).catch(err => console.log(err))
  }, [])

  return (
    <DisplayPlaylistContainer>
      <h2>Playlist</h2>
      <ul>
        {tracks.map(track => {
          return (
            <li key={track.url}>
              <Track
                inPlaylist
                track={track}
                allTracks={props.allTracks}
                updateCurrentVideo={props.updateCurrentVideo}
                updateAutoPlay={props.updateAutoPlay}
              />
            </li>
          )
        })}
      </ul>
    </DisplayPlaylistContainer>
  )
}

export default DisplayPlaylist;

const Thumbnail = styled.img`
	width: 100px;
`;

const DisplayPlaylistContainer = styled.div`
  margin-left: 5px;
  max-width: 95vw;
  margin: 0 auto;
  h2{
    margin: 0;
    color: #eff1f3;
  }
  ul{
    list-style: none;
    padding: 0;
    margin: 0;
    height: 95%;
    overflow-y: scroll;
    @media(max-width: 700px){
      height: 300px;
      display: flex;
      overflow-x: scroll;
      overflow-y: unset;
      height: max-content;
      width: calc(100% -5px);
    }
  }
`;