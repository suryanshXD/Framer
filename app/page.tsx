"use client";
import React from "react";
import ThreeCardScroll from "./components/card/ThreeCardScroll";
import DarkBgGrid from "./components/Background/Dark-Bg-grid";

const img1 =
  "https://img.freepik.com/free-photo/anime-japanese-character_23-2151478190.jpg?ga=GA1.1.1804695545.1747980337&semt=ais_hybrid&w=740";
const img2 =
  "https://img.freepik.com/free-photo/anime-japanese-character_23-2151478196.jpg?ga=GA1.1.1804695545.1747980337&w=740";
const img3 =
  "https://img.freepik.com/free-photo/anime-japanese-character_23-2151478203.jpg?ga=GA1.1.1804695545.1747980337&w=740";

export default function Home() {
  /*<DragImage
          img={
            "https://images.unsplash.com/photo-1607992922515-7e38329e65d4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww"
          }
          width={200}
        />*/
  return (
    <>
      <div>
        <div className="mt-200 mb-500">
          <ThreeCardScroll img1={img1} img2={img2} img3={img3} width={240} />
        </div>
      </div>
    </>
  );
}
