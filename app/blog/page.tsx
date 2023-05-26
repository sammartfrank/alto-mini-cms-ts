'use client';
import { usePostsContext } from 'hooks/PostsContext';
import { BlogList } from '../../components/Post/BlogList';

export default function Blog() {
  const { posts } = usePostsContext();

  return (
    <main className='flex min-h-screen flex-col gap-5 p-5'>
      <h1 className='text-4xl font-bold'>Blog posts</h1>
      <BlogList path='/blog' />
    </main>
  );
}
