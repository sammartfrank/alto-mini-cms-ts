'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { MdCreate, MdDeleteOutline } from 'react-icons/md';

import { PostType } from '../../../hooks/useLocalStorage';

export default function EditPost() {
  const params = useParams();

  const { id } = params;
  const [post, setPost] = useState<PostType | null>(null);

  useEffect(() => {
    const postsFromLocalStorage = localStorage.getItem('posts');
    if (postsFromLocalStorage) {
      const posts: PostType[] = JSON.parse(postsFromLocalStorage!);
      const postToEdit = posts.find((post) => post.id === id);
      if (postToEdit) setPost(postToEdit);
    }
  }, [id]);

  return (
    <div className='w-full max-w-md mx-auto mt-4 h-screen flex flex-col items-center'>
      <h1 className='text-2xl font-bold mb-4'>Blog - {post?.title}</h1>
      <div className='flex flex-col gap-5'>
        <p className='text-justify'>{post?.description}</p>
        <p>{post?.date}</p>
      </div>
      <div className='flex flex-row gap-5 justify-end w-full'>
        <Link className='bg-zinc-50 hover:bg-zinc-100 text-black font-bold py-2 px-4 rounded text-center' href='/blog'>
          Back to blog
        </Link>
        <Link
          className='bg-zinc-50 hover:bg-zinc-100 text-black font-bold py-2 px-4 rounded text-center'
          href={`/blog/${post?.id}/edit`}
        >
          <MdCreate />
        </Link>
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
}
