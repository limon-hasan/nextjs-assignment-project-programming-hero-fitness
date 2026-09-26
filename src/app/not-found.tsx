import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#08090c] text-white flex flex-col items-center justify-center px-4 text-center">
      <h1 className="font-oswald text-7xl md:text-9xl font-black text-[#ccff00] mb-2 tracking-wider">
        404
      </h1>
      <h2 className="font-oswald text-2xl md:text-3xl font-bold uppercase mb-3">
        Page Not Found
      </h2>
      <p className="text-slate-400 text-sm max-w-md mb-8">
        The lift or page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-[#ccff00] hover:bg-[#b5e600] text-black font-extrabold text-sm px-7 py-3 rounded-full transition-colors cursor-pointer"
      >
        Back to Workouts
      </Link>
    </div>
  );
}
