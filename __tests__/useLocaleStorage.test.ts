import { act, renderHook } from '@testing-library/react';
import { usePosts } from '../hooks/useLocaleStorage';

describe('usePosts', () => {
  it('should add a post', () => {
    const { result } = renderHook(() => usePosts());

    const post = {
      id: '1',
      title: 'Test Post',
      date: '2023-05-25',
      videoId: null,
      mode: 'test',
      description: 'This is a test post',
    };

    act(() => {
      result.current.addPost(post);
    });

    expect(result.current.posts).toContainEqual(post);
    // Additional assertions if needed
  });
  it('should delete a post', () => {
    const { result } = renderHook(() => usePosts());

    const post = {
      id: '1',
      title: 'Test Post',
      date: '2023-05-25',
      videoId: null,
      mode: 'test',
      description: 'This is a test post',
    };

    act(() => {
      result.current.deletePost(post.id);
    });

    expect(result.current.posts).not.toContainEqual(post);
  });
  it('should update a post', () => {
    const { result } = renderHook(() => usePosts());

    const post = {
      id: 'TESTING',
      title: 'Test Post',
      date: '2023-05-25',
      videoId: null,
      mode: 'test',
      description: 'This is a test post',
    };

    const updatedPost = {
      id: 'TESTING',
      title: 'Test Post UPDATED',
      date: '2023-05-25',
      videoId: null,
      mode: 'UPDATED',
      description: 'This is a test post UPDATED',
    };

    act(() => {
      result.current.addPost(post);
    });

    act(() => {
      result.current.updatePost(updatedPost);
    });

    expect(result.current.posts).toContainEqual(updatedPost);
  });

  // Add more test cases for other functions in usePosts if necessary
});
