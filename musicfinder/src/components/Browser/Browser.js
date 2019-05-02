import React, { useState, useEffect } from 'react';
import axios from 'axios';
import YouTubePlayer from '../YoutubePlayer/YoutubePlayer.js';
import SearchBar from '../SearchBar/SearchBar.js';
import Select from '../Select/Select.js';
import Fuse from 'fuse.js';

const Browser = (props) => {
	const [tracks, updateTracks] = useState([]);
	const [tracksData, updateTracksData] = useState([]);
	const [offset, updateOffset] = useState(0);
	const [offsetMax, updateOffsetMax] = useState(6);

	useEffect(() => {
		// TODO: replace with correct url to get initial tracks
		const url = `${process.env.REACT_APP_BE_URL}/api/song-list`;
		getTracks(url);
	}, [])


	return (
		<div style={{
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'spaceBetween',
		}}>
			<SearchBar searchTrack={searchTrack} />
			<Select getTracks={getTracks} options={['sad', 'happy', 'sassy']} />
			{tracks.map((track, index) => {
				if (index <= offset + 5 && index >= offset) {
					console.log(track);
					return <YouTubePlayer key={track.url + index} url={track.url} />
				} else {
					return;
				}
			})}

		</div>
	);


	async function getTracks(url) {
		const res = await axios.get(url);
		const data = res.data.map(song => {
			song.url = song.url.substring(song.url.indexOf("=") + 1);
			return song
		})
		updateTracks(data);
		updateTracksData(data);
	}

	async function getTracksByMood(mood) {
		const url = 'https://moody-beats-recommender-api.herokuapp.com/api/1/'
		const res = await axios.get(url);
		// return res.data;
		console.log(res.data)
	}

	async function searchTrack(searchTerm) { // the fuzzy search goes here
		let options = {
			keys: ['artist', 'mood', 'track_title', 'url']
		}
		let fuse = new Fuse(tracksData, options);
		// console.log(fuse.search(searchTerm));
		updateTracks(fuse.search(searchTerm));
	}
}

export default Browser;
