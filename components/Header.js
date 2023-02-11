import React from 'react'
import User from './User'

export default function Header() {
  return (
    <header className="flex items-center justify-center p-1 w-screen">
      <nav className="flex justify-between p-5 items-center w-screen text-sm text-gray-700">
        <div className="flex gap-4 items-center justify-center p-1">
           <p className="link">About</p>
           <p className="link">Store</p>
        </div>
        <div className="flex gap-4 items-center justify-center p-1">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <User/>
        </div>
        </nav>
    </header>
  )
}
