import Head from 'next/head';
import NavButton from '../components/NavButton.component';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sven Soldin - Software developer</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-col max-w-prose mx-auto my-4'>
        <nav className='flex justify-center'>
          <NavButton to='Home' />
          <NavButton to='About' />
        </nav>
        <h1 className='text-3xl'>Hi, I'm Sven Soldin</h1>
      </div>
    </>
  );
}
