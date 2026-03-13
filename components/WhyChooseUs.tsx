"use client";
import { Clock, Globe, LayoutDashboard, Server, Shield, Zap } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Bank-grade encryption for all data in transit and at rest. SOC 2 compliant infrastructure with 99.9% uptime SLA.",
    stat: "99.9%",
    statLabel: "Uptime Guaranteed",
  },
  {
    icon: Zap,
    title: "Real-time Data Sync",
    description: "Vehicle positions update every 10 seconds. Instant alerts ensure you never miss a critical event across your fleet.",
    stat: "10s",
    statLabel: "Update Interval",
  },
  {
    icon: Server,
    title: "Scalable SaaS Infrastructure",
    description: "Scales seamlessly from 1 vehicle to 10,000+. Auto-scaling cloud architecture means you never hit a wall.",
    stat: "10K+",
    statLabel: "Vehicles Supported",
  },
  {
    icon: LayoutDashboard,
    title: "User-Friendly Dashboard",
    description: "Designed for non-technical users. Clean, intuitive interface so your team can get insights without training.",
    stat: "5min",
    statLabel: "Avg. Onboarding Time",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support via live chat, email, and phone. Our team is always ready to help your business.",
    stat: "< 2hr",
    statLabel: "Avg. Response Time",
  },
  {
    icon: Globe,
    title: "Multi-Region Coverage",
    description: "Works anywhere in the world. Our network supports vehicles across different countries and carrier networks.",
    stat: "50+",
    statLabel: "Countries Covered",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: "radial-gradient(circle at 25% 25%, #13b368 0%, transparent 50%), radial-gradient(circle at 75% 75%, #087344 0%, transparent 50%)"
        }} />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-900 rounded-full opacity-20 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-brand-400 uppercase tracking-widest mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Built for Businesses That{" "}
            <span className="text-brand-400">Demand More</span>
          </h2>
          <p className="text-lg text-slate-400">
            FleetMTS is not just another GPS tracker. It's a complete fleet intelligence platform designed with enterprise reliability and startup agility.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group relative bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-brand-700 rounded-2xl p-6 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-900/50 group-hover:bg-brand-900 border border-brand-800 flex items-center justify-center flex-shrink-0 transition-colors">
                    <Icon className="w-6 h-6 text-brand-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg font-bold text-white mb-2">{reason.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </div>

                {/* Stat */}
                <div className="mt-6 pt-4 border-t border-slate-700/50 flex items-end gap-2">
                  <span className="font-display text-3xl font-bold text-brand-400">{reason.stat}</span>
                  <span className="text-sm text-slate-500 mb-1">{reason.statLabel}</span>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{
                  boxShadow: "inset 0 0 40px rgba(19, 179, 104, 0.05)"
                }} />
              </div>
            );
          })}
        </div>

        {/* Bottom strip: trusted by */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm mb-8 uppercase tracking-widest">Trusted by leading companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-40">
            {["Milk Vita", "FleetPro BD", "Akter Group", "RapidTrans", "MegaFleet", "CityMove"].map((brand) => (
              <span key={brand} className="text-white font-display font-bold text-lg">{brand}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
