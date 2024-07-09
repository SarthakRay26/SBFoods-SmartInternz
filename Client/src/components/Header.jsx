import React from "react";
import burger from "@/assets/burger.png";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-black pb-10">
      <div className="md:flex-1">
        <img src={burger} alt="Your Image Description" className="w-full" />
      </div>
      <div className="md:flex-1 flex flex-col items-center">
        <p className="text-white text-4xl">Wake up your taste buds</p>
        <p className="text-white text-4xl pb-8">with our <span style={{ color: 'red' }}>Juicy Bites</span></p>
        <p className="text-white text-xl pb-10">Get food within 30 minutes</p>
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Explore the Menu
        </button>
      </div>
    </div>
  );
};

export default Header;