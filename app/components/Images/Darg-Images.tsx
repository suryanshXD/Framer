import { log } from "console";
import { motion } from "framer-motion";

interface style {
  width: number;
  img: any;
}

export default function DragImage({ img, width }: style) {
  return (
    <>
      <div
        className="border border-black p-1.5 rounded-lg curs"
        onMouseMove={(e) => {
          console.log(e.target);
        }}
      >
        <motion.img
          drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          src={`${img}`}
          alt="img"
          width={`${width}`}
          className="rounded-lg relative"
        />
      </div>
    </>
  );
}
