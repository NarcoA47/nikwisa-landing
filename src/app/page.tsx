"use client"
import React from 'react'
import Navigation from './components/Navigation';

const Home: React.FC = () => {

  return (
    
      <div>
      <Navigation/>
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
