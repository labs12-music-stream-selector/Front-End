import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const AddPlaylist = props => {
  const [inputData, updateInputData] = useState("");
  return (
    <CreatePlaylistForm onSubmit={createPlaylistHandler}>
      <CreatePlaylistInput
        onChange={e => updateInputData(e.target.value)}
        value={inputData}
        type="text"
        placeholder="New Playlist Name"
      />
      <CreatePlaylistBtn>Create</CreatePlaylistBtn>
    </CreatePlaylistForm>
  );

  function createPlaylistHandler(e) {
    e.preventDefault();
    const config = {
      body: {
        name: `${inputData}`,
        user_id: `${localStorage.getItem("id")}`
      },
      headers: {
        Authorization: `${localStorage.getItem("token")}`
      }
    };

    axios
      .post(
        "https://fantabulous-music-finder.herokuapp.com/api/user/playlists"
        // "http://localhost:5000/api/user/playlists",
        // config
      )
      .then(res => {
        console.log(res.data);
        props.updatePlaylists(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};

export default AddPlaylist;

const CreatePlaylistForm = styled.form`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
`;

const CreatePlaylistInput = styled.input`
  border: none;
  padding: 10px;
  border-radius: 5px 0 0 5px;
`;

const CreatePlaylistBtn = styled.button`
  display: block;
  background-color: #009fb7;
  color: ivory;
  font-size: 16px;
  border: none;
  border-radius: 0 5px 5px 0;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
`;
