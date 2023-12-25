import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// to import font
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";

// Import Components

const font = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
