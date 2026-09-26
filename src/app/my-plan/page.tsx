"use client";

import { useState } from "react";
import Link from "next/link";

const MyPlanPage = () => {
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  return (
    <div className="min-h-screen bg-[#08090c] text-white py-10 px-4 md:px-12 flex flex-col justify-between">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-8">
          <h1 className="font-oswald text-3xl md:text-5xl font-black uppercase tracking-wide text-white">
            MY PLAN
          </h1>
          <p className="text-slate-400 text-xs md:text-sm mt-1.5">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="bg-[#0e1219] border border-slate-800/80 rounded-2xl p-6 md:p-8 mb-8 grid grid-cols-3 gap-4">
          <div>
            <p className="text-slate-400 text-xs font-medium mb-1">Exercises</p>
            <h2 className="text-[#ccff00] font-oswald text-4xl md:text-5xl font-black">
              0
            </h2>
          </div>
          <div>
            <p className="text-slate-400 text-xs font-medium mb-1">Minutes</p>
            <h2 className="text-white font-oswald text-4xl md:text-5xl font-black">
              0
            </h2>
          </div>
          <div>
            <p className="text-slate-400 text-xs font-medium mb-1">Calories</p>
            <h2 className="text-white font-oswald text-4xl md:text-5xl font-black">
              0
            </h2>
          </div>
        </div>

        <div className="mb-6">
          <div className="inline-flex items-center bg-[#0d1017] border border-slate-800/80 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab("today")}
              className={`px-5 py-2 text-xs md:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === "today"
                  ? "bg-[#18202d] text-white border border-slate-700/80 shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Today&apos;s Plan
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`px-5 py-2 text-xs md:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === "saved"
                  ? "bg-[#18202d] text-white border border-slate-700/80 shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Saved
            </button>
          </div>
        </div>

        <div className="border border-dashed border-slate-800/80 rounded-2xl py-28 px-4 flex flex-col items-center justify-center text-center">
          <h3 className="font-oswald text-2xl md:text-3xl font-extrabold uppercase tracking-wide text-white mb-2">
            NOTHING HERE YET
          </h3>
          <p className="text-slate-400 text-xs md:text-sm mb-6 max-w-sm">
            Browse the library and add a lift to get today moving.
          </p>
          <Link
            href="/"
            className="bg-[#ccff00] hover:bg-[#b5e600] text-black font-extrabold text-xs md:text-sm px-6 py-2.5 rounded-full transition-colors cursor-pointer"
          >
            Go to workouts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;
