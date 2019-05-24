import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SearchBar = props => {
  const [term, updateTerm] = useState("");

  const debouncedTerm = useDebounce(term, 500); // Change delay if necessary

  useEffect(() => {
    props.searchTrack(debouncedTerm);
  }, [debouncedTerm]);

  return (
    <SearchForm onSubmit={e => e.preventDefault()}>
      <input value={term} onChange={onChange} placeholder="Search..." />
      {props.selectComp()}
    </SearchForm>
  );

  function onChange(e) {
    updateTerm(e.target.value);
  }
};

export default SearchBar;

const SearchForm = styled.form`
    box-sizing: border-box;
      height: 40px;
      // height: 100%;
      width: 100%;
  input {
      border-radius: 0 5px 5px 0;
      box - sizing: border-box;
      width: 100%;
      height: 100%;
      padding-left: 20px;
      font-size: 1.25rem;
      border: 0px;
      color: #efefef;
      background-color: #373737;
    ::placeholder {
      color: #cfcfcf;
    }
    @media (max-width: 500px) {
      padding: 0;
      text-align:center;
    }
    }
  `;

// Referenced: https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
}
