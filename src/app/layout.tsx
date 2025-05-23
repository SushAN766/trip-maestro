import type { Metadata } from "next";
import { Inter } from "next/font/google";
//import "./globals.css";
import { Providers } from "./providers";
import "./globals.css";


const inter = Inter({
  
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Travel Planner",
  description: "The app is powered by Bright Data.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}
