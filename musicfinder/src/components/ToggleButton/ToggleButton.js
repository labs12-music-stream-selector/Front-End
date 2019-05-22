import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ToggleButton = props => {
  console.log(props);
  return (

      <ToggleContainer>
        <ShowSongsButton onClick={() => {props.updateShowPlaylists(false)}}>Show Songs</ShowSongsButton>
        <ShowPlaylistsButton onClick={() => {props.updateShowPlaylists(true)}}>Show Playlists</ShowPlaylistsButton>
        <AddPlaylistContainer>
          <AddPlaylistButton>Add Playlist</AddPlaylistButton>
        </AddPlaylistContainer>
      </ToggleContainer>


  );
};

const ToggleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const ShowSongsButton = styled.button`
  padding: 20px;
  border-radius: 40px 40px 0px 0px;
  width: 50%;
  border: none;
  // change with function
  background-color: #272727;
  box-shadow: 0px -8px 10px black;
  color: ivory;
  `;


const ShowPlaylistsButton = styled.button`

  padding: 20px;
  border-radius: 40px 40px 0px 0px;
  border: none;
  width:49%;
  // change with function
  background-color: #373737;
  color: #dcdcdc;
  box-shadow: inset 0px -2px 4px rgba(0,0,0,1), inset 0px -4px 4px rgba(0,0,0,.5), 0px -2px 4px black;
`;

const AddPlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddPlaylistButton = styled.button`
  display: flex;
`;

export default ToggleButton;
