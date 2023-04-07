import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from './Form';
import { vi } from 'vitest';

test('should render the basic fields', () => {
  const onAddCard = vi.fn();
  render(<Form onAddCard={onAddCard} />);
  expect(screen.getByRole('heading', { name: 'Add your Show' })).toBeInTheDocument();
  expect(screen.getByRole('textbox', { name: /Show Name/i })).toBeInTheDocument();
  expect(screen.getByRole('group')).toBeInTheDocument();
  expect(screen.getByRole('combobox')).toBeInTheDocument();
  expect(
    screen.getByRole('option', { name: /Choose occasion for the movie/i })
  ).toBeInTheDocument();
  expect(screen.getByRole('option', { name: /Date night/i })).toBeInTheDocument();
  expect(screen.getByRole('option', { name: /Hanging out with friends/i })).toBeInTheDocument();
  expect(screen.getByRole('option', { name: /Studies/i })).toBeInTheDocument();
  expect(screen.getByRole('option', { name: /Watching solo/i })).toBeInTheDocument();
  expect(screen.getByRole('option', { name: /Family time/i })).toBeInTheDocument();
  expect(screen.getByRole('option', { name: /Watching with your kids/i })).toBeInTheDocument();
  expect(screen.getByRole('radio', { name: /Yes/i })).toBeInTheDocument();
  expect(screen.getByRole('radio', { name: /No/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Add movie/i })).toBeInTheDocument();
});
