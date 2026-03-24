"use client";
import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-1 cursor-pointer group">
      <div className="relative w-8 h-8 flex items-center justify-center">
        <svg
          viewBox="0 0 32 32"
          className="w-full h-full fill-white transition-transform group-hover:scale-110 duration-300"
        >
          <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14c2.812 0 5.434-.827 7.625-2.25l-2.025-2.925A10.457 10.457 0 0 1 16 26.5c-5.799 0-10.5-4.701-10.5-10.5S10.201 5.5 16 5.5c2.479 0 4.757.863 6.541 2.301l2.316-2.698C22.502 3.193 19.397 2 16 2z" />
          <circle cx="23" cy="23" r="3" className="fill-brand-purple" />
        </svg>
      </div>
      <span className="text-2xl font-bold tracking-wider text-brand-purple drop-shadow-md">
        CINA
      </span>
    </div>
  );
};

export default Logo;
