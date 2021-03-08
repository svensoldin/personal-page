import Head from 'next/head';
import NavButton from './NavButton.component';

type Props = {
  children: React.ReactElement | React.ReactElement[];
  pageTitle?: string;
};

const Layout = ({ children, pageTitle }: Props) => (
  <>
    <Head>
      <title>{pageTitle || 'Sven Soldin - Software developer'}</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <div className='flex flex-col max-w-prose mx-auto my-4'>
      <nav className='flex justify-center p-4 mb-3'>
        <NavButton to='home' />
        <NavButton to='about' />
      </nav>
      {children}
    </div>
  </>
);

export default Layout;
