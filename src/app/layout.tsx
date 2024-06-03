import type { Metadata } from "next";
import "./globals.css";
import { FloaterComponent, Footer, Header } from "@/components";

export const metadata: Metadata = {
  // title: {
  // default:'fsf',
  // template:'%s - sdfsd | sdfs'
  // },
  title: "sdf | sdf | sfd",
  description: "sdfsd",
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
        <FloaterComponent />

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
