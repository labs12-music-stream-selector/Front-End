import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Fuse from 'fuse.js';
import styled from 'styled-components';

import SearchBar from '../SearchBar/SearchBar.js';
import Select from '../Select/Select.js';
import Track from '../Track/Track.js';


const Browser = (props) => {
	const [tracks, updateTracks] = useState([]);
	const [tracksData, updateTracksData] = useState([]);
	const [offset, updateOffset] = useState(0);
	const [offsetMax, updateOffsetMax] = useState(6);
	const [relatedTracks, updateRelatedTracks] = useState([]);
	const [tracksByMood, updateTracksByMood] = useState([]);

	useEffect(() => {
		// TODO: replace with correct url to get initial tracks
		const url = `https://fantabulous-music-finder.herokuapp.com/api/song-list`;
		getTracks(url);
	}, [])

	return (
		<div style={{
			display: 'flex',
			flexDirection: 'column',
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
			<Container>
				{tracks.map((track, index) => {
					if (index <= offset + 5 && index >= offset) {
						return (
							<Track track = {track} index = {index} key ={index} getRelated = {getRelatedTracks}/>
							)
					} else {
						return;
					}
				})}
			</Container>
			<div style={{
				display: 'block'
			}}>
				<button onClick={loadPrev}>Load Previous</button>
				<button onClick={loadNext}>Load Next</button>
			</div>
			
			<div>
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

	async function getRelatedTracks(id) {
		const url = `https://moody-beats-recommender-api.herokuapp.com/api/${id}/`;
		const res = await axios.get(url);
		const relatedTracks = []; 
		
		Object.keys(res.data).forEach(key => {
			if(!['id', 'songs', 'mood', 'video_id', ''].includes(key) && res.data[key] !== null && !key.includes('_link')){
				relatedTracks.push({name: res.data[key], url: res.data[`${key}_link`]});
			}
		});
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

const Container = styled.div`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;

	margin: 0 auto;
`;
