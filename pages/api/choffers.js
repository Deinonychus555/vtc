// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getChoffers } from '../../shared/choffers';

export default (req, res) => {
  res.status(200).json(getChoffers());
}
