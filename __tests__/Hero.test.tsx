import { render, screen } from '@testing-library/react';
import { Hero } from '../components/Hero';
import '@testing-library/jest-dom/extend-expect';

describe('Hero', () => {
  it('should render the hero and have the title appearing', () => {
    render(<Hero />);

    const heading = screen.getByText('Alto mini CMS');

    expect(heading).toBeInTheDocument();
  });

  it('should render the image', () => {
    render(<Hero />);

    const image = screen.getByAltText('hero');
    expect(image).toHaveAttribute('datatest-id', 'hero-image');
  });
});
