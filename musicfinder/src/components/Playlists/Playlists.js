import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import UserPlaylists from "../UserPlaylists/GetUserPlaylists.js";
import defaultImg from "../../imgs/default-song-img.jpg";

const Playlists = props => {
  const [thumbnailURL, updateThumbnailURL] = useState("");

  useEffect(() => {
    getPlaylists();
  }, [props.playlists]);

  if (props.playlists.length > 0) {
    return (
      <PlaylistsContainer>
        {props.playlists.map((playlist, index) => {
          return (
            <PlaylistCard key={`${playlist.name}`}>
              <PlaylistImg
                src={
                  playlist.video_ids.length > 0
                    ? playlist.thumbnail
                    : defaultImg
                }
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
    return <Loading>...loading</Loading>;
  }

  async function getPlaylists() {
    try {
      let vidList = [];
      const config = {
        body: {
          user_id: `${localStorage.getItem("id")}`
        },
        headers: {
          Authorization: `${localStorage.getItem("token")}`
        }
      };
      const songsThumbnails = await axios.get(
        "https://moodibeats-recommender.herokuapp.com/api/new-videos-thumbnails/"
      );

      const playlists = await axios.get(
        `https://fantabulous-music-finder.herokuapp.com/api/user/playlists/${localStorage.getItem("id")}/playlists`,
        config
      );

      const playlistsSongs = playlists.data.map(async playlist => {
        const songList = await axios.get(
          // `http://localhost:5000/api/user/playlists/${playlist.id}/songs` // TODO replace this with production url
          `https://fantabulous-music-finder.herokuapp.com/api/user/playlists/${
            playlist.id
          }/songs`,
          config
        );

        if (songList.data.length > 0) {
          playlist.video_ids = songList.data;
          const songThumbnail = songsThumbnails.data.find(song => {
            return song.video_id === playlist.video_ids[0].song_id;
          });

          playlist.thumbnail = songThumbnail.video_thumbnail;
        } else {
          playlist.video_ids = [];
        }
        return playlist;
      });

      Promise.all(playlistsSongs)
        .then(data => {
          props.updatePlaylists(data);
        })
        .catch(data => {
          console.log("Data: ", data);
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
  flex-wrap: wrap;
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

const Loading = styled.h3`
  text-align: center;
  color: white;
  font-size: 2rem;
  text-shadow: 1px 1px 1px (0, 0, 0, 1);
`;
