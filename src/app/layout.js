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

export const metadata = {
  title: "Luxury Villa Bali - Where Balinese Serenity Meets Modern Luxury",
  description: "Experience authentic Balinese hospitality in our luxury villa. Infinity pool, spa treatments, private dining, and personalized service in the heart of Bali.",
  keywords: "luxury villa bali, bali accommodation, infinity pool, spa treatments, private dining, balinese hospitality",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="luxury">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
