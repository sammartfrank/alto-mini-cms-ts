'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { MdCreate, MdDeleteOutline } from 'react-icons/md';

import { PostType } from '../../../hooks/useLocalStorage';

export default function Post() {
  const params = useParams();
  const { id } = params;
  const [post, setPost] = useState<PostType | null>(null);

  useEffect(() => {
    const postsFromLocalStorage = localStorage.getItem('posts');
    if (postsFromLocalStorage) {
      const posts: PostType[] = JSON.parse(postsFromLocalStorage!);
      const currentPost = posts.find((post) => post.id === id);
      if (currentPost) setPost(currentPost);
    }
  }, [id]);

  const videoSrc = `https://www.youtube.com/embed/${post?.videoId}?autoplay=0&modestbranding=1&rel=0`;

  return (
    <main className='flex min-h-screen flex-col gap-12 items-center justify-between p-24'>
      <h1 className='text-4xl font-bold'>Post - {post?.title}</h1>
      <div className='flex flex-col items-center justify-center w-full'>
        <div className='w-full h-full'>
          <iframe
            className='border-0'
            src={videoSrc}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title={post?.title}
            width={'100%'}
            height={1000}
          />
        </div>
        <div className='flex flex-col space-y-4 my-12'>
          <p>{post?.date}</p>
          <h3 className='text-md font-semibold'>{post?.title}</h3>
          <p className='text-md font-light'>{post?.description}</p>
        </div>
      </div>
      <div className='flex flex-row gap-5 justify-end w-full'>
        <Link className='bg-zinc-50 hover:bg-zinc-100 text-black font-bold py-2 px-4 rounded text-center' href='/'>
          Back to home
        </Link>
        <Link
          className='bg-zinc-50 hover:bg-zinc-100 text-black font-bold py-2 px-4 rounded text-center'
          href={`/post/${post?.id}/edit`}
        >
          <MdCreate />
        </Link>
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
          <MdDeleteOutline />
        </button>
      </div>
    </main>
  );
}
