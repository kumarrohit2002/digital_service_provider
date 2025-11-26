"use client";

import { useState } from "react";
import {Send,CheckCircle,Star} from "lucide-react";
import { toast } from "react-toastify";
import { pricingPackages, adServices, portfolioItems } from "@/app/utils/data";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SuccessMetrics from "../components/SuccessMetrics";
import ReelsShowCase from "../components/ReelsShowCase";
import Footer from "../components/Footer";

const App: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.name === "phone" && e.target.value.length > 10) return;
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        toast.success("Message sent successfully!");
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        toast.error("Email sending failed");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const navLinks = [
    { name: "Reel Packages", route: "#packages" },
    { name: "Ad Services", route: "#services" },
    { name: "Success Metrics", route: "#success" },
    { name: "Portfolio", route: "#portfolio" },
    { name: "Contact Us", route: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans scroll-smooth">

      {/* ================= HEADER ================= */}

      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>

      {/* ================= HERO SECTION ================= */}
      
      <HeroSection/>

      {/* ================= REEL SHOWCASE ================= */}
      
      <ReelsShowCase/>

      {/* ================= AD SERVICES ================= */}
      

      {/* ================= METRICS ================= */}
      
      <SuccessMetrics/>

      {/* ================= PACKAGES ================= */}
      
      <section id="packages" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="text-emerald-500 font-semibold uppercase">Our Packages</h2>
            <p className="text-4xl font-extrabold">Reel Deals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {pricingPackages.map((pkg, idx) => (
              <div
                key={idx}
                className="bg-black border border-gray-700 rounded-3xl p-8 shadow-xl hover:border-emerald-500 transition"
              >
                <div
                  className="h-14 w-14 flex items-center justify-center rounded-full mb-4"
                  style={{ backgroundColor: pkg.color.replace("bg-", "") }}
                >
                  {pkg.icon}
                </div>

                <h3 className="text-2xl font-bold">{pkg.reels} Reels</h3>
                <p className="text-gray-400 mb-4">{pkg.name}</p>

                <p className="text-4xl font-extrabold mb-6">
                  ₹{pkg.price.toLocaleString("en-IN")}
                </p>

                <ul className="space-y-3 text-gray-300 mb-6">
                  {pkg.features.map((f: string, i: number) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="text-emerald-500 w-5 h-5 mr-3" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  className="w-full bg-pink-600 py-3 rounded-xl font-semibold hover:bg-pink-700 transition"
                >
                  Order Now
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= PORTFOLIO ================= */}
      <section id="portfolio" className="py-20 bg-black border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="text-emerald-500 font-semibold uppercase">Our Work</h2>
            <p className="text-4xl font-extrabold">Success Stories</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="bg-black border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:border-emerald-500 transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover hover:scale-105 transition duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/400x300/333/fff?text=No+Image";
                  }}
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-emerald-500 font-semibold mt-1">
                    Client: {item.client}
                  </p>
                  <p className="text-gray-300 text-sm mt-2">{item.description}</p>

                  <button className="mt-4 text-emerald-500 hover:text-emerald-300 flex items-center">
                    <Star className="w-4 h-4 mr-2" /> View Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="text-emerald-500 font-semibold uppercase">Contact Us</h2>
            <p className="text-4xl font-extrabold">Let’s Work Together</p>
          </div>

          <div className="max-w-xl mx-auto bg-black border border-emerald-600 p-8 rounded-3xl shadow-emerald-500/20">
            {isSubmitted ? (
              <div className="text-center py-10">
                <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold">Thank You!</h3>
                <p className="text-gray-400 mt-2">
                  We will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                  <label className="text-gray-300">Full Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-gray-700 text-white px-4 py-3 rounded-xl focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-gray-300">Phone (10 digits)</label>
                  <input
                    name="phone"
                    type="tel"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-gray-700 text-white px-4 py-3 rounded-xl focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-gray-300">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-gray-700 text-white px-4 py-3 rounded-xl focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-gray-300">Project Details</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-gray-700 text-white px-4 py-3 rounded-xl focus:border-emerald-500 focus:outline-none"
                  ></textarea>
                </div>

                <button className="w-full bg-pink-600 py-3 rounded-xl font-semibold hover:bg-pink-700 transition flex items-center justify-center">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>

              </form>
            )}
          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer/>

    </div>
  );
};

export default App;
