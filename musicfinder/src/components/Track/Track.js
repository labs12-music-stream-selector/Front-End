import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import axios from "axios";

/**
 *  can accept a inPlaylist prop to along with allTracks prop to modify behavior
 */
const Track = props => {
  const [thumbnailURL, setThumbnailURL] = useState("");

  useEffect(() => {
    if (props.trackThumbnailURLs[props.track.video_id]) {
      setThumbnailURL(props.trackThumbnailURLs[props.track.video_id]);
    } else {
      getSnippet(props.track.video_id);
    }
  }, [props.track]);

  return (
    <TrackContainer inPlaylist={props.inPlaylist}>
      <div>
        {props.inPlaylist ? (
          <Thumbnail
            inPlaylist
            onClick={() => {
              props.updateCurrentVideo(props.track);
              props.updateAutoPlay("&autoplay=1");
            }}
            key={props.track.url + props.index}
            src={thumbnailURL}
          />
        ) : (
          <Thumbnail
            onClick={() => {
              props.updateCurrentVideo(props.track);
              props.updateAutoPlay("&autoplay=1");
            }}
            key={props.track.url + props.index}
            src={thumbnailURL}
          />
        )}
        {props.inPlaylist ? null : <h3>{props.track.video_title}</h3>}
        {props.inPlaylist ? null : <p>Mood: {props.track.moods}</p>}
        {props.inPlaylist ? (
          <DeleteBtn
            title="remove from playlist"
            onClick={() => deleteTrack(props.inPlaylist, props.track.id)}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 9L15 15"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 9L9 15"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </DeleteBtn>
        ) : null}
      </div>
    </TrackContainer>
  );
  function getSnippet(id) {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails&id=${id}&key=${
          process.env.REACT_APP_YTKey
        }`
      )
      .then(res => {
        // console.log("getSnippet running", res.data);
        const newThumbnail =
          res.data.items[0].snippet.thumbnails[
            Object.keys(res.data.items[0].snippet.thumbnails)[2]
          ].url;
        setThumbnailURL(newThumbnail);
        const newTrackThumbnailURLs = props.trackThumbnailURLs;
        newTrackThumbnailURLs[props.track.video_id] = newThumbnail;
        props.updateTrackThumbnailURLs(newTrackThumbnailURLs);
      })
      .catch(err => {
        console.log("error: ", err);
      });
  }
  function returnSearchResult() {
    const title = props.allTracks.filter(track => {
      return track.video_id === props.track.video_id;
    });
    if (title.length > 0) {
      // getSnippet(title[0].video_id); //TODO Uncomment this before Submitting PR
      return title[0].video_title;
    }
  }

  function deleteTrack(playlistId, id) {
    axios
      .delete(
        `https://fantabulous-music-finder.herokuapp.com/api/user/playlists/${playlistId}/song/${id}`
      )
      .then(res => {
        props.fetchTracks();
      })
      .catch(err => console.log(err));
  }
};

export default Track;

const Thumbnail = styled.img`
  width: 300px;
  // background-color: red;
  border-radius: 5px 5px 0px 0px;
  ${props =>
    props.inPlaylist &&
    css`
      width: 85%;
    `}
  :hover {
    cursor: pointer;
  }
`;

const DeleteBtn = styled.button`
  background: none;
  border: none;
  svg {
    path {
      stroke: white;
    }
    :hover {
      cursor: pointer;
      fill: white;
      path {
        stroke: red;
      }
    }
  }
  outline: none;
`;

const TrackContainer = styled.div`
  max-width: min-content;
  background-color: #323232;
  border-radius: 5px;
  padding: 0px 0px 10px 0px;
  margin: 20px;
  box-shadow: 0px 2px 4px black;
  position: relative;
  h3 {
    color: #efefef;
    margin: 10px;
    padding-bottom: 20px;
  }
  p {
    position: absolute;
    bottom: 10px;
    color: #efefefef;
    margin: 0px 10px;
  }
  ${props =>
    props.inPlaylist &&
    css`
      div {
        display: flex;
        align-items: center;
      }
      margin: 10px 5px;
      max-width: max-content;
      width: 250px;
      padding: 0;
      h3 {
        font-size: 15px;
      }
    `}
`;
