import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../lib/db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const id = req.query.id;
    const posts = await db.query<
      {
        id: number;
        title: string;
        content: string;
      }[]
    >('SELECT * FROM posts WHERE id = ?', [id]);
    await db.end();

    if (posts.length) {
      res.statusCode = 200;
      res.json(posts[0]);
    } else {
      res.statusCode = 404;
      res.json(null);
    }
  }
};
