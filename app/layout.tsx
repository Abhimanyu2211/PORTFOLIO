import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import Navbar from "@/components/ui/Navbar";

export const metadata: Metadata = {
  title: "Abhimanyu Singh Rathore — AI/ML Engineer",
  description:
    "Portfolio of Abhimanyu Singh Rathore — Computer Science student focused on Artificial Intelligence and Machine Learning, building intelligent applications and practical AI-powered solutions.",
  keywords: ["AI", "ML", "Machine Learning", "Artificial Intelligence", "Software Development", "Computer Science"],
  openGraph: {
    title: "Abhimanyu Singh Rathore — AI/ML Engineer",
    description: "Portfolio of Abhimanyu Singh Rathore — AI/ML Engineer and Computer Science student.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="overflow-x-hidden bg-[var(--background)] text-[var(--foreground)] antialiased">
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
