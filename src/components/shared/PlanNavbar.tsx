"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import Link from "next/link";
import { useContext } from "react";

const PlanNavbar = () => {
  const { todaysPlan } = useContext(WorkoutContext);
  return (
    <Link
      href="/my-plan"
      className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
    >
      <span className="font-medium text-xs md:text-sm">Plan</span>
      <span className="bg-[#ccff00] text-black font-extrabold text-[11px] w-5 h-5 flex items-center justify-center rounded-full">
        {todaysPlan.length}
      </span>
    </Link>
  );
};

export default PlanNavbar;
