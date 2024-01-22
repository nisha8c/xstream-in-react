import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import xs from 'xstream';

test('renders learn react link', () => {
  let currentTime$ = xs.periodic(1000);
  // Provide the stream as a prop to the App component
  render(<App currentTime$={currentTime$} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
