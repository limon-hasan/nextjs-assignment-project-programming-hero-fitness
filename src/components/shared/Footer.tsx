import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#08090c] border-t border-slate-900/80 py-7 px-6 md:px-14 mt-auto">
      <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
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

        <p className="text-slate-500 text-xs md:text-sm font-normal">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
