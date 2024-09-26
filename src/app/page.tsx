"use client";
import React from "react";
import Navigation from "./components/Navigation";

const Home: React.FC = () => {
  return (
    <div>
      <Navigation />
      <main className="relative min-h-screen bg-[url('/assets/1.jpg')] bg-cover bg-center text-black flex flex-col justify-center p-8">
        <div className="flex flex-col-reverse md:flex-row w-full md:w-11/12 m-auto">
          {/* Left-aligned text */}
          <div className="text-left z-10 md:w-1/2 md:p-8 pt-10 flex flex-col md:mr-20">
            <div className="text-left z-10 md:w-full md:p-4 pt-4 flex flex-col bg-opacity-60 bg-white p-4 rounded-md">
              <h1 className="capitalize text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Discover the Best <span className="text-[#B88E2F]">Power</span>{" "}
                Solutions
              </h1>
              <p className="leading-relaxed max-w-md mt-4 text-sm md:text-base lg:text-lg">
                Are you a skilled tasker, a trusted merchant, or a customer
                looking for the best products and services?
              </p>
            </div>


            <div className="flex flex-col">
              <div className="flex flex-col md:flex-row md:justify-between">
                <button className="mt-8 px-9 py-2 bg-[#B88E2F] text-white rounded-lg hover:bg-gray-800 w-full md:flex-1 md:mx-2">
                  Taskers - Sign Up Now
                </button>
                <button className="mt-8 px-9 py-2 bg-[#B88E2F] text-white rounded-lg hover:bg-gray-800 w-full md:flex-1 md:mx-2">
                  Merchants - Join Us
                </button>
              </div>
              <button className="mt-8 px-9 py-2 bg-[#B88E2F] text-white rounded-lg hover:bg-gray-800 w-full md:w-auto md:mx-2">
                Customers - Explore Our Marketplace
              </button>
            </div>
          </div>

          {/* Right banner (video section) */}
          <div className="w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
            <div className="w-full md:w-10/12 lg:w-8/12">
              <div className="relative" style={{ paddingTop: "56.25%" }}>
                {/* 16:9 aspect ratio */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/PQ6KAe6T7FU?si=iO48ghjfpkq_Qxge"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
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
