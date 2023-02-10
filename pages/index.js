import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Google</title>
        <meta name="description" content="Google clone made using Next.js, Tailwindcss" />
        <link rel="icon" href="/favicon.png"/>
      </Head>
      <h1>Hello world!</h1>
    </div>
  )
}
