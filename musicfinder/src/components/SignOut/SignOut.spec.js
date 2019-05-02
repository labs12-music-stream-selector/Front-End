import React from 'react';
import { render, cleanup } from 'react-testing-library';
import SignOut from './SignOut.js';

afterEach(cleanup);

describe('renders without crashing', () => {

    test('renders the SignOut component', () => {
      render(<SignOut />)
    })
})