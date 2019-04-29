import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import OAuthGoogle from './OAuthGoogle.js'
// import { AuthForm, Input } from '../styledComps';

const YoutubePlayer = (props) => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  let url = ['https://www.youtube.com/embed/DHNZeIy4kjs', 'https://www.youtube.com/embed/MkNeIUgNPQ8'];
  // let url = "https://www.youtube.com/embed/listType=playlist&list=PLC77007E23FF423C6";

  return (
    <>
      <h1>Player</h1>
      <iframe width="200" height="200" src={url[0]} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </>
  )
}

export default YoutubePlayer;