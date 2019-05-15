import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { render, cleanup } from 'react-testing-library';
import LandingPage from './LandingPage.js';

afterEach(cleanup)

describe('renders without crashing', () => {
  test('renders the LandingPage component', () => {
    render(<BrowserRouter><LandingPage /></BrowserRouter>)
  })
})
