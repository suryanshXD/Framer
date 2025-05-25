"use client";
import React from "react";
import Text from "./components/Text/Texts";
import ScollUpText from "./components/Text/Scroll-Animated-Text";
import TextHover from "./components/Text/Gaping-Text";
import AnimatedTextBadge from "./components/Badge/Animated-Text-Badge";
import StaggeredText from "./components/Text/Gaping-Text";
import ScrollAnimatedText from "./components/Text/Scroll-Animated-Text";
import DarkBgGrid from "./components/Background/Dark-Bg-grid";
import RotateWord from "./components/Text/Rotate-Word";

const img1 =
  "https://img.freepik.com/free-photo/anime-japanese-character_23-2151478190.jpg?ga=GA1.1.1804695545.1747980337&semt=ais_hybrid&w=740";
const img2 =
  "https://img.freepik.com/free-photo/anime-japanese-character_23-2151478196.jpg?ga=GA1.1.1804695545.1747980337&w=740";
const img3 =
  "https://img.freepik.com/free-photo/anime-japanese-character_23-2151478203.jpg?ga=GA1.1.1804695545.1747980337&w=740";
const img4 =
  "https://img.freepik.com/free-photo/anime-moon-landscape_23-2151645903.jpg?ga=GA1.1.1804695545.1747980337&semt=ais_hybrid&w=740";

export default function Home() {
  return (
    <>
      <div className=" mt-20 ml-20 text-md">
        <RotateWord
          text="You are"
          words={[
            "Vibhuti Nalla",
            "Tiwari chadi baiyan",
            "Angoori english medium",
          ]}
        />
      </div>
      <div className="flex justify-center mt-200 mb-200">
        <ScrollAnimatedText text="Animated with framer motion" />
      </div>
    </>
  );
}
