import { useRouter } from 'next/navigation';
import { PostType } from '../../hooks/useLocalStorage';

import Image from 'next/image';

export const BlogPostCard = ({ blog, position }: { blog: PostType; position: number | null }) => {
  const router = useRouter();
  if (!blog) return null;
  const { id, title, description } = blog;
  const handleOnClick = () => {
    router.push(`/blog/${id}`);
  };
  const height = position === 0 ? ' h-44' : ' h-32';
  const width = position === 0 ? ' w-full' : ' w-[367px]';
  return (
    <div
      className={
        'relative hover:shadow-md hover:cursor-pointer rounded-md p-4 border border-zinc-50 overflow-hidden bg-white' +
        height +
        width
      }
    >
      <div className='flex flex-row gap-5'>
        <Image
          src={
            'https://images.unsplash.com/photo-1678215913814-5a33ffbd0f0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format'
          }
          alt='Robert'
          width={100}
          height={100}
        />
        <div className='flex flex-col space-y-4' onClick={handleOnClick}>
          <h2 className='text-lg font-bold'>{title}</h2>
          <p className='max-w-[150px] truncate overflow-ellipsis'>{description}</p>
        </div>
      </div>
    </div>
  );
};
