import Head from 'next/head'
import ArticleList from '../components/ArticleList'
import {server} from '../config'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home({ articles }) {

  // console.log(articles)

  return (
    <div>
      <Head>
        <title>WebDev newz</title>
        <meta name='keywords' content='web development, programming'/>
      </Head>
      <ArticleList articles={articles}/>
      <h1>Welcome to Next</h1>
    </div>
  )
}

export const getStaticProps = async () => {
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles,
    }
  }
}
