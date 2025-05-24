"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useState } from "react";

interface style {
  img: any;
  width: number;
}

export default function ModalCard({ img, width }: style) {
  const [isVisible, setIsVisible] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXspring = useSpring(x);
  const mouseYspring = useSpring(y);

  const rotateX = useTransform(
    mouseYspring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXspring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  function handelMouseMove(e: any) {
    const rect = e.target.getBoundingClientRect();
    const height = rect.height;
    const width = rect.width;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const XPect = mouseX / width - 0.5;
    const YPect = mouseY / height - 0.5;

    x.set(XPect);
    y.set(YPect);
  }

  const handelMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <>
      <motion.button
        whileTap={{ y: 1.5 }}
        onClick={() => setIsVisible(!isVisible)}
        className="absolute p-2 bg-black text-white rounded-full cursor-pointer"
      >
        {!isVisible ? "Show" : "Close"}
      </motion.button>
      <AnimatePresence initial={false}>
        {isVisible ? (
          <motion.img
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, y: -210 }}
            exit={{ opacity: 0, scale: 1 }}
            className="relative rounded-xl shadow-3xl"
            onMouseMove={handelMouseMove}
            onMouseLeave={handelMouseLeave}
            src={`${img}`}
            width={`${width}`}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}
