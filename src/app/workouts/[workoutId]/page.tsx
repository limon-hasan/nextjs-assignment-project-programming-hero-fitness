import { IWorkout } from "@/types/workoutTypes";
import Image from "next/image";
import { FiCalendar, FiBookmark } from "react-icons/fi";
import { FaDumbbell } from "react-icons/fa";
import TodaysPlan from "@/components/workout-details/TodaysPlan";
import SavedLater from "@/components/workout-details/SavedLater";

const getWorkouts = async (): Promise<IWorkout[]> => {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog");
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
      <div className="container mx-auto my-12 text-center text-xl font-semibold text-slate-400">
        No workouts found!
      </div>
    );
  }

  // Stats Data List
  const statsList = [
    { label: "EQUIPMENT", value: workout.equipment },
    { label: "DIFFICULTY", value: workout.difficulty },
    { label: "SETS", value: workout.sets },
    { label: "REPS", value: workout.reps },
    { label: "DURATION", value: `${workout.duration} min` },
    { label: "CALORIES", value: `${workout.caloriesBurned} kcal` },
    { label: "RATING", value: workout.rating },
  ];

  return (
    <div className="min-h-screen bg-[#08090c] text-white flex flex-col justify-between pt-6 pb-8 px-4 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-2">
          <div className="lg:col-span-6">
            <div className="relative w-full h-[420px] sm:h-[500px] lg:h-[560px] rounded-2xl overflow-hidden bg-[#10141d] border border-[#1b212d] shadow-2xl">
              <Image
                src={workout.image}
                alt={workout.name}
                fill
                unoptimized
                priority
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col">
            <h1 className="font-oswald text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-wide mb-2 leading-tight">
              {workout.name}
            </h1>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
              {workout.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="bg-[#ccff00] text-black text-xs font-black px-3.5 py-0.5 rounded-full capitalize"
                >
                  {muscle}
                </span>
              ))}
            </div>

            <div className="bg-[#0e121a] border border-[#1a212e] rounded-xl px-5 py-1 divide-y divide-[#181f2c] mb-6 shadow-md">
              {statsList.map((stat) => (
                <div
                  key={stat.label}
                  className="py-2.5 flex items-center justify-between text-xs sm:text-sm"
                >
                  <span className="text-slate-400 font-semibold tracking-wider uppercase text-[11px]">
                    {stat.label}
                  </span>
                  <span className="text-slate-200 font-medium">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mb-6">
              <h2 className="font-oswald text-base sm:text-lg font-bold uppercase text-white tracking-wide mb-3">
                INSTRUCTIONS
              </h2>
              <ol className="space-y-2 text-slate-300 text-xs sm:text-sm leading-relaxed list-none">
                {workout.instructions && workout.instructions.length > 0 ? (
                  workout.instructions.map((step: string, index: number) => (
                    <li key={index} className="flex gap-2 items-start">
                      <span className="text-slate-400 font-medium">
                        {index + 1}.
                      </span>
                      <span>{step}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-slate-500">No instructions available.</li>
                )}
              </ol>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              {/* <button className="bg-[#ccff00] hover:bg-[#b5e600] text-black text-xs font-extrabold px-4 py-2.5 rounded-lg flex items-center gap-2 transition-colors cursor-pointer">
                <FiCalendar className="text-sm stroke-[2.5]" />
                Add to today&apos;s plan
              </button> */}
              <TodaysPlan workout={workout} />
              {/* <button className="bg-transparent hover:bg-slate-900 border border-slate-800 text-slate-200 text-xs font-medium px-4 py-2.5 rounded-lg flex items-center gap-2 transition-colors cursor-pointer">
                <FiBookmark className="text-sm" />
                Save for later
              </button> */}
              <SavedLater workout={workout} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsPage;
