"use client"
import React from 'react'
import Navigation from './components/Navigation';

const Home: React.FC = () => {

  return (
    
      <div>
      <Navigation/>
      <main className="relative min-h-screen text-black flex flex-col p-4 md:p-8">
        <div className="w-full h-screen bg-[url('/assets/1.jpg')] bg-cover bg-center"></div>
        
        <div className="flex flex-col-reverse md:flex-row w-full md:w-11/12 m-auto mt-8">
          <div className="text-left z-10 md:w-1/2 md:p-8 pt-6 md:pt-10 flex flex-col mr-0 md:mr-20">
            <h1 className="capitalize text-3xl md:text-5xl lg:text-7xl font-bold leading-tight">
              Discover the Best <span className="text-[#B88E2F]">Power</span> Solutions
            </h1>

            <p className="leading-relaxed max-w-md mt-4 text-sm md:text-base lg:text-lg">
              Are you a skilled tasker, a trusted merchant, or a customer looking for the best products and services?
            </p>
          </div>
          <div className="flex flex-col mt-4 space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfjiExUv16wIlJQjGjZpU9qo8w75g6vql3VT95SIzjFNKscIA/viewform?usp=sf_link">
              <button className="px-6 py-3 bg-[#B88E2F] text-white rounded-lg hover:bg-gray-800 w-full md:w-auto">
                Taskers - Sign Up Now
              </button>
            </a>

            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeXNOrVkqPQ85PIngi7Grsx3Z1M-Hgj6NgHQ6mVfhwzpfIxdw/viewform?usp=sf_link">
              <button className="px-6 py-3 bg-[#B88E2F] text-white rounded-lg hover:bg-gray-800 w-full md:w-auto">
                Merchants - Join Us
              </button>
            </a>

            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfjzeDgHSPxd5wApJkwFfujStSG16ZJSO_EQffaGU3BjFKTGA/viewform?usp=sf_link">
              <button className="mt-4 px-6 py-3 bg-[#B88E2F] text-white rounded-lg hover:bg-gray-800 w-full md:w-auto">
                Customers - Explore Our Marketplace
              </button>
            </a>
          </div>

          <div className="md:w-1/2 p-4 md:p-8 flex items-center justify-center mt-8 md:mt-0">
            <div className="w-full">
              <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  src="https://www.youtube.com/embed/PQ6KAe6T7FU?si=iO48ghjfpkq_Qxge"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
