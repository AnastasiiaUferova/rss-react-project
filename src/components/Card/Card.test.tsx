import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  const props = {
    id: '1',
    image: 'http://example.com/image.jpg',
    name: 'Example Name',
    recommended: 'yes',
    categories: ['Category 1', 'Category 2'],
    date: '2023-03-25',
    occasion: 'Example Occasion',
  };

  it('should render the card with the correct data', () => {
    render(<Card {...props} />);
    expect(screen.getByAltText(`Picture of "${props.name}"`)).toBeInTheDocument();
    expect(screen.getByText(props.name)).toBeInTheDocument();
    expect(screen.getByText(props.categories?.join(', '))).toBeInTheDocument();
    expect(screen.getByText(props.occasion)).toBeInTheDocument();
    expect(screen.getByText(props.date)).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('card__button_rec');
  });

  it('should render the card without recommended class when recommended is false', () => {
    const propsWithoutRecommended = { ...props, recommended: 'no' };
    render(<Card {...propsWithoutRecommended} />);
    expect(screen.getByRole('button')).not.toHaveClass('card__button_rec');
  });
});
