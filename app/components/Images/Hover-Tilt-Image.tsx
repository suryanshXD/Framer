"use client";
import { motion } from "framer-motion";

interface style {
  img: any;
  width: number;
}

export default function HoverTiltImage({ img, width }: style) {
  return (
    <>
      <motion.img
        whileHover={{
          rotateX: 10,
          rotateY: 10,
          scale: 1.05,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        }}
        whileTap={{ scale: 1.15 }}
        style={{ perspective: 1000 }}
        className={`relative  border w-${width} border-black cursor-pointer hover:shadow-2xl`}
        src={`${img}`}
      />
    </>
  );
}
