'use client';
import { useState, useEffect } from 'react';

import { postsList } from './mocked';
export enum PostMode {
  Blog = 'blog',
  Post = 'post',
}

export type PostType = {
  id: string;
  title: string;
  date: string;
  videoId: string | null;
  mode: PostMode;
  description: string;
};

const usePosts = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const postsFromLocalStorage = localStorage.getItem('posts');
    if (postsFromLocalStorage) {
      setPosts(JSON.parse(postsFromLocalStorage));
    }
    setPosts((posts) => {
      if (posts.length === 0) {
        return postsList;
      }
      return [...posts, ...postsList];
    });
  }, []);

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
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const deletePost = (postId: string) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  return { posts, addPost, updatePost, deletePost };
};

export default usePosts;
