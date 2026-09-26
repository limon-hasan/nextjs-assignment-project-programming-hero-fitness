"use client"

import { IWorkout } from "@/types/workoutTypes";
import {
  createContext,
  SetStateAction,
  useState,
  Dispatch,
  ReactNode,
} from "react";

interface IWorkoutContext {
  todaysPlan: IWorkout[];
  setTodaysPlan: Dispatch<SetStateAction<IWorkout[]>>;
  savedLater: IWorkout[];
  setSavedLater: Dispatch<SetStateAction<IWorkout[]>>;
}
export const WorkoutContext = createContext<IWorkoutContext>({
  todaysPlan: [],
  setTodaysPlan: () => {},
  savedLater: [],
  setSavedLater: () => {},
});
const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [todaysPlan, setTodaysPlan] = useState<IWorkout[]>([]);
  const [savedLater, setSavedLater] = useState<IWorkout[]>([]);

  const sharedData = {
    todaysPlan,
    setTodaysPlan,
    savedLater,
    setSavedLater,
  };
  return (
    <div>
      <WorkoutContext.Provider value={sharedData}>
        {children}
      </WorkoutContext.Provider>
    </div>
  );
};

export default WorkoutProvider;
