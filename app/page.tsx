"use client";
import Image from "next/image";
import { motion, useScroll, useTime, useTransform } from "framer-motion";
import { HelloWorld } from "@/components/hello-world";
import MagneticWrapper from "@/components/ui/magnetic-wrapper";
import React from "react";

export default function Home() {
  const time = useTime();
  const rotate = useTransform(time, [0, 10000], [0, -360], {
    clamp: false,
  });
  const roateBorder = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg,#414141,#414141,#414141,#44e635,#414141,#414141,#414141`;
  });

  return (
    <>
      <div className="bg-[#414141] h-screen w-full flex justify-center items-center">
        <motion.div
          className="absolute w-full max-w-sm p-px rounded-lg "
          style={{
            background: roateBorder,
          }}
        >
          <div className="px-4 py-4 mx-[2px] my-[2px] bg-stone-950 text-white rounded-lg">
            Click Me
          </div>
        </motion.div>
      </div>
    </>
  );
}
