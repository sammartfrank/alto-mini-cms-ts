import { fireEvent, render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';
jest.mock('next/router', () => require('next-router-mock'));
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

import { Menu } from '@components/Menu';

describe('Menu', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  it('should render without throwing an error', () => {
    render(<Menu />, { wrapper: MemoryRouterProvider });

    links.forEach((link) => {
      const linked = screen.getByText(link.name);
      fireEvent.click(linked);
      expect(mockRouter.asPath).toEqual(link.href);
    });
  });
});
