"use client";
import { ArrowRight, FileBarChart2, HardDrive, MapPin, Smartphone } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: HardDrive,
    title: "Add Your Device",
    description: "Register your GPS tracking device in the platform. Enter the IMEI number and assign it to a vehicle within seconds.",
    detail: "Supports 200+ tracker models",
    color: "brand",
  },
  {
    step: "02",
    icon: Smartphone,
    title: "Activate SIM Card",
    description: "Link and activate a SIM card to your device. Our platform supports all major carriers for uninterrupted connectivity.",
    detail: "Multi-carrier support",
    color: "blue",
  },
  {
    step: "03",
    icon: MapPin,
    title: "Track Your Vehicles",
    description: "Instantly see your vehicles on the live map. Follow routes, monitor speed, and get real-time status updates.",
    detail: "Updates every 10 seconds",
    color: "purple",
  },
  {
    step: "04",
    icon: FileBarChart2,
    title: "Generate Reports",
    description: "Access detailed trip history, mileage logs, idle reports, and driver summaries. Export in PDF or Excel format.",
    detail: "15+ report types",
    color: "amber",
  },
];

const colorMap: Record<string, { iconBg: string; iconText: string; stepText: string; line: string }> = {
  brand: { iconBg: "bg-brand-500", iconText: "text-white", stepText: "text-brand-500", line: "from-brand-400 to-blue-400" },
  blue: { iconBg: "bg-blue-500", iconText: "text-white", stepText: "text-blue-500", line: "from-blue-400 to-purple-400" },
  purple: { iconBg: "bg-purple-500", iconText: "text-white", stepText: "text-purple-500", line: "from-purple-400 to-amber-400" },
  amber: { iconBg: "bg-amber-500", iconText: "text-white", stepText: "text-amber-500", line: "" },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-brand-600 uppercase tracking-widest mb-4">
            How It Works
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Up and Running in{" "}
            <span className="text-gradient">4 Simple Steps</span>
          </h2>
          <p className="text-lg text-slate-600">
            No complicated setup. No technical expertise required. Get your entire fleet tracked in under 15 minutes.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-1/2 -translate-x-1/2 w-[70%] h-0.5 bg-gradient-to-r from-brand-300 via-purple-300 to-amber-300 z-0" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const colors = colorMap[step.color];
              const Icon = step.icon;
              return (
                <div key={step.title} className="flex flex-col items-center text-center group">
                  {/* Step number + icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-2xl ${colors.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-7 h-7 ${colors.iconText}`} />
                    </div>
                    <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-current ${colors.stepText} flex items-center justify-center text-xs font-bold shadow-sm`}>
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:border-brand-100 transition-all duration-300 w-full">
                    <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${colors.stepText}`}>
                      Step {step.step}
                    </div>
                    <h3 className="font-display text-lg font-bold text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <div className="inline-flex items-center gap-1.5 bg-slate-50 rounded-full px-3 py-1.5 text-xs font-semibold text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                      {step.detail}
                    </div>
                  </div>

                  {/* Arrow (mobile) */}
                  {index < steps.length - 1 && (
                    <div className="sm:hidden mt-4">
                      <ArrowRight className="w-5 h-5 text-slate-300 rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-brand-200 hover:shadow-xl hover:shadow-brand-300 hover:-translate-y-0.5 group"
          >
            Start Tracking Today
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-sm text-slate-500 mt-3">No credit card required. Free 14-day trial.</p>
        </div>
      </div>
    </section>
  );
}
