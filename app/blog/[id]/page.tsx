'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { MdCreate, MdDeleteOutline } from 'react-icons/md';

import { PostType, usePosts } from '../../../hooks/useLocalStorage';

const PostSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  videoId: Yup.string(),
  description: Yup.string().required('Required'),
});

export default function EditPost() {
  const params = useParams();
  const router = useRouter();
  const { updatePost } = usePosts();

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

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: post || { title: '', content: '', videoId: '', description: '' },
    validationSchema: PostSchema,
    onSubmit: (values) => {
      if (post) {
        const updatedPost = {
          ...post,
          ...values,
        };
        updatePost(updatedPost);
        router.push(`/blog/${post.id}`);
      }
    },
  });

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
