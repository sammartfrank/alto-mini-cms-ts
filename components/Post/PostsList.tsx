import Link from 'next/link';
import { usePosts } from '../../hooks/useLocalStorage';
import { PostCard } from './PostCard';

export const PostsList = () => {
  const { posts, deletePost } = usePosts();
  return (
    <div className='flex flex-col space-y-4 items-center w-1/2 pt-4'>
      {posts
        .filter((post) => post.mode === 'post')
        .map((post) => (
          <div className='w-full' key={post.id}>
            <PostCard post={post} deletePost={deletePost} />
          </div>
        ))}
      <Link href='/post/create'>
        <button className='bg-zinc-50 hover:bg-zinc-100 text-black font-bold py-2 px-4 rounded mt-4'>
          Create Post
        </button>
      </Link>
    </div>
  );
};
