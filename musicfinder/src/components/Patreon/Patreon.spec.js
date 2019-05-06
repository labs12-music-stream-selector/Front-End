import React from 'react';
import ReactDOM from 'react-dom';
import Patreon from './Patreon';
import { render, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer'; // install this
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';

describe('<Patreon />', () => {
  test('Patreon Renders', () => {
    expect(render(<Patreon />)).not.toBeNull();
  })

  test('Patreon Button Shows up', () => {
    const { getByText } = render(<Patreon />);
    const patreonBtn = getByText(/Patreon!/i);
    expect(patreonBtn).toHaveTextContent(/Patreon!/i);
  })
})

