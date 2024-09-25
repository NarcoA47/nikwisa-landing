"use client"
import React from 'react';
import Navigation from './components/Navigation';

const Home: React.FC = () => {

  return (
    <div className=" bg-gray-100 relative">
      <Navigation/>
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
