import PremiumLoader from "@/components/PremiumLoader";
import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
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
    <html lang="en">
      <body className={`${manrope.className} ${cormorant.variable}`}>
        <PremiumLoader />
        {children}
      </body>
    </html>
  );
}
