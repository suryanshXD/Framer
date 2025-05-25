import {
  motion,
  stagger,
  animate,
  inView,
  useScroll,
  useSpring,
} from "framer-motion";

export default function ScollUpText({ text }: { text: string }) {
  const defaultAnimation = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    inView: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="inView"
        transition={{ staggerChildren: 0.1, duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl"
      >
        {text.split("").map((char) => (
          <motion.span
            variants={defaultAnimation}
            transition={{ duration: 1 }}
            viewport={{ amount: "all" }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </>
  );
}
