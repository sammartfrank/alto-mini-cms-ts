import { render, screen } from '@testing-library/react';
import { Logo } from '../components/Logo';
import '@testing-library/jest-dom/extend-expect';

describe('Logo', () => {
  it('should render the Logo', () => {
    render(<Logo />);

    const logo = screen.getByTestId('logo');

    expect(logo).toBeInTheDocument();
  });
});
