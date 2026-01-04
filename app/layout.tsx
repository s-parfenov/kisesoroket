import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kisa's 40th Birthday Quiz",
  description: "A fun quiz to celebrate Kisa's 40th birthday!",
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

