import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='py-6 mt-12 lg:mt-18 sm:pb-36 sm:py-12'>
      <div className='max-w-4xl px-4 mx-auto text-gray-800 dark:text-white'>
        <div className='pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300'></div>
        <div className='flex flex-col items-center justify-between lg:flex-row'>
          <p>Built with Next.js, Tailwind and Vercel</p>
          <div className='flex flex-wrap pt-2 space-x-2 font-medium sm:space-x-4 lg:pt-0'>
            <Link href='/about'>
              <a className={'transition-colors hover:text-yellow-500'}>About</a>
            </Link>
            <a
              href='#'
              className={'transition-colors hover:text-yellow-500'}
              target='_blank'
              rel='noreferrer'
            >
              Twitter
            </a>
            <a
              href='#'
              className={'transition-colors hover:text-yellow-500'}
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
            </a>
            <a
              href='#'
              className={'transition-colors hover:text-yellow-500'}
              target='_blank'
              rel='noreferrer'
            >
              GitHub
            </a>
            <a
              href='#'
              className={'transition-colors hover:text-yellow-500'}
              target='_blank'
              rel='noreferrer'
            >
              Hashnode
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
