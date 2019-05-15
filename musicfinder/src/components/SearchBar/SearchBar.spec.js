import React from 'react';
import { render, cleanup } from 'react-testing-library';
import SearchBar from './SearchBar.js';

afterEach(cleanup)

describe('renders without crashing', () => {
  test('renders the SearchBar component', () => {
    expect(render(<SearchBar searchTrack={() =>{}} selectComp={() =>{}}/>)).not.toBeNull()
  })
})
