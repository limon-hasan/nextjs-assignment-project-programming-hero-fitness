"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/types/workoutTypes";
import { useContext } from "react";
import { FiBookmark } from "react-icons/fi";
import { toast } from "react-toastify";

interface ITodaysPlanProps {
  workout: IWorkout;
}

const SavedLater = ({ workout }: ITodaysPlanProps) => {
  const { savedLater, setSavedLater } = useContext(WorkoutContext);
  const handleWorkout = () => {
    console.log("Saved later button triggered", workout);
    setSavedLater([...savedLater, workout]);
    toast.success(`${workout.name} have already saved!`);
  };
  return (
    <div>
      <button
        onClick={() => handleWorkout()}
        className="bg-transparent hover:bg-slate-900 border border-slate-800 text-slate-200 text-xs font-medium px-4 py-2.5 rounded-lg flex items-center gap-2 transition-colors cursor-pointer"
      >
        <FiBookmark className="text-sm" />
        Save for later
      </button>
    </div>
  );
};

export default SavedLater;
