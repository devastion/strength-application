import { ThemeProvider } from "@components/ThemeProvider/ThemeProvider";
import { Navigation } from "@modules/Navigation";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Strength Application",
  description: "Calculate your 1RM and wilks score!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <main className="container flex max-w-screen-sm flex-col items-center justify-center">
            <h1 className="mt-10 text-center text-5xl font-extrabold text-slate-900 dark:text-slate-100">
              Strength <br /> Application
            </h1>

            <Navigation />

            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
