import React from 'react'

const Footer = () => {
  return (
    <footer className="py-8 bg-black border-t border-gray-800 text-center">
        <p className="text-gray-500">
          © {new Date().getFullYear()} Creaton —{" "}
          <span className="text-emerald-500">Grow Your Business Fast.</span>
        </p>
    </footer>
  )
}

export default Footer