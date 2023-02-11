import React from 'react'
import User from './User'

export default function Header() {
  return (
    <header className="flex items-center justify-center w-screen h-[10vh]">
      <nav className="flex justify-between py-4 px-3 sm:px-4 md:px-6 items-center w-screen text-sm text-gray-700">
        <div className="flex gap-2 sm:gap-4 items-center justify-center">
           <p className="link">About</p>
           <p className="link">Store</p>
        </div>
        <div className="flex gap-2 sm:gap-4 items-center justify-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <User/>
        </div>
        </nav>
    </header>
  )
}
