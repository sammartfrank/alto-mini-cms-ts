import { Inter } from 'next/font/google';
import { Navbar } from '../components/Navbar';
import { ReactNode } from 'react';

import './globals.css';
import { Hero } from 'components/Hero';
import { PostsProvider } from 'hooks/PostsContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Alto-Mini-Cms',
  description: 'A mini cms for Alto',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <PostsProvider>
          <Navbar />
          <Hero />
          <div>{children}</div>
        </PostsProvider>
      </body>
    </html>
  );
}
