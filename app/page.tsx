"use client";
import React from "react";
import ThreeCardScroll from "./components/card/ThreeCardScroll";
import DarkBgGrid from "./components/Background/Dark-Bg-grid";
import ThreeCardHover from "./components/card/ThreeCardHover";
import SlideCard from "./components/card/Modal-Card";
import HoverTiltImage from "./components/Images/Hover-Tap-Image";
import DragImage from "./components/Images/Darg-Images";
import HoverTapImage from "./components/Images/Hover-Tap-Image";
import ModalCard from "./components/card/Modal-Card";

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
      <div className="flex justify-center mt-200 mb-300">
        <ModalCard img={img3} width={200} />
      </div>
    </>
  );
}
