'use client';

import cuid from 'cuid';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';

import { usePostsContext } from 'hooks/PostsContext';

const PostSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  videoId: Yup.string(),
  description: Yup.string().required('Required'),
});

export default function CreatePost() {
  const router = useRouter();
  const { addPost } = usePostsContext();

  const formik = useFormik({
    initialValues: { title: '', content: '', videoId: '', description: '' },
    validationSchema: PostSchema,
    onSubmit: (values) => {
      const payload = {
        ...values,
        id: cuid(),
        date: new Date().toISOString(),
        mode: 'post',
      };

      addPost(payload);
      setTimeout(() => {
        router.push('/');
      }, 1000);
    },
  });

  return (
    <div className='w-full max-w-md mx-auto mt-4 h-screen flex justify-center flex-col items-center'>
      <h1 className='text-2xl font-bold mb-4'>Create Post</h1>
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
            value={formik.values.videoId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.videoId && formik.errors.videoId ? (
            <div className='text-red-500 dark:text-white my-2 text-xs italic'>{formik.errors.videoId}</div>
          ) : null}
        </div>

        <button
          type='submit'
          disabled={formik.isSubmitting}
          className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Submit
        </button>
      </form>
    </div>
  );
}
