import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components";

export const metadata: Metadata = {
  // title: {
  // default:'ADS Electrical',
  // template:'%s - Professional Affordable Reliable Electrical Services In Sydney | Local Sydney Electrician'
  // },
  title:
    "ADS Electrical | Professional Affordable Reliable Electrical Services In Sydney | Local Sydney Electrician",
  description:
    "Need a reliable electrician in Sydney? ADS Electrical provides high-quality electrical solutions for homes & businesses - 18+ Years Experience. Get A Fixed Priced Quote Today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  interface LayoutProps {
    children: React.ReactNode;
  }
  return (
    <html lang="en">

      <head>
     

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/assets/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/assets/android-chrome-512x512.png"
        />
        <link rel="icon" href="./favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
      
      </head>
      <body>
         
        <Header />
        {children}
        <Footer />
      </body>
      
    </html>
  );
}
