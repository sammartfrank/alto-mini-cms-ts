'use client';

import { useRouter } from 'next/navigation';
import { PostType } from '../../hooks/useLocalStorage';
import { dateFormatted } from './utils';
import { MdDeleteOutline } from 'react-icons/md';

export const PostCard = ({ post }: { post: PostType }) => {
  const { videoId, id, date, title, description } = post;
  const router = useRouter();
  const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=0&modestbranding=1&rel=0`;

  const handleOnClick = () => {
    router.push(`/post/${id}`);
  };

  return (
    <div
      className='bg-white py-12 w-full hover:shadow-md hover:cursor-pointer rounded-md p-4 border border-zinc-50'
      onClick={handleOnClick}
    >
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
