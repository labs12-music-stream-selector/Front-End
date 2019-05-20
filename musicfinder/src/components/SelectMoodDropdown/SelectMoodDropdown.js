import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Fuse from "fuse.js";

import Track from "../Track/Track.js";

const SelectMoodDropdown = props => {
  // const [allTracksByMood, updateAllTracksByMood] = useState([]);
  const [showList, updateShowList] = useState(true);
  const [displayedMood, updateDisplayedMood] = useState("all");

  // useEffect(() => {}, [])

  return (
    <SelectMoodDropdownDiv>
      <SelectMoodListLabel onClick={toggleList} htmlFor="">
        Current Song Mood: {displayedMood}
      </SelectMoodListLabel>
      <SelectMoodList showList={showList}>
        <SelectMoodListItem onClick={() => changeMood("all")} className="">
          All
        </SelectMoodListItem>
        <SelectMoodListItem onClick={() => changeMood("happy")} className="">
          Happy
        </SelectMoodListItem>
        <SelectMoodListItem onClick={() => changeMood("sad")} className="">
          Sad
        </SelectMoodListItem>
        <SelectMoodListItem onClick={() => changeMood("angry")} className="">
          Angry
        </SelectMoodListItem>
        <SelectMoodListItem onClick={() => changeMood("in-love")} className="">
          In Love
        </SelectMoodListItem>
        <SelectMoodListItem onClick={() => changeMood("chill")} className="">
          Chill
        </SelectMoodListItem>
        <SelectMoodListItem
          onClick={() => changeMood("confident-sassy")}
          className=""
        >
          Confident & Sassy
        </SelectMoodListItem>
      </SelectMoodList>
    </SelectMoodDropdownDiv>
  );

  // Click handlers for selecting mood from moodSelectDropdown
  function toggleList() {
    const bool = !showList;
    updateShowList(bool);
  }

  function changeMood(mood) {
    if (mood === "all") {
      props.updateAllTracksByMood(props.tracksData);
      props.updateTracks(props.tracksData.slice(0, 12));
      updateDisplayedMood("all");
      props.updateSearching(false);
    } else {
      let options = {
        keys: ["moods"],
        threshold: 0.0
      };
      let fuse = new Fuse(props.tracksData, options);
      const results = fuse.search(mood);
      updateDisplayedMood(mood);
      props.updateSearching(true);
      props.updateAllTracksByMood(results);
      props.updateTracks(results);
      // props.updateTracks(results.slice(0, 6));
    }
    toggleList();
  }
};

export default SelectMoodDropdown;

const SelectMoodDropdownDiv = styled.div`
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
`;

const SelectMoodListLabel = styled.div`
  box-sizing: border-box;
  display: block;
  background-color: #009fb7;
  padding: 10px;
  width: 100%;
  color: white;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
`;

const SelectMoodList = styled.div`
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  width: 100%;
  position: absolute;
  z-index: 95;
  box-shadow: 0px 4px 4px black;

  ${props => {
    if (props.showList) {
      return `display: none;`;
    }
  }}
`;

const SelectMoodListItem = styled.div`
  z-index: 95;
  box-sizing: border-box;
  width: 100%;
  cursor: pointer;
  background-color: #272727;
  color: ivory;
  list-style: none;
  padding: 10px;
  :hover {
    background-color: #009fb7;
    color: ivory;
  }
`;
