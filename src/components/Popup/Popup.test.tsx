import { render, screen, fireEvent } from '@testing-library/react';
import Popup from './Popup';
import React from 'react';
import { vi } from 'vitest';

const data = {
  name: 'Stranger Things',
  status: 'Ended',
  rating: '8.7',
  genres: ['Drama', 'Fantasy', 'Horror'],
  country: 'United States',
  network: 'Netflix',
  image_path: 'stranger-things.png',
  description:
    'A group of friends search for their missing friend who they discover is connected to supernatural mysteries in the town.',
};

describe('Popup', () => {
  it('should render popup content when data is passed', () => {
    render(<Popup popupIsOpen={true} setPopupIsOpen={vi.fn()} data={data} />);
    expect(screen.getByTestId('popup')).toBeInTheDocument();
    expect(screen.getByTestId('popup-content')).toBeInTheDocument();
    expect(screen.getByLabelText('close popup')).toBeInTheDocument();
    expect(screen.getByText(data.name)).toBeInTheDocument();
    expect(screen.getByText(`${data.status}`)).toBeInTheDocument();
    expect(screen.getByText(`${data.rating}`)).toBeInTheDocument();
    expect(screen.getByText(`${data.genres.join(', ')}`)).toBeInTheDocument();
    expect(screen.getByText(`${data.country}`)).toBeInTheDocument();
    expect(screen.getByText(`${data.network}`)).toBeInTheDocument();
    expect(screen.getByText(data.description)).toBeInTheDocument();
  });

  it('should close the popup when close button is clicked', () => {
    const setPopupIsOpen = vi.fn();
    render(<Popup popupIsOpen={true} setPopupIsOpen={setPopupIsOpen} data={data} />);
    const closeButton = screen.getByLabelText('close popup');
    fireEvent.click(closeButton);
    expect(setPopupIsOpen).toHaveBeenCalledWith(false);
  });
});
