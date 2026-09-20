import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://chapter1.pt"),
  title: "Chapter 1 — Café & Bar, Lisbon",
  description:
    "Every chapter starts with a story. A café & bar in Lisbon serving Himalayan bites, fresh Portuguese bakery, specialty coffee and signature mocktails.",
  keywords: [
    "Chapter 1",
    "café Lisbon",
    "bar Lisbon",
    "pastel de nata",
    "momo Lisbon",
    "coffee Lisbon",
  ],
  openGraph: {
    title: "Chapter 1 — Café & Bar, Lisbon",
    description:
      "Every chapter starts with a story. Café & bar in Lisbon, Portugal.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  );
}
