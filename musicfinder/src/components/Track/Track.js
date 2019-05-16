import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Track = (props) => {

	const [thumbnailURL, setThumbnailURL] = useState('');

	useEffect(() => {
		setThumbnailURL(getSnippet(props.track.url));
	}, [])

	return (
		<TrackContainer onClick={() => { props.updateCurrentVideo(props.track); props.updateAutoPlay('&autoplay=1') }}>
			<Thumbnail key={props.track.url + props.index} src={thumbnailURL} />
			<h3>{props.track.track_title}</h3>
			<p>Mood: {props.track.mood}</p>
		</TrackContainer>
	)
	function getSnippet(id) {
		// axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails&id=${id}&key=${process.env.REACT_APP_YTKey}`)
		// 	.then(res => {
		// 		console.log("Then is running")
		// 		console.log(res.data);
		// 		setThumbnailURL(res.data.items[0].snippet);
		// 		return `${res.data.items[0].snippet}`;
		// 	}).catch(err => { console.log("error: ", err) })
		console.log('getSnippet running');
		return 'http://i3.ytimg.com/vi/MkNeIUgNPQ8/maxresdefault.jpg';
	}
}


export default Track;

const Thumbnail = styled.img`
	width: 300px;
	// background-color: red;
	border-radius: 5px 5px 0px 0px;
`;

const TrackContainer = styled.div`
	max-width: min-content;
	background-color: #323232;
	border-radius: 5px;
	padding: 0px 0px 10px 0px;
	margin: 20px;
	box-shadow: 0px 2px 4px black;
	position: relative;
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
