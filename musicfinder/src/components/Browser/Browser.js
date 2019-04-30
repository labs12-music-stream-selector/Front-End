import React, {useState, useEffect} from 'react';
import axios from 'axios';
import YouTubePlayer from '../YoutubePlayer/YoutubePlayer.js';

const Browser = (props) => {
	const [tracks, updateTracks] = useState([{id:'ErISjXq9hYg'},{id:'ErISjXq9hYg'},{id:'ErISjXq9hYg'}]);

	useEffect(() => {
		// TODO: replalce with correct url
		// const url = 'url to get tracks';
		// updateTracks(getTracks(url));
	},[])
	
	return (
		<div style = {{
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'spaceBetween',
		}}>
			{tracks.map(track => {
				return <YouTubePlayer url = {track.id}/>
			})}

		</div>
	);

	async function getTracks(url){
		const res = await axios.get(url);
		return res.data;
	}
} 

export default Browser;
