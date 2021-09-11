import Link from 'next/link';
import React from 'react';
import ThemeSwitch from '@/components/ThemeSwitch';

const Header = () => {
  return (
    <div className='sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black'>
      <div className='container flex items-center justify-between px-4 mx-auto lg:max-w-4xl'>
        <Link href='/'>
          <a
            className={
              'font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white'
            }
          >
            Your Name
          </a>
        </Link>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Header;
