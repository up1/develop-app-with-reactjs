import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Counter from '../Counter';

test('counter increment', () => {

  const { container } = render(<Counter />);
  const button = container.childNodes.item(0).firstChild;
  expect(button.textContent).toBe('0');

  fireEvent.click(button);
  expect(button.textContent).toBe('1');

});
