// pages/api/verify.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query;
  if (typeof url !== 'string') {
    return res.status(400).send('Missing or invalid magic link');
  }
  // Redirect the browser straight on to the Supabase URL
  res.redirect(302, decodeURIComponent(url));
}
