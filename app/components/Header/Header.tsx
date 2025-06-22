"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface content {
  title: string;
  homePageRef: string;
  AboutPageRef: string;
  ContactPageRef: string;
  LoginPageRef: string;
  theme: string;
  textcolor: string;
}

export default function Header({
  title,
  homePageRef,
  AboutPageRef,
  ContactPageRef,
  LoginPageRef,
  theme,
  textcolor,
}: content) {
  const defaultAnimation = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
  const li1 = "Home";
  const li2 = "About";
  const li3 = "Contact";
  const li4 = "Login";
  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.1, duration: 0.5 }}
        className="flex flex-row max-w-full justify-between bg-zinc-800 text-white py-3.5"
      >
        <div className="pl-18 text-2xl font-mono">
          {title.split("").map((char) => (
            <motion.span
              variants={defaultAnimation}
              transition={{ duration: 1 }}
            >
              {char}
            </motion.span>
          ))}
        </div>
        <div>
          <ul className="flex flex-row gap-8 pr-10 pt-1">
            <Link href={`${homePageRef}`}>
              <motion.li
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.9 }}
                className="text-xs text-white"
              >
                {li1.split("").map((char) => (
                  <motion.span
                    variants={defaultAnimation}
                    transition={{ duration: 0.5 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.li>
            </Link>
            <Link href={`${AboutPageRef}`}>
              <motion.li
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.9 }}
                className="text-xs text-white"
              >
                {li2.split("").map((char) => (
                  <motion.span
                    variants={defaultAnimation}
                    transition={{ duration: 0.5 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.li>
            </Link>
            <Link href={`${ContactPageRef}`}>
              <motion.li
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.9 }}
                className="text-xs text-white"
              >
                {li3.split("").map((char) => (
                  <motion.span
                    variants={defaultAnimation}
                    transition={{ duration: 0.5 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.li>
            </Link>
            <Link href={`${LoginPageRef}`}>
              <motion.li
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.9 }}
                className="text-xs text-white"
              >
                {li4.split("").map((char) => (
                  <motion.span
                    variants={defaultAnimation}
                    transition={{ duration: 0.5 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.li>
            </Link>
          </ul>
        </div>
      </motion.div>
    </>
  );
}
