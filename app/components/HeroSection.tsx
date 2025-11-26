"use client";

import React from "react";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (
    <section className="py-20 text-center border-b border-gray-800 overflow-hidden">
      <div 
        className="max-w-7xl mx-auto px-4 animate-slideUp opacity-0"
        style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
      >
        <h1 className="text-6xl font-extrabold leading-tight mb-4">
          Create Attraction.{" "}
          <span className="text-emerald-500">
            <Typewriter
              options={{
                strings: [
                  "Grow Your Business",
                  "Boost Your Sales",
                  "Increase Your Reach",
                  "Go Viral Instantly",
                ],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 70,
              }}
            />
          </span>{" "}
          with Reels.
        </h1>

        <p 
          className="text-gray-300 text-lg max-w-3xl mx-auto mb-10 animate-fadeIn opacity-0"
          style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
        >
          We help brands go viral with stunning, high-converting reel content.
        </p>

        <a
          href="#packages"
          className="inline-block bg-pink-600 px-8 py-3 rounded-xl text-white font-semibold hover:bg-pink-700 transition transform hover:scale-105 animate-fadeIn opacity-0"
          style={{ animationDelay: "1s", animationFillMode: "forwards" }}
        >
          View Packages
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
