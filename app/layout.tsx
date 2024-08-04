import { ThemeProvider } from "@/components/ThemeProvider";
import cn from "@/lib/cn";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "200", "900"],
});

export const metadata: Metadata = {
  title: "Mofijur Rahman - Portfolio",
  description: "Mofijur Rahman's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={cn("", urbanist.className)}>
        <ThemeProvider defaultTheme="dark" attribute="class">
          <div className="">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
