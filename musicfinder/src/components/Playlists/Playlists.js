import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import UserPlaylists from '../UserPlaylists/GetUserPlaylists.js';

const Playlists = (props) => {
  const [playlists, setPlaylists] = useState([{ "id": 1, "name": "new playlist 1", "user_id": 1 }, { "id": 2, "name": "new playlist 2", "user_id": 1 }])
  const [thumbnailURL, setThumbnailURL] = useState('');
  // useEffect(() => {
  //   setThumbnailURL(getPlaylist(props.playlist.name))
  // }, [])

  return (
    <div>
      {playlists.map((playlist) => {
        return (
          <div onClick={() => { props.updateCurrentPlaylist(playlist.name) }} key={playlist.id}>
            <img src={getPlaylistImg(playlist.song_id)}></img>
            <h3>{playlist.name}</h3>
          </div>
        )
      })}
    </div>
  )
  function getPlaylist() {
    axios.get(`https://fantabulous-music-finder.herokuapp.com/api/user/playlists/${props.userId}/playlists`)
      .then(res => {
        const newPlaylists = res.data.map(playlist => {
          axios.get(`https://fantabulous-music-finder.herokuapp.com/api/user/playlists/${playlist.id}/songs`)
            // returns [ { "id": 25, "song_id": 7, "playlist_index": null }, { "id": 26, "song_id": 7, "playlist_index": null } ]
            .then(res => {
              return res.data[0].song_id
            })
        })
      })
  }
  function getPlaylistImg(id) {
    axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails&id=${id}&key=${process.env.REACT_APP_YTKey}`)
      .then(res => {
        setThumbnailURL(res.data.items[0].snippet.thumbnails[Object.keys(res.data.items[0].snippet.thumbnails)[2]].url);
      }).catch(err => { console.log("error: ", err) })

  }


  const results = [{ "id": 1, "name": "new playlist 1", "user_id": 1 }, { "id": 2, "name": "new playlist 2", "user_id": 1 }];
  return results;
}

export default Playlists;
