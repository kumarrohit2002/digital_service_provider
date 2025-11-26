"use client";

import { useEffect } from "react";
import LandingPage from "./Pages/LandingPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {

  // ================= Scroll Reveal Animation =================
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 120) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <div className="page-fade min-h-screen bg-black text-white">
      {/* Toast Messages */}
      <ToastContainer theme="dark" autoClose={2500} />

      {/* Main Landing Page */}
      <LandingPage />
    </div>
  );
}
