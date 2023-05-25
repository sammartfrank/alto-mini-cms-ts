import { useCallback, useEffect, useState } from 'react';
import { postsList } from './mocked';

export type PostType = {
  id: string;
  title: string;
  date: string;
  videoId: string | null;
  mode: string;
  description: string;
};

export interface usePostsInterface {
  posts: PostType[];
  addPost: (post: PostType) => void;
  updatePost: (updatedPost: PostType) => void;
  deletePost: (postId: string) => void;
  getPost: (postId: string) => PostType | undefined;
}

export const usePosts = (): usePostsInterface => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const localStorageData = localStorage.getItem('posts');
    if (localStorageData && localStorageData !== '[]') {
      setPosts(JSON.parse(localStorageData));
    } else {
      const mockedData = [...postsList];
      setPosts(mockedData);
      localStorage.setItem('posts', JSON.stringify(mockedData));
    }
  }, []);

  const addPost = (post: PostType) => {
    console.log('adding');
    setPosts((prevPosts) => {
      localStorage.setItem('posts', JSON.stringify(prevPosts.concat(post)));
      return prevPosts.concat(post);
    });
  };

  const updatePost = (updatedPost: PostType) => {
    console.log('updating');
    setPosts((prevPosts) => {
      const newPosts = prevPosts.map((post) => (post.id === updatedPost.id ? updatedPost : post));
      localStorage.setItem('posts', JSON.stringify(newPosts));
      return [...newPosts];
    });
  };

  const deletePost = (postId: string) => {
    console.log('deleting');
    setPosts((prevState) => {
      const newPosts = posts.filter((post) => post.id !== postId);
      localStorage.setItem('posts', JSON.stringify(newPosts));
      return [...newPosts];
    });
  };

  const getPost = useCallback((postId: string) => posts.find((post) => post.id === postId), [posts]);

  return { posts, addPost, updatePost, deletePost, getPost };
};
