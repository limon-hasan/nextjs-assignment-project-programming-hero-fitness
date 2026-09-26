export default function Loading() {
  return (
    <div className="min-h-screen bg-[#08090c] flex flex-col items-center justify-center gap-4">
      <div className="w-12 h-12 border-4 border-slate-800 border-t-[#ccff00] rounded-full animate-spin"></div>
      <p className="font-oswald text-slate-400 tracking-wider text-sm animate-pulse uppercase">
        Loading workouts...
      </p>
    </div>
  );
}
