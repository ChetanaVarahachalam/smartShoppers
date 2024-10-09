import type { Metadata } from "next";
import { Crimson_Text, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


const crimson = Crimson_Text({ subsets: ["latin"], weight: ["400","600","700"]});
const  monts = Montserrat({ subsets : ["latin"], weight : ["300","400","500","600", "700"]});

export const metadata: Metadata = {
  title: "Smart Shoppers",
  description: "Shop Smarter not  Harder!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={crimson.className}>
        <main className="max-w-10xl mx-auto">
          <Navbar />
          {children}
        </main>
       
      </body>
    </html>
  );
}
