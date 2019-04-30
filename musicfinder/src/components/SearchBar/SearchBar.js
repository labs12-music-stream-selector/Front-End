import React, {useState} from 'react';
import {debounce} from 'underscore';

const SearchBar = (props) => {
	const [term, updateTerm] = useState('');

	// wait 1 sec after typing before making an axios call
	const debounceSearchTrack = debounce(term => {
		props.searchTrack(term);
	}, 1000)

	return (
		<form onSubmit = {(e => e.preventDefault())}>
			<input value = {term} onChange = {onChange} placeholder = 'search track'/>	
		</form>
	)

	function onChange(e){
		updateTerm(e.target.value)
		debounceSearchTrack(e.target.value);
	}
}

export default SearchBar;