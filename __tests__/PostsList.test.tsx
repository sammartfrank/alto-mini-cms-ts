import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { PostsList } from '../components/Post/PostsList';

jest.mock('../hooks/useLocalStorage', () => ({
  __esModule: true,
  usePosts: () => ({
    posts: [
      {
        id: '1',
        title: 'Test Post 1',
        description: 'This is a test post',
        videoId: 'abc123',
        date: '2023-05-18',
        mode: 'post',
      },
      {
        id: '2',
        title: 'Test Post 2',
        description: 'This is another test post',
        videoId: 'def456',
        date: '2023-05-19',
        mode: 'post',
      },
    ],
    addPost: jest.fn(),
    deletePost: jest.fn(),
    updatePost: jest.fn(),
  }),
}));

test('Its rendering the posts and handling clicks correctly', () => {
  render(<PostsList />);
  for (let i = 1; i <= 2; i++) {
    const titleElement = screen.getByText(`Test Post ${i}`);
    expect(titleElement).toBeInTheDocument();
  }

  const createPostButton = screen.getByText('Create Post');
  userEvent.click(createPostButton);
  expect(screen.getByText('Create Post')).toBeInTheDocument();
});
