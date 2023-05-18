import Link from 'next/link';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export const Menu = () => (
  <div className='flex items-center justify-center space-x-4'>
    {links.map((link) => {
      return (
        <Link href={link.href} key={link.href} className='hover:cursor-pointer text-md font-bold capitalize'>
          {link.name}
        </Link>
      );
    })}
  </div>
);
