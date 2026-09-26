import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/shared/Navbar";
import WorkoutProvider from "@/context/WorkoutContext";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FitLog",
  description: "Track your workouts with intent",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} h-full antialiased scroll-smooth`}
    >
      <body
        className={`${geistSans.className} bg-[#08090c] text-slate-100 min-h-screen`}
      >
        <WorkoutProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <ToastContainer />
        </WorkoutProvider>
      </body>
    </html>
  );
}
