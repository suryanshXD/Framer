"use client";
import React from "react";
import RainbowButton from "./components/Rainbow-Button";
import AnimatedButton from "./components/Animated-Button";
import DragableButton from "./components/Dragable-Button";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-evenly items-center h-screen bg-neutral-200">
        <div>
          <RainbowButton text="Get Started" />
        </div>
        <AnimatedButton theme="black" textColor="white" text="Get Started" />

        <DragableButton theme="black" textcolor="white" text="Drag Button" />
      </div>
    </>
  );
}
