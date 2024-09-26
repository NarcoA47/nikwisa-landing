"use client"
import React from 'react'
import Navigation from '../components/Navigation'
import ContactForm from '../components/ContactForm'

export default function page() {
  return (
    <div>
        <Navigation/>
        <div className='bg-gray-100 relative'>
        <main className="relative min-h-screen bg-[url('/assets/1.jpg')] bg-cover bg-center text-white flex flex-col justify-center p-8">
        <ContactForm/>
        </main>
        </div>
    </div>
  )
}
