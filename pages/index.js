import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head> 
        <title>{siteTitle}</title>
      </Head>
      <section className={'mb-12 text-xl'}>
        <p>Hello, I’m Frederik. I’m a software engineer and a translator (English/Japanese). You can contact me on Twitter.</p>
      </section>
      <section className={`space-y-4`}>
        <h2 className={'text-2xl font-bold'}>Blog</h2>
        <ul className={'space-y-4 text-lg'}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={''} key={id}>
              <Link href={`/posts/${id}`}>
                <a className='text-xl text-blue-500'>{title}</a>
              </Link>
              <br />
              <small className={'text-md text-gray-500'}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
