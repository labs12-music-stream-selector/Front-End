import React, { useState, useEffect } from "react";
import axios from "axios";
import Fuse from "fuse.js";
import styled from "styled-components";
import Playlists from "../Playlists/Playlists.js";

import SearchBar from "../SearchBar/SearchBar.js";
import Select from "../Select/Select.js";
import Track from "../Track/Track.js";
import InfiniteScroll from "react-infinite-scroller";
import { withRouter } from "react-router-dom";
import YoutubePlayer from "../YoutubePlayer/YoutubePlayer.js";
import DisplayPlaylist from "../DisplayPlaylist/DisplayPlaylist.js";
import SelectMoodDropdown from "../SelectMoodDropdown/SelectMoodDropdown.js";
import ToggleButton from "../ToggleButton/ToggleButton.js";
import AddPlaylist from "../Playlists/AddPlaylist.js";

const Browser = props => {
  // All data for tracks
  const [tracksData, updateTracksData] = useState([]);
  // all tracks data after mood filter
  const [allTracksByMood, updateAllTracksByMood] = useState([]);
  // All tracks data to be displayed
  const [tracks, updateTracks] = useState([]);

  const [offset, updateOffset] = useState(0);
  // const [offsetMax, updateOffsetMax] = useState(6);
  // const [relatedTracks, updateRelatedTracks] = useState([]);
  const [tracksByMood, updateTracksByMood] = useState([]);
  const [hasMore, updateHasMore] = useState(true);
  const [searching, updateSearching] = useState(false);
  const [currentVideo, updateCurrentVideo] = useState("MkNeIUgNPQ8");
  const [autoPlay, updateAutoPlay] = useState("");
  //update current playlist to change the content in DisplayPlaylist component
  const [currentPlaylist, updateCurrentPlaylist] = useState();
  const [tracksCurrentPlaylist, updateTracksCurrentPlaylist] = useState([]);

  const [trackThumbnailURLs, updateTrackThumbnailURLs] = useState({});
  //  toggle songs/playlists view
  const [showPlaylists, updateShowPlaylists] = useState(false);
  const [playlists, updatePlaylists] = useState([]);

  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      return props.history.push("/");
    }
    // const url = `https://fantabulous-music-finder.herokuapp.com/api/song-list`;
    const url = `https://moodibeats-recommender.herokuapp.com/api/new-videos/`;
    getTracks(url);
  }, []);

  useEffect(() => {
    // getRelatedTracks(currentVideo.id);
  }, [currentVideo]);

  return (
    <BrowserContainer id="browser-container">
      <SearchBar
        searchTrack={searchTrack}
        selectComp={props => (
          <Select
            getTracks={getTracksByMood}
            options={[
              "sad",
              "happy",
              "confident-sassy",
              "angry",
              "in-love",
              "peaceful"
            ]}
          />
        )}
      />
      <CurrentTrackContainer>
        <YoutubePlayer
          track={currentVideo}
          autoPlay={autoPlay}
          isPlaylistSelected={currentPlaylist}
          tracksList={tracksCurrentPlaylist}
          updateCurrentVideo={updateCurrentVideo}
          playNext={playNext}
        />
        {currentPlaylist && (
          <DisplayPlaylist
            playlistId={currentPlaylist}
            currentTrack={currentVideo}
            updateTracksCurrentPlaylist={updateTracksCurrentPlaylist}
            allTracks={tracksData}
            trackThumbnailURLs={trackThumbnailURLs}
            updateCurrentVideo={updateCurrentVideo}
            updateAutoPlay={updateAutoPlay}
          />
        )}
      </CurrentTrackContainer>
      <PlayerMenu>
        {/* <SelectMoodDropdown
          tracksData={[...tracksData]}
          updateTracks={updateTracks}
          updateAllTracksByMood={updateAllTracksByMood}
          updateSearching={updateSearching}
        /> */}
        {/* <AddPlaylist playlists={playlists} updatePlaylists={updatePlaylists} /> */}
      </PlayerMenu>
      <ToggleButton
        showPlaylists={showPlaylists}
        updateShowPlaylists={updateShowPlaylists}
      />
      {showPlaylists ? (
        <div className='generalContainer'>
        <AddPlaylist playlists={props.playlists} updatePlaylists={props.updatePlaylists} />
        <Playlists
          showPlaylists={showPlaylists}
          playlists={playlists}
          updatePlaylists={updatePlaylists}
          updateCurrentPlaylist={updateCurrentPlaylist}
        />
        </div>
      ) : (
        <InfiniteScroll
          className='generalContainer'
          pageStart={0}
          loadMore={loadNext}
          hasMore={hasMore}
          initialLoad={false}
          loader={
            <Loading className="loader" key={0}>
              Loading ...
            </Loading>
          }
          threshold={150}
        >
          {console.log("-----------------------------------")}
          <SelectMoodDropdown
            tracksData={[...tracksData]}
            updateTracks={updateTracks}
            updateAllTracksByMood={updateAllTracksByMood}
            updateSearching={updateSearching}
          />
          <Container>
            {tracks.map((track, index) => {
              // if(index > 10) {              // TODO remove for production app
              //   return;
              // } else {
              return (
                <Track
                  track={track}
                  index={index}
                  key={index}
                  updateCurrentVideo={updateCurrentVideo}
                  updateAutoPlay={updateAutoPlay}
                  customAxios={cookieMonster}
                  trackThumbnailURLs={trackThumbnailURLs}
                  updateTrackThumbnailURLs={updateTrackThumbnailURLs}
                />
              );
              // }
            })}
          </Container>
        </InfiniteScroll>
      )}
    </BrowserContainer>
  );

  async function getTracks(url) {
    const res = await axios.get(url, {
      headers: { Authorization: localStorage.getItem("token") }
    });
    const data = res.data;
    updateTracksData(data);
    updateTracks(data.slice(0, 6));
  }

  // async function getRelatedTracks(id) {
  //   const url = `https://moody-beats-recommender-api.herokuapp.com/api/${id}/`;
  //   const res = await axios.get(url);
  //   const relatedTracks = [];

  //   Object.keys(res.data).forEach(key => {
  //     if (
  //       !["id", "songs", "mood", "video_id"].includes(key) &&
  //       res.data[key] !== null &&
  //       !key.includes("_link")
  //     ) {
  //       relatedTracks.push({
  //         name: res.data[key],
  //         url: res.data[`${key}_link`]
  //       });
  //     }
  //   });
  //   updateRelatedTracks(relatedTracks);
  // }

  async function getTracksByMood(mood) {
    const url = `https://john-moody-beats-recommender.herokuapp.com/api/${mood}`;
    const res = await axios.get(url);
    updateTracksByMood(res.data);
  }

  async function searchTrack(searchTerm) {
    // the fuzzy search goes here

    if (searchTerm.length === 0) {
      updateSearching(false);
    } else {
      updateSearching(true);
    }
    let options = {
      keys: ["moods", "video_title", "video_id"]
    };
    let fuse = new Fuse(allTracksByMood, options);
    updateTracks(fuse.search(searchTerm));
    console.log(fuse.search(searchTerm));
    updateOffset(0); // TODO: Double Check this worked!!!!!
  }

  function loadNext(page) {
    // TODO: make this better
    if (!searching) {
      if (page * 6 < tracksData.length - 6) {
        // updateOffset(offset + 6);
        updateTracks(tracksData.slice(0, page * 6));
      } else if (tracks.length > 0 && hasMore) {
        updateHasMore(false);
      }
    }
  }

  // function loadPrev() {
  //   if (offset > 5) {
  //     updateOffset(offset - 6);
  //   }
  // }

  function playNext() {
    if (currentPlaylist) {
      const current = tracksCurrentPlaylist.filter(
        track => track.video_id === currentVideo.video_id
      )[0];
      const trackOnQueue = tracksCurrentPlaylist.filter(
        track => track.playlist_index === current.playlist_index + 1
      )[0];
      if (trackOnQueue) {
        updateCurrentVideo(trackOnQueue);
      }
    }
  }

  // Get CSRF token from django cookie
  function cookieMonster() {
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.xsrfHeaderName = "X-CSRFToken";

    let customAxios = axios.create({
      headers: {
        "X-CSRFToken":
          "ICbMi48R3vY05o1jfqzrL65Yk8YeY5ozF4waZIm58t1Iif4nxpFllhX9YxCZaVtz"
      }
    });

    // axios
    //   .get("https://moodibeats-recommender.herokuapp.com/api/new-videos-moods/")
    //   .then(res => {
    //     console.log(res);
    //     console.log(Cookies.get("csrftoken"));
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    return customAxios;
  }
};

export default withRouter(Browser);

const BrowserContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding-top: 10px;
  .generalContainer{
    padding: 5px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  z-index: 5;
  margin: 0px auto;
  padding: 60px;
  @media (max-width: 700px) {
    padding: 0;
  }
`;

const CurrentTrackContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 500px;
  @media (max-width: 700px) {
    flex-direction: column;
    height: unset;
  }
`;

const PlayerMenu = styled.div`
  z-index: 100;
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  flex-direction: row;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;
  width: 100%;
  list-style: none;
  padding: 5px;
`;

const Loading = styled.h3`
  font-size: 2rem;
  color: #efefef;
  text-align: center;
`;
