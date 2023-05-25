'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { BlogList } from 'components/Post/BlogList';
import { PostsList } from 'components/Post/PostsList';
import { PostsProvider, usePostsContext } from 'hooks/PostsContext';

export default function Home() {
  const { posts } = usePostsContext();
  const path = usePathname();

  if (posts.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <h1 className='text-4xl font-bold'>You need to create some posts first.</h1>
        <Link href='/post/create'>
          <button className='bg-zinc-50 hover:bg-zinc-100 text-black font-bold py-2 px-4 rounded mt-4'>
            Create Post
          </button>
        </Link>
      </div>
    );
  }

  return (
    <PostsProvider>
      <main className='flex min-h-screen container mx-auto flex-row gap-4 w-full justify-between py-4'>
        <PostsList />
        <BlogList path={path} />
      </main>
    </PostsProvider>
  );
}
