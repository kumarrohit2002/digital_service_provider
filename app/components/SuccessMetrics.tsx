import React from 'react'

const SuccessMetrics = () => {
  return (
    <section id="success" className="py-20">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="text-pink-500 font-semibold uppercase">Channel Impact</h2>
            <p className="text-4xl font-extrabold">Real Results</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Max Comments", value: "8.5K+" },
              { label: "Max Shares", value: "12K+" },
              { label: "Total Views", value: "1.5M+" },
              { label: "Happy Clients", value: "50+" },
            ].map((metric, i) => (
              <div
                key={i}
                className="bg-black rounded-2xl border border-emerald-600 p-6 text-center hover:shadow-emerald-600/30 transition"
              >
                <p className="text-emerald-500 text-4xl font-extrabold">
                  {metric.value}
                </p>
                <p className="text-gray-300 mt-2">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default SuccessMetrics;