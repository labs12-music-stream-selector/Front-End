import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Register from './Register.js';

afterEach(cleanup);

describe('renders without crashing', () => {

    test('renders the Register component', () => {
      render(<Register />)
    })
})