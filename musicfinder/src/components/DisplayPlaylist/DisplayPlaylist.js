import React from 'react';
import styled from 'styled-components';

const DisplayPlaylist = (props) => {
  return (
    <DisplayPlaylistContainer>
      <ul>
        {props.tracks.map(track => {
          return (
            <li>
              <Thumbnail key={props.track.url + props.index} src={thumbnailURL} />
              <h3>{props.track.track_title}</h3>
              <p>Mood: {props.track.mood}</p>
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

`;