import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../lib/db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const posts = await db.query('SELECT * FROM posts');
  await db.end();
  res.statusCode = 200;
  res.json(posts);
};
