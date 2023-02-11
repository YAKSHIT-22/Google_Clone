import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import User from "./User";
import SearchHeaderOptions from "./SearchHeaderOptions";

export default function SearchHeader() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  function search(e){
    e.preventDefault();
    const term = searchInputRef.current.value;
    if(!term.trim()) return;
    router.push(`/search?term=${term.trim()}`);
  }
  return (
    <>
    <header className="sticky top-0 bg-white w-screen items-center justify-center hidden sm:flex">
      <div className="flex w-full p-6 items-center">
        
        <div className="flex items-center justify-center"><Image
          onClick={() => router.push("/")}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          width="120"
          height="40"
          className="cursor-pointer w-[40] h-[20] sm:w-[80] sm:h-[30] md:w-[120]"
          objectFit="contain"
        />
       </div>
        <form className="flex items-center justify-center gap-2 border border-gray-200 rounded-full p-4 ml-5 mr-5 flex-grow max-w-3xl">
          <input
            type="text"
            defaultValue={router.query.term}
            ref={searchInputRef}
            className="w-full focus:outline-none"
          />
          <XIcon onClick={()=>(searchInputRef.current.value="")} className="h-7 sm:mr-3 text-gray-500 cursor-pointer" />
          <MicrophoneIcon className="h-6 hidden sm:inline-flex text-blue-500 cursor-pointer transition duration-100 pl-4 border-l-2 border-gray-300" />
          <SearchIcon className="h-6 hidden sm:inline-flex text-blue-500 cursor-pointer" />
          <button type="submit" hidden onClick={search}></button>
        </form>
        <User className="ml-auto whitespace-nowrap" />
      </div>
    </header>
    <header className="sticky top-0 bg-white w-screen flex items-center justify-center sm:hidden">
      <div className="flex w-screen p-4 items-center justify-center flex-col gap-3">
        <div className="flex items-center justify-between w-full p-2">
        <div className="flex items-center justify-center p-2">
          <Image
          onClick={() => router.push("/")}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          width="120"
          height="40"
          className="cursor-pointer w-[40] h-[20] sm:w-[60] sm:h-[30]"
          objectFit="contain"
        />
       </div>
       
        <User className="ml-auto whitespace-nowrap" />
        </div>
        <div className="flex items-center justify-center w-full">
        <form className="flex items-center justify-center gap-2 border border-gray-200 rounded-full p-4 mx-2 flex-grow max-w-3xl">
          <input
            type="text"
            defaultValue={router.query.term}
            ref={searchInputRef}
            className="w-full focus:outline-none"
          />
          <XIcon onClick={()=>(searchInputRef.current.value="")} className="h-7 sm:mr-3 text-gray-500 cursor-pointer" />
          <MicrophoneIcon className="h-6 hidden sm:inline-flex text-blue-500 cursor-pointer transition duration-100 pl-4 border-l-2 border-gray-300" />
          <SearchIcon className="h-6 hidden sm:inline-flex text-blue-500 cursor-pointer" />
          <button type="submit" hidden onClick={search}></button>
        </form>
        </div>
      </div>
    </header>
    <SearchHeaderOptions/>
    </>
  );
}
