"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (scrollY / height) * 100;

      setScrollProgress(progress);
      setShowButton(scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-3 right-3 md:right-6 md:bottom-6 z-50 transition-all duration-300
      ${showButton
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5 pointer-events-none"
        }`}
    >
      <button
        onClick={scrollToTop}
        className="relative flex items-center justify-center
        w-9 h-9 md:w-11 md:h-11
        rounded-full
        bg-brand-500
        hover:bg-brand-600
        text-white
        shadow-lg shadow-brand-500/30
        backdrop-blur
        transition-all duration-300
        hover:scale-110"
      >
        {/* Progress Ring */}
        <svg
          className="absolute w-full h-full rotate-[-90deg]"
          viewBox="0 0 60 60"
        >
          <circle
            cx="30"
            cy="30"
            r={radius}
            strokeWidth="3"
            stroke="rgba(255,255,255,0.25)"
            fill="transparent"
          />

          <circle
            cx="30"
            cy="30"
            r={radius}
            strokeWidth="3"
            stroke="white"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>

        <ArrowUp size={18} className="relative z-10" />
      </button>
    </div>
  );
}