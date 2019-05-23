import React from "react";
import styled from "styled-components";

const ToggleButton = props => {
  return (
    <ToggleContainer>
      <ShowSongsButton
        onClick={() => {
          props.updateShowPlaylists(false);
        }}
        showPlaylists={props.showPlaylists}
      >
        Show Songs
      </ShowSongsButton>
      <ShowPlaylistsButton
        onClick={() => {
          props.updateShowPlaylists(true);
        }}
        showPlaylists={props.showPlaylists}
      >
        Show Playlists
      </ShowPlaylistsButton>
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
  // border-radius: 40px 40px 0px 0px;
  width: 50%;
  border: none;

  background-color: ${props => (!props.showPlaylists ? "#272727" : "#373737")};
  color: ${props => (!props.showPlaylists ? "ivory" : "#dcdcdc")};
  box-shadow: ${props =>
    !props.showPlaylists
      ? "0px -4px 2px black, 2px -2px 2px black"
      : "0px -2px 2px black, inset 0px -2px 2px black;"};
  ${props => (!props.showPlaylists ? "z-index: 10" : null)};
  outline: none;
  :hover{
    cursor: pointer;
  }
`;

const ShowPlaylistsButton = styled.button`
  padding: 20px;
  // border-radius: 40px 40px 0px 0px;
  width: 50%;
  border: none;

  background-color: ${props => (props.showPlaylists ? "#272727" : "#373737")};
  color: ${props => (props.showPlaylists ? "ivory" : "#dcdcdc")};
  box-shadow: ${props =>
    props.showPlaylists
      ? "0px -4px 2px black, 2px -2px 2px black"
      : "0px -2px 2px black, inset 0px -2px 2px black;"};
  ${props => (props.showPlaylists ? "z-index: 10" : null)};
  outline: none;
  :hover{
    cursor: pointer;
  }
`;

export default ToggleButton;
