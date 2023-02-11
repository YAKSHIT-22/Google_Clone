import React from "react";
import Header from "../../components/Header";
import { getProviders, signIn } from "next-auth/react";
import Head from 'next/head'
import Footer from "../../components/Footer";

export default function signin({ providers }) {
  return (
    <>
       <Head>
        <title>Google</title>
        <meta name="description" content="Google clone made using Next.js, tailwindcss" />
        <link rel="icon" href="/favicon.png"/>
      </Head>
      <Header />
      <div className="mt-40 ">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="flex flex-col items-center">
            <img
            className="w-52 object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
              alt="google-logo"
            />
            <p className="text-sm  my-8 mx-5 px-2 text-center">This website is created for learning purposes</p>
            <button className="bg-blue-500 rounded-[4px] text-white p-3 hover:bg-blue-600 text-sm" onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
      <Footer/>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}