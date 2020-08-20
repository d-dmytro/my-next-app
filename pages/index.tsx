import Head from 'next/head';
import Menu from '../components/Menu';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome to Homepage</h1>
    </Layout>
  );
}
