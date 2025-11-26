import React from 'react'

import { Camera } from 'lucide-react';


const ReelsShowCase = () => {
  return (
    <section id="reel-showcase" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="text-pink-500 font-semibold uppercase">Featured Viral Content</h2>
            <p className="text-4xl font-extrabold">See Our Best Work</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Trending Product", color: "bg-emerald-600" },
              { title: "Client Success Story", color: "bg-emerald-700" },
              { title: "Service Explanation", color: "bg-emerald-800" },
            ].map((reel, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-lg border border-gray-700 transition hover:scale-[1.03]"
              >
                <div className={`h-3 w-full ${reel.color}`}></div>

                <div className="h-80 bg-linear-to-b from-black/40 to-black flex flex-col items-center justify-center">
                  <Camera className="text-white w-10 h-10 mb-4 opacity-80" />
                  <p className="text-xl font-semibold">{reel.title}</p>
                  <p className="text-gray-400 text-sm">Tap to Watch (Preview)</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
  )
}

export default ReelsShowCase