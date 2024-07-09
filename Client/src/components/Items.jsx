import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  return (
    <>
    <BentoGrid className="max-w-4xl mx-auto ml-10 mr-10">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
    </>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-800 dark:from-neutral-900 dark:to-neutral-800 to-neutral-900"></div>
);
import {
  FaAppleAlt,
  FaPizzaSlice,
  FaCarrot,
  FaIceCream,
  FaFish,
  FaCheese,
  FaDrumstickBite
} from 'react-icons/fa';

const items = [
  {
    title: "The Fresh Apple",
    description: "Delight in the crisp and juicy taste of fresh apples.",
    header: <img src="https://th.bing.com/th/id/OIG4.ucHkFzPNRaTNxT17JkNu?w=270&h=270&c=6&r=0&o=5&dpr=1.8&pid=ImgGn" alt="Apple" className="rounded-xl h-40 object-cover"/>,
    icon: <FaAppleAlt className="h-4 w-4 text-neutral-300" />,
  },
  {
    title: "The Delicious Pizza",
    description: "Savor the flavors of a perfectly baked pizza.",
    header: <img src="https://th.bing.com/th/id/OIG3.rlfjw20UbL2RAaCFLgLO?w=270&h=270&c=6&r=0&o=5&dpr=1.8&pid=ImgGn" alt="Pizza" className="rounded-xl h-40 object-cover"/>,
    icon: <FaPizzaSlice className="h-4 w-4 text-neutral-300" />,
  },
  {
    title: "The Crunchy Carrot",
    description: "Enjoy the health benefits of fresh, crunchy carrots.",
    header: <img src="https://th.bing.com/th/id/OIG1.ewuT4ZX7QfKPdf9.ojRx?pid=ImgGn" alt="Carrot" className="rounded-xl h-40 object-cover"/>,
    icon: <FaCarrot className="h-4 w-4 text-neutral-300" />,
  },
  {
    title: "The Creamy Ice Cream",
    description:
      "Indulge in the rich and creamy texture of ice cream.",
    header: <img src="https://th.bing.com/th/id/OIG1.cUUVVUG04EAsHTIe_jNQ?w=270&h=270&c=6&r=0&o=5&dpr=1.8&pid=ImgGn" alt="Ice Cream" className="rounded-xl h-40 object-cover"/>,
    icon: <FaIceCream className="h-4 w-4 text-neutral-300" />,
  },
  {
    title: "The Fresh Fish",
    description: "Dive into the fresh and delicate taste of seafood.",
    header: <img src="https://th.bing.com/th/id/OIG1.DjgHjBKSjxkX79h7CDrY?w=270&h=270&c=6&r=0&o=5&dpr=1.8&pid=ImgGn" alt="Fish" className="rounded-xl h-40 object-cover"/>,
    icon: <FaFish className="h-4 w-4 text-neutral-300" />,
  },
  {
    title: "The Savory Cheese",
    description: "Relish the rich and savory flavors of cheese.",
    header: <img src="https://th.bing.com/th/id/OIG1.c3TZfedksYi104jQixCE?w=270&h=270&c=6&r=0&o=5&dpr=1.8&pid=ImgGn" alt="Cheese" className="rounded-xl h-40 object-cover"/>,
    icon: <FaCheese className="h-4 w-4 text-neutral-300" />,
  },
  {
    title: "The Juicy Chicken",
    description: "Experience the succulent and juicy taste of chicken.",
    header: <img src="https://th.bing.com/th/id/OIG4.hACC4twtGc2EesS1mfuw?w=270&h=270&c=6&r=0&o=5&dpr=1.8&pid=ImgGn" alt="Chicken" className="rounded-xl h-40 object-cover"/>,
    icon: <FaDrumstickBite className="h-4 w-4 text-neutral-300" />,
  },
];
