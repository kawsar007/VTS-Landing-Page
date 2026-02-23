"use client";
import { useState } from "react";
import { Check, Zap, Building2, Users } from "lucide-react";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    description: "Perfect for small businesses just getting started with fleet tracking.",
    monthlyPrice: 29,
    yearlyPrice: 23,
    vehicleLimit: "Up to 5 vehicles",
    color: "slate",
    features: [
      "Real-time GPS tracking",
      "Basic trip history (30 days)",
      "Speed & geofence alerts",
      "Mobile app access",
      "1 Manager account",
      "Email support",
    ],
    cta: "Start Free Trial",
    featured: false,
  },
  {
    name: "Professional",
    icon: Users,
    description: "Ideal for growing businesses with medium-sized fleets.",
    monthlyPrice: 79,
    yearlyPrice: 63,
    vehicleLimit: "Up to 25 vehicles",
    color: "brand",
    features: [
      "Everything in Starter",
      "Advanced reporting suite",
      "Driver management",
      "SIM card management",
      "Follow / Unfollow tracking",
      "Real-time notifications",
      "90-day trip history",
      "5 Manager accounts",
      "Priority email & chat support",
    ],
    cta: "Start Free Trial",
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    icon: Building2,
    description: "For large fleets and enterprises requiring full customization.",
    monthlyPrice: 199,
    yearlyPrice: 159,
    vehicleLimit: "Unlimited vehicles",
    color: "slate",
    features: [
      "Everything in Professional",
      "Unlimited history & storage",
      "Custom report builder",
      "API access & webhooks",
      "White-label option",
      "Dedicated account manager",
      "SLA-backed 99.9% uptime",
      "Unlimited Manager accounts",
      "24/7 phone & priority support",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-brand-600 uppercase tracking-widest mb-4">
            Pricing
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Simple, Transparent{" "}
            <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Choose the plan that fits your fleet. No hidden fees. Cancel anytime.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 bg-slate-100 rounded-2xl p-1.5">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${!yearly ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${yearly ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
            >
              Yearly
              <span className="text-xs bg-brand-100 text-brand-700 px-2 py-0.5 rounded-full font-bold">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border-2 transition-all duration-300 ${
                  plan.featured
                    ? "border-brand-500 shadow-2xl shadow-brand-100 scale-[1.02]"
                    : "border-slate-200 hover:border-brand-200 card-shadow hover:card-shadow-hover"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-brand-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                      ⭐ {plan.badge}
                    </span>
                  </div>
                )}

                <div className={`p-6 ${plan.featured ? "bg-brand-50/50" : "bg-white"} rounded-t-2xl`}>
                  {/* Plan icon and name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${plan.featured ? "bg-brand-500" : "bg-slate-100"}`}>
                      <Icon className={`w-5 h-5 ${plan.featured ? "text-white" : "text-slate-600"}`} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-slate-900">{plan.name}</h3>
                      <span className="text-xs text-slate-500">{plan.vehicleLimit}</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-1">
                    <span className="font-display text-4xl font-bold text-slate-900">${price}</span>
                    <span className="text-slate-500 text-sm ml-1">/mo</span>
                  </div>
                  {yearly && (
                    <p className="text-xs text-brand-600 font-semibold mb-1">Billed ${price * 12}/year</p>
                  )}
                </div>

                {/* Features */}
                <div className={`flex-1 px-6 py-5 ${plan.featured ? "bg-white" : "bg-white"}`}>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.featured ? "text-brand-500" : "text-brand-400"}`} />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="p-6 pt-4">
                  <a
                    href="#cta"
                    className={`block text-center font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 text-sm ${
                      plan.featured
                        ? "bg-brand-500 hover:bg-brand-600 text-white shadow-lg shadow-brand-200 hover:shadow-xl hover:shadow-brand-300"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-800"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-slate-500 mt-10">
          All plans include a <strong className="text-slate-700">14-day free trial</strong>. No credit card required. 
          Have a larger fleet? <a href="#cta" className="text-brand-600 font-semibold hover:underline">Contact us for custom pricing →</a>
        </p>
      </div>
    </section>
  );
}
