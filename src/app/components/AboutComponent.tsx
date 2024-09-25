import React from 'react'

export default function AboutComponent() {
  return (
    <div>
        <div className="max-w-lg mx-auto p-6 bg-white bg-opacity-20 border border-white border-opacity-30 shadow-lg backdrop-blur-md rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">About Us</h2>
            <p className="text-white text-lg mb-4">
                Welcome to our company! We are passionate about delivering the best services and creating memorable experiences for our clients. Our team is dedicated to excellence and strives to innovate in everything we do.
            </p>
            <p className="text-white text-lg mb-4">
                Our mission is to provide high-quality products and services that meet the evolving needs of our customers, ensuring satisfaction and fostering long-term relationships.
            </p>
            <p className="text-white text-lg">
                We are committed to sustainability, growth, and positively impacting our community. Thank you for choosing to work with us!
            </p>
        </div>
    </div>
  )
}
