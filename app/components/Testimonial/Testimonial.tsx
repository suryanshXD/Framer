"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import img1 from "../../../public/next.svg";
import img2 from "../../../public/anime-logo.jpg";

export default function Testimonial() {
  const [index, setIndex] = useState(feed[0]);

  const handleNext = () => {
    setIndex((val) => feed[(feed.indexOf(val) + 1) % feed.length]);
  };

  const handlePrev = () => {
    setIndex(
      (val) => feed[(feed.length - 1 + feed.indexOf(val)) % feed.length]
    );
  };
  return (
    <>
      <div className="flex flex-row bg-linear-to-r from from-neutral-100 via-blue-200 to-neutral-100 rounded-xl  gap-3 sm:w-full mx-1  md:w-3xl ">
        <motion.span whileTap={{ scale: [0.8] }}>
          <ArrowLeft
            onClick={handleNext}
            className="text-black size-6 font-semibold bg-white rounded-full p-1 border border-black ml-2.5 sm: mt-15 lg:mt-16"
          />
        </motion.span>
        <div className="flex flex-row py-2 w-full items-center">
          {
            <motion.span
              key={index.name}
              initial={{ opacity: 0, x: -40, scale: 1 }}
              animate={{ opacity: 1, x: 0, scale: [0.7, 1, 0.95] }}
            >
              <Image
                src={index.img}
                alt="img"
                className="rounded-lg border border-black w-32 sm: ml-5 md:ml-12"
              />
            </motion.span>
          }
          <div className="flex flex-col">
            <div className="ml-10 pb-2 text-xl font-semibold">
              {index.name.split("").map((char, i) => (
                <motion.span
                  key={char + i}
                  initial={{ opacity: 0, y: 40, rotate: -45 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ duration: 0.2 * i }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
            <div className="mx-10 rounded-md py-2 sm:mx-8">
              {index.testimonial.split("").map((char, i) => (
                <motion.span
                  key={char + i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.05 * i }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
        <motion.span whileTap={{ scale: 0.8 }}>
          <ArrowRight
            onClick={handlePrev}
            className="text-black size-6 font-semibold bg-white rounded-full p-1 border border-black mr-2.5 sm: mt-15 lg:mt-16"
          />
        </motion.span>
      </div>
    </>
  );
}

const feed = [
  {
    img: img2,
    name: "Suryansh",
    testimonial: "Your product seems to be the perfect market fit.",
  },
  {
    img: img2,
    name: "Aryan",
    testimonial:
      "Better than any other out there in the market keep going great product",
  },
];
