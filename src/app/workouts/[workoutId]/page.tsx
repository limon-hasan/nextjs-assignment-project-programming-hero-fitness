import { IWorkout } from "@/types/workoutTypes";

const getWorkouts = async (): Promise<IWorkout[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const WorkoutDetailsPage = async ({
  params,
}: {
  params: Promise<{ workoutId: string }>;
}) => {
  const workouts = await getWorkouts();
  const { workoutId } = await params;
  const workout = workouts.find(
    (workout: IWorkout) => workout.id === Number(workoutId),
  );
  if (!workout) {
    return (
      <div className="container mx-auto my-12 text-center text-xl font-semibold">
        No workouts found!
      </div>
    );
  }
  return <div>{workout.name}</div>;
};

export default WorkoutDetailsPage;
