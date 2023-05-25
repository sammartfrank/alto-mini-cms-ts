import { useState, useEffect, ChangeEvent } from 'react';

import Link from 'next/link';
import { debounce } from 'lodash';

import { PostType } from '../../hooks/useLocaleStorage';
import { usePostsContext } from '../../hooks/PostsContext.tsx';

export const Autocomplete = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<PostType[]>([]);

  const { posts } = usePostsContext();

  const handleSearchDebounced = debounce((value: string) => {
    if (value.length > 0) {
      setResults(posts.filter((post) => post.title.toLowerCase().includes(value.toLowerCase())));
    } else {
      setResults([]);
    }
  }, 500);

  useEffect(() => {
    handleSearchDebounced(search);

    return () => {
      handleSearchDebounced.cancel();
    };
  }, [search, handleSearchDebounced, posts]);

  const handleOnClick = () => {
    setResults([]);
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (search.length === 0) {
      setResults([]);
    }
    setSearch(e.target.value);
  };

  return (
    <div className='relative' dataetst-id='autocomplete-container'>
      <input
        type='text'
        value={search}
        onChange={handleOnChange}
        className='py-2 pl-3 pr-10 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:text-zinc-900'
        placeholder='Search...'
      />
      {results.length > 0 && (
        <div className='absolute z-10 mt-2 w-full bg-white rounded-md shadow-lg' data-testid='suggestions-list'>
          <ul className='space-y-1'>
            {results.map((result, index) => {
              const url = result.mode === 'post' ? '/post' : '/blog';
              return (
                <Link
                  key={index}
                  className='block px-5 py-3 hover:bg-blue-50 cursor-pointer dark:text-zinc-400'
                  href={`${url}/${result.id}`}
                  onClick={handleOnClick}
                  data-testid='suggestion-link'
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
