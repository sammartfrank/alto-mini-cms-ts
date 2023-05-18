'use client';
import cuid from 'cuid';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useRouter } from 'next/navigation';

import * as Yup from 'yup';
import usePosts, { PostMode, PostType } from '../../../hooks/useLocalStorage';

const PostSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  content: Yup.string().required('Required'),
  videoId: Yup.string(),
  description: Yup.string().required('Required'),
});

export default function CreatePost() {
  const router = useRouter();
  const { addPost } = usePosts();
  return (
    <div className='w-full max-w-md mx-auto mt-4 h-screen flex justify-center flex-col items-center'>
      <h1 className='text-2xl font-bold mb-4'>Create Post</h1>
      <Formik
        initialValues={{ title: '', content: '', videoId: '', description: '' }}
        validationSchema={PostSchema}
        onSubmit={(values, actions) => {
          const payload = {
            ...values,
            id: cuid(),
            date: new Date().toISOString(),
            mode: PostMode.Post,
          };
          addPost(payload as PostType);
          actions.resetForm();
          router.push('/');
        }}
      >
        {({ isSubmitting, handleSubmit }) => (
          <Form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='title'>
                Title
              </label>
              <Field
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                type='text'
                name='title'
                id='title'
              />
              <ErrorMessage name='title' component='div' className='text-red-500 text-xs italic' />
            </div>
            <div className='mb-6'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='content'>
                Content
              </label>
              <Field
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20'
                as='textarea'
                name='content'
                id='content'
              />
              <ErrorMessage name='content' component='div' className='text-red-500 text-xs italic' />
            </div>
            <div className='mb-6'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='videoId'>
                videoId
              </label>
              <Field
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                as='input'
                name='videoId'
                id='videoId'
              />
              <ErrorMessage name='videoId' component='div' className='text-red-500 text-xs italic' />
            </div>

            <button
              type='submit'
              disabled={isSubmitting}
              className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
