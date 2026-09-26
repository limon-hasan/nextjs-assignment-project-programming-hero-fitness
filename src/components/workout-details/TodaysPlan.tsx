"use client"

import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/types/workoutTypes";
import { useContext } from "react";
import { FiCalendar } from "react-icons/fi";
import { toast } from "react-toastify";

interface ITodaysPlanProps {
  workout: IWorkout;
}

const TodaysPlan = ({ workout }: ITodaysPlanProps) => {
  // console.log("Todays plan button refreshed");
  const { todaysPlan, setTodaysPlan } = useContext(WorkoutContext);
  const handleWorkout = () => {
    console.log("Todays play button triggered", workout);
    setTodaysPlan([...todaysPlan, workout]);
    toast.success(`${workout.name} have already added!`);
  };
  return (
    <div>
      <button
        onClick={() => handleWorkout()}
        className="bg-[#ccff00] hover:bg-[#b5e600] text-black text-xs font-extrabold px-4 py-2.5 rounded-lg flex items-center gap-2 transition-colors cursor-pointer"
      >
        <FiCalendar className="text-sm stroke-[2.5]" />
        Add to today&apos;s plan
      </button>
    </div>
  );
};

export default TodaysPlan;
