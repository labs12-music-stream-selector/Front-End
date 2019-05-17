
import React, { useState, useEffect } from "react";
import axios from "axios";
import Fuse from "fuse.js";
import styled from "styled-components";
import Playlists from '../Playlists/Playlists.js';

import SearchBar from "../SearchBar/SearchBar.js";
import Select from "../Select/Select.js";
import Track from "../Track/Track.js";
import InfiniteScroll from "react-infinite-scroller";
import { withRouter } from "react-router-dom";
import YoutubePlayer from '../YoutubePlayer/YoutubePlayer.js';
import DisplayPlaylist from '../DisplayPlaylist/DisplayPlaylist.js';
import SelectMoodDropdown from '../SelectMoodDropdown/SelectMoodDropdown.js';

const Browser = props => {
  const [tracks, updateTracks] = useState([]);
  const [tracksData, updateTracksData] = useState([]);
  const [offset, updateOffset] = useState(0);
  const [offsetMax, updateOffsetMax] = useState(6);
  const [relatedTracks, updateRelatedTracks] = useState([]);
  const [tracksByMood, updateTracksByMood] = useState([]);
  const [hasMore, updateHasMore] = useState(true);
  const [searching, updateSearching] = useState(false);
  const [currentVideo, updateCurrentVideo] = useState('MkNeIUgNPQ8');
  const [autoPlay, updateAutoPlay] = useState('');

  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      return props.history.push("/");
    }
    // const url = `https://fantabulous-music-finder.herokuapp.com/api/song-list`;
    const url = `https://moodibeats-recommender.herokuapp.com/api/new-videos/`;
    getTracks(url);
  }, []);

  useEffect(() => {
    getRelatedTracks(currentVideo.id);
  }, [currentVideo])
  return (
    <BrowserContainer id="browser-container">
      <Playlists />
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
        <YoutubePlayer track={currentVideo} autoPlay={autoPlay} />
        <DisplayPlaylist
          allTracks={tracksData}
          updateCurrentVideo={updateCurrentVideo}
          updateAutoPlay={updateAutoPlay}
        />
      </CurrentTrackContainer>
      <div>
        <SelectMoodDropdown tracksData={[...tracksData]} updateTracks={updateTracks} />
      </div>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadNext}
        hasMore={hasMore}
        initialLoad={false}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
        threshold={150}
      >
        <Container>
          {tracks.map((track, index) => {
            return (
              <Track
                track={track}
                index={index}
                key={index}
                updateCurrentVideo={updateCurrentVideo}
                updateAutoPlay={updateAutoPlay}
              />
            );
          })}
        </Container>
      </InfiniteScroll>
    </BrowserContainer>
  );

  async function getTracks(url) {
    const res = await axios.get(url, {
      headers: { Authorization: localStorage.getItem("token") }
    });
    const data = res.data;
    console.log(data);

    updateTracksData(data);
    updateTracks(data.slice(0, 6));
  }

  async function getRelatedTracks(id) {
    const url = `https://moody-beats-recommender-api.herokuapp.com/api/${id}/`;
    const res = await axios.get(url);
    const relatedTracks = [];

    Object.keys(res.data).forEach(key => {
      if (
        !["id", "songs", "mood", "video_id"].includes(key) &&
        res.data[key] !== null &&
        !key.includes("_link")
      ) {
        relatedTracks.push({
          name: res.data[key],
          url: res.data[`${key}_link`]
        });
      }
    });
    updateRelatedTracks(relatedTracks)
  }

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
      keys: ["artist", "mood", "track_title", "url"]
    };
    let fuse = new Fuse(tracksData, options);
    updateTracks(fuse.search(searchTerm));
    updateOffset(0); // TODO: Double Check this worked!!!!!
  }

  function loadNext(page) {
    // TODO: make this better
    console.log("page:", page, "tracks: ", tracks)
    if (!searching) {
      if (page * 6 < tracksData.length - 6) {
        // updateOffset(offset + 6);
        updateTracks(tracksData.slice(0, page * 6));
      } else if (tracks.length > 0 && hasMore) {
        updateHasMore(false);
      }
    }
  }

  function loadPrev() {
    if (offset > 5) {
      updateOffset(offset - 6);
    }
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
`;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 60px auto;
`;

const CurrentTrackContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 500px;
  @media(max-width: 700px){
    flex-direction: column;
    height: unset;
  }
`;