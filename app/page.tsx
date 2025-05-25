"use client";
import React from "react";
import Text from "./components/Text/Texts";
import ScollUpText from "./components/Text/One-Text-Scroll-Down";
import TextHover from "./components/Text/Staggered-Text";

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
      <div className="mt-20 ml-5">
        <Text text="Animate anythig with framer motion Animate anythig with framer motion Animate anythig with framer motion Animate anythig with framer" />
        <div className="text-xl">
          <TextHover text="Animate" />
        </div>
      </div>
      <div className="flex justify-center max-h-fit mt-200 mr-40 mb-200">
        <ScollUpText text="Animate" />
      </div>
    </>
  );
}
