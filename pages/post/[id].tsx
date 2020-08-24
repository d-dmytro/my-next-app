import React from 'react';
import Layout from '../../components/Layout';
import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from 'next';
import { getPostById, getAllPosts } from '../../lib/db';
import { Post } from '../../types';

const SinglePost = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <h1>{post.title}</h1>
      <div>{post.content}</div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

  return {
    paths: posts.map((post) => {
      return { params: { id: `${post.id}` } };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ post: Post }> = async (
  context
) => {
  const id =
    typeof context.params?.id === 'string'
      ? parseInt(context.params.id, 10)
      : undefined;
  const post = id ? await getPostById(id) : undefined;
  if (!post) {
    throw new Error(`Post ${id} was not found.`);
  }
  return { props: { post } };
};

export default SinglePost;
