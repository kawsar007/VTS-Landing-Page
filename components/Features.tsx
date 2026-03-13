"use client";
import {
  Activity,
  Bell, FileBarChart2,
  MapPin,
  Navigation,
  Shield,
  TrendingUp,
  Users,
  Wifi
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Live Tracking on Map",
    description: "Monitor all your vehicles in real-time on an interactive Google Maps interface. See exact positions, speed, and direction at a glance.",
    color: "brand",
    badge: "Core Feature",
  },
  {
    icon: Navigation,
    title: "Follow / Unfollow Vehicles",
    description: "Lock your map view to follow a specific vehicle as it moves. Seamlessly switch between vehicles or return to the fleet overview.",
    color: "blue",
  },
  {
    icon: Bell,
    title: "Real-time Notifications",
    description: "Receive instant alerts for speeding, geofence breaches, engine on/off events, and more via push, SMS, or email.",
    color: "amber",
  },
  {
    icon: FileBarChart2,
    title: "Advanced Reporting System",
    description: "Generate detailed trip history, mileage, fuel, idle time, and driver behavior reports. Export to PDF or Excel effortlessly.",
    color: "purple",
  },
  {
    icon: Users,
    title: "Fleet & Driver Management",
    description: "Manage managers, drivers, devices, and SIM cards from a single admin panel. Assign vehicles and control access levels.",
    color: "rose",
  },
  {
    icon: Activity,
    title: "Vehicle Status Overview",
    description: "Instantly see which vehicles are running, stopped, or idle. Color-coded indicators give you a full fleet health overview.",
    color: "teal",
  },
];

const colorMap: Record<string, { bg: string; icon: string; border: string; badge: string }> = {
  brand: { bg: "bg-brand-50", icon: "text-brand-600", border: "border-brand-100 hover:border-brand-300", badge: "bg-brand-500 text-white" },
  blue: { bg: "bg-blue-50", icon: "text-blue-600", border: "border-blue-100 hover:border-blue-300", badge: "bg-blue-500 text-white" },
  amber: { bg: "bg-amber-50", icon: "text-amber-600", border: "border-amber-100 hover:border-amber-300", badge: "bg-amber-500 text-white" },
  purple: { bg: "bg-purple-50", icon: "text-purple-600", border: "border-purple-100 hover:border-purple-300", badge: "bg-purple-500 text-white" },
  rose: { bg: "bg-rose-50", icon: "text-rose-600", border: "border-rose-100 hover:border-rose-300", badge: "bg-rose-500 text-white" },
  teal: { bg: "bg-teal-50", icon: "text-teal-600", border: "border-teal-100 hover:border-teal-300", badge: "bg-teal-500 text-white" },
};

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-brand-600 uppercase tracking-widest mb-4">
            Features
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Everything You Need to{" "}
            <span className="text-gradient">Control Your Fleet</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            FleetMTS brings enterprise-grade vehicle tracking into an intuitive, powerful platform built for businesses of every size.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const colors = colorMap[feature.color];
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group relative bg-white rounded-2xl p-6 border ${colors.border} transition-all duration-300 card-shadow hover:card-shadow-hover hover:-translate-y-1`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {feature.badge && (
                  <span className={`absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full ${colors.badge}`}>
                    {feature.badge}
                  </span>
                )}
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom highlight bar */}
        <div className="mt-16 bg-gradient-to-r from-brand-500 to-brand-700 rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-bold mb-2">Integrate with Your Existing Tools</h3>
              <p className="text-brand-100 text-sm">Works with Google Maps, fuel cards, ERP systems, and more via our open API.</p>
            </div>
            <div className="flex items-center gap-4 flex-shrink-0">
              <Wifi className="w-6 h-6 text-brand-200" />
              <TrendingUp className="w-6 h-6 text-brand-200" />
              <Shield className="w-6 h-6 text-brand-200" />
              <a href="#cta" className="bg-white text-brand-700 hover:bg-brand-50 font-semibold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap">
                Explore API Docs →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
