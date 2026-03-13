"use client";
import { ArrowRight, CheckCircle, Play, Shield, Smartphone, Zap } from "lucide-react";

const badges = [
  { icon: CheckCircle, label: "99.9% Uptime" },
  { icon: Zap, label: "Real-time Data" },
  { icon: Shield, label: "Enterprise Security" },
];

/** Mobile app screen mockup rendered inside a phone frame */
function MobileAppMockup() {
  return (
    <div
      className="relative mx-auto"
      style={{
        width: 200,
        height: 420,
        filter: "drop-shadow(0 32px 64px rgba(0,0,0,0.28))",
        animation: "phone-float 3s ease-in-out infinite",
      }}
    >
      {/* Phone body */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900 rounded-[40px] border-[6px] border-slate-700 shadow-2xl" />

      {/* Subtle phone shine */}
      <div
        className="absolute inset-0 rounded-[40px] pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 50%)" }}
      />

      {/* Side buttons */}
      <div className="absolute -left-[5px] top-[72px] w-[5px] h-8 bg-slate-600 rounded-l-md" />
      <div className="absolute -left-[5px] top-[116px] w-[5px] h-12 bg-slate-600 rounded-l-md" />
      <div className="absolute -right-[5px] top-[90px] w-[5px] h-14 bg-slate-600 rounded-r-md" />

      {/* Screen bezel */}
      <div className="absolute inset-[6px] bg-slate-900 rounded-[35px] overflow-hidden">
        {/* Dynamic Island */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-10 flex items-center justify-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
          <div className="w-5 h-1 rounded-full bg-slate-700" />
        </div>

        {/* App screen */}
        <div className="absolute inset-0 bg-slate-950 flex flex-col pt-5">
          {/* Status bar */}
          <div className="flex items-center justify-between px-4 py-1">
            <span className="text-[8px] text-slate-400 font-semibold">9:41</span>
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5 items-end">
                {[2, 3, 4, 5].map((h, i) => (
                  <div key={i} className="w-[3px] rounded-sm bg-slate-400" style={{ height: h }} />
                ))}
              </div>
              <div className="w-4 h-2 border border-slate-400 rounded-[2px] relative">
                <div className="absolute inset-[1.5px] left-[1.5px] right-[3px] bg-slate-400 rounded-[1px]" />
              </div>
            </div>
          </div>

          {/* App header */}
          <div className="px-4 pt-2 pb-3 flex items-center justify-between">
            <div>
              <p className="text-[7px] text-slate-500 font-medium">Welcome back</p>
              <p className="text-[11px] font-bold text-white tracking-wide">FleetMTS</p>
            </div>
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-lg">
              <span className="text-[8px] font-bold text-white">A</span>
            </div>
          </div>

          {/* Stat pills */}
          <div className="flex gap-2 px-4 mb-3">
            {[
              { label: "Running", val: "12", bg: "bg-brand-500/20", text: "text-brand-400", border: "border-brand-500/30" },
              { label: "Stopped", val: "5", bg: "bg-red-500/20", text: "text-red-400", border: "border-red-500/30" },
              { label: "Idle", val: "3", bg: "bg-amber-400/20", text: "text-amber-400", border: "border-amber-400/30" },
            ].map((s) => (
              <div key={s.label} className={`flex-1 ${s.bg} border ${s.border} rounded-xl p-2 text-center`}>
                <div className={`text-[11px] font-bold ${s.text}`}>{s.val}</div>
                <div className="text-[6px] text-slate-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Mini map */}
          <div className="mx-4 rounded-2xl overflow-hidden relative mb-3" style={{ height: 148 }}>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
            <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="mgrid2" width="14" height="14" patternUnits="userSpaceOnUse">
                  <path d="M 14 0 L 0 0 0 14" fill="none" stroke="#64748b" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#mgrid2)" />
            </svg>
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="52%" x2="100%" y2="46%" stroke="#1e3a5f" strokeWidth="2.5" />
              <line x1="42%" y1="0" x2="40%" y2="100%" stroke="#1e3a5f" strokeWidth="2" />
              <polyline points="5,90 30,70 60,80 90,55 130,65 165,45" fill="none" stroke="#13b368" strokeWidth="2" strokeDasharray="4 2" opacity="0.9" />
            </svg>
            {/* Animated vehicle marker */}
            <div className="absolute top-[32%] left-[38%]">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-6 h-6 rounded-full bg-brand-400 animate-ping opacity-40" />
                <div className="w-4 h-4 rounded-full bg-brand-500 border-2 border-white shadow-lg" />
              </div>
            </div>
            <div className="absolute top-[58%] left-[68%]">
              <div className="w-3 h-3 rounded-full bg-red-500 border-2 border-white shadow-md" />
            </div>
            {/* Speed badge on map */}
            <div className="absolute bottom-2 left-2 bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg px-2 py-1">
              <span className="text-[7px] font-bold text-brand-400">● LIVE</span>
            </div>
          </div>

          {/* Vehicle list */}
          <div className="px-4 space-y-1.5 mb-2">
            {[
              { id: "DHA-2341", speed: "62 km/h", color: "text-brand-400", dot: "bg-brand-400" },
              { id: "CTG-1190", speed: "Stopped", color: "text-red-400", dot: "bg-red-400" },
            ].map((v) => (
              <div key={v.id} className="flex items-center justify-between bg-slate-800/80 rounded-xl px-3 py-1.5 border border-slate-700/50">
                <div className="flex items-center gap-1.5">
                  <div className={`w-1.5 h-1.5 rounded-full ${v.dot}`} />
                  <span className="text-[7px] font-semibold text-slate-300">{v.id}</span>
                </div>
                <span className={`text-[7px] font-bold ${v.color}`}>{v.speed}</span>
              </div>
            ))}
          </div>

          {/* Bottom nav */}
          <div className="mt-auto flex items-center justify-around px-4 py-2.5 border-t border-slate-800">
            {[
              { icon: "📍", active: true },
              { icon: "📊", active: false },
              { icon: "🔔", active: false },
              { icon: "👤", active: false },
            ].map((item, i) => (
              <div key={i} className={`flex flex-col items-center gap-0.5 ${item.active ? "opacity-100" : "opacity-30"}`}>
                <span className="text-[11px]">{item.icon}</span>
                {item.active && <div className="w-1 h-1 rounded-full bg-brand-400" />}
              </div>
            ))}
          </div>

          {/* Home indicator */}
          <div className="flex justify-center pb-2">
            <div className="w-10 h-[3px] bg-slate-600 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Right side: phone + download section */
function AppDownloadSection() {
  return (
    <div className="flex flex-col items-center gap-8 animate-fade-up opacity-0" style={{ animationFillMode: "forwards", animationDelay: "300ms" }}>
      {/* Label above */}
      <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 shadow-sm">
        <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
        <span className="text-xs font-semibold text-slate-700">Track on the go — Mobile App</span>
      </div>

      {/* Phone with decorative rings + floating badges */}
      <div className="relative flex items-center justify-center" style={{ width: 320, height: 460 }}>
        {/* Spinning rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[280px] h-[280px] rounded-full border border-brand-200/50 animate-spin" style={{ animationDuration: "14s" }} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[340px] h-[340px] rounded-full border border-brand-100/30 animate-spin" style={{ animationDuration: "20s", animationDirection: "reverse" }} />
        </div>

        {/* Radial glow */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-[240px] h-[240px] rounded-full" style={{ background: "radial-gradient(ellipse, rgba(19,179,104,0.15) 0%, transparent 70%)" }} />
        </div>

        {/* Floating dot accents */}
        <div className="absolute top-8 left-4 w-3 h-3 rounded-full bg-brand-400/50 animate-bounce" style={{ animationDuration: "2.2s" }} />
        <div className="absolute bottom-12 right-4 w-2 h-2 rounded-full bg-brand-300/60 animate-bounce" style={{ animationDuration: "1.9s", animationDelay: "0.5s" }} />
        <div className="absolute top-1/3 right-2 w-4 h-4 rounded-full bg-amber-400/30 animate-bounce" style={{ animationDuration: "2.7s", animationDelay: "1s" }} />

        {/* "Arrived" notification badge — top right */}
        <div
          className="absolute top-10 -right-2 bg-white rounded-2xl shadow-xl border border-slate-100 px-3 py-2 flex items-center gap-2 z-20"
          style={{ animation: "phone-float 2.8s ease-in-out infinite", animationDelay: "0.5s" }}
        >
          <div className="w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center shadow-md flex-shrink-0">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p className="text-[8px] font-bold text-slate-800 leading-none">DHA-2341</p>
            <p className="text-[7px] text-brand-600 font-semibold mt-0.5">Arrived ✓</p>
          </div>
        </div>

        {/* Speed badge — bottom left */}
        <div
          className="absolute bottom-14 -left-2 bg-slate-900 rounded-2xl shadow-xl border border-slate-700 px-3 py-2 flex items-center gap-2 z-20"
          style={{ animation: "phone-float 3.4s ease-in-out infinite", animationDelay: "1s" }}
        >
          <div className="w-6 h-6 rounded-full bg-amber-400/20 flex items-center justify-center flex-shrink-0">
            <Zap className="w-3 h-3 text-amber-400" />
          </div>
          <div>
            <p className="text-[8px] font-bold text-white leading-none">Live Speed</p>
            <p className="text-[7px] text-amber-400 font-semibold mt-0.5">62 km/h</p>
          </div>
        </div>

        <MobileAppMockup />
      </div>

      {/* Download CTA card */}

      <a
        href="#download"
        className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-2xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
      >
        <Smartphone className="w-4 h-4 text-brand-400" />
        Download App
        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>

  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden gradient-hero">
      {/* Phone float keyframe */}
      <style>{`
        @keyframes phone-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-7px) rotate(0.5deg); }
          75% { transform: translateY(5px) rotate(-0.5deg); }
        }
      `}</style>

      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-brand-100 rounded-full opacity-30 -translate-y-1/4 translate-x-1/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-200 rounded-full opacity-20 translate-y-1/3 -translate-x-1/3 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Text content (unchanged) ── */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 rounded-full px-4 py-2 animate-fade-up opacity-0" style={{ animationFillMode: "forwards" }}>
              <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              <span className="text-sm font-semibold text-brand-700">Now with AI-powered route insights</span>
            </div>

            <div className="animate-fade-up opacity-0" style={{ animationFillMode: "forwards", animationDelay: "100ms" }}>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-800 leading-tight text-slate-900">
                Smart Vehicle
                <br />
                <span className="text-gradient">Tracking Made</span>
                <br />
                Simple.
              </h1>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed max-w-lg animate-fade-up opacity-0" style={{ animationFillMode: "forwards", animationDelay: "200ms" }}>
              Monitor your entire fleet in real-time on Google Maps. Manage drivers, devices, and SIM cards from one powerful dashboard — built for modern businesses.
            </p>

            <div className="flex flex-wrap gap-3 animate-fade-up opacity-0" style={{ animationFillMode: "forwards", animationDelay: "300ms" }}>
              {badges.map((b) => (
                <div key={b.label} className="flex items-center gap-1.5 text-sm text-slate-600 font-medium">
                  <b.icon className="w-4 h-4 text-brand-500" />
                  {b.label}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0" style={{ animationFillMode: "forwards", animationDelay: "400ms" }}>
              <a
                href="#cta"
                className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-brand-200 hover:shadow-xl hover:shadow-brand-300 hover:-translate-y-0.5 group"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold px-8 py-4 rounded-2xl transition-all duration-200 shadow-sm border border-slate-200 hover:border-brand-200 group"
              >
                <div className="w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center group-hover:bg-brand-100 transition-colors">
                  <Play className="w-3.5 h-3.5 text-brand-600 ml-0.5" />
                </div>
                Watch Demo
              </a>
            </div>

            <div className="flex items-center gap-4 pt-2 animate-fade-up opacity-0" style={{ animationFillMode: "forwards", animationDelay: "500ms" }}>
              <div className="flex -space-x-2">
                {["#13b368", "#0891b2", "#7c3aed", "#db2777", "#ea580c"].map((color, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: color }}>
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  <strong className="text-slate-700">1,200+</strong> businesses trust FleetMTS
                </p>
              </div>
            </div>
          </div>

          {/* ── Right: App download section ── */}
          <AppDownloadSection />
        </div>
      </div>
    </section>
  );
}