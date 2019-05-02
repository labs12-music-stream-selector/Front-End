import React, { useState, useEffect } from 'react';

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
		<form onSubmit={(e => e.preventDefault())}>
			<input value={term} onChange={onChange} placeholder='search track' />
		</form>
	)

	function onChange(e) {
		updateTerm(e.target.value);
	}
}

export default SearchBar;

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