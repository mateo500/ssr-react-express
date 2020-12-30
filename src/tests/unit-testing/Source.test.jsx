import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';

test('renders text present in component', () => {
  render(<App />);
  const textInComponent = screen.getByText(/click me/i);
  expect(textInComponent).toBeInTheDocument();
});
