import React, {useState, useEffect} from 'react';
import axios from 'axios';
import YouTubePlayer from '../YoutubePlayer/YoutubePlayer.js';
import SearchBar from '../SearchBar/SearchBar.js';

const Browser = (props) => {
	const [tracks, updateTracks] = useState([{id:'ErISjXq9hYg'},{id:'ErISjXq9hYg'},{id:'ErISjXq9hYg'}]);

	useEffect(() => {
		// TODO: replalce with correct url to get initial tracks
		// const url = 'url to get tracks';
		// updateTracks(getTracks(url));
	},[])
	
	return (
		<div style = {{
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'spaceBetween',
		}}>
			<SearchBar searchTrack = {searchTrack}/>
			{tracks.map(track => {
				return <YouTubePlayer url = {track.id}/>
			})}

		</div>
	);

	async function getTracks(url){
		const res = await axios.get(url);
		return res.data;
	}

	async function searchTrack(searchTerm){
		//TODO: replace correct url
		// const url = 'DS url'
		// const res = await axios.get(url);
		// updateTracks(res.data)
		console.log(searchTerm)
	}
} 

export default Browser;
