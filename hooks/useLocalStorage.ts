import { useState, useEffect } from 'react';

import { postsList } from './mocked';

export type PostType = {
  id: string;
  title: string;
  date: string;
  videoId: string | null;
  // could it be an enum or a const but flaky on tests
  mode: string;
  description: string;
};

export const usePosts = () => {
  const [posts, setPosts] = useState<PostType[]>(() => {
    if (typeof window === 'undefined') return postsList;
    const postsFromLocalStorage = localStorage.getItem('posts');
    return postsFromLocalStorage ? JSON.parse(postsFromLocalStorage) : postsList;
  });

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const addPost = (post: PostType) => {
    const updatedPosts = [...posts, post];
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    setPosts(updatedPosts);
  };

  const updatePost = (updatedPost: PostType) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === updatedPost.id) {
        return updatedPost;
      }
      return post;
    });
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    setPosts(updatedPosts);
  };

  const deletePost = (postId: string) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    setPosts([...updatedPosts]);
  };

  return { posts, addPost, updatePost, deletePost };
};
