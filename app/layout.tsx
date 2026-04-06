import PremiumLoader from "@/components/PremiumLoader";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import { MotionConfig } from "framer-motion";
import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Maharaz | Premium Web Developer Portfolio",
  description:
    "A polished portfolio showcasing premium front-end work, product thinking, and modern web craftsmanship.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="dark">
      <body className={`${manrope.className} ${cormorant.variable}`}>
        <MotionConfig reducedMotion="user">
          <Script id="theme-init" strategy="beforeInteractive">
            {`(function(){try{var stored=localStorage.getItem('theme');var system=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';var theme=stored==='light'||stored==='dark'?stored:system;document.documentElement.dataset.theme=theme;}catch(e){document.documentElement.dataset.theme='dark';}})();`}
          </Script>
          <SmoothScrollProvider>
            <PremiumLoader />
            {children}
          </SmoothScrollProvider>
        </MotionConfig>
      </body>
    </html>
  );
}
