import React from 'react';

const Select = (props) => {

	return (
		<select onChange={handleChange} style={{
			height: 'fit-content',
		}}>
			<option value='select'>Select Mood</option>
			{props.options.map(option => {
				return <option key={option} value={option}>{option}</option>
			})}
		</select>
	);

	function handleChange(e) {
		if (e.target.value !== 'select') {
			// 
			const url = `https://moody-beats-recommender-api.herokuapp.com/api/1/` // ${e.target.value}`;
			props.getTracks(url);
		}
	}
}

export default Select;