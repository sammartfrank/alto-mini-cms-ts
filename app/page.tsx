'use client';

import Link from 'next/link';
import { BlogPostCard, PostCard } from '../components/Post';
import usePosts from '../hooks/useLocalStorage';

export default function Home() {
  const { posts } = usePosts();
  const infoPosts = posts.filter((post) => post.mode === 'post');
  const blogPosts = posts.filter((post) => post.mode === 'blog');
  const firstBlogPost = blogPosts.shift()!;

  // if (!infoPosts || !blogPosts || !firstBlogPost) return null;
  if (!posts) {
    return (
      <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <h1 className='text-4xl font-bold'>You need to create some posts first.</h1>
        {/* create posts button */}
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
      <div className='flex flex-col space-y-4 items-center w-1/2 pt-4'>
        {infoPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
        <Link href='/post/create'>
          <button className='bg-zinc-50 hover:bg-zinc-100 text-black font-bold py-2 px-4 rounded mt-4'>
            Create Post
          </button>
        </Link>
      </div>
      <div className='flex flex-col gap-4 w-1/2 pt-4'>
        <BlogPostCard blog={firstBlogPost} position={0} />
        <div className='flex flex-row gap-x-4 gap-y-4 flex-wrap'>
          {blogPosts?.slice(0, 5).map((blogPost) => (
            <BlogPostCard key={blogPost.id} blog={blogPost} position={null} />
          ))}
        </div>
        <Link className='bg-zinc-50 hover:bg-zinc-100 text-black font-bold py-2 px-4 rounded' href='/blog'>
          See more
        </Link>
      </div>
    </main>
  );
}
