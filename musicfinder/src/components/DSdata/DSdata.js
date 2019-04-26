import React, {useState, useEffect} from 'react';
import axios from 'axios';

const DSdata = (props) => {
	const [data, updateData] = useState([{
		name: 'coco'
	}]);

	useEffect(() => {
		const url = 'https://music-selector-ds-api.herokuapp.com/';
		axios.get(url).then(res => {
			updateData(res.data)
		}).catch(err => {
			console.log(err)
		})
	})
	
	return (
		<>
			<h1>Data goes here</h1>
			<ul>
			{data.map(track => {
				return <li>{track.name}</li> 
			})}
			</ul>
		</>
	)
}

export default DSdata;