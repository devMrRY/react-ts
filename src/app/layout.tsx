import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Next Boiler Plate',
  description: 'Welcome to Next.js',
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  (function () {
    throw "layout error";
  });

  return (
    <html lang="en">
      <body>
        <div className="navbar">Navbar</div>
        {children}
      </body>
    </html>
  );
}
