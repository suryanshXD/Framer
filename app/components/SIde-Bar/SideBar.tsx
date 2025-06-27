"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const tabs = [
  { icon: "🍅", label: "Tomato" },
  { icon: "🥬", label: "Lettuce" },
  { icon: "🧀", label: "Cheese" },
];

export default function Sidebar() {
  const [selectedTab, setSelectedTab] = useState("Tomato");

  return (
    <nav className="bg-[#fdfdfd] px-[5px] pt-[5px] pb-0 border-b border-[#eeeeee] h-[44px] rounded-t-[10px]">
      <ul className="flex flex-col w-fit list-none p-0 m-0 font-medium text-sm">
        {/* Tomato Tab */}
        <motion.li
          animate={{
            backgroundColor: selectedTab === "Tomato" ? "#eee" : "#eee0",
          }}
          className="relative flex items-center justify-between w-full px-[15px] py-[10px] text-black text-sm font-medium cursor-pointer user-select-none"
          onClick={() => setSelectedTab("Tomato")}
        >
          🍅 Tomato
          {selectedTab === "Tomato" && (
            <motion.div
              layoutId="underline"
              className="absolute left-0 right-0 bottom-[-2px] h-[2px] border border-blue-300"
            />
          )}
        </motion.li>

        {/* Lettuce Tab */}
        <motion.li
          animate={{
            backgroundColor: selectedTab === "Lettuce" ? "#eee" : "#eee0",
          }}
          className="relative flex items-center justify-between w-full px-[15px] py-[10px] text-black text-sm font-medium cursor-pointer user-select-none"
          onClick={() => setSelectedTab("Lettuce")}
        >
          🥬 Lettuce
          {selectedTab === "Lettuce" && (
            <motion.div
              layoutId="underline"
              className="absolute left-0 right-0 bottom-[-2px] h-[2px]  border border-blue-300"
            />
          )}
        </motion.li>

        {/* Cheese Tab */}
        <motion.li
          animate={{
            backgroundColor: selectedTab === "Cheese" ? "#eee" : "#eee0",
          }}
          className="relative flex items-center justify-between w-full px-[15px] py-[10px] text-black text-sm font-medium cursor-pointer user-select-none"
          onClick={() => setSelectedTab("Cheese")}
        >
          🧀 Cheese
          {selectedTab === "Cheese" && (
            <motion.div
              layoutId="underline"
              className="absolute left-0 right-0 bottom-[-2px] h-[2px]  border border-blue-300"
            />
          )}
        </motion.li>
      </ul>
    </nav>
  );
}
