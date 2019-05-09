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
							if (track.url) {																												// remove this ifwhen ds backend is fixed
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
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		iframe{
			max-width: 100%;
		}
	}
	`;

const Ul = styled.ul`
	list-style: none;
	text-align: left;
	margin-bottom: 60px;
	@media (max-width: 500px) {
		padding-inline-start: 0px;
		text-align: center;
	}
	li a{
		text-decoration: none;
		font-weight: bold;
		line-height: 1.25;
		color: #EFF1F3;
		:hover{
			color: #009FB7;
		}
	}
`;