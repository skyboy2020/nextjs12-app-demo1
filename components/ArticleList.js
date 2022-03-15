import articleStyles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem'


const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
        {articles.map((article) => (
            
        //    <h3 key={article.title}> {article.title} </h3>  

           <ArticleItem key={article.id}  article={article} />
        ))}
    </div>
  )
}

export default ArticleList
