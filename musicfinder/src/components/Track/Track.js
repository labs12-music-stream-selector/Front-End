import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';

/**
 *  can accept a inPlaylist prop to along with allTracks prop to modify behavior
 */
const Track = (props) => {

	const [thumbnailURL, setThumbnailURL] = useState('');

	useEffect(() => {
		if(props.track.video_id){
			getSnippet(props.track.video_id);
		} else {
			getSnippet()
		}
	}, [])

	return (
		<TrackContainer inPlaylist={props.inPlaylist} onClick={() => { props.updateCurrentVideo(props.track); props.updateAutoPlay('&autoplay=1') }}>
			<Thumbnail key={props.track.url + props.index} src={thumbnailURL} />
			<h3>{
				props.inPlaylist && props.allTracks.length > 0 ?
					returnSearchResult()
					:
					props.track.video_title}</h3>
			{props.inPlaylist ? null : <p>Mood: {props.track.mood}</p>}
		</TrackContainer>
	)
	function getSnippet(id) {
		axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails&id=${id}&key=${process.env.REACT_APP_YTKey}`)
			.then(res => {
				console.log("getSnippet running")
				console.log("thumbnail url: ", res.data.items[0].snippet.thumbnails[Object.keys(res.data.items[0].snippet.thumbnails)[2]].url)
				setThumbnailURL(res.data.items[0].snippet.thumbnails[Object.keys(res.data.items[0].snippet.thumbnails)[2]].url);
			}).catch(err => { console.log("error: ", err) })
	}
	function returnSearchResult() {
		const title = props.allTracks.filter(track => {
			return track.video_id === props.track.url
		})
		console.log(title);
		if (title.length > 0) {
			getSnippet(title[0].video_id);
			return title[0].video_title;
		}
	}
}


export default Track;

const Thumbnail = styled.img`
	width: 300px;
	// background-color: red;
	border-radius: 5px 5px 0px 0px;
	${props => props.inPlaylist && css`
		width: 100%;		
	`}
`;

const TrackContainer = styled.div`
	max-width: min-content;
	background-color: #323232;
	border-radius: 5px;
	padding: 0px 0px 10px 0px;
	margin: 20px;
	box-shadow: 0px 2px 4px black;
	position: relative;
	${props => props.inPlaylist && css`
		margin: 10px 5px;
	`}
	:hover {
		cursor: pointer;
	}
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
 
	`;
