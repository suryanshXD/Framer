import { motion } from "framer-motion";

export default function TextHover({ text }: { text: string }) {
  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.2 }}
      >
        {text.split("").map((char) => (
          <motion.span
            variants={{
              initial: { opacity: 0.2, x: -1 },
              animate: {
                opacity: 1,
                x: 0,
              },
            }}
            transition={{ duration: 2 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </>
  );
}
