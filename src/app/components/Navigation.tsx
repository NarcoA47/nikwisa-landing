import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link'; // Import the Link component from Next.js
import { Menu, X } from 'react-feather'; 

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="bg-gray-100 relative">
            <Head>
                <title>Join our waiting list</title>
                <meta name="description" content="We craft custom homes" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        
            {/* Header */}
            <header className="flex justify-between items-center p-6 bg-white shadow-md z-10">
                <div className="text-[#B88E2F] text-2xl font-bold">Nikwisa</div>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    <ul className="flex space-x-8">
                            <Link href="/">
                                <li className="text-gray-700 hover:text-black">Home</li>
                            </Link>
                            <Link href="/about">
                                <li className="text-gray-700 hover:text-black">About</li>
                            </Link>
                            <Link href="/contact">
                                <li className="text-gray-700 hover:text-black">Contact</li>
                            </Link>
                    </ul>
                </nav>
                
                {/* Waiting List Button */}
                <div className='flex justify-between'>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfjzeDgHSPxd5wApJkwFfujStSG16ZJSO_EQffaGU3BjFKTGA/viewform?usp=sf_link" className="mx-6 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 hidden md:block">
                        Join the Team
                    </a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfjiExUv16wIlJQjGjZpU9qo8w75g6vql3VT95SIzjFNKscIA/viewform?usp=sf_link" className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 hidden md:block">
                        Join the Vendors
                    </a>
                </div>

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
                    <nav className="flex flex-c items-center bg-white shadow-md">
                        <ul className="flex flex-col space-y-4 p-6">
                           
                                <Link href="/">
                                    <li className="text-gray-700 hover:text-black">Home</li>
                                </Link>
                    
                                <Link href="/about">
                                    <li className="text-gray-700 hover:text-black">About</li>
                                </Link>
                                <Link href="/contact">
                                    <li className="text-gray-700 hover:text-black">Contact</li>
                                </Link>

                                <li>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfjzeDgHSPxd5wApJkwFfujStSG16ZJSO_EQffaGU3BjFKTGA/viewform?usp=sf_link" className=" px-6 py-2 bg-black text-white rounded hover:bg-gray-800 hidden md:block">
                                    Join the Team
                                </a>
                                </li>
                                
                        </ul>
                        
                    </nav>
                </div>
            )}
        </div>
    );
}
