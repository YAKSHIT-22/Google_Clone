import {useRouter} from "next/router";

export default function SearchHeaderOption({title,Icon,selected}) {
    const router = useRouter();
    function selectTab(title){
         router.push(`/search?term=${router.query.term}&searchType=${title.toLowerCase()}`)
    }
  return (
    <div onClick={()=>selectTab(title)} className={`flex items-center justify-start gap-1 hover:text-blue-500 cursor-pointer hover:border-blue-500 pb-2 transition duration-500 ease-in-out ${selected && "text-blue-500 border-blue-500 border-b-4 transition duration-500 ease-in-out"}`}>
        <Icon className="h-4"/>
        <p>{title}</p>
    </div>
  )
}
