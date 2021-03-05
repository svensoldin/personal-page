import Head from 'next/head';
import { GetStaticProps } from 'next';
import { InferGetStaticPropsType } from 'next';

import NavButton from '../components/NavButton.component';
import Description from '../components/Description.component';

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Sven Soldin - Software developer</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-col max-w-prose mx-auto my-4'>
        <nav className='flex justify-center p-4 mb-3'>
          <NavButton to='Home' />
          <NavButton to='About' />
        </nav>
        <Description />
        <h2 className='self-center'>Articles</h2>
        {posts.map(({ id, title }: Post) => (
          <p key={id}>{title}</p>
        ))}
      </div>
    </>
  );
}

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?userId=1'
  );
  const posts: Post[] = await res.json();
  const keptPosts = posts.slice(0, 5);

  return {
    props: { posts: keptPosts },
  };
};
