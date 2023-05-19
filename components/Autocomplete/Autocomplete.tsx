// @ts-check

'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import { PostType, usePosts } from '../../hooks/useLocalStorage';

export const Autocomplete = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<PostType[]>([]);
  const { posts } = usePosts();

  useEffect(() => {
    if (search.length > 0) {
      setResults(posts.filter((post) => post.title.toLowerCase().includes(search.toLowerCase())));
    } else {
      setResults([]);
    }
  }, [search, posts]);

  return (
    <div className='relative'>
      <input
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='py-2 pl-3 pr-10 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:text-zinc-900'
        placeholder='Search...'
      />
      {results.length > 0 && (
        <div className='absolute z-10 mt-2 w-full bg-white rounded-md shadow-lg'>
          <ul className='space-y-1'>
            {results.map((result, index) => {
              const url = result.mode === 'post' ? '/post' : '/blog';
              return (
                <Link
                  key={index}
                  className='block px-5 py-3 hover:bg-blue-50 cursor-pointer dark:text-zinc-400'
                  href={`${url}/${result.id}`}
                  onClick={() => setResults([])}
                >
                  {result.title}
                </Link>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
