"use client";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rafiqul Islam",
    role: "Fleet Manager",
    company: "AceLogistics Ltd.",
    avatar: "RI",
    avatarColor: "#13b368",
    rating: 5,
    quote: "Geon VTS transformed how we manage our 80-vehicle fleet. Real-time tracking and instant alerts have reduced fuel costs by 23% in just 3 months.",
    highlight: "23% fuel cost reduction",
  },
  {
    name: "Nasrin Akter",
    role: "Operations Director",
    company: "SwiftCargo BD",
    avatar: "NA",
    avatarColor: "#0891b2",
    rating: 5,
    quote: "The reporting system is absolutely brilliant. We now generate driver performance and trip history reports in seconds. Our management loves the insights.",
    highlight: "Reports in seconds",
  },
  {
    name: "Md. Hasan Mahmud",
    role: "CEO",
    company: "RapidTrans Group",
    avatar: "HM",
    avatarColor: "#7c3aed",
    rating: 5,
    quote: "Setup took less than 20 minutes for all 30 vehicles. The customer support team was exceptional. Best investment we've made for our transport business.",
    highlight: "20-min full setup",
  },
  {
    name: "Tahmina Begum",
    role: "Admin Manager",
    company: "CityMove Dhaka",
    avatar: "TB",
    avatarColor: "#db2777",
    rating: 5,
    quote: "Managing drivers and devices is so simple now. The dashboard is clean and even our non-technical staff can use it without any training.",
    highlight: "Zero training needed",
  },
  {
    name: "Zahirul Karim",
    role: "IT Head",
    company: "MegaFleet Solutions",
    avatar: "ZK",
    avatarColor: "#ea580c",
    rating: 5,
    quote: "The API integration with our ERP system was seamless. Geon VTS's technical team provided excellent documentation and support throughout.",
    highlight: "Seamless API integration",
  },
  {
    name: "Shirina Khatun",
    role: "Transport Coordinator",
    company: "FleetPro BD",
    avatar: "SK",
    avatarColor: "#0d9488",
    rating: 5,
    quote: "Geofence alerts and speed notifications keep us compliant. We've reduced unauthorized vehicle usage by 40% since switching to Geon VTS.",
    highlight: "40% less unauthorized use",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-brand-600 uppercase tracking-widest mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Loved by Fleet Managers{" "}
            <span className="text-gradient">Across the Country</span>
          </h2>
          <p className="text-lg text-slate-600">
            See how businesses of all sizes are transforming their fleet operations with Geon VTS.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 border border-slate-100 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <Quote className="w-7 h-7 text-brand-200 mb-4 flex-shrink-0" />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote text */}
              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5">
                "{t.quote}"
              </p>

              {/* Highlight badge */}
              <div className="inline-flex items-center gap-1.5 bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 w-fit">
                ✓ {t.highlight}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: t.avatarColor }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom aggregate rating */}
        <div className="mt-16 bg-white rounded-2xl border border-slate-100 p-8 card-shadow">
          <div className="flex flex-col md:flex-row items-center justify-around gap-8 text-center">
            {[
              { value: "1,200+", label: "Businesses Served" },
              { value: "25,000+", label: "Vehicles Tracked" },
              { value: "4.9/5", label: "Average Rating" },
              { value: "98%", label: "Customer Satisfaction" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl font-bold text-brand-600">{s.value}</div>
                <div className="text-slate-500 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
