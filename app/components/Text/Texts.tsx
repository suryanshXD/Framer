"use client";
import { motion } from "framer-motion";

interface style {
  text: string;
}

export default function Text({ text }: style) {
  const defaultAnimation = {
    initial: {
      opacity: 0,
      y: -1,
    },
    inView: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <>
      <motion.div
        initial="initial"
        whileInView="inView"
        transition={{ duration: 1 }}
      >
        {text.split("").map((char) => (
          <motion.span variants={defaultAnimation} transition={{ duration: 5 }}>
            {char}
          </motion.span>
        ))}
      </motion.div>
    </>
  );
}
