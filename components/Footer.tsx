// components/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-pink-800 text-indigo-100 py-8 text-center">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-6 md:flex-row md:justify-between md:px-8">
        <h1 className="text-lg font-bold text-blue-600">
          <Link href="/" className='text-inherit no-underline'>My Cool Website</Link>
        </h1>
        <nav className="flex gap-6">
          <Link href="/" className="text-gray-100 font-medium transition-colors duration-300 hover:text-blue-600 no-underline">Home</Link>
          <Link href="/about" className="text-gray-100 font-medium transition-colors duration-300 hover:text-blue-600 no-underline">About</Link>
          <Link href="/contact" className="text-gray-100 font-medium transition-colors duration-300 hover:text-blue-600 no-underline">Contact</Link>
        </nav>
        
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
