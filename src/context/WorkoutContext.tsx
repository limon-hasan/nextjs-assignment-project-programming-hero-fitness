"use client";

import { IWorkout } from "@/types/workoutTypes";
import {
  createContext,
  SetStateAction,
  useState,
  useEffect,
  Dispatch,
  ReactNode,
} from "react";

interface IWorkoutContext {
  todaysPlan: IWorkout[];
  setTodaysPlan: Dispatch<SetStateAction<IWorkout[]>>;
  savedLater: IWorkout[];
  setSavedLater: Dispatch<SetStateAction<IWorkout[]>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export const WorkoutContext = createContext<IWorkoutContext>({
  todaysPlan: [],
  setTodaysPlan: () => {},
  savedLater: [],
  setSavedLater: () => {},
  loading: true,
  setLoading: () => {},
});

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [todaysPlan, setTodaysPlan] = useState<IWorkout[]>([]);
  const [savedLater, setSavedLater] = useState<IWorkout[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const sharedData = {
    todaysPlan,
    setTodaysPlan,
    savedLater,
    setSavedLater,
    loading,
    setLoading,
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
