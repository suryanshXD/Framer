"use client";
import React from "react";
import DarkGridBg from "./components/Background/Dark-Grid";
import DarkGridMasked from "./components/Background/Dark-grid-Masked";
import DotLighBg from "./components/Background/Dot-Light";
import Testimonial from "./components/Testimonial/Testimonial";
import SharedLayoutAnimation from "./components/Testimonial/Testimonial";
import GapingText from "./components/Text/Gaping-Text";
import RotateWord from "./components/Text/Rotate-Word";
import ScrollAnimatedText from "./components/Text/Scroll-Animated-Text";
import Text from "./components/Text/Texts";
import DragImage from "./components/Images/Darg-Images";
import HoverTapImage from "./components/Images/Hover-Tap-Image";

const img1 =
  "https://img.freepik.com/free-photo/anime-japanese-character_23-2151478190.jpg?ga=GA1.1.1804695545.1747980337&semt=ais_hybrid&w=740";
const img2 =
  "https://img.freepik.com/free-photo/anime-japanese-character_23-2151478196.jpg?ga=GA1.1.1804695545.1747980337&w=740";
const img3 =
  "https://img.freepik.com/free-photo/anime-japanese-character_23-2151478203.jpg?ga=GA1.1.1804695545.1747980337&w=740";
const img4 =
  "https://img.freepik.com/free-photo/anime-moon-landscape_23-2151645903.jpg?ga=GA1.1.1804695545.1747980337&semt=ais_hybrid&w=740";

export default function Home() {
  const feed = [
    {
      name: "Suryansh",
      testimonial: "Feels great using your product",
    },
    {
      name: "Aryan",
      testimonial:
        "Better than any other out in the market keep going great product",
    },
  ];
  return (
    <>
      <div className="w-full h-screen bg-white flex justify-center items-center">
        <HoverTapImage img={img3} width={200} />
      </div>
    </>
  );
}
