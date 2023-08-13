import { Navigation } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";

const nunito = Inter({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-inter",
  display: "swap",
});
const lora = Lora({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "javlocan.dev",
  description: "my developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lora.variable} ${nunito.variable}`}>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
