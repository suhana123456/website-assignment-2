// pages/about.tsx
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <main className="font-poppins p-8 text-center">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-pink-700 to-blue-600 text-white p-14 mb:p-24 rounded-lg mb-12 shadow-lg ">
          <h1 className="text-5xl font-bold m-0">About Us</h1>
          <p className="text-xl mt-6 font-normal text-gray-200">
          Staying relevant has never been more important in these fast changing times.so, I am working on myself according to the advance technology
          so that I can also move in our society confidently. I am making my grip in learning Node js, Next js, react, Javascript and so on. So that
          I can help everyone accordingly. 
          </p>
        </section>

        {/* Company Overview Section */}
        <section className="my-12 p-8 bg-gray-100 rounded-lg shadow-md">
          <h2 className='text-4xl mb-4'>Our Mission</h2>
          <p className='max-w-xl mx-auto text-lg text-gray-500 leading-relaxed'>
          My mission is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor,and some style.
          My goal is to provide outstanding products and services that bring value to our clients. 
          </p>
        </section>

      </main>
    </>
  );
}