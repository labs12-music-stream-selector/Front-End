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

const Browser = props => {
  // Data for all tracks
  const [tracksData, updateTracksData] = useState([]);
  // Data for all tracks after mood selection
  const [alltracksByMood, updateAllTracksByMood] = useState([]);
  // displayed tracks
  const [tracks, updateTracks] = useState([]);
  const [offset, updateOffset] = useState(0);
  const [offsetMax, updateOffsetMax] = useState(6);
  const [relatedTracks, updateRelatedTracks] = useState([]);
  const [tracksByMood, updateTracksByMood] = useState([]);
  const [hasMore, updateHasMore] = useState(true);
  const [searching, updateSearching] = useState(false);
  const [currentVideo, updateCurrentVideo] = useState('MkNeIUgNPQ8');
  const [autoPlay, updateAutoPlay] = useState('');

  // Select Mood dropdown
  const [showList, updateShowList] = useState(true);
  const [displayedMood, updateDisplayedMood] = useState('all');

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
  },[currentVideo])
  return (
    <BrowserContainer id="browser-container">
    <Playlists/>
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
      {/* <YoutubePlayer url={currentVideo} autoPlay={autoPlay} /> */}
      <div style={{ margin: "0 auto" }}>
        <SelectMoodDropdown>
          <SelectMoodListLabel onClick={toggleList} htmlFor="">Select a song mood!</SelectMoodListLabel>
          <SelectMoodList showList={showList}>
            <SelectMoodListItem onClick={() => changeMood('all')} className="">All</SelectMoodListItem>
            <SelectMoodListItem onClick={() => changeMood('happy')} className="">Happy</SelectMoodListItem>
            <SelectMoodListItem onClick={() => changeMood('sad')} className="">Sad</SelectMoodListItem>
            <SelectMoodListItem onClick={() => changeMood('angry')} className="">Angry</SelectMoodListItem>
            <SelectMoodListItem onClick={() => changeMood('in-love')} className="">In Love</SelectMoodListItem>
            <SelectMoodListItem onClick={() => changeMood('chill')} className="">Chill</SelectMoodListItem>
            <SelectMoodListItem onClick={() => changeMood('confident-sassy')} className="">Confident & Sassy</SelectMoodListItem>
          </SelectMoodList>
        </SelectMoodDropdown>
      </div >
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
    </BrowserContainer >
  );

  async function getTracks(url) {
    const res = await axios.get(url, {
      headers: { Authorization: localStorage.getItem("token") }
    });
    const data = res.data;
    console.log("getTracks running")
    console.log("get Tracks data: ", data);
    updateTracksData(data);

    updateAllTracksByMood(data);
    updateTracks(data.slice(0, 12));
  }

  async function getRelatedTracks(id) {
    const url = `https://moody-beats-recommender-api.herokuapp.com/api/${id}/`;
    const res = await axios.get(url);
    const relatedTracks = [];
    console.log("Get related tracks running")

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

    console.log("related tracks: ", relatedTracks);
    return relatedTracks;
  }

  async function getTracksByMood(mood) {
    console.log("getTracksByMood running")
    const url = `https://john-moody-beats-recommender.herokuapp.com/api/${mood}`;
    const res = await axios.get(url);
    console.log("tracks by mood: ", res.data);
    updateTracksByMood(res.data);
  }

  async function searchTrack(searchTerm) {
    // the fuzzy search goes here
    console.log("fuzzy search running")
    if (searchTerm.length === 0) {
      updateSearching(false);
    } else {
      updateSearching(true);
    }
    let options = {
      keys: ["artist", "mood", "track_title", "url"]
    };
    let fuse = new Fuse(alltracksByMood, options);
    updateTracks(fuse.search(searchTerm));
    updateOffset(0); // TODO: Double Check this worked!!!!!
  }

  function loadNext(page) {
    // TODO: make this better
    console.log("loadNext running");
    console.log("page:", page, "tracks: ", tracks)
    if (!searching) {
      console.log("loadNext inside first if");
      if (page * 6 < alltracksByMood.length - 1) {
        console.log("page: ", page);
        // updateOffset(offset + 6);
        updateTracks(alltracksByMood.slice(0, page * 6));
      } else if (tracks.length > 0 && hasMore) {
        updateHasMore(false);
      }
    }
  }

  function loadPrev() {
    console.log('loadPrev running')
    if (offset > 5) {
      updateOffset(offset - 6);
    }
  }
  // Click handlers for selecting mood from moodSelectDropdown
  function toggleList() {
    const bool = !showList;
    updateShowList(bool);
  }

  function changeMood(mood) {
    if (mood === 'all') {
      updateAllTracksByMood(tracksData);
      updateDisplayedMood('all');
    } else {
      let options = {
        keys: ["moods"],
        threshold: 0.0,
      };
      let fuse = new Fuse(tracksData, options);
      const results = fuse.search(mood);
      console.log(results);
      updateDisplayedMood(mood);
      updateAllTracksByMood(results);
      updateTracks(results.slice(0, 6));
      updateOffset(0); // TODO: Double Check this worked!!!!!
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
const SelectMoodDropdown = styled.div`
  background-color: tomato;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const SelectMoodListLabel = styled.div`
  box-sizing: border-box;
  display: block;
  background-color: #009fb7;
  padding: 5px;
  width: 100%;
  color: white;
`;

const SelectMoodList = styled.div`
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  width: 100%;
  ${props => {
    if (props.showList) {
      return `display: none;`;
    }
  }
  }
`;

const SelectMoodListItem = styled.div`
  box-sizing: border-box;
  width: 100%;
  background-color: green;
  list-style: none;
  padding: 5px ;
`;