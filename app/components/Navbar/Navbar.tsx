"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export function Navbar() {
  const navbarItem = [
    {
      name: "Home",
      herf: "/",
    },
    {
      name: "About",
      herf: "/about",
    },
    {
      name: "Contact",
      herf: "/contact",
    },
    {
      name: "Login",
      herf: "/login",
    },
  ];
  const [hover, setHover] = useState<number | null>(null);
  return (
    <div>
      <div className="sm: max-w-60 md:max-w-xl bg-gray-50 rounded-lg px-2 py-1 mx-auto flex">
        {navbarItem.map((time, idx) => (
          <Link
            onMouseEnter={() => setHover(idx)}
            onMouseLeave={() => setHover(null)}
            href={time.herf}
            className="w-full relative text-center text-sm py-3 hover:text-white"
          >
            {hover === idx && (
              <motion.div
                layoutId="1"
                className="bg-black inset-0 absolute rounded-lg w-full h-full"
              ></motion.div>
            )}
            <motion.span
              animate={{
                color: hover === idx ? "white" : "black",
              }}
              className="relative"
            >
              {time.name}
            </motion.span>
          </Link>
        ))}
      </div>
    </div>
  );
}
