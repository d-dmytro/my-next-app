import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Head from 'next/head';

const ProductCategory = () => {
  const router = useRouter();
  return (
    <Layout>
      <Head><title>Product Category</title></Head>
      <h1>Category {router.query.category}</h1>
      <button onClick={() => router.push('/')}>Homepage</button>
    </Layout>
  );
};

export default ProductCategory;
