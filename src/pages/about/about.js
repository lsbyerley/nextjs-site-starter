import Head from 'next/head';

const About = () => {
  return (
    <div className='space-y-14 lg:space-y-24'>
      <Head>
        <title>My App About Page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='max-w-4xl mx-auto mt-16'>
        <div className='container px-4 mx-auto'>
          <div className='flex flex-col-reverse text-center lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 lg:text-left'>
            <div className='lg:px-4 lg:mt-12 '>
              <h1 className='text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white'>
                The About page,
              </h1>
              <div className='mt-6 text-gray-800 dark:text-white'>
                <p className='mb-4'>
                  This page is only here to show creating another page and
                  testing it. Feel free to remove it if it serves no purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
