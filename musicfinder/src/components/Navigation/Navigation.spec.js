import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from 'react-testing-library';
import Navigation from './Navigation.js';

afterEach(cleanup)

describe('renders without crashing', () => {
  test('renders the Navigation component', () => {
    render(<MemoryRouter><Navigation /></MemoryRouter>)
  })
})
