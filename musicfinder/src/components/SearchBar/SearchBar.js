import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SearchBar = (props) => {
	const [term, updateTerm] = useState('');

	const debouncedTerm = useDebounce(term, 500); // Change delay if necessary

	useEffect(
		() => {
			if (debouncedTerm) {
				props.searchTrack(debouncedTerm);
			}
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
	height: 20px;
	top: 13px;
	left: 10%;
	display: flex;
	width: 500px;
	align-items: stretch;
	input{
		background-color: rgba(255,255,255,0.02);
		color: #EFF1F3;
		border: none;
		border-bottom: 1px solid rgba(255,255,255,0.1);
		text-align: center;
		width: 70%;
		height: 20px;
		margin-top: -4px;
		margin-right: 20px;
		font-size: 12px;
		@media(max-width: 479px){
			margin-right: 2px;
		}
	}
	@media(max-width: 479px){
		width: 200px;
		left : 20%;
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
