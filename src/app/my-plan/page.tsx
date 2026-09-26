"use client";

import { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/types/workoutTypes";
import { FiClock, FiStar, FiX, FiCheck } from "react-icons/fi";
import { toast } from "react-toastify";

const MyPlanPage = () => {
  const { todaysPlan, setTodaysPlan, savedLater, setSavedLater } =
    useContext(WorkoutContext);

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  const currentList = activeTab === "today" ? todaysPlan : savedLater;

  const totalExercises = currentList.length;
  const totalMinutes = currentList.reduce(
    (acc, item) => acc + (Number(item.duration) || 0),
    0,
  );
  const totalCalories = currentList.reduce(
    (acc, item) => acc + (Number(item.caloriesBurned) || 0),
    0,
  );

  const handleRemove = (id: number, name: string) => {
    if (activeTab === "today") {
      setTodaysPlan((prev) => prev.filter((item) => item.id !== id));
      toast.info(`${name} removed from today's plan`);
    } else {
      setSavedLater((prev) => prev.filter((item) => item.id !== id));
      toast.info(`${name} removed from saved list`);
    }
  };

  const handleMarkAsDone = (id: number, name: string) => {
    if (activeTab === "today") {
      setTodaysPlan((prev) => prev.filter((item) => item.id !== id));
    } else {
      setSavedLater((prev) => prev.filter((item) => item.id !== id));
    }
    toast.success(`${name} completed! Great job! 🎉`);
  };

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
              {totalExercises}
            </h2>
          </div>
          <div>
            <p className="text-slate-400 text-xs font-medium mb-1">Minutes</p>
            <h2 className="text-white font-oswald text-4xl md:text-5xl font-black">
              {totalMinutes}
            </h2>
          </div>
          <div>
            <p className="text-slate-400 text-xs font-medium mb-1">Calories</p>
            <h2 className="text-white font-oswald text-4xl md:text-5xl font-black">
              {totalCalories}
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

        {currentList.length === 0 ? (
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
        ) : (
          <div className="flex flex-col gap-4">
            {currentList.map((workout: IWorkout) => (
              <div
                key={workout.id}
                className="bg-[#0e1219] border border-slate-800/80 hover:border-slate-700/80 rounded-2xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all"
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="relative w-28 h-18 sm:w-32 sm:h-20 rounded-xl overflow-hidden shrink-0 bg-[#141822]">
                    <Image
                      src={workout.image}
                      alt={workout.name}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="font-oswald text-base sm:text-lg font-bold uppercase text-white tracking-wide">
                      {workout.name}
                    </h3>
                    <p className="text-slate-400 text-xs mt-0.5">
                      {workout.equipment || "Bodyweight"}
                    </p>

                    <div className="flex items-center gap-3 sm:gap-4 text-xs text-slate-400 mt-2">
                      <span className="flex items-center gap-1.5">
                        <FiClock className="text-slate-400 text-xs" />
                        {workout.duration} min
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="text-amber-500">🔥</span>
                        {workout.caloriesBurned} kcal
                      </span>
                      {workout.rating && (
                        <span className="flex items-center gap-1 text-slate-300">
                          <FiStar className="text-amber-400 fill-amber-400 text-xs" />
                          {workout.rating}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 shrink-0">
                  <Link
                    href={`/workouts/${workout.id}`}
                    className="px-4 py-2 bg-[#10141d] hover:bg-[#181e2b] border border-slate-800 hover:border-slate-700 text-xs font-semibold rounded-xl text-slate-300 hover:text-white transition-all text-center"
                  >
                    View Details
                  </Link>

                  <button
                    onClick={() => handleMarkAsDone(workout.id, workout.name)}
                    className="flex items-center gap-1.5 px-4 py-2 bg-[#ccff00] hover:bg-[#b8e600] text-black text-xs font-bold rounded-xl transition-all cursor-pointer shadow-sm"
                  >
                    <FiCheck className="text-sm stroke-[3]" />
                    Mark as Done
                  </button>

                  <button
                    onClick={() => handleRemove(workout.id, workout.name)}
                    className="text-slate-500 hover:text-white p-2 rounded-lg transition-colors cursor-pointer ml-1"
                    title="Remove"
                  >
                    <FiX className="text-lg" />
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
