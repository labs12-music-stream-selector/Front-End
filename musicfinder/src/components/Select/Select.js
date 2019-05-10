import React from 'react';
import styled from 'styled-components';

const Select = (props) => {

	return (
		<MoodSelect onChange={handleChange}>
			<option value='select'>Select Mood</option>
			{props.options.map(option => {
				return <option key={option} value={option}>{option}</option>
			})}
		</MoodSelect>
	);

	function handleChange(e) {
		if (e.target.value !== 'select') {
			props.getTracks(e.target.value);
		}
	}
}

const MoodSelect = styled.select`
	display: none;
	background-color: #009FB7;
	border: none;
	color: #EFF1F3;
	display: none;
	font-weight: bold;
	option {
		background-color: #007DA6;
		font-weight: bold;
	}
`;

export default Select;
