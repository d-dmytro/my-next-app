import { NextApiRequest, NextApiResponse } from 'next';
import db, { getPostById } from '../../../lib/db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const id =
      typeof req.query.id === 'string' ? parseInt(req.query.id, 10) : undefined;
    const post = id ? await getPostById(id) : undefined;

    if (post) {
      res.statusCode = 200;
      res.json(post);
    } else {
      res.statusCode = 404;
      res.json(null);
    }
  }
};
