import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/solid';
import Link from "next/link";
import {useRouter} from "next/router";

export default function PaginationButtons() {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 1;
  return (
    <div className="text-blue-700 flex items-center justify-between sm:justify-start sm:px-0 sm:gap-44 px-9 pb-4">
       {startIndex > 10 &&(
           <Link href={`/search?term=${router.query.term}&searchType=${router.query.searchType}&start=${startIndex-10}`}>
          
              <div className="cursor-pointer flex flex-col items-center hover:underline">
                <ChevronLeftIcon className="h-5 text-blue-500"/>
                <p>Previous</p>
              </div>
           </Link>
      )}
       
      {startIndex < 90 &&(
           <Link href={`/search?term=${router.query.term}&searchType=${router.query.searchType}&start=${startIndex+10}`}>
          
              <div className="cursor-pointer flex flex-col items-center hover:underline">
                <ChevronRightIcon className="h-5 text-blue-500"/>
                <p>Next</p>
              </div>
           </Link>
      )}
       
    </div>
  )
}
