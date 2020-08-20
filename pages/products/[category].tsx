import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const ProductCategory = () => {
  const router = useRouter();
  return (
    <Layout>
      <h1>Category {router.query.category}</h1>
      <button onClick={() => router.push('/')}>Homepage</button>
    </Layout>
  );
};

export default ProductCategory;
