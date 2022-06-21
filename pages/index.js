import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import request from '../utlity/request'
import Result from '../components/Result'
export default function Home({results}) {
  return (
    <div>
      <Head>
        <title>HuluPk</title>
        <meta name="description" content="website Is Develop by Kashif" />
          <meta property="og:title" content="Check Trending Movies" />
        <meta property="og:image" content="https://www.istockphoto.com/photos/movie-theater" />
      </Head>
      {/* header of Website  */}
      <Header/>
      <Nav/>
      <Result results={results}/>
    </div>
  )
}
export async function getServerSideProps(context){
  const genre = context.query.genre;
  const reqt = await fetch(`https://api.themoviedb.org/3//trending/all/week?api_key=a521758a2308eeb39e03a4730afbd4bf&language=en-us`).then((res)=>res.json())
  if(genre!=null)
  { const reqt = await fetch(`https://api.themoviedb.org/3/${request[genre].url 
    || request.fetchTrending.url}`).then((res)=>res.json())
  }
  return {
    props:{
      results:JSON.parse(JSON.stringify(reqt.results)),
    }
  }
}
