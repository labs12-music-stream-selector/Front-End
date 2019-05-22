import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import UserPlaylists from "../UserPlaylists/GetUserPlaylists.js";

const Playlists = props => {
  const [playlists, updatePlaylists] = useState([]);
  const [thumbnailURL, updateThumbnailURL] = useState("");

  useEffect(() => {
    getPlaylists();
  }, []);

  if (playlists.length > 0) {
    return (
      <PlaylistsContainer>
        {playlists.map(playlist => {
          return (
            <PlaylistCard key={`${playlist.name}`}>
              <PlaylistImg
                src={playlist.thumbnail}
                onClick={() => {
                  props.updateCurrentPlaylist(playlist.id);
                }}
              />
              <PlaylistTitle>{playlist.name}</PlaylistTitle>
            </PlaylistCard>
          );
        })}
      </PlaylistsContainer>
    );
  } else {
    return <p>...loading</p>;
  }

  async function getPlaylists() {
    try {
      let vidList = [];
      const songsThumbnails = await axios.get(
        "https://moodibeats-recommender.herokuapp.com/api/new-videos-thumbnails/"
      );

      const playlists = await axios.get(
        // `http://localhost:5000/api/user/playlists/${localStorage.getItem(
        //   "id"
        // )}/playlists` // TODO replace this with production url
        `https://fantabulous-music-finder.herokuapp.com/api/user/playlists/${localStorage.getItem(
          "id"
        )}/playlists`
      );

      const playlistsSongs = playlists.data.map(async playlist => {
        const songList = await axios.get(
          // `http://localhost:5000/api/user/playlists/${playlist.id}/songs` // TODO replace this with production url
          `https://fantabulous-music-finder.herokuapp.com/api/user/playlists/${
            playlist.id
          }/songs`
        );

        playlist.video_ids = songList.data;
        // console.log("playlist: ", playlist.video_ids[0].song_id);
        const songThumbnail = songsThumbnails.data.find(song => {
          // console.log("song.video_id", song.video_id);
          return song.video_id === playlist.video_ids[0].song_id;
        });

        playlist.thumbnail = songThumbnail.video_thumbnail;
        // vidList.push(playlist);
        return playlist;
      });

      Promise.all(playlistsSongs).then(data => {
        console.log("FROM PROMISE.ALL", data);
        updatePlaylists(data);
      });

      // updatePlaylists(vidList);
      return vidList;
    } catch (error) {
      console.error(error);
    }
  }
};

export default Playlists;

const PlaylistsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  box-shadow: 0px -2px 2px black;
  z-index: 5;
`;

const PlaylistCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  background-color: #323232;
  box-shadow: 0px 2px 4px black;
  border-radius: 5px;
`;

const PlaylistImg = styled.img`
  max-width: 300px;
  height: auto;
  width: 100%;
  border-radius: 5px 5px 0px 0px;
  :hover {
    cursor: pointer;
  }
`;

const PlaylistTitle = styled.h3`
  color: #efefef;
  margin: 10px;
  padding-bottom: 20px;
  text-align: center;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
`;
