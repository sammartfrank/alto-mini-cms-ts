'use client';

import { ReactNode, createContext, useContext } from 'react';
import { usePosts, usePostsInterface } from './useLocaleStorage.ts';

const defaultValue: usePostsInterface = {
  posts: [],
  updatePost: () => {},
  deletePost: () => {},
  addPost: () => {},
  getPost: () => undefined,
};

const PostsContext = createContext(defaultValue);

export const PostsProvider = ({ children }: { children: ReactNode }) => {
  const postsHook = usePosts();

  return <PostsContext.Provider value={postsHook}>{children}</PostsContext.Provider>;
};

export const usePostsContext = () => useContext(PostsContext);
