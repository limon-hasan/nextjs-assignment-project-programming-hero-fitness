"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import Link from "next/link";
import { useContext } from "react";

const SavedNavbar = () => {
  const { savedLater } = useContext(WorkoutContext);
  return (
    <Link
      href="/my-plan"
      className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
    >
      <span className="font-medium text-xs md:text-sm">Saved</span>
      <span className="border border-slate-700 text-slate-300 font-bold text-[11px] w-5 h-5 flex items-center justify-center rounded-full">
        {savedLater.length}
      </span>
    </Link>
  );
};

export default SavedNavbar;
