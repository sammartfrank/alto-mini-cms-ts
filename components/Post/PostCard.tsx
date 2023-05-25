'use client';

import { useRouter } from 'next/navigation';
import { MdDeleteOutline, MdCreate } from 'react-icons/md';
import { MouseEventHandler } from 'react';

import { PostType } from '../../hooks/useLocaleStorage';
import { dateFormatted } from './utils';
import { usePostsContext } from 'hooks/PostsContext';

export const PostCard = ({ post = null }: { post: PostType | null }) => {
  const { deletePost } = usePostsContext();
  const router = useRouter();

  if (!post) return null;

  const { videoId, id, date, title, description } = post;

  const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=0&modestbranding=1&rel=0`;

  const handleOnClick = () => {
    router.push(`/post/${id}`);
  };
  const handleOnEdit: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    router.push(`/post/${id}/edit`);
  };

  const handleOnDelete: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    const isDeleting = confirm('Are you sure you want to delete this post?');
    if (isDeleting) deletePost(id);
    return;
  };

  return (
    <div
      className='bg-white dark:bg-zinc-500 pb-12 w-full hover:shadow-md hover:cursor-pointer rounded-md p-4 border border-zinc-50'
      onClick={handleOnClick}
    >
      <div className='flex flex-row gap-2 justify-end'>
        <button className='bg-zinc-700 dark:bg-gray-500 text-white font-bold py-2 px-4 rounded' onClick={handleOnEdit}>
          <MdCreate />
        </button>
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={handleOnDelete}>
          <MdDeleteOutline />
        </button>
      </div>

      <div className='flex flex-col space-y-4'>
        <p>{dateFormatted(date)}</p>
        <h3 className='text-md font-semibold'>{title}</h3>
        <p className='text-md font-light truncate'>{description}</p>
        <div className=''>
          <iframe
            className='border-0'
            src={videoSrc}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title={title}
            width={'100%'}
          />
        </div>
      </div>
    </div>
  );
};
