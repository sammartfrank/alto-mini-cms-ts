import { Autocomplete } from '../Autocomplete';
import { Menu } from '../Menu/';
import { Logo } from '../Logo';

export const Navbar = () => {
  return (
    <nav className='py-4 border-b-2 border-gray-50'>
      <div className='container flex flex-row items-center justify-between w-full mx-auto'>
        <Logo />
        <Menu />
        <Autocomplete />
      </div>
    </nav>
  );
};
