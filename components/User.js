import {useSession, signIn, signOut} from 'next-auth/react';

export default function User({className}) {
    const {data:session} = useSession();
    if(session){
        return (
           <div className={`${className}`}>
             <img onClick={signOut} src={session.user.image} alt="user image" className={`h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer p-1 ${className}`}/>
           </div>
        )
    }
  return (
    <>
    <button onClick={signIn} className={`bg-blue-500 text-white text-sm font-medium rounded-md hover:brightness-105 hover:shadow-md p-2 sm:p-3 ${className}`}>Sign In</button>
    </>
  )
}
