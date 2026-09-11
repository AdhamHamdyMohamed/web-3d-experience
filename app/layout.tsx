import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Interactive 3D Configurator | Portfolio",
  description:
    "An interactive 3D web experience built with Next.js and React Three Fiber.",
  openGraph: {
    title: "Interactive 3D Configurator",
    description:
      "Explore dynamic 3D web configurations, custom lighting, and performance optimizations.",
    url: "https://web-3d-experience-six.vercel.app/",
    siteName: "3D Web Experience",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "3D Configurator Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interactive 3D Configurator",
    description: "Explore dynamic 3D web configurations.",
    images: ["/og-image.png"],
  },
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
