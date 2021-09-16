import Head from 'next/head';
import Image from 'next/image';
import profile from '../../public/jacksonhole.jpg';

const Home = () => {
  return (
    <main className='space-y-14 lg:space-y-24'>
      <Head>
        <title>My App Home Page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='max-w-4xl mx-auto mt-16'>
        <div className='container px-4 mx-auto'>
          <div className='flex flex-col-reverse text-center lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 lg:text-left'>
            <div className='lg:px-4 lg:mt-12 '>
              <h1 className='text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white'>
                Hey there,
              </h1>
              <div className='mt-6 text-gray-800 dark:text-white'>
                <p className='mb-4'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
            <div className='flex-shrink-0 mb-10 lg:mt-12 lg:px-4'>
              <Image
                src={profile}
                alt='Profile'
                priority={true}
                className='rounded-full'
                width={250}
                height={250}
                placeholder='blur'
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
