import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
}

const variants = {
  left: { x: -80, opacity: 0 },
  right: { x: 80, opacity: 0 },
  up: { y: 80, opacity: 0 },
  down: { y: -80, opacity: 0 },
};

const AnimatedSection = ({ children, direction = "right" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={variants[direction]}
      animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;