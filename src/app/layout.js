import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx"
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata = {
  title: "Alec's Portfolio",
  description: "Personal Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, "bg-background text-foreground font-inter")}>
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
      <Analytics />
      <SpeedInsights/>
      </body>
    </html>
  );
}
