/*
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home link', () => {
  render(<App />);
  const linkElements = screen.getAllByText(/Home/i);
  expect(linkElements.length).toBeGreaterThan(0);
});

test('renders login link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders register link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Register/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders jobs link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Jobs/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders apply link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Apply/i);
  expect(linkElement).toBeInTheDocument();
});
