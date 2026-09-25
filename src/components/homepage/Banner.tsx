import Image from "next/image";
import Link from "next/link";
import bannerImg from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 md:px-10 py-6 md:py-10">
      {/* Dark container box jeta Figma design-er moto rounded ebong border dewa */}
      <div className="bg-[#12151c] border border-slate-800/80 rounded-2xl p-6 sm:p-10 md:p-14 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Left Side: Content */}
        <div className="w-full lg:w-3/5 text-left">
          {/* Eyebrow text */}
          <span className="inline-block text-[#ccff00] text-xs md:text-sm font-bold tracking-widest uppercase mb-3">
            WORKOUT LIBRARY
          </span>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-tight mb-4">
            TRAIN WITH INTENT. <br className="hidden sm:inline" />
            LOG EVERY SET.
          </h1>

          {/* Subtitle */}
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl mb-8">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          {/* Primary CTA button with icon (scrolls down to #library) */}
          <Link
            href="#library"
            className="inline-flex items-center gap-2.5 bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold px-6 py-3 rounded-lg text-xs md:text-sm uppercase tracking-wider transition-all duration-200 shadow-lg shadow-[#ccff00]/10 hover:shadow-[#ccff00]/20 active:scale-95"
          >
            <span>BROWSE WORKOUTS</span>
          </Link>
        </div>

        {/* Right Side: Banner Image */}
        <div className="w-full lg:w-2/5 flex justify-center items-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <Image
              src={bannerImg}
              alt="FitLog Training Workout"
              fill
              priority
              className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
