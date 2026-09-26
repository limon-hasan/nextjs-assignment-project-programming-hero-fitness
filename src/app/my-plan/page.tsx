"use client";

import { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/types/workoutTypes";
import { FiTrash2, FiArrowRight } from "react-icons/fi";
import { toast } from "react-toastify";

const MyPlanPage = () => {
  const { todaysPlan, setTodaysPlan, savedLater, setSavedLater } =
    useContext(WorkoutContext);

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
  const currentList = activeTab === "today" ? todaysPlan : savedLater;

  const handleRemove = (id: number, name: string) => {
    if (activeTab === "today") {
      setTodaysPlan((prev) => prev.filter((item) => item.id !== id));
      toast.info(`${name} removed from today's plan`);
    } else {
      setSavedLater((prev) => prev.filter((item) => item.id !== id));
      toast.info(`${name} removed from saved list`);
    }
  };

  return (
    <div className="min-h-screen bg-[#08090c] text-white py-8 px-4 md:px-12">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-oswald text-3xl md:text-5xl font-black uppercase tracking-wide text-white">
            MY ROUTINE
          </h1>
          <p className="text-slate-400 text-xs md:text-sm mt-1">
            Manage your daily workout sessions and saved exercises.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-8">
          <button
            onClick={() => setActiveTab("today")}
            className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "today"
                ? "bg-[#ccff00] text-black shadow-lg shadow-[#ccff00]/10"
                : "bg-[#10141d] text-slate-400 hover:text-white border border-slate-800"
            }`}
          >
            Today&apos;s Plan
            <span
              className={`text-[10px] px-2 py-0.5 rounded-full ${
                activeTab === "today"
                  ? "bg-black text-[#ccff00]"
                  : "bg-slate-800 text-slate-300"
              }`}
            >
              {todaysPlan.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "saved"
                ? "bg-[#ccff00] text-black shadow-lg shadow-[#ccff00]/10"
                : "bg-[#10141d] text-slate-400 hover:text-white border border-slate-800"
            }`}
          >
            Saved For Later
            <span
              className={`text-[10px] px-2 py-0.5 rounded-full ${
                activeTab === "saved"
                  ? "bg-black text-[#ccff00]"
                  : "bg-slate-800 text-slate-300"
              }`}
            >
              {savedLater.length}
            </span>
          </button>
        </div>

        {/* Workout Cards Grid */}
        {currentList.length === 0 ? (
          <div className="bg-[#0e121a] border border-slate-800/80 rounded-2xl p-12 text-center my-6">
            <h3 className="font-oswald text-xl text-slate-300 uppercase mb-2">
              No workouts added yet
            </h3>
            <p className="text-slate-500 text-xs md:text-sm mb-6 max-w-sm mx-auto">
              {activeTab === "today"
                ? "You haven't added any workouts to today's plan yet."
                : "Your saved list is empty."}
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#ccff00] text-black font-extrabold text-xs px-5 py-2.5 rounded-lg hover:bg-[#b5e600] transition-colors"
            >
              Explore Workouts <FiArrowRight />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentList.map((workout: IWorkout) => (
              <div
                key={workout.id}
                className="bg-[#0e121a] border border-slate-800/80 hover:border-slate-700 rounded-xl overflow-hidden flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="relative w-full h-44 bg-[#141822]">
                    <Image
                      src={workout.image}
                      alt={workout.name}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                    <span className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-[10px] text-[#ccff00] uppercase font-bold px-2 py-0.5 rounded">
                      {workout.difficulty}
                    </span>
                  </div>

                  <div className="p-4">
                    <h3 className="font-oswald text-lg font-bold uppercase text-white truncate mb-1">
                      {workout.name}
                    </h3>
                    <p className="text-slate-400 text-xs line-clamp-2 mb-3">
                      {workout.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/60 pt-3">
                      <span>{workout.duration} min</span>
                      <span>{workout.sets} sets • {workout.reps} reps</span>
                      <span>{workout.caloriesBurned} kcal</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0 flex items-center gap-2">
                  <Link
                    href={`/workouts/${workout.id}`}
                    className="flex-1 bg-[#141824] hover:bg-[#1b2130] text-slate-200 text-xs font-semibold py-2 rounded-lg text-center transition-colors border border-slate-800"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => handleRemove(workout.id, workout.name)}
                    className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 border border-slate-800 rounded-lg transition-colors cursor-pointer"
                    title="Remove"
                  >
                    <FiTrash2 className="text-sm" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPlanPage;