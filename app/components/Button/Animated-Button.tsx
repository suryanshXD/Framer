"use client";
import { motion, useTime, useTransform } from "framer-motion";

interface styling {
  theme: "black" | "white";
  textColor: "black" | "white";
  text: string;
}

export default function AnimatedButton({ theme, textColor, text }: styling) {
  const time = useTime();
  const rotate = useTransform(time, [0, 6000], [0, 360], {
    clamp: false,
  });
  const borderRotate = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg,#000,#fff,#fff,#000,#fff,#fff,#000)`;
  });

  return (
    <>
      <button className="relative w-36">
        <div
          className={`relative bg-${theme} text-${textColor} text-center border-1  border-black py-3 rounded-lg transition-colors duration-200 z-10 cursor-pointer`}
        >
          {text}
        </div>
        <motion.div
          className="absolute -inset-1 rounded-lg"
          style={{ background: borderRotate, filter: "blur(4px)" }}
        ></motion.div>
      </button>
    </>
  );
}
