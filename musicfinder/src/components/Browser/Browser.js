import React, { useState, useEffect } from "react";
import axios from "axios";
import Fuse from "fuse.js";
import styled from "styled-components";
import Cookies from "js-cookie";
import Playlists from "../Playlists/Playlists.js";

import SearchBar from "../SearchBar/SearchBar.js";
import Select from "../Select/Select.js";
import Track from "../Track/Track.js";
import InfiniteScroll from "react-infinite-scroller";
import { withRouter } from "react-router-dom";
import YoutubePlayer from "../YoutubePlayer/YoutubePlayer.js";
import DisplayPlaylist from "../DisplayPlaylist/DisplayPlaylist.js";
import SelectMoodDropdown from "../SelectMoodDropdown/SelectMoodDropdown.js";

const Browser = props => {
  // All data for tracks
  const [tracksData, updateTracksData] = useState([]);
  // all tracks data after mood filter
  const [allTracksByMood, updateAllTracksByMood] = useState([]);
  // All tracks data to be displayed
  const [tracks, updateTracks] = useState([]);

  const [offset, updateOffset] = useState(0);
  const [offsetMax, updateOffsetMax] = useState(6);
  const [relatedTracks, updateRelatedTracks] = useState([]);
  const [tracksByMood, updateTracksByMood] = useState([]);
  const [hasMore, updateHasMore] = useState(true);
  const [searching, updateSearching] = useState(false);
  const [currentVideo, updateCurrentVideo] = useState('MkNeIUgNPQ8');
  const [autoPlay, updateAutoPlay] = useState('');
  //update current playlist to change the content in DisplayPlaylist component
  const [currentPlaylist, updateCurrentPlaylist] = useState(null);

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
        {currentPlaylist &&
            <DisplayPlaylist
              playlistId={currentPlaylist}
              currentTrack={currentVideo}
              allTracks={tracksData}
              updateCurrentVideo={updateCurrentVideo}
              updateAutoPlay={updateAutoPlay}
            />
        }
      </CurrentTrackContainer>
      <PlayerMenu>
        <SelectMoodDropdown
          tracksData={[...tracksData]}
          updateTracks={updateTracks}
          updateAllTracksByMood={updateAllTracksByMood}
        />
      </PlayerMenu>
      {/* <Playlists /> */}
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
                customAxios={cookieMonster}
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
    updateRelatedTracks(relatedTracks);
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

  function loadPrev() {
    if (offset > 5) {
      updateOffset(offset - 6);
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
  @media (max-width: 700px) {
    flex-direction: column;
    height: 65vw;
  }
`;
const SelectMoodDropdownStyle = styled.div`
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

const PlayerMenu = styled.div`
<<<<<<< HEAD
  z-index: 90;
=======
  z-index: 200;
>>>>>>> 854ae755eb1f51bdb8c08983aa4b2ed329954d65
  display: flex;
  flex-direction: row;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;
  width: 100%;
  list-style: none;
  padding: 5px ;
`;
