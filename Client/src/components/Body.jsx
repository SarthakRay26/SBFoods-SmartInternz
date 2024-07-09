import React from "react";
import burger from "@/assets/burger.png";
import restaurant from "@/assets/restaurant.jpeg";

const Body = () => {
  return (
    <div className="flex justify-center flex-col md:flex-row items-center bg-black pb-10">
      <div className="md:flex-1 flex flex-col items-center">
        <p className="text-white text-4xl text-center">Exprerience the Premium Dining</p>
        <p className="text-xl pb-10 text-red-600">The Luxury dine-in</p>
        <button className="mb-10 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Order on Table
        </button>
      </div>
      <div className="md:flex-1 pr-10">
        <img
          src={restaurant}
          alt="Premium Restaurant"
          className="rounded-3xl h-[240px] w-full object-cover"
        />{" "}
      </div>
    </div>
  );
};

export default Body;
