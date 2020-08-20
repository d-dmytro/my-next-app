import { useRouter } from 'next/router';

const ProductCategory = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Category {router.query.category}</h1>
      <button onClick={() => router.push('/')}>Homepage</button>
    </div>
  );
};

export default ProductCategory;
