import { useForm } from 'react-hook-form';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import Head from 'next/head';

interface Values {
  title: string;
  content: string;
}

const CreatePost = () => {
  const { register, handleSubmit } = useForm<Values>();
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>Create a Post</title>
      </Head>
      <form
        onSubmit={handleSubmit(async (values) => {
          await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values),
          });
          router.push('/');
        })}
      >
        <div>
          <label>Title</label>
          <input name="title" ref={register} />
        </div>
        <div>
          <label>Content</label>
          <textarea name="content" ref={register} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Layout>
  );
};

export default CreatePost;
