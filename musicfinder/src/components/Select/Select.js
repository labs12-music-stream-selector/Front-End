import React from 'react';

const Select = (props) => {

	return (
		<select onChange={handleChange}>
			<option value='select'>Select Mood</option>
			{props.options.map(option => {
				return <option key={option} value={option}>{option}</option>
			})}
		</select>
	);

	function handleChange(e) {
		if (e.target.value !== 'select') {
			props.getTracks(e.target.value);
		}
	}
}

export default Select;