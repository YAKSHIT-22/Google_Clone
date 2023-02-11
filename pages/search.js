import Head from "next/head";
import {useRouter} from "next/router";
import SearchHeader from "../components/SearchHeader";

export default function search() {
    const { query } = useRouter();
  return (
    <div>
    <Head>
    <title>{query.term} - Google Search</title>
        <meta name="description" content="Google clone made using Next.js, tailwindcss" />
        <link rel="icon" href="/favicon.png"/>
    </Head>
    <SearchHeader/>
    </div>
  )
}
