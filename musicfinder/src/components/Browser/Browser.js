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
	const [relatedTracks, updateRelatedTracks] = useState([]);
	const [tracksByMood, updateTracksByMood] = useState([]);

	useEffect(() => {
		// TODO: replace with correct url to get initial tracks
		const url = `${process.env.REACT_APP_BE_URL}/api/song-list`;
		updateTracksData(getTracks(url));
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
				<Select getTracks={getTracksByMood} options={['sad', 'happy', 'confident-sassy', 'angry', 'in-love', 'peaceful']} />
			</div>
			<div>
				{tracks.map((track, index) => {
					if (index <= offset + 5 && index >= offset) {
						console.log(track)
						return (
							<>
								<YouTubePlayer key={track.url + index} url={track.url} />
								<button onClick = {e => getRelatedTracks(track.id)}> related tracks</button>
							</>
							)
					} else {
						return;
					}
				})}
			</div>
			<div>
				<button onClick={loadPrev}>Load Previous</button>
				<button onClick={loadNext}>Load Next</button>
			</div>

			<h3>related</h3>
			<ul>
				{relatedTracks.map(track => {
					return <li>{track}</li>
				})}
			</ul>

			<h3>other Tracks by mood</h3>
			<ul>
				{tracksByMood.map(track => {
					return <li>{track.title}</li>
				})}
			</ul>

		</div>
	);

	async function getTracks(url) {
		const res = await axios.get(url);
		const data = res.data.map(song => {
			song.url = song.url.substring(song.url.indexOf("=") + 1);
			return song
		})
		updateTracks(data);
	}

	async function getRelatedTracks(id) {
		const url = `https://moody-beats-recommender-api.herokuapp.com/api/${id}/`;
		const res = await axios.get(url);
		const relatedTracks = []; 
		Object.keys(res.data).forEach(key => {
			if(!['id', 'songs', 'mood', 'video_id'].includes(key) && res.data[key] !== null){
				relatedTracks.push(res.data[key]);
			}
		});
		console.log(relatedTracks);
		updateRelatedTracks(relatedTracks)
		return relatedTracks;
	}
	

	async function getTracksByMood(mood) {
		const url = `https://john-moody-beats-recommender.herokuapp.com/api/${mood}`;
		const res = await axios.get(url);
		updateTracksByMood(res.data)
	}

	async function searchTrack(searchTerm) { // the fuzzy search goes here
		let options = {
			keys: ['artist', 'mood', 'track_title', 'url']
		}
		let fuse = new Fuse(tracksData, options);
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
