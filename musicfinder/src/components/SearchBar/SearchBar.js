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
      <input value={term} onChange={onChange} placeholder="search... 🔍" />
      {props.selectComp()}
    </SearchForm>
  );

  function onChange(e) {
    updateTerm(e.target.value);
  }
};

export default SearchBar;

const SearchForm = styled.form`
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  left: 0;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 40%;
  margin: auto;
  padding: 0;
  @media (max-width: 479px) {
    padding: 0;
    width: 100%;
  }
  input {
    color: black;
    padding: 0px;
    background-color: #009fb7;
    border: none;
    text-align: center;
    font-weight: bold;
    font-size: 2rem;
    border-radius: 5px;
    @media (max-width: 479px) {
      width: 100%;
    }
    ::placeholder {
      color: #272727;
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
