"use client";

import { useState } from "react";
import {
  Camera,
  Zap,
  Send,
  CheckCircle,
  Tag,
  Package,
  Star,
  TrendingUp,
  Menu,
  X,
} from "lucide-react";
import { toast } from "react-toastify";
import { pricingPackages, adServices, portfolioItems } from "@/app/utils/data";
import Image from "next/image";

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
      <header className="sticky top-0 z-20 bg-black/80 backdrop-blur-md border-b border-emerald-600 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

          {/* Logo */}
          <div className="text-2xl font-bold text-emerald-500 flex items-center">
            <Zap className="w-6 h-6 mr-2 text-emerald-400" />
            <Image src="/logoCreaton.jpg" alt="logo" width={120} height={50} className="h-auto w-auto"/>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.route}
                href={link.route}
                className="text-gray-300 hover:text-emerald-400 transition font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:block bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition"
          >
            Order Now
          </a>

          {/* Mobile Menu */}
          <button
            className="md:hidden text-gray-300 hover:text-emerald-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-emerald-600 shadow-lg">
            <nav className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.route}
                  href={link.route}
                  className="text-gray-300 hover:text-emerald-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-pink-600 text-white px-4 py-2 rounded-lg text-center"
              >
                Order Now
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* ================= HERO SECTION ================= */}
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

      {/* ================= REEL SHOWCASE ================= */}
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

                <div className="h-80 bg-gradient-to-b from-black/40 to-black flex flex-col items-center justify-center">
                  <Camera className="text-white w-10 h-10 mb-4 opacity-80" />
                  <p className="text-xl font-semibold">{reel.title}</p>
                  <p className="text-gray-400 text-sm">Tap to Watch (Preview)</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= AD SERVICES ================= */}
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

      {/* ================= METRICS ================= */}
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
      <footer className="py-8 bg-black border-t border-gray-800 text-center">
        <p className="text-gray-500">
          © {new Date().getFullYear()} Reel-A-Thon —{" "}
          <span className="text-emerald-500">Grow Your Business Fast.</span>
        </p>
      </footer>

    </div>
  );
};

export default App;
