import { render, fireEvent, screen, waitFor } from '../test-utils';
import { Autocomplete } from '@components/Autocomplete/Autocomplete.tsx';
import '@testing-library/jest-dom/extend-expect';

describe('Autocomplete', () => {
  it('should render the suggestions list', async () => {
    render(<Autocomplete />);

    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'led Zeppelin' } });

    await waitFor(() => {
      const result1 = screen.getByTestId('suggestions-list');
      expect(result1).toBeInTheDocument();
    });

    fireEvent.change(input, { target: { value: '' } });

    await waitFor(() => {
      const result2 = screen.queryByTestId('suggestions-list');
      expect(result2).not.toBeInTheDocument();
    });
  });
  it('should have one suggestion link because input to specific', async () => {
    render(<Autocomplete />);
    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'holy' } });
    await waitFor(() => {
      const result1 = screen.getByText('Led Zeppelin - Houses of the holy (album)');
      expect(result1).toBeInTheDocument();
    });
  });
  it('should have one suggestion links because input to specific', async () => {
    render(<Autocomplete />);
    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'holy' } });

    await waitFor(() => {
      expect(screen.getAllByTestId('suggestion-link').length).toEqual(1);
    });
  });

  it('should clear results when handleOnClick is called', async () => {
    const { debug } = render(<Autocomplete />);

    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'holy' } });

    await waitFor(() => {
      const result1 = screen.getByTestId('suggestions-list');
      expect(result1).toBeInTheDocument();
    });

    const link = screen.getByText('Led Zeppelin - Houses of the holy (album)');

    fireEvent.click(link);

    await waitFor(() => {
      const result2 = screen.queryByTestId('suggestions-list');
      expect(result2).not.toBeInTheDocument();
    });
  });
});
