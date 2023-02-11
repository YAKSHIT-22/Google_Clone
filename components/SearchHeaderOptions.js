import SearchHeaderOption from "./SearchHeaderOption";
import {SearchIcon, PhotographIcon} from "@heroicons/react/outline";
import {useRouter} from "next/router";

export default function SearchHeaderOptions() {
  const router = useRouter();
  return (
    <div className="flex gap-8 items-center select-none w-full text-sm text-gray-700 justify-start pl-8 sm:pl-[10.6rem] md:pl-44 border-b mt-1 transition duration-500 ease-in-out">
        <SearchHeaderOption title="All" Icon={SearchIcon} selected={router.query.searchType==="" || !router.query.searchType || router.query.searchType=="all"} />
        <SearchHeaderOption title="Images" Icon={PhotographIcon} selected={router.query.searchType==="images"}/>
    </div>
  )
}
