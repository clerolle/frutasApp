import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ReviewCard from './ReviewCard.jsx';

describe('ReviewCard Component', () => {
  test('renders ReviewCard component with provided data', () => {
    const fruit = {
      name: 'Apple',
      img: 'apple.jpg',
      family: 'Rosaceae',
      description: 'A tasty fruit.',
    };

    render(<ReviewCard fruit={fruit} />);
    
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByAltText('frutas')).toBeInTheDocument();
    expect(screen.getByText('Rosaceae')).toBeInTheDocument();
    expect(screen.getByText('Descripción:')).toBeInTheDocument();
    expect(screen.getByText('A tasty fruit.')).toBeInTheDocument();
  });

  test('expands and collapses when clicked', () => {
    const fruit = {
      name: 'Banana',
      img: 'banana.jpg',
      family: 'Musaceae',
      description: 'A yellow fruit.',
    };

    render(<ReviewCard fruit={fruit} />);

    const expandButton = screen.getByLabelText('show more');

    fireEvent.click(expandButton);
    expect(screen.getByText('Descripción:')).toBeInTheDocument();
    expect(screen.getByText('A yellow fruit.')).toBeInTheDocument();

    fireEvent.click(expandButton);
    expect(() => screen.getByText('Descripción:')).toThrowError();
    expect(() => screen.getByText('A yellow fruit.')).toThrowError();
  });

  test('renders correctly without fruit data', () => {
    render(<ReviewCard />);
    expect(screen.getByText('Descripción:')).toBeInTheDocument();
  });
});
