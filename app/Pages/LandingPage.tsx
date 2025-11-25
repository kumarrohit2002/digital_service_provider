"use client";
import { useState } from 'react';
import { Camera, Zap, DollarSign, User, Mail, Send, CheckCircle, Tag, Package, Star } from 'lucide-react';

import { pricingPackages, adServices, portfolioItems } from "@/app/utils/data";

// === COMPONENT START ===

const App: React.FC = () => {
  // Updated state initialization to include 'phone' and use empty string defaults
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // Handling phone number input validation locally
    if (e.target.name === 'phone' && e.target.value.length > 10) {
        return; // Prevent input if longer than 10 digits
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // NOTE: Removed external API call logic to adhere to single-file, self-contained rule.
    // Simulating successful submission locally.
    console.log("Form Data Submitted (API Simulation):", formData);

    try {
        // Mock successful API response
        const mockSuccess = true; 

        if (mockSuccess) {
            setIsSubmitted(true);
            setFormData({ name: "", email: "", phone: "", message: "" });
            console.log("Message Sent Successfully!");
            
            // Show success message briefly
            setTimeout(() => setIsSubmitted(false), 3000);
        } else {
            // Replaced alert() with console log and local message
            console.error("Failed to send email/message.");
            // Optionally, set a local error state here
        }
    } catch (error) {
        console.error("Submission error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800 scroll-smooth">
      
      {/* Header/Navigation - Sticky and Responsive */}
      <header className="sticky top-0 z-20 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600 flex items-center">
            <Zap className="w-6 h-6 mr-2" />
            Reel-A-Thon
          </div>
          {/* Responsive Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <a href="#packages" className="text-gray-600 hover:text-indigo-600 transition duration-150 text-sm font-medium">Reel Packages</a>
            <a href="#services" className="text-gray-600 hover:text-indigo-600 transition duration-150 text-sm font-medium">Ad Services</a>
            <a href="#success" className="text-gray-600 hover:text-indigo-600 transition duration-150 text-sm font-medium">Success Metrics</a>
            <a href="#portfolio" className="text-gray-600 hover:text-indigo-600 transition duration-150 text-sm font-medium">Portfolio</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition duration-150 text-sm font-medium">Contact Us</a>
          </nav>
          <a href="#contact" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300 hidden md:block">
            Order Now
          </a>
          {/* Mobile menu icon (Placeholder for full implementation) */}
          <button className="md:hidden text-gray-600 hover:text-indigo-600 p-2 rounded-md">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </header>

      {/* Hero Section - Responsive Font Sizes */}
      <section className="bg-white py-16 sm:py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-4 animate-fadeInDown">
            Create Attraction. <span className="text-indigo-600">Grow Your Business</span> with Reels.
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto animate-fadeInUp">
            We create stunning, viral video reels for your customers. Give your products and services a powerful digital presence.
          </p>
          <a href="#packages" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl shadow-lg text-white bg-pink-600 hover:bg-pink-700 transition duration-300 transform hover:scale-105 animate-bounceIn">
            Get Started - View Packages
          </a>
        </div>
      </section>
      
      {/* Reel Showcase Section - Responsive Grid */}
      <section id="reel-showcase" className="py-12 sm:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
                <h2 className="text-base text-pink-600 font-semibold tracking-wide uppercase">Featured Viral Content</h2>
                <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
                    See Our Best Work in Action
                </p>
            </div>
            
            {/* Grid is single column on mobile, 3 columns on tablet/desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                    { title: "Trending Product", color: "bg-red-400" },
                    { title: "Client Success Story", color: "bg-purple-400" },
                    { title: "Service Explanation", color: "bg-green-400" }
                ].map((reel, index) => (
                    <div 
                        key={index} 
                        className={`relative h-96 w-full rounded-2xl shadow-2xl overflow-hidden transition duration-500 transform hover:scale-[1.03] ${reel.color} cursor-pointer group`}
                        onClick={() => console.log(`Attempted to play reel: ${reel.title}`)}
                    >
                        {/* Background Placeholder Image */}
                        <img 
                            src={`https://placehold.co/400x600/${reel.color.replace('bg-', '')}/ffffff?text=Video+${index + 1}`} 
                            alt={`Reel ${index + 1}`} 
                            className="absolute inset-0 w-full h-full object-cover -z-10 opacity-50 group-hover:opacity-70 transition duration-300"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.onerror = null;
                                target.src = "https://placehold.co/400x600/cccccc/333333?text=Video";
                              }}
                        />
                         {/* Mock Video Player Placeholder */}
                        <div className="flex flex-col justify-center items-center h-full w-full bg-black bg-opacity-40 p-4 group-hover:bg-opacity-50 transition duration-300">
                            {/* Pulsing icon for visual appeal */}
                            <Camera className="w-10 h-10 text-white animate-pulse" />
                            <p className="mt-4 text-white text-xl font-bold">{reel.title}</p>
                            <p className="text-white/80 text-sm">Tap to Watch (Placeholder)</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Social Proof Section - Responsive Grid */}
      <section id="success" className="py-16 sm:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base text-pink-600 font-semibold tracking-wide uppercase">Channel Worth & Impact</h2>
            <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
              Real Results. Measurable Impact.
            </p>
          </div>
          {/* Grid is 2 columns on mobile, 4 columns on tablet/desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            {/* Metric 1: Max Comments (Added hover animation) */}
            <div className="bg-indigo-50 p-6 rounded-2xl shadow-lg border-b-4 border-indigo-600 transition duration-300 hover:bg-indigo-100 hover:shadow-xl">
              <p className="text-3xl sm:text-4xl font-extrabold text-indigo-600">8.5K+</p>
              <p className="mt-2 text-sm sm:text-lg font-medium text-gray-700">Max Comments</p>
            </div>
            {/* Metric 2: Max Shares (Added hover animation) */}
            <div className="bg-indigo-50 p-6 rounded-2xl shadow-lg border-b-4 border-indigo-600 transition duration-300 hover:bg-indigo-100 hover:shadow-xl">
              <p className="text-3xl sm:text-4xl font-extrabold text-indigo-600">12K+</p>
              <p className="mt-2 text-sm sm:text-lg font-medium text-gray-700">Max Shares</p>
            </div>
            {/* Metric 3: Total Views (Added hover animation) */}
            <div className="bg-indigo-50 p-6 rounded-2xl shadow-lg border-b-4 border-indigo-600 transition duration-300 hover:bg-indigo-100 hover:shadow-xl">
              <p className="text-3xl sm:text-4xl font-extrabold text-indigo-600">1.5M+</p>
              <p className="mt-2 text-sm sm:text-lg font-medium text-gray-700">Total Views</p>
            </div>
            {/* Metric 4: Clients Served (Added hover animation) */}
            <div className="bg-indigo-50 p-6 rounded-2xl shadow-lg border-b-4 border-indigo-600 transition duration-300 hover:bg-indigo-100 hover:shadow-xl">
              <p className="text-3xl sm:text-4xl font-extrabold text-indigo-600">50+</p>
              <p className="mt-2 text-sm sm:text-lg font-medium text-gray-700">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section (Reel Packages) - Responsive Grid */}
      <section id="packages" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Best Deals</h2>
            <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
              Reel Packages & Pricing
            </p>
          </div>

          {/* Grid is single column on mobile, 3 columns on tablet/desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPackages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-3xl shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:${pkg.shadow}`}
              >
                <div className="flex items-center justify-center p-3 rounded-full w-12 h-12 mb-4 text-white" style={{ backgroundColor: pkg.color.replace('bg-', '') }}>
                  {pkg.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.reels} Reels Package</h3>
                <p className="text-gray-500 text-sm mb-4">{pkg.name}</p>

                <p className="text-4xl font-extrabold text-gray-900 mb-6">
                  ₹{pkg.price.toLocaleString('en-IN')}
                  <span className="text-xl font-medium text-gray-500"> / Only</span>
                </p>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="flex-shrink-0 w-5 h-5 text-green-500 mr-3 mt-1" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-xl text-white font-semibold transition duration-300 transform hover:scale-[1.02]`}
                  style={{ backgroundColor: pkg.color.replace('bg-', '') }}
                  onClick={() => console.log(`Selected ${pkg.reels} Reels Package`)}
                >
                  Order Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Services Section - Responsive Grid */}
      <section id="services" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base text-pink-600 font-semibold tracking-wide uppercase">Advertising Solutions</h2>
            <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
              Expert Videos for Product and Service Ads
            </p>
          </div>

          {/* Grid is single column on mobile, 2 columns on tablet/desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {adServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-start transition duration-300 hover:shadow-2xl"
              >
                <div className={`p-4 rounded-xl mb-4 ${service.color} shadow-lg`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                <button
                  className={`mt-auto px-6 py-2 rounded-lg text-white font-medium hover:opacity-90 transition duration-300`}
                  style={{ backgroundColor: service.color.replace('bg-', '') }}
                  onClick={() => console.log(`Selected ${service.title} Service`)}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section - Responsive Grid */}
      <section id="portfolio" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Previous Work</h2>
            <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
              Showcasing Our Success Stories
            </p>
          </div>
          
          {/* Grid is single column on mobile, 3 columns on tablet/desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden group transition duration-300 hover:shadow-2xl hover:border-b-4 border-indigo-400">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-48 object-cover transition duration-300 group-hover:scale-105"
                  // Fallback for image loading
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "https://placehold.co/400x300/cccccc/333333?text=Project+Image";
                  }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm font-semibold text-indigo-600 mb-3">Client: {item.client}</p>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  <button className="mt-4 text-indigo-600 font-medium hover:text-indigo-800 transition duration-150 flex items-center">
                    <Star className="w-4 h-4 mr-1"/> View Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 bg-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Talk to Us</h2>
            <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
              Contact Us for Your Next Project
            </p>
          </div>

          <div className="max-w-xl mx-auto bg-white p-8 rounded-3xl shadow-2xl">
            {isSubmitted ? (
              <div className="text-center p-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold text-gray-900">Thank You!</h3>
                <p className="text-gray-600">We have received your message. We will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                {/* Fixed Phone Number Input */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number (10 digits)</label>
                  <div className="mt-1">
                    <input
                      id="phone"
                      name="phone"
                      type="tel" // Use 'tel' for better mobile keyboard experience
                      pattern="[0-9]{10}" // HTML validation for 10 digits
                      maxLength={10}
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150"
                      placeholder="e.g. 9876543210"
                    />
                  </div>
                </div>
                {/* Fixed Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Project Details</label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150"
                      placeholder="I need information on the 7 Reels package and product advertising..."
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 transform hover:scale-[1.01]"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Reel-A-Thon. All rights reserved. |{" "}
            <span className="text-indigo-400">Grow Your Business Fast.</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;