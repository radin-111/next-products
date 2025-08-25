import React from "react";

export default function loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-100 to-blue-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-black p-6">
      <div className="w-80 p-6 rounded-2xl shadow-2xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur-lg flex flex-col gap-6">
        {/* Image skeleton */}
        <div className="skeleton h-40 w-full rounded-xl"></div>

        {/* Title skeleton */}
        <div className="skeleton h-5 w-32 rounded-md"></div>

        {/* Description skeletons */}
        <div className="skeleton h-4 w-full rounded-md"></div>
        <div className="skeleton h-4 w-5/6 rounded-md"></div>

        {/* Button skeleton */}
        <div className="skeleton h-10 w-24 rounded-full self-center"></div>
      </div>
    </div>
  );
}
