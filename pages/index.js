import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { Tools } from '../components/tools'
import { Project } from '../components/project'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={'mb-12 text-xl font-thin'}>
        <p>Hello, I’m Frederik. I’m a software engineering student with a passion for web-based development. You can contact me on  
          <a href='https://www.linkedin.com/in/frederik-bode-thorbensen/' target={'_blank'} className='text-blue-500 ml-1'>Linkedin</a>.</p>
      </section>

      <section className='space-y-4 mt-4'>
        <h2 className={'text-2xl font-bold'}>Projects</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Project data={"Priotool"} />
          <Project data={"Sustainify"} />
          <Project data={"SmukDesk"} />
          <Project data={"WPA widget"} />
        </div>
      </section>

      <section className={`space-y-4 mt-4`}>
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
