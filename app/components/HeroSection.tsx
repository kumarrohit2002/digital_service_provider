import React from 'react'

const HeroSection = () => {
  return (
    <section className="py-20 text-center border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-6xl font-extrabold leading-tight mb-4">
            Create Attraction.{" "}
            <span className="text-emerald-500">Grow Your Business</span> with Reels.
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10">
            We help brands go viral with stunning, high-converting reel content.
          </p>
          <a
            href="#packages"
            className="inline-block bg-pink-600 px-8 py-3 rounded-xl text-white font-semibold hover:bg-pink-700 transition transform hover:scale-105"
          >
            View Packages
          </a>
        </div>
      </section>
  )
}

export default HeroSection