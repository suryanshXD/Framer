"use client";
import React from "react";
import RainbowButton from "./components/Rainbow-Button";
import AnimatedButton from "./components/Animated-Button";
import DragableButton from "./components/Dragable-Button";
import DragImage from "./components/Images/Darg-Images";
import HoverTiltImage from "./components/Images/Hover-Tilt-Image";

export default function Home() {
  /*<DragImage
          img={
            "https://images.unsplash.com/photo-1607992922515-7e38329e65d4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww"
          }
          width={200}
        />*/
  return (
    <>
      <div
        className="flex flex-col justify-evenly items-center h-screen "
        onMouseMove={(e) => {
          console.log(e.target);
        }}
      >
        <div>
          <RainbowButton text="Get Started" />
        </div>
        <AnimatedButton theme="black" textColor="white" text="Get Started" />

        <DragableButton theme="black" textcolor="white" text="Drag Button" />

        <HoverTiltImage
          img={
            "https://images.unsplash.com/photo-1607992922515-7e38329e65d4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww"
          }
          width={50}
        />
      </div>
    </>
  );
}
