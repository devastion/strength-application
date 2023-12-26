import { Providers } from "@lib/providers";
import { Navigation } from "@modules/Navigation";
import { Settings } from "@modules/Settings";
import { cn } from "@root/lib/utils";
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
    <html
      lang="en"
      // Due to darkmode class in the html tag
      suppressHydrationWarning
    >
      <body
        className={cn(inter.className, "dark:bg-slate-950")}
        suppressHydrationWarning
      >
        <Providers>
          <div className="container relative min-h-screen max-w-[480px] md:mt-16">
            <header className="relative">
              <h1 className="pt-10 text-center text-5xl font-extrabold text-slate-900 dark:text-slate-100">
                Strength <br /> Application
              </h1>
              <Settings />
            </header>

            <main className="flex flex-col items-center justify-center">
              <Navigation />

              {children}
            </main>
            <footer className="right-0 w-full text-center text-slate-600 dark:text-slate-700 max-md:absolute max-md:bottom-3">
              Developed by{" "}
              <a
                href="https://github.com/devastion"
                target="_blank"
                className="text-slate-900 underline underline-offset-4 dark:text-slate-500"
              >
                Dimitar Banev
              </a>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
