import React from 'react';
import { render, cleanup } from 'react-testing-library';
import User from './User.js';

afterEach(cleanup);

describe('renders without crashing', () => {

    test('renders the user component', () => {
      render(<User />)
    })
})