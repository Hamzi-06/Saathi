import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navItems = [
  { href: "/", label: "Home" },
  { href: "/today", label: "Today" },
  { href: "/learn", label: "Learn" },
  { href: "/jamaat", label: "Jamaat Mode" },
];

export const metadata: Metadata = {
  title: "Saathi",
  description: "A daily Muslim companion web app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-stone-50 antialiased`}
      >
        <header className="border-b border-stone-200 bg-white">
          <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4">
            <a href="/" className="text-lg font-bold text-stone-900">
              Saathi
            </a>

            <div
  className="flex flex-wrap items-center text-sm font-medium"
  style={{ columnGap: "16px", rowGap: "8px" }}
>
  {navItems.map((item) => (
    <a
      key={item.href}
      href={item.href}
      className="text-stone-600 hover:text-emerald-700"
    >
      {item.label}
    </a>
  ))}
</div>



          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
