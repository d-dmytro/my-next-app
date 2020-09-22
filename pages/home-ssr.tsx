import Head from 'next/head';
import Layout from '../components/Layout';
import { InferGetServerSidePropsType } from 'next';
import { getAllPosts } from '../lib/db';

export default function Home2(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome to Homepage</h1>

      {/* <h2>TIMESTAMP: {Date.now()}</h2> */}

      <h2>Latest Posts</h2>
      <ul>
        {props.posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const posts = await getAllPosts();
  return { props: { posts } };
};
