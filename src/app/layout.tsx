import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import logoImage from "./511594151_17846860284509874_5756122508131916742_n.jpg";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aavé Candlès | Small candles. Big moods.",
  description:
    "Handmade scented candles, poured in small batches in India. Find your glow, choose a gift, or create a candle made just for you.",
  icons: {
    icon: logoImage.src,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
