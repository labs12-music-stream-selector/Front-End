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

	useEffect(() => {
		// TODO: replace with correct url to get initial tracks
		const url = `${process.env.REACT_APP_BE_URL}/api/song-list`;
		getTracks(url);
	}, [])


	return (
		<div style={{
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'center',
		}}>
			<div style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
				<SearchBar searchTrack={searchTrack} />
				<Select getTracks={getTracks} options={['sad', 'happy', 'sassy']} />
			</div>
			<div>
				{tracks.map((track, index) => {
					if (index <= offset + 5 && index >= offset) {
						return <YouTubePlayer key={track.url + index} url={track.url} />
					} else {
						return;
					}
				})}
			</div>
			<div>
				<button onClick={loadPrev}>Load Previous</button>
				<button onClick={loadNext}>Load Next</button>
			</div>

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
		// console.log(res.data)
	}

	async function searchTrack(searchTerm) { // the fuzzy search goes here
		let options = {
			keys: ['artist', 'mood', 'track_title', 'url']
		}
		let fuse = new Fuse(tracksData, options);
		// console.log(fuse.search(searchTerm));
		updateTracks(fuse.search(searchTerm));
		updateOffset(0);												// TODO: Double Check this worked!!!!!
	}

	function loadNext() {
		console.log(tracks.length)
		if (offset < tracks.length - 6) {
			updateOffset(offset + 6);
		}
	}

	function loadPrev() {
		if (offset > 5) {
			updateOffset(offset - 6);
		}
	}
}

export default Browser;
