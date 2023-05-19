'use client';

import Link from 'next/link';
import { usePosts } from '../hooks/useLocalStorage';
import { PostsList } from '../components/Post/PostsList';
import { BlogList } from '../components/Post/BlogList';

export default function Home() {
  const { posts } = usePosts();

  if (!posts) {
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
    <main className='flex min-hscreen container mx-auto flex-row gap-4 w-full justify-between py-4'>
      <PostsList />
      <BlogList />
    </main>
  );
}
