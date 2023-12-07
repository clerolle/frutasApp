import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ReviewCard from './ReviewCard';

describe('ReviewCard Component', () => {
  test('renders ReviewCard component with provided data', () => {
    const fruit = {
      name: 'Apple',
      img: 'apple.jpg',
      family: 'Rosaceae',
      description: 'A tasty fruit.',
    };

    const { getByText, getByAltText } = render(<ReviewCard fruit={fruit} />);
    
    expect(getByText('Apple')).toBeInTheDocument();
    expect(getByAltText('frutas')).toBeInTheDocument();
    expect(getByText('Rosaceae')).toBeInTheDocument();
    expect(getByText('Descripción:')).toBeInTheDocument();
    expect(getByText('A tasty fruit.')).toBeInTheDocument();
  });

  test('expands and collapses when clicked', () => {
    const fruit = {
      name: 'Banana',
      img: 'banana.jpg',
      family: 'Musaceae',
      description: 'A yellow fruit.',
    };

    const { getByLabelText, getByText } = render(<ReviewCard fruit={fruit} />);

    const expandButton = getByLabelText('show more');

    fireEvent.click(expandButton);
    expect(getByText('Descripción:')).toBeInTheDocument();
    expect(getByText('A yellow fruit.')).toBeInTheDocument();

    fireEvent.click(expandButton);
    expect(() => getByText('Descripción:')).toThrowError();
    expect(() => getByText('A yellow fruit.')).toThrowError();
  });

  test('renders correctly without fruit data', () => {
    const { getByText } = render(<ReviewCard />);
    expect(getByText('Descripción:')).toBeInTheDocument();
  });
});
