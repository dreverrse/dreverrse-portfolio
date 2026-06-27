import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Nama Kamu — Full Stack Developer",
  description:
    "Full Stack Developer yang membangun produk digital berkualitas tinggi dengan performa optimal.",
  openGraph: {
    title: "Nama Kamu — Full Stack Developer",
    description: "Full Stack Developer | React · Node.js · TypeScript",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-oled text-primary-text antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
