import Head from "next/head";
import Link from "next/link";
import { PencilIcon } from "@heroicons/react/outline";
import { useSession, signIn } from "next-auth/react";

import React from "react";

import Layout from "../sections/Layout";

function Home() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  return (
    <div>
      <Layout>
        <section className='flex flex-col justify-center items-center space-y10 mt-12 sm:mt-24 md:mt32'>
          <div>
            <h1>
              <span>The blogging platform</span>
              <span>for developers</span>
            </h1>
            <h2>Start your developer blog, share ideas & connect!</h2>
          </div>
          {loading ? null : !session ? (
            <button onClick={null} className='bg-blue-600 text-white px-6'>
              Start you blog for free
            </button>
          ) : (
            <Link href='/'>
              <a>
                <PencilIcon className='w-6 h-6 flex-shrink-0' />
                <span>Write a blog post</span>
              </a>
            </Link>
          )}
        </section>
      </Layout>
    </div>
  );
}

export default Home;
