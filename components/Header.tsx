import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-pink-800 text-gray-100 py-4 shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-between items-center">
        <h1 className="md:text-2xl font-bold text-blue-600">
          <Link href="/">My Cool Website</Link>
        </h1>
        <nav className=" flex gap-6 text-sm md:text-lg font-bold px-2">
          <Link href="/" className="text-gray-100 font-medium transition-colors duration-300 hover:text-blue-600">Home</Link>
          <Link href="/about" className="text-gray-100 font-medium transition-colors duration-300 hover:text-blue-600">About</Link>
          <Link href="/contact" className="text-gray-100 font-medium transition-colors duration-300 hover:text-blue-600">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;