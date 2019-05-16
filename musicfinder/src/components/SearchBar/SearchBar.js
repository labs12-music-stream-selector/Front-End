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
