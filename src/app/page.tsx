"use client"
import { useState } from 'react';
import Head from 'next/head';
import { Menu, X } from 'react-feather'; // Icons for the hamburger and close button

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 relative">
      <Head>
        <title>Join our waiting list</title>
        <meta name="description" content="We craft custom homes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-white shadow-md z-10">
        <div className="text-[#B88E2F] text-2xl font-bold">Nikwisa</div>
        <nav className="hidden md:flex space-x-8">
          <ul className="flex space-x-8">
            <li><a href="#" className="text-gray-700 hover:text-black">Home</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black">About</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black">Contact</a></li>
          </ul>
        </nav>
        <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 hidden md:block">
          Waiting List
        </button>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center bg-white shadow-md">
            <ul className="flex flex-col space-y-4 p-6">
              <li><a href="#" className="text-gray-700 hover:text-black">Home</a></li>
              <li><a href="#" className="text-gray-700 hover:text-black">About</a></li>
              <li><a href="#" className="text-gray-700 hover:text-black">Contact</a></li>
            </ul>
            <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 mb-4">
              Waiting List
            </button>
          </nav>
        </div>
      )}

      {/* Main Content with full screen background */}
      <main className="relative min-h-screen bg-[url('/assets/1.jpg')] bg-cover bg-center text-white flex flex-col justify-center p-8">
        {/* Left-aligned text */}
        <div className="text-left space-y-6 z-10 max-w-xl">
          <h1 className="text-5xl md:text-7xl font-bold">The perfect place to start looking</h1>
          <p className="text-xl md:text-2xl">We provide you with the best service and products.</p>
          <button className="mt-8 px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800">
            Watch now
          </button>
        </div>

        {/* Right banner (hidden on small screens) */}
        <div className="hidden md:block absolute right-8 top-1/4 bg-[#B88E2F] bg-opacity-70 p-8 rounded-lg w-72 text-center z-10">
          <h2 className="text-2xl font-semibold">Exclusive Offer</h2>
          <p className="mt-4 text-gray-800">Get a personalized consultation now.</p>
          <button className="mt-6 px-6 py-2 bg-black text-white rounded hover:bg-gray-800">
            Learn More
          </button>
        </div>

        {/* Bottom left banner */}
        <div className="absolute bottom-8 left-8 bg-[#B88E2F] bg-opacity-70 p-6 rounded-lg w-72 text-left z-10">
          <h3 className="text-xl font-semibold">Ready to make your dream home?</h3>
        </div>
      </main>
    </div>
  );
};

export default Home;
