import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Link from "next/link";
// import Aurora from './_components/react-bits/aurora';
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <div className="bg-zinc-950" >
        {/* <div className="absolute inset-0 -z-10">
          <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        </div> */}
          {/* <div className="bg-transparent p-4  shadow-sky-500/50 rounded-full mx-auto w-2/4 mb-2 mt-5 hover:border hover:border-sky-500/100">
            <div className="flex flex-row justify-between text-sky-700">
              <div className="ml-4">
                <Link href="/" className="text-white text-lg font-bold hover:text-sky-500/100 text-center">SMART-CV</Link>
              </div>
              <div className='flex gap-4 mr-4'>
                <Link href="/" className="text-white text-sm font-normal hover:text-sky-500/100 text-center">CV</Link>
                <Link href="/" className="text-white text-sm font-normal hover:text-sky-500/100 text-center">LOGIN</Link>
                <Link href="/" className="text-white text-sm font-normal hover:text-sky-500/100 text-center">Sign-up</Link>
              </div>
            </div>
            
          </div> */}
            {children}
        </div>
      </body>
    </html>
  );
}
