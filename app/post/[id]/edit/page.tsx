'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { PostType } from '../../../../hooks/useLocaleStorage';
import { usePostsContext } from 'hooks/PostsContext';

const PostSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  videoId: Yup.string(),
  description: Yup.string().required('Required'),
});

export default function EditPost() {
  const router = useRouter();
  const { id } = useParams();
  const { getPost, updatePost } = usePostsContext();
  const [post, setPost] = useState<PostType | undefined>();

  useEffect(() => {
    const retrievedPost = getPost(id);
    setPost(retrievedPost);
  }, [id, getPost]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: post?.title || '',
      videoId: post?.videoId || '',
      description: post?.description || '',
    },
    validationSchema: PostSchema,
    onSubmit: (values) => {
      if (post) {
        const updatedPost = {
          ...post,
          ...values,
        };
        updatePost(updatedPost);
        router.push(`/post/${post.id}`);
      }
    },
  });

  return (
    <div className='w-full max-w-md mx-auto mt-4 h-screen flex flex-col items-center'>
      <h1 className='text-2xl font-bold mb-4'>Update Post</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2 dark:text-white' htmlFor='title'>
            Title
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type='text'
            name='title'
            id='title'
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.title && formik.errors.title ? (
            <div className='text-red-500 dark:text-white my-2 text-xs italic'>{formik.errors.title}</div>
          ) : null}
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 dark:text-white text-sm font-bold mb-2' htmlFor='description'>
            Description
          </label>
          <textarea
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            name='description'
            id='description'
            cols={30}
            rows={20}
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.description && formik.errors.description ? (
            <div className='text-red-500 dark:text-white my-2 text-xs italic'>{formik.errors.description}</div>
          ) : null}
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 dark:text-white text-sm font-bold mb-2' htmlFor='videoId'>
            Video ID
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type='text'
            name='videoId'
            id='videoId'
            value={formik.values.videoId ?? ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.videoId && formik.errors.videoId ? (
            <div className='text-red-500 dark:text-white my-2 text-xs italic'>{formik.errors.videoId}</div>
          ) : null}
        </div>
        <div className='flex flex-col gap-4'>
          <button
            type='submit'
            disabled={formik.isSubmitting}
            className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Update
          </button>
          <button
            className='w-full bg-zinc-500 hover:bg-zinc-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            onClick={() => router.back()}
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
}
