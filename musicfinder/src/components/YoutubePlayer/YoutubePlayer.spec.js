import React from 'react';
import { render, cleanup } from 'react-testing-library';
import YoutubePlayer from './YoutubePlayer.js';

afterEach(cleanup);

describe('renders without crashing', () => {

  test('renders the Register component', () => {
    render(<YoutubePlayer url='DHNZeIy4kjs' />)
  })
})