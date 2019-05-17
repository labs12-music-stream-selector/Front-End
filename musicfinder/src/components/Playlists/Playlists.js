import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

import UserPlaylists from '../UserPlaylists/GetUserPlaylists.js';

const Playlists = (props) => {
  const [playlists, setPlaylists] = useState([{id: 1, name: 'Usher' }, {id: 2, name: 'Davina' }, {id: 3, name: 'Darryl' }])

  // useEffect(() => {
  //   setThumbnailURL(getPlaylist(props.playlist.name))
  // }, [])

  return(
    <div>
      {playlists.map((playlist) => {
        return(
          <div onClick={() => { props.updateCurrentPlaylist(playlist.name)}}>
            <h3>{playlist.name}</h3>
          </div>
        )
      })}
    </div>
  )
  function getPlaylist() {
    axios
    .get('https://fantabulous-music-finder.herokuapp.com/api/user/playlists')
    //.get(`https://fantabulous-music-finder.herokuapp.com/api/user/playlists/${id}`)

  }

}

export default Playlists;
