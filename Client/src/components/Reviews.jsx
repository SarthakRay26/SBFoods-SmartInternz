"use client";
import React from "react";
import CardStack  from "@/components/ui/card-stack";

function Highlight({ children, className }) {
  return (
    <span
      className={`font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5 ${className}`}
    >
      {children}
    </span>
  );
}

function Reviews() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

const CARDS = [
    {
      id: 0,
      name: "John Doe",
      designation: "Food Critic",
      content: (
        <p>
          The pasta at Bella Italia is fantastic! <Highlight>The sauce is rich and flavorful</Highlight>, and the pasta is cooked to perfection. Highly recommend it for a delightful dining experience.
        </p>
      ),
    },
    {
      id: 1,
      name: "Jane Smith",
      designation: "Gourmet Chef",
      content: (
        <p>
          The sushi at Tokyo Diner is unparalleled. <Highlight>The fish is incredibly fresh</Highlight> and the presentation is exquisite. It's a must-visit for any sushi lover.
        </p>
      ),
    },
    {
      id: 2,
      name: "Mark Johnson",
      designation: "Culinary Enthusiast",
      content: (
        <p>
          The burgers at Grill Master are simply the best. <Highlight>The patties are juicy and well-seasoned</Highlight>, and the buns are perfectly toasted. A great spot for burger aficionados.
        </p>
      ),
    },
  ];
  

export { Reviews, Highlight };