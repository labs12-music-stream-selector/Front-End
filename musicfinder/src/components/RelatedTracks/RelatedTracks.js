import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const RelatedTracks = (props) => {
	return (
		<div>
			{props.tracks.map((track) => {
				if(track.url){
					return <li onClick = {() => props.updateCurrentVideo({...track, url: track.url.split('=')[1]})} key = {track.name}>{track.name}</li>
				}
			})}
		</div>
	)
}

export default RelatedTracks;

const ListContainer = styled.ul`
	margin: 0;
`;