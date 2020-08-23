import mysql from 'serverless-mysql';

const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  },
});

interface Post {
  id: number;
  title: string;
  content: string;
}

export const getAllPosts = async () => {
  const posts = await db.query<Post[]>('SELECT * FROM posts ORDER BY id DESC');
  await db.end();
  return posts.map(({ id, title, content }) => ({ id, title, content }));
};

export default db;
