import React from 'react'
import {  adServices} from "@/app/utils/data";

const AdServices = () => {
  return (
    <section id="services" className="py-20 bg-black border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="text-pink-500 font-semibold uppercase">Advertising Solutions</h2>
            <p className="text-4xl font-extrabold">Expert Video Services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {adServices.map((service, index) => (
              <div
                key={index}
                className="bg-black border border-gray-700 p-8 rounded-2xl shadow-lg hover:border-emerald-500 transition"
              >
                <div
                  className={`p-4 rounded-xl mb-4 ${service.color}`}
                >
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>

                <button
                  className="px-6 py-2 rounded-lg bg-pink-600 text-white font-medium hover:bg-pink-700 transition"
                  onClick={() => console.log(`Selected ${service.title}`)}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>
  )
}

export default AdServices