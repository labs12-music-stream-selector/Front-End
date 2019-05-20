import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Track from '../Track/Track.js';

const DisplayPlaylist = (props) => {

  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetchTracks();
  }, [])

  return (
    <DisplayPlaylistContainer>
      <h2>Playlist</h2>
      <button onClick={()=>{addCurrentTrack(props.playlistId, props.currentTrack.video_id)}}>add currentTrack</button>
      <ul>
        {tracks.map(track => {
          return (
            <li key={track.video_id}>
              <Track
                inPlaylist={props.playlistId}
                track={track}
                allTracks={props.allTracks}
                trackThumbnailURLs={props.trackThumbnailURLs}
                updateCurrentVideo={props.updateCurrentVideo}
                updateAutoPlay={props.updateAutoPlay}
                fetchTracks={fetchTracks}
              />
            </li>
          )
        })}
      </ul>
    </DisplayPlaylistContainer>
  )

    function addCurrentTrack(playlistId, song_id){
        axios.post(`https://fantabulous-music-finder.herokuapp.com/api/user/playlists/${playlistId}/song`,{song_id}).then(res => {
            console.log('added successfully')
            fetchTracks();
        }).catch(err => console.log(err))
    }

    function fetchTracks(){
      axios.get(`https://fantabulous-music-finder.herokuapp.com/api/user/playlists/${props.playlistId}/songs`).then(res => {
        const newTracksArray = res.data.map(track => {
          let newTrack = {...track, video_id: track.song_id};
          return newTrack
        })
        setTracks(newTracksArray)
      }).catch(err => console.log(err))
    }
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
