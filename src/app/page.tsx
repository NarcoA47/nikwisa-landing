"use client";
import { useState } from "react";
import Head from "next/head";
import { Menu, X } from "react-feather"; // Icons for the hamburger and close button

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
      <header className="flex justify-between items-center p-6 bg-white shadow-md z-10 ">
        <div className="text-[#B88E2F] text-2xl font-bold">Nikwisa</div>

        <nav className="hidden md:flex space-x-8">
          <ul className="flex space-x-8">
            <li>
              <a href="#" className="text-gray-700 hover:text-black">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-black">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-black">
                Contact
              </a>
            </li>
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
              <li>
                <a href="#" className="text-gray-700 hover:text-black">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black">
                  Contact
                </a>
              </li>
            </ul>
            <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 mb-4">
              Waiting List
            </button>
          </nav>
        </div>
      )}

      {/* Main Content with full screen background */}
      <main className="relative min-h-screen bg-[url('/assets/1.jpg')] bg-cover bg-center text-black flex flex-col justify-center p-8">
        <div className="flex flex-col-reverse md:flex-row w-full md:w-11/12 m-auto">
          {/* Left-aligned text */}
          <div className="text-left  z-10 md:w-1/2 md:p-8 pt-10 flex flex-col  mr-20">
            <h1 className="capitalize text-4xl md:text-7xl font-bold">
              Discover the Best <span className="text-[#B88E2F]">Power</span>{" "}
              Solutions
            </h1>

            <p className="leading-loose max-w-md mt-4 ">
              Are you a skilled tasker, a trusted merchant, or a customer
              looking for the best products and services?
            </p>
            <div className="flex flex-col">
              <div className="flex">
                <button className="mt-8 px-8 py-3 bg-[#B88E2F] text-white rounded-lg hover:bg-gray-800 mr-8">
                  Taskers - Sign Up Now
                </button>
                <button className="mt-8 px-8 py-3 bg-[#B88E2F] text-white rounded-lg hover:bg-gray-80">
                  Merchants - Join Us
                </button>
              </div>

              <button className="mt-8 px-8 py-3 bg-[#B88E2F] text-white rounded-lg hover:bg-gray-80">
                Customers - Explore Our Marketplace
              </button>
            </div>
          </div>

          {/* Right banner (video section) */}
          <div className="md:w-1/2  p-8 flex items-center justify-center mt-8 md:mt-0 ml-20">
            <div className="w-full">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/PQ6KAe6T7FU?si=iO48ghjfpkq_Qxge"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
