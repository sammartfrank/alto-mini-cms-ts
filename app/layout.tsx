import { Inter } from 'next/font/google';
import { Navbar } from '../components/Navbar';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Alto-Mini-Cms',
  description: 'A mini cms for Alto',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
