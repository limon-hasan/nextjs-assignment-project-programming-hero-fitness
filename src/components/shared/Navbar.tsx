"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoImg from "@/assets/logo.png";

const Navbar = () => {
  const pathname = usePathname();

  const links = (
    <>
      <li>
        <Link
          href="/"
          className={`text-sm font-medium px-4 py-1.5 rounded-full transition-all ${
            pathname === "/"
              ? "bg-[#18240c] text-[#ccff00] font-semibold"
              : "text-slate-400 hover:text-white"
          }`}
        >
          Workouts
        </Link>
      </li>
      <li>
        <Link
          href="/my-plan"
          className={`text-sm font-medium px-4 py-1.5 rounded-full transition-all ${
            pathname === "/my-plan"
              ? "bg-[#18240c] text-[#ccff00] font-semibold"
              : "text-slate-400 hover:text-white"
          }`}
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-[#0d0f12] border-b border-slate-800/80">
      <nav className="container mx-auto px-4 md:px-10 h-16 flex items-center justify-between">
        
        <div className="flex items-center gap-2">
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-sm p-1 text-slate-300 mr-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-[#14171d] border border-slate-800 rounded-box z-10 mt-3 w-48 p-2 shadow-xl space-y-1"
            >
              {links}
            </ul>
          </div>

          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src={logoImg}
              alt="FitLog Logo"
              width={26}
              height={26}
              className="w-6 h-6 object-contain"
            />
            <span className="text-lg font-black tracking-wider text-white uppercase">
              FITLOG
            </span>
          </Link>
        </div>

        <div className="hidden lg:flex items-center">
          <ul className="flex items-center gap-1">
            {links}
          </ul>
        </div>

        <div className="flex items-center gap-5 text-sm">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
          >
            <span className="font-medium text-xs md:text-sm">Plan</span>
            <span className="bg-[#ccff00] text-black font-extrabold text-[11px] w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
          >
            <span className="font-medium text-xs md:text-sm">Saved</span>
            <span className="border border-slate-700 text-slate-300 font-bold text-[11px] w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </Link>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;