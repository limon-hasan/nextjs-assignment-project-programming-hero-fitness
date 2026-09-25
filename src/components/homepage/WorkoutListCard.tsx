import Image from "next/image";
import Link from "next/link";
import { IWorkout } from "@/types/workoutTypes";
import { FiClock } from "react-icons/fi";
import { FaFire, FaRegStar } from "react-icons/fa";

interface WorkoutCardProps {
  workout: IWorkout;
}

const WorkoutListCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group bg-[#121620] border border-slate-800/80 hover:border-slate-700 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-lg cursor-pointer"
    >
      <div className="relative w-full h-48 bg-slate-900 overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          unoptimized
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex flex-wrap gap-1.5 mb-2.5">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="bg-[#ccff00] text-black text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full tracking-wide"
              >
                {muscle}
              </span>
            ))}
          </div>

          <h3 className="font-oswald text-xl font-bold uppercase text-white tracking-wide group-hover:text-[#ccff00] transition-colors leading-tight mb-1">
            {workout.name}
          </h3>

          <p className="text-slate-400 text-xs font-normal mb-3">
            {workout.equipment}
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs text-slate-400 font-medium border-t border-slate-800/60 pt-3 mt-1">
          <span className="flex items-center gap-1.5">
            <FiClock className="text-slate-400 text-sm" />
            {workout.duration} min
          </span>
          <span className="flex items-center gap-1.5">
            <FaFire className="text-slate-400 text-sm" />
            {workout.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1.5">
            <FaRegStar className="text-slate-400 text-sm" />
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutListCard;