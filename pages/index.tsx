import { GetStaticProps } from 'next';
import { InferGetStaticPropsType } from 'next';

import Layout from '../components/Layout.component';
import Description from '../components/Description.component';

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Description />
      <h2 className='self-center'>Articles</h2>
      {posts.map(({ id, title }: Post) => (
        <p key={id}>{title}</p>
      ))}
    </Layout>
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
