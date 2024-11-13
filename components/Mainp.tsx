// pages/index.tsx
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cool Website</title>
      </Head>
      <main className="font-poppins p-8 text-center">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-700 to-blue-600 text-white p-14 mb:p-24 rounded-lg mb-12 shadow-lg animate-fadeIn">
          <h1 className="text-5xl font-bold m-0">Welcome to Our Cool Website</h1>
          <p className="text-xl mt-6 font-normal text-gray-200">Dive into a world of creativity, innovation, and inspiration.</p>
        </section>

        {/* About Section */}
        <section className="my-12 text-gray-700 p-8 bg-gray-100 rounded-lg shadow-md animate-fadeIn">
          <h2 className='text-4xl mb-4'>About Us</h2>
          <p className='max-w-xl mx-auto text-lg text-gray-500 leading-relaxed'>
          Driven by creativity and a commitment to excellence, we strive to deliver work that's not only innovative
          but also meaningful and impactful.
          </p>
        </section>

        {/* Services Section */}
        <section className="mt-16">
          <h2 className='text-4xl mb-8'>Our Premium Services</h2>
          <div className="flex flex-col gap-6 items-center md:flex-row md:justify-center">
            <div className="bg-white p-10 rounded-lg shadow-lg max-w-sm w-full text-center transition-transform transform-gpu hover:-translate-y-2 hover:shadow-2xl animate-fadeInUp">
              <h3 className='text-2xl mb-4 text-gray-800'>Design</h3>
              <p className='text-base text-gray-500'>Crafting visually stunning designs that captivate and inspire.</p>
            </div>
            <div className="bg-white p-10 rounded-lg shadow-lg max-w-sm w-full text-center transition-transform transform-gpu hover:-translate-y-2 hover:shadow-2xl animate-fadeInUp">
              <h3 className='text-2xl mb-4 text-gray-800' >Development</h3>
              <p className='text-base text-gray-500' >Building responsive, high-performance websites tailored to your business.</p>
            </div>
            <div className="bg-white p-10 rounded-lg shadow-lg max-w-sm w-full text-center transition-transform transform-gpu hover:-translate-y-2 hover:shadow-2xl animate-fadeInUp">
              <h3 className='text-2xl mb-4 text-gray-800' >Consulting</h3>
              <p className='text-base text-gray-500' >Providing expert guidance to help you achieve your digital goals.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
