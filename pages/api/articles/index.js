import { articles } from '../../../data'


// path: http://localhost:3000/api/articles
// auto created 
export default function handler(req, res) {
  res.status(200).json(articles)
}