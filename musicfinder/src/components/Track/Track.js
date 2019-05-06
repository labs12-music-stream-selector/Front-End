import React, {useState, useEffect} from 'react';

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
		<div style ={{
			maxWidth: 'min-content'
		}}>
			<YouTubePlayer key={props.track.url + props.index} url={props.track.url} />
			<ul>
				{
					related ? related.map(track => {
						console.log(related);
						return <li><a href = {track.url}>{track.name}</a></li>
					}) : ''
				}
			</ul>
		</div>
	)
}

export default Track;
