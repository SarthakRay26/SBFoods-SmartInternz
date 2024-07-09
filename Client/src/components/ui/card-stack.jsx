import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval;

const CardStack = ({
  items,
  offset,
  scaleFactor,
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
  <div className="relative h-60 w-full md:h-60 md:w-full ml-10 mr-10">
    {cards.map((card, index) => {
      return (
        <motion.div
          key={card.id}
          className="absolute dark:bg-black bg-black h-60 w-full md:h-60 md:w-full rounded-3xl p-4 shadow-xl border border-neutral-600 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
          style={{
            transformOrigin: "top center",
          }}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: cards.length - index,
          }}
        >
          <div className="font-normal text-neutral-300 dark:text-neutral-200 md:text-3xl sm:text-2xl">
            {card.content}
          </div>
          <div>
            <p className="text-neutral-200 font-medium dark:text-white">
              {card.name}
            </p>
            <p className="text-neutral-400 font-normal dark:text-neutral-200">
              {card.designation}
            </p>
          </div>
        </motion.div>
      );
    })}
  </div>
);
};

export default CardStack;