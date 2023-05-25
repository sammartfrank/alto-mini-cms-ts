'use client';

import { Autocomplete } from '../Autocomplete';
import { Menu } from '../Menu/';
import { Logo } from '../Logo';

export const Navbar = () => {
  return (
    <nav
      datatest-id='navbar-container'
      className='sticky top-0 z-50 py-4 border-b-2 border-gray-50 bg-white dark:bg-zinc-500 dark:text-white'
    >
      <div className='container flex flex-row items-center justify-between w-full mx-auto'>
        <Logo />
        <Menu />
        <Autocomplete />
      </div>
    </nav>
  );
};
