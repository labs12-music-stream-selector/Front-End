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
      <AddBtn title='add current track to playlist' onClick={()=>{addCurrentTrack(props.playlistId, props.currentTrack.video_id)}}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 8V16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 12H16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </AddBtn>
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
      }).catch(err => {
        console.log(err)
        setTracks([])
      })
    }
}

export default DisplayPlaylist;

const Thumbnail = styled.img`
	width: 100px;
`;

const AddBtn = styled.button`
  background: none;
  border: none;
  svg{
    path{
      stroke: white;
    }
    :hover{
      cursor: pointer;
    }
  }
  outline: none;  
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
    width: min-content;
    min-width: 310px;
    list-style: none;
    padding: 0;
    margin: 0;
    height: 86%;
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
