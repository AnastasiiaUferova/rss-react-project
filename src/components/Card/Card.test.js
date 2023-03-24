import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';
const defaultProps = {
  id: 'd',
  image: 'https://example.com/image.jpg',
  name: 'Example product',
  popleLiked: 10,
  price: 20,
  recommended: false,
  category: 'Example category',
};
describe('Card', () => {
  it('renders with correct props', () => {
    render(React.createElement(Card, { ...defaultProps }));
    const cardPic = screen.getByAltText(`Picture of "${defaultProps.name}"`);
    const cardText = screen.getByText(defaultProps.name);
    const cardPrice = screen.getByText(`$${defaultProps.price}`);
    const cardCategory = screen.getByText(defaultProps.category);
    const cardLikes = screen.getByText(defaultProps.popleLiked.toString());
    expect(cardPic).toBeInTheDocument();
    expect(cardText).toBeInTheDocument();
    expect(cardPrice).toBeInTheDocument();
    expect(cardCategory).toBeInTheDocument();
    expect(cardLikes).toBeInTheDocument();
  });
  it('renders with like button', () => {
    render(React.createElement(Card, { ...defaultProps, recommended: true }));
    const favouriteButton = screen.getByRole('button');
    expect(favouriteButton).toBeInTheDocument();
  });
});
