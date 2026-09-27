import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import Navbar from "@/components/ui/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://abhimanyu-singh-rathore.vercel.app"),
  title: {
    default: "Abhimanyu Singh Rathore — AI/ML Engineer",
    template: "%s | Abhimanyu Singh Rathore",
  },
  description:
    "Portfolio of Abhimanyu Singh Rathore — Computer Science student focused on Artificial Intelligence and Machine Learning, building intelligent applications and practical AI-powered solutions.",
  keywords: [
    "Abhimanyu Singh Rathore",
    "Abhimanyu Singh",
    "Abhimanyu Rathore",
    "AI/ML Engineer",
    "Artificial Intelligence",
    "Machine Learning",
    "Software Development",
    "Computer Science",
    "Portfolio",
  ],
  authors: [{ name: "Abhimanyu Singh Rathore" }],
  creator: "Abhimanyu Singh Rathore",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhimanyu-singh-rathore.vercel.app/",
    title: "Abhimanyu Singh Rathore — AI/ML Engineer",
    description: "Portfolio of Abhimanyu Singh Rathore — AI/ML Engineer and Computer Science student.",
    siteName: "Abhimanyu Singh Rathore",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhimanyu Singh Rathore — AI/ML Engineer",
    description: "Portfolio of Abhimanyu Singh Rathore — AI/ML Engineer and Computer Science student.",
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
