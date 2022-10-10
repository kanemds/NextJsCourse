import articleStyle from '../styles/Article.module.css'
import ArticleItem from './ArticleItem'

export const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyle.grid}>
      {articles.map(article => <ArticleItem key={article.id} article={article} />)}
    </div>
  )
}
