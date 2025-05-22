"use client";
import { motion, scale } from "framer-motion";

interface style {
  theme: "black" | "white";
  textcolor: "black" | "white";
  text: string;
}

export default function DragableButton({ theme, textcolor, text }: style) {
  return (
    <>
      <motion.button
        drag
        whileDrag={{ scale: 1.1 }}
        dragConstraints={{
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
        whileHover={{ scale: 1.1 }}
        className={`bg-${theme} text-${textcolor} border-1 border-black text-center px-6 py-2.5 rounded-lg w-36 cursor-pointer`}
      >
        {text}
      </motion.button>
    </>
  );
}
