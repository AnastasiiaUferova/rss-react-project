import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders without crashing', () => {
    const { getByRole } = render(<SearchBar />);
    const search = getByRole('textbox');
    expect(search).toBeInTheDocument();
  });

  it('updates state on input change', () => {
    const { getByRole } = render(<SearchBar />);
    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input).toHaveValue('test');
  });
});
