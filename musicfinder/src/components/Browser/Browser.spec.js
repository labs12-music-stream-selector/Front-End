import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Browse from './Browse';

afterEach(cleanup);

describe('<Browse/>', () => {
    it('renders without crashing', () => {
      render(<Browse/>);
    })
})