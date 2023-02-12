import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import {SearchIcon, MicrophoneIcon} from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { useRef } from 'react';

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  function search(event){
    event.preventDefault();
    const term = searchInputRef.current.value;
    if(!term.trim()) return;
    router.push(`/search?term=${term.trim()}&searchType=`);
  }
 async function randomSearch(event){
    event.preventDefault();
    const randomTerm = await fetch(`https://random-word-api.herokuapp.com/word?number=1
    `).then((response)=>response.json());
    if(!randomTerm) return;
    router.push(`/search?term=${randomTerm}&searchType=`);
  }
  return (
    <div >
      <Head>
        <title>Google</title>
        <meta name="description" content="Google clone made using Next.js, tailwindcss" />
        <link rel="icon" href="/favicon.png"/>
      </Head>
      <Header/>
      <main className="flex items-center justify-center w-screen h-[80vh]">      
        <form className='flex flex-col gap-5 items-center justify-center h-full p-4 sm:p-2 w-screen'>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" width="300" height="100" objectFit='cover' alt="google logo"/>
        <div className="flex items-center justify-center mx-auto max-w-full sm:max-w-[75%] md:max-w-[60%] lg:max-w-[50%] w-full border border-gray-200 rounded-full px-2 py-4 xs:p-4 gap-2">   
             <div className="h-5 flex items-center justify-center"><SearchIcon className='h-5 text-gray-500' /></div>
              <input ref={searchInputRef} type="text" className='w-full focus:outline-none'/>
              <div className="h-5 flex items-center justify-center"><MicrophoneIcon className='h-5 text-gray-500'/></div>
           </div>
         <div className='flex flex-row items-center justify-center gap-6 text-sm mt-2'>  
        <button onClick={search} className="btn">Google Search</button>
        <button onClick={randomSearch} className="btn">&apos;I'm Feeling Lucky</button>
        </div>
      </form>
      </main>
      <Footer/>
    </div>
  )
}
