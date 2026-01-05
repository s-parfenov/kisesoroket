import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";

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
    <html lang="en" suppressHydrationWarning>
      <body className="relative">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative z-10">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

