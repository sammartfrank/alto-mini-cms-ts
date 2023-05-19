'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { MdDeleteOutline, MdCreate } from 'react-icons/md';

import { PostType } from '../../hooks/useLocalStorage';

export const BlogPostCard = ({ blog }: { blog: PostType }) => {
  const router = useRouter();
  if (!blog) return null;

  const { id, title, description } = blog;

  const handleOnClick = () => {
    router.push(`/blog/${id}`);
  };

  return (
    <div
      className={
        'hover:shadow-md hover:cursor-pointer rounded-md p-4 pb-12 border border-zinc-50 overflow-hidden bg-white dark:bg-zinc-500 w-full'
      }
      onClick={handleOnClick}
    >
      <div className='flex flex-row gap-2 justify-end'>
        <button className='bg-zinc-700 dark:bg-gray-500 text-white font-bold py-2 px-4 rounded'>
          <MdCreate />
        </button>
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
          <MdDeleteOutline />
        </button>
      </div>
      <div className='flex flex-row gap-5'>
        <Image src={'/hero.jpg'} alt='Robert' width={150} height={170} />
        <div className='flex flex-col space-y-4'>
          <h2 className='text-lg font-bold'>{title}</h2>
          <p className='max-w-[330px] truncate overflow-ellipsis'>{description}</p>
        </div>
      </div>
    </div>
  );
};
