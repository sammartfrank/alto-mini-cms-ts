'use client';

import Link from 'next/link';

import { BlogPostCard } from './BlogPostCard';
import { usePostsContext } from 'hooks/PostsContext';

export const BlogList = ({ path }: { path: string }) => {
  const { posts } = usePostsContext();
  if (!posts) return null;

  const dynamicLayout = `${
    path !== '/blog' ? 'flex flex-row gap-x-4 gap-y-4 flex-wrap' : 'flex flex-col gap-4 w-full'
  }`;
  const dynamicWrapper = `${path !== '/blog' ? 'flex flex-col gap-4 pt-4' : ' flex flex-col gap-4 w-full'}`;

  return (
    <div className={dynamicWrapper}>
      <div className={dynamicLayout}>
        {posts
          .filter((post) => post.mode === 'blog')
          ?.slice(0, 5)
          .map((blogPost) => (
            <BlogPostCard key={blogPost.id} blog={blogPost} />
          ))}
      </div>
      {path !== '/blog' && (
        <Link className='bg-zinc-50 hover:bg-zinc-100 text-black font-bold py-2 px-4 rounded text-center' href='/blog'>
          See more
        </Link>
      )}
    </div>
  );
};
