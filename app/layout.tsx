import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GeonVTS — Smart Vehicle Tracking System",
  description:
    "Real-time vehicle tracking, fleet management, and advanced analytics for modern businesses. Monitor your entire fleet from a single dashboard.",
  keywords: "vehicle tracking, GPS tracking, fleet management, real-time tracking, VTS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-white text-slate-800">
        {children}
      </body>
    </html>
  );
}
