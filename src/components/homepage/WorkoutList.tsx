import { IWorkout } from "@/types/workoutTypes";
import WorkoutListCard from "./WorkoutListCard";

const getWorkouts = async (): Promise<IWorkout[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const WorkoutList = async () => {
  const workouts = await getWorkouts();

  return (
    <section id="library" className="container mx-auto px-4 md:px-10 py-12">
      <div className="mb-8">
        <h2 className="font-oswald text-3xl md:text-4xl font-black uppercase text-white tracking-tight">
          THE LIBRARY
        </h2>
        <p className="text-slate-400 text-sm md:text-base mt-1">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workouts.map((workout: IWorkout) => (
          <WorkoutListCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
};

export default WorkoutList;
