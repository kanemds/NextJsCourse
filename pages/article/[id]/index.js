import { useRouter } from 'next/router'
import Link from 'next/link'
import { server } from '../../../../config/index'
import Meta from '../../../components/Meta'


const article = ({ article }) => {

  // const router = useRouter()
  // const { id } = router.query

  return (
    <>
      <Meta title={article.title} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'>Back</Link>
    </>
  )
}

// caseOne this fetching when requested it
// export const getServerSideProps = async (conext) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${conext.params.id}`)

//   const article = await res.json()

//   return {
//     props:
//       { article }
//   }
// }

// getStaticPaths is called first. You return some options and an array of parameters to feed into getStaticProps.

// getStaticProps is then called once for each set of parameters you returned from getStaticPaths. 
// This step happens in parallel as well, to speed up the build.


export const getStaticProps = async (conext) => {
  const res = await fetch(`${server}/api/articles/${conext.params.id}`)

  const article = await res.json()

  return {
    props:
      { article }
  }
}


export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  const ids = articles.map(article => article.id)
  const paths = ids.map(id => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false // <--- giving 404 if not exist
  }
}

// // caseTwo faster this fetching once at the begenning
// export const getStaticProps = async (conext) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${conext.params.id}`)

//   const article = await res.json()

//   return {
//     props:
//       { article }
//   }
// }

// // getting all posts even though home page display limit of 6 
// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//   const articles = await res.json()

//   const ids = articles.map(article => article.id)
//   const paths = ids.map(id => ({ params: { id: id.toString() } }))

//   return {
//     paths,
//     fallback: false // <--- giving 404 if not exist
//   }
// }



export default article