import { articles } from '../../../data'


// path: http://localhost:3000/api/articles/id
// auto created 
export default function handler({ query: { id } }, res) {
  const filtered = articles.filter(article => article.id === id)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]) // <--- it's array
  } else {
    res.status(404).json({ message: `Article ${id} not found` })
  }
}