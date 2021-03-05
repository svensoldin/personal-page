import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <main className='max-w-prose mx-auto'>
    <p>{post.body}</p>
  </main>
);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.id}`
  );
  const post = await res.json();

  return {
    props: { post },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?userId=1'
  );
  const posts: Post[] = await res.json();
  const keptPosts = posts.slice(0, 5);

  const paths = keptPosts.map((post) => ({
    params: { id: post.id.toString() }, // getStaticPaths needs a string as param
  }));

  return { paths, fallback: false };
};

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default Post;
