import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import {SearchIcon, MicrophoneIcon} from '@heroicons/react/solid';

export default function Home() {
  return (
    <div >
      <Head>
        <title>Google</title>
        <meta name="description" content="Google clone made using Next.js, tailwindcss" />
        <link rel="icon" href="/favicon.png"/>
      </Head>
      <Header/>
      <main className="flex items-center justify-center w-screen h-[80vh]">      
        <form className='flex flex-col gap-5 items-center justify-center  p-4 sm:p-2 w-screen'>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" width="300" height="100" objectFit='cover'/>
        <div className="flex items-center justify-center mx-auto  sm:max-w-[75%] md:max-w-[50%] w-full border border-gray-200 rounded-full p-4">   
              <SearchIcon className='h-5 text-gray-500 mr-2' />
              <input type="text" className='flex-grow focus:outline-none'/>
              <MicrophoneIcon className='h-5 text-gray-500 ml-2'/>
           </div>
         <div className='flex flex-row items-center justify-center gap-6 text-sm mt-2'>  
        <button className="btn">Google Search</button>
        <button className="btn">I'm Feeling Lucky</button>
        </div>
      </form>
      </main>
      <Footer/>
    </div>
  )
}
