"use client";
import { ArrowRight, MapPin } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 rounded-3xl overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
                  <circle cx="15" cy="15" r="2" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>

          {/* Glowing orbs */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-300 rounded-full opacity-20 blur-3xl -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-800 rounded-full opacity-30 blur-3xl translate-y-1/2" />

          <div className="relative px-8 py-16 lg:py-20 text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-8">
              <MapPin className="w-8 h-8 text-white" />
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto">
              Ready to Transform Your Fleet Management?
            </h2>
            <p className="text-brand-100 text-lg mb-10 max-w-2xl mx-auto">
              Join 1,200+ businesses already using FleetMTS to track smarter, save more, and scale faster. Start your free 14-day trial today.
            </p>

            {/* Input + CTA */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-1 px-5 py-4 rounded-xl text-slate-800 bg-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg"
              />
              <button className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-200 whitespace-nowrap group shadow-lg">
                Get Started Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-brand-100">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-brand-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                14-day free trial
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-brand-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-brand-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Cancel anytime
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-brand-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Setup in under 15 minutes
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
