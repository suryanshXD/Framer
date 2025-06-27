"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const allIngredients = [
  { icon: "🍅", label: "Tomato" },
  { icon: "🥬", label: "Lettuce" },
  { icon: "🧀", label: "Cheese" },
  { icon: "🥕", label: "Carrot" },
  { icon: "🍌", label: "Banana" },
  { icon: "🫐", label: "Blueberries" },
  { icon: "🥂", label: "Champers?" },
];

const [tomato, lettuce, cheese] = allIngredients;
const tabs = [tomato, lettuce, cheese];

export default function LayoutAnimation() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <nav className="bg-[#fdfdfd] px-[5px] pt-[5px] pb-0 border-b border-[#eeeeee] h-[44px] rounded-t-[10px]">
      <ul className="flex w-full list-none p-0 m-0 font-medium text-sm">
        {tabs.map((item) => (
          <motion.li
            key={item.label}
            initial={false}
            animate={{
              backgroundColor: item === selectedTab ? "#eee" : "#eee0",
            }}
            className="relative flex items-center justify-between w-full px-[15px] py-[10px] text-black text-sm font-medium cursor-pointer user-select-none"
            onClick={() => setSelectedTab(item)}
          >
            {`${item.icon} ${item.label}`}
            {item === selectedTab ? (
              <motion.div
                className="absolute left-0 right-0 bottom-[-2px] h-[2px] bg-blue-300"
                layoutId="underline"
                id="underline"
              />
            ) : null}
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
