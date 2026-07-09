import type { Metadata } from "next";
import "@fontsource-variable/unbounded";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";

import AosInit from "@/components/AosInit";
import MeshBackground from "@/components/MeshBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollBarbell from "@/components/ScrollBarbell";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "BodyTech Gym — Lahore's Premier Fitness Center",
  description:
    "BodyTech is Lahore's leading fitness center with certified trainers, separate ladies & gents wings, Taekwondo, Pilates & Yoga classes across our EME, Rahbar & Bahria Town branches.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="font-body"
        style={{
          ["--font-unbounded" as string]: "'Unbounded Variable', system-ui, sans-serif",
          ["--font-jakarta" as string]: "'Plus Jakarta Sans', system-ui, sans-serif",
          ["--font-jbmono" as string]: "'JetBrains Mono', monospace",
        }}
      >
        <ThemeProvider>
          <MeshBackground />
          <AosInit />
          <ScrollBarbell />
          <Navbar />
          <main className="min-h-screen overflow-x-clip">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}