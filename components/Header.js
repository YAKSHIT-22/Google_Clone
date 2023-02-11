import Link from 'next/link'
import React from 'react'
import User from './User'
import {useRouter} from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <header className="flex items-center justify-center w-screen h-[10vh]">
      <nav className="flex justify-between py-4 px-3 sm:px-4 md:px-6 items-center w-screen text-sm text-gray-700">
        <div className="flex gap-2 sm:gap-4 items-center justify-center">
         <Link href="https://about.google/">
           <p className="link">About</p>
         </Link>
         <Link href="https://store.google.com/">
           <p className="link">Store</p>
          </Link>
        </div>
        <div className="flex gap-2 sm:gap-4 items-center justify-center">
          <Link href="https://mail.google.com">
          <p className="link">Gmail</p>
          </Link>
          
          <p onClick={()=>router.push(`/search?term=${router.query.term || "google"}&searchType=images`)} className="link">Images</p>
          <User/>
        </div>
        </nav>
    </header>
  )
}
