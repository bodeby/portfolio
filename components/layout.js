import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { SocialBar } from './SocialBar';

const name = 'Frederik Bode 👋';
export const siteTitle = 'Frederik Bode';

export default function Layout({ children, home }) {
  return (
    <div className='max-w-xl px-4 mt-0 mx-auto mb-24'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Personal developer page of Frederik Bode"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className='flex flex-col items-center'>
        <SocialBar />
        {home ? (
          <>
            <Image
              priority
              src="/images/user_pic.jpg"
              className={'rounded-full'}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={'text-4xl font-bold py-6'}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/user_pic.jpg"
                  className='rounded-full'
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className='py-4 text-2xl'>
              <Link href="/">
                <a className=''>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>

      <main className='mt-4'>{children}</main>

      {!home && (
        <div className='mt-12 mx-0 mb-0'>
          <Link href="/">
            <a className='text-blue-500'>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
