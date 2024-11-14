import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const gMarketSansLight = localFont({
  src: "../../public/fonts/GmarketSansLight.otf",
  variable: "--font-gMarketSans-light",
  weight: "300",
})

const gMarketSansMedium = localFont({
  src: "../../public/fonts/GmarketSansMedium.otf",
  variable: "--font-gMarketSans-medium",
  weight: "500",
})

const gMarketSansBold = localFont({
  src: "../../public/fonts/GmarketSansBold.otf",
  variable: "--font-gMarketSans-bold",
  weight: "700",
})

export const metadata: Metadata = {
  title: "KONNECT",
  description: "Konkuk Univ Computer Engineering Conference",
  icons: {
    icon: '/images/favicon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gMarketSansLight.variable} ${gMarketSansMedium.variable} ${gMarketSansBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
