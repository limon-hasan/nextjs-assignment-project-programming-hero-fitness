import Image from "next/image";
import Link from "next/link";
import { IWorkout } from "@/types/workoutTypes";
import { FiClock, FiFlame } from "react-icons/fi";

interface WorkoutCardProps {
  workout: IWorkout;
}

const WorkoutListCard = ({ workout }: WorkoutCardProps) => {
  return (
    <div className="bg-[#0e1117] border border-[#1b212d] hover:border-slate-700/80 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-xl">
      <div className="relative w-full h-52 bg-slate-900 overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          unoptimized
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex flex-wrap gap-2 mb-3">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="bg-[#ccff00] text-black text-[11px] font-black uppercase px-2.5 py-0.5 rounded tracking-wide"
              >
                {muscle}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-extrabold text-white uppercase tracking-tight mb-2">
            {workout.name}
          </h3>

          <p className="text-slate-400 text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed">
            {workout.description}
          </p>
        </div>

        <div>
          <div className="flex items-center justify-between text-xs text-slate-300 font-semibold border-t border-slate-800/80 pt-3 mb-4">
            <span className="flex items-center gap-1.5 text-slate-400">
              <FiClock className="text-[#ccff00]" />
              {workout.duration} mins
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <FiFlame className="text-orange-400" />
              {workout.caloriesBurned} kcal
            </span>
            <span className="text-[11px] uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-bold">
              {workout.difficulty}
            </span>
          </div>

          <Link
            href={`/workouts/${workout.id}`}
            className="block text-center w-full bg-[#161a22] hover:bg-[#ccff00] hover:text-black text-slate-200 font-bold py-2.5 rounded-lg text-xs uppercase tracking-wider transition-colors duration-200"
          >
            VIEW EXERCISE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkoutListCard;
