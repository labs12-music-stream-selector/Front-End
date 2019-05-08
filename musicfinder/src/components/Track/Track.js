import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import YouTubePlayer from '../YoutubePlayer/YoutubePlayer.js';

const Track = (props) => {

	const [related, setRelated] = useState([]);

	useEffect(() => {
		// TODO: refactor to use async/await
		props.getRelated(props.track.id).then(tracks => {
			setRelated(tracks)
		})
	}, [])

	return (
		<TrackContainer>
			<YouTubePlayer key={props.track.url + props.index} url={props.track.url} />
			<Ul>
				{
					console.log(related) ||
						related ? related.map(track => {
							if (track.url) {
								return <li key={track.url}><a href={track.url}>{track.name}</a></li>
							}
						}) : ''
				}
			</Ul>
		</TrackContainer>
	)
}

export default Track;

const TrackContainer = styled.div`
	max-width: min-content;
	iframe{
		border: none;
	}
	@media screen and (max-width: 500px){
		max-width: 95vw;
		iframe{
			max-width: 100%;
		}
	}
`;

const Ul = styled.ul`
	list-style: none;
	text-align: left;
	
	li a{
		text-decoration: none;
		color: orange;
		:hover{
			color: #EB5757;
		}
	}
`;