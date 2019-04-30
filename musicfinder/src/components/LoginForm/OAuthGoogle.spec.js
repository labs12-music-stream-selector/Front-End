import React from 'react';
import { render, cleanup } from 'react-testing-library';
import OAuthGoogle from './OAuthGoogle.js';

afterEach(cleanup);

describe('renders without crashing', () => {

    test('renders the OAuthGoogle component', () => {
      render(<OAuthGoogle />)
    })
})