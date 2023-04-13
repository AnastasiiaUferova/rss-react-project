import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ApiCardType } from '../../types/types';
import { ApiCard } from './ApiCard';
import { vi } from 'vitest';

describe('ApiCard component', () => {
  const defaultProps: ApiCardType = {
    id: '1',
    image_thumbnail_path: 'http://example.com/image.jpg',
    name: 'Test Show',
    start_date: '2022-01-01',
    network: 'ABC',
    country: 'USA',
  };

  it('renders the component with props', () => {
    const { getByAltText, getByText } = render(<ApiCard {...defaultProps} />);

    expect(getByAltText(`Picture of "${defaultProps.name}"`)).toBeInTheDocument();
    expect(getByText(defaultProps.name)).toBeInTheDocument();
    expect(getByText(defaultProps.country)).toBeInTheDocument();
    expect(getByText(defaultProps.network)).toBeInTheDocument();
    expect(getByText(defaultProps.start_date)).toBeInTheDocument();
  });

  it('calls setSelectedCardId and setPopupIsOpen when button is clicked', () => {
    const setSelectedCardId = vi.fn();
    const setPopupIsOpen = vi.fn();
    const { getByText } = render(<ApiCard {...defaultProps} />);

    const button = getByText('Details');
    fireEvent.click(button);

    expect(setSelectedCardId).toHaveBeenCalledWith(defaultProps.id);
    expect(setPopupIsOpen).toHaveBeenCalledWith(true);
  });
});
