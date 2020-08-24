import Head from 'next/head';
import Layout from '../components/Layout';
import { InferGetStaticPropsType } from 'next';
import { getAllPosts } from '../lib/db';
import Link from 'next/link';

export default function Home(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome to Homepage</h1>

      <h2>TIMESTAMP: {Date.now()}</h2>

      <h2>Latest Posts</h2>
      <ul>
        {props.posts.map((post) => {
          return (
            <li key={post.id}>
              <Link href="/post/[id]" as={`/post/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const posts = await getAllPosts();
  return { props: { posts } };
};
