"use client";

import LandingPage from "./Pages/LandingPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <div>
      <ToastContainer />
      <LandingPage />
    </div>
  );
}
