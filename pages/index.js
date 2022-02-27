import Head from "next/head";
import Layout from "../sections/Layout";

export default function Home() {
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

          <button onClick={null} className='bg-blue-600 text-white px-6'>
            Start you blog for free
          </button>
        </section>
      </Layout>
    </div>
  );
}
