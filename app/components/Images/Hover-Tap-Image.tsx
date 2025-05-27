"use client";
import { motion } from "framer-motion";

interface style {
  img: any;
  width: number;
}

export default function HoverTapImage({ img, width }: style) {
  return (
    <>
      <motion.img
        whileHover={{
          rotateX: -10,
          rotateY: 10,
          scale: 1.12,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 20,
            duration: 2,
          },
        }}
        whileTap={{ scale: 0.95, rotateX: -10, rotateY: 10 }}
        style={{ perspective: 1000 }}
        className={`cursor-pointer`}
        src={`${img}`}
        width={`${width}`}
      />
    </>
  );
}
