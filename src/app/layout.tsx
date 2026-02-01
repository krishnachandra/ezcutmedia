import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EZ Cut Media | Fast Short-Form Content",
  description: "Professional reels, shorts, and social video production for brands and creators. Shot, edited, and delivered in under 30 minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
