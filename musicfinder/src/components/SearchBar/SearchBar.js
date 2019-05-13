import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SearchBar = (props) => {
	const [term, updateTerm] = useState('');

	const debouncedTerm = useDebounce(term, 500); // Change delay if necessary

	useEffect(
		() => {
				props.searchTrack(debouncedTerm);
		},
		[debouncedTerm]
	);

	return (
		<SearchForm onSubmit={(e => e.preventDefault())}>
			<input value={term} onChange={onChange} placeholder='Search Track' />
			{props.selectComp()}
		</SearchForm>
	)

	function onChange(e) {
		updateTerm(e.target.value);
	}
}

export default SearchBar;

const SearchForm = styled.form`

	position: fixed;
	bottom: 0;
	width: 100vw;
	left: 0;
	right: 0;
	text-align: center;
	background-color: #009FB7;
	padding: 20px 10px;
	box-shadow: inset 0px 2px 2px black;

    position: fixed;
    bottom: 0;
    width: 100vw;
    left: 0;
    right: 0;
    background-color: #009FB7;
    padding: 20px 10px;
    box-shadow: inset 0px 2px 2px black;

		input{
			background-color: #009FB7;
			border: none;
			text-align:center;
			color: #272727;

			font-weight: bold;
			font-size: 2rem;
			@media(max-width: 479px){
					margin-right: 2px;
			}
		::placeholder {
				color: #272727;
		}
	}



`;

// Referenced: https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci
function useDebounce(value, delay) {

	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(
		() => {
			const handler = setTimeout(() => {
				setDebouncedValue(value);
			}, delay);

			return () => {
				clearTimeout(handler);
			};
		},
		[value]
	);

	return debouncedValue;
}
