import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from './SearchBar';
import { vi } from 'vitest';

describe('SearchBar', () => {
  const mockOnQueryChange = vi.fn();

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should render without errors', () => {
    render(<SearchBar onQueryChange={mockOnQueryChange} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should update searchQuery state when user types in the input', () => {
    render(<SearchBar onQueryChange={mockOnQueryChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input).toHaveValue('test');
  });

  it('should call onQueryChange when user submits the form', () => {
    render(<SearchBar onQueryChange={mockOnQueryChange} />);
    const input = screen.getByRole('textbox');
    const form = screen.getByTestId('form');
    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.submit(form);
    expect(mockOnQueryChange).toHaveBeenCalledTimes(1);
    expect(mockOnQueryChange).toHaveBeenCalledWith('test');
  });

  it('should show an error message when filterData is empty and form is submitted', () => {
    render(<SearchBar onQueryChange={mockOnQueryChange} filterData={[]} />);
    const input = screen.getByRole('textbox');
    const form = screen.getByTestId('form');
    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.submit(form);
    expect(screen.getByText(/No results for test/i)).toBeInTheDocument();
  });
});
