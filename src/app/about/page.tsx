"use client"
import React from 'react'
import AboutComponent from '../components/AboutComponent'
import Navigation from '../components/Navigation'

export default function page() {
  return (
    <div className='bg-gray-100 relative'>
        <Navigation/>
        <main className="relative min-h-screen bg-[url('/assets/1.jpg')] bg-cover bg-center text-white flex flex-col justify-center p-8">
            <AboutComponent/>
        </main>
    </div>
  )
}
