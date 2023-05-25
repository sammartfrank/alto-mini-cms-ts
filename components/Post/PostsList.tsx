import Link from 'next/link';

import { PostCard } from './PostCard';
import { usePostsContext } from 'hooks/PostsContext';

export const PostsList = () => {
  const { posts } = usePostsContext();
  if (!posts) return null;
  return (
    <div className='flex flex-col space-y-4 items-center w-1/2 pt-4'>
      {posts
        ?.filter((post) => post.mode === 'post')
        .map((post) => (
          <div className='w-full' key={post.id}>
            <PostCard post={post} />
          </div>
        ))}
      <Link href='/post/create' className='bg-zinc-50 hover:bg-zinc-100 text-black font-bold py-2 px-4 rounded mt-4'>
        Create Post
      </Link>
    </div>
  );
};
