"use client";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

const stats = [
  { label: "Total Fleet", value: "20", sub: "Vehicles registered", color: "slate", icon: "🚗" },
  { label: "Running", value: "12", sub: "60% of fleet", color: "brand", icon: "🟢", trend: "+2 today" },
  { label: "Stopped", value: "5", sub: "25% of fleet", color: "red", icon: "🔴", trend: "-1 today" },
  { label: "Idle", value: "3", sub: "15% of fleet", color: "amber", icon: "🟡", trend: "Same as yesterday" },
];

const weeklyData = [
  { day: "Mon", running: 10, stopped: 6, idle: 4 },
  { day: "Tue", running: 13, stopped: 4, idle: 3 },
  { day: "Wed", running: 11, stopped: 5, idle: 4 },
  { day: "Thu", running: 15, stopped: 3, idle: 2 },
  { day: "Fri", running: 14, stopped: 4, idle: 2 },
  { day: "Sat", running: 8, stopped: 8, idle: 4 },
  { day: "Sun", running: 12, stopped: 5, idle: 3 },
];

const maxVal = 20;

function BarGroup({ day, running, stopped, idle }: { day: string; running: number; stopped: number; idle: number }) {
  return (
    <div className="flex flex-col items-center gap-1 flex-1">
      <div className="flex items-end gap-0.5 h-28">
        <div className="w-3 rounded-t-md bg-brand-400 transition-all" style={{ height: `${(running / maxVal) * 100}%` }} title={`Running: ${running}`} />
        <div className="w-3 rounded-t-md bg-red-400 transition-all" style={{ height: `${(stopped / maxVal) * 100}%` }} title={`Stopped: ${stopped}`} />
        <div className="w-3 rounded-t-md bg-amber-400 transition-all" style={{ height: `${(idle / maxVal) * 100}%` }} title={`Idle: ${idle}`} />
      </div>
      <span className="text-xs text-slate-500 font-medium">{day}</span>
    </div>
  );
}

const topVehicles = [
  { id: "DHA-2341", km: 284, status: "running", driver: "Karim H." },
  { id: "CTG-5523", km: 221, status: "running", driver: "Rahman M." },
  { id: "SYL-1190", km: 197, status: "stopped", driver: "Hossain A." },
  { id: "DHK-0088", km: 156, status: "idle", driver: "Islam R." },
  { id: "RJH-3312", km: 134, status: "running", driver: "Alam S." },
];

const statusColors: Record<string, string> = {
  running: "bg-brand-100 text-brand-700",
  stopped: "bg-red-100 text-red-700",
  idle: "bg-amber-100 text-amber-700",
};

export default function Analytics() {
  return (
    <section id="analytics" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-brand-600 uppercase tracking-widest mb-4">
            Analytics
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Fleet Insights at{" "}
            <span className="text-gradient">a Glance</span>
          </h2>
          <p className="text-lg text-slate-600">
            Real-time dashboards and historical analytics to help you make smarter decisions for your fleet.
          </p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-5 border border-slate-100 card-shadow hover:card-shadow-hover transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl">{s.icon}</span>
                {s.trend && (
                  <span className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded-full">{s.trend}</span>
                )}
              </div>
              <div className="text-3xl font-display font-bold text-slate-900">{s.value}</div>
              <div className="text-sm font-semibold text-slate-700 mt-0.5">{s.label}</div>
              <div className="text-xs text-slate-500 mt-0.5">{s.sub}</div>

              {/* Mini progress bar */}
              {s.color !== "slate" && (
                <div className="mt-3 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${s.color === "brand" ? "bg-brand-500" : s.color === "red" ? "bg-red-500" : "bg-amber-500"}`}
                    style={{ width: s.sub }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Charts area */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Weekly bar chart */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-100 p-6 card-shadow">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-display font-bold text-slate-900">Weekly Fleet Activity</h3>
                <p className="text-sm text-slate-500 mt-0.5">Vehicle status distribution by day</p>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <div className="flex items-center gap-1"><div className="w-2.5 h-2.5 rounded-sm bg-brand-400" /><span>Running</span></div>
                <div className="flex items-center gap-1"><div className="w-2.5 h-2.5 rounded-sm bg-red-400" /><span>Stopped</span></div>
                <div className="flex items-center gap-1"><div className="w-2.5 h-2.5 rounded-sm bg-amber-400" /><span>Idle</span></div>
              </div>
            </div>
            <div className="flex items-end gap-2 justify-between">
              {weeklyData.map((d) => (
                <BarGroup key={d.day} {...d} />
              ))}
            </div>
          </div>

          {/* Donut + top vehicles */}
          <div className="lg:col-span-2 space-y-6">
            {/* Donut chart */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6 card-shadow">
              <h3 className="font-display font-bold text-slate-900 mb-4">Fleet Status</h3>
              <div className="flex items-center gap-6">
                {/* SVG donut */}
                <svg width="90" height="90" viewBox="0 0 90 90" className="flex-shrink-0">
                  <circle cx="45" cy="45" r="35" fill="none" stroke="#f1f5f9" strokeWidth="12" />
                  {/* Running: 60% = 131.9 of 219.9 */}
                  <circle cx="45" cy="45" r="35" fill="none" stroke="#13b368" strokeWidth="12"
                    strokeDasharray="131.9 87.9" strokeDashoffset="54.97" strokeLinecap="round" />
                  {/* Stopped: 25% = 54.98 */}
                  <circle cx="45" cy="45" r="35" fill="none" stroke="#f87171" strokeWidth="12"
                    strokeDasharray="54.98 164.9" strokeDashoffset="-76.93" strokeLinecap="round" />
                  {/* Idle: 15% = 32.99 */}
                  <circle cx="45" cy="45" r="35" fill="none" stroke="#fbbf24" strokeWidth="12"
                    strokeDasharray="32.99 186.9" strokeDashoffset="-131.9" strokeLinecap="round" />
                  <text x="45" y="49" textAnchor="middle" className="font-bold" fontSize="12" fill="#1e293b" fontWeight="700">20</text>
                  <text x="45" y="60" textAnchor="middle" fontSize="7" fill="#94a3b8">vehicles</text>
                </svg>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm"><div className="w-3 h-3 rounded-full bg-brand-500" /><span className="text-slate-600">Running <strong>60%</strong></span></div>
                  <div className="flex items-center gap-2 text-sm"><div className="w-3 h-3 rounded-full bg-red-400" /><span className="text-slate-600">Stopped <strong>25%</strong></span></div>
                  <div className="flex items-center gap-2 text-sm"><div className="w-3 h-3 rounded-full bg-amber-400" /><span className="text-slate-600">Idle <strong>15%</strong></span></div>
                </div>
              </div>
            </div>

            {/* Top vehicles */}
            <div className="bg-white rounded-2xl border border-slate-100 p-5 card-shadow">
              <h3 className="font-display font-bold text-slate-900 mb-4 text-sm">Top Vehicles Today</h3>
              <div className="space-y-3">
                {topVehicles.map((v, i) => (
                  <div key={v.id} className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-400 w-4">#{i + 1}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-800">{v.id}</span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${statusColors[v.status]}`}>{v.status}</span>
                      </div>
                      <div className="text-[10px] text-slate-500">{v.driver}</div>
                    </div>
                    <span className="text-xs font-semibold text-slate-700">{v.km} km</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
