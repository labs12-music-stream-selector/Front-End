import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Track from "../Track/Track.js";

const DisplayPlaylist = props => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetchTracks();
  }, [props.playlistId]);

  useEffect(() => {
    props.updateTracksCurrentPlaylist(tracks);
  }, [tracks]);

  return (
    <DisplayPlaylistContainer>
      <h2>Playlist</h2>
      <AddBtn
        title="add current track to playlist"
        onClick={() => {
          addCurrentTrack(props.playlistId, props.currentTrack.video_id);
        }}
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8V16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 12H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </AddBtn>
      <DragDropContext onDragEnd={handleOrderChange}>
        <ul>
          <Droppable 
            droppableId="droppable" 
            direction={window.innerWidth < 700? 'horizontal' : 'vertical'}
            >
            {(provided, snapshot) => (
              <div 
                id='listContainer'
                {...provided.droppableProps} 
                ref={provided.innerRef}
                >
                {tracks.map((track, index) => (
                  <Draggable
                    key={`${track.video_id}${index}`}
                    draggableId={`${track.video_id}${index}`}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <Track
                          inPlaylist={props.playlistId}
                          track={track}
                          allTracks={props.allTracks}
                          trackThumbnailURLs={props.trackThumbnailURLs}
                          updateCurrentVideo={props.updateCurrentVideo}
                          updateAutoPlay={props.updateAutoPlay}
                          fetchTracks={fetchTracks}
                        />
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </ul>
      </DragDropContext>
    </DisplayPlaylistContainer>
  );

  function addCurrentTrack(playlistId, song_id) {
    axios
      .post(
        `https://fantabulous-music-finder.herokuapp.com/api/user/playlists/${playlistId}/song`,
        { 
          song_id,
          playlist_index: tracks.length+1
        }, {headers: {Authorization: `${localStorage.getItem("token")}`}}
      )
      .then(res => {
        console.log("added successfully");
        fetchTracks();
      })
      .catch(err => console.log(err));
  }

  function fetchTracks() {
    axios
      .get(
        `https://fantabulous-music-finder.herokuapp.com/api/user/playlists/${
          props.playlistId
        }/songs`, {headers: {Authorization: `${localStorage.getItem("token")}`}}
      )
      .then(res => {
        if(res.data.length === 0){
          setTracks([]);
          return
        }
        const newTracksArray = res.data.map(track => {
          let newTrack = { ...track, video_id: track.song_id };
          return newTrack;
        });
        const orderedTracks = order(newTracksArray);
        setTracks(orderedTracks);
      })
      .catch(err => {
        console.log(err);
      });
  }

  /**
   * used to order the tracks based on playlist_index onMount
   */
  function order(arr) {
    let newArr = [];
    // get all playlist indexes and sort them
    const sortedIndexes = arr.map(track => track.playlist_index).sort((a,b) => a-b);
    // go through the sorted indexes and push the track that have the index and push it to newArr in the sorted order
    sortedIndexes.forEach(index => newArr.push(arr.filter(track => track.playlist_index === index)[0]));
    return newArr;
  }

  function handleOrderChange(result) {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      tracks,
      result.source.index,
      result.destination.index
    );
    items.map((track, idx) => {
      const index = idx + 1;
      track.playlist_index = index;
      axios
        .put(
          `https://fantabulous-music-finder.herokuapp.com/api/user/playlists/${
            props.playlistId
          }/song/${track.id}`,
          { playlist_index: index }
        )
        .then(res => {
          console.log("successful");
        })
        .catch(err => console.log(err));
      return track;
    });

    setTracks(items);
  }

  function reorder(list, startIndex, endIndex) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  }

  function getItemStyle(isDragging, draggableStyle) {
    const grid = 8;
    return {
      // some basic styles to make the items look a bit nicer
      userSelect: "none",
      margin: `0 0 ${grid}px 0`,

      // styles we need to apply on draggables
      ...draggableStyle
    };
  }
};

export default DisplayPlaylist;

const AddBtn = styled.button`
  background: none;
  border: none;
  svg {
    path {
      stroke: white;
    }
    :hover {
      cursor: pointer;
    }
  }
  outline: none;
`;

const DisplayPlaylistContainer = styled.div`
  margin-left: 5px;
  max-width: 95vw;
  margin: 0 auto;
  h2 {
    margin: 0;
    color: #eff1f3;
  }
  ul{
    list-style: none;
    padding: 0;
    margin: 0;
    height: 86%;
    min-width: 260px;
    overflow-y: scroll;
    @media (max-width: 700px) {
      height: 300px;
      min-width: 310px;
      display: flex;
      overflow-y: unset;
      height: max-content;
      width: 100%; 
      overflow-y: unset;
      #listContainer{
        display: flex;
        overflow-x: scroll;
        width: 100%;
      }
    }
  }
`;