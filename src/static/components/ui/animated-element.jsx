"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const AnimatedElement = ({
  children,
  variants,
  className = "",
  threshold = 0.1,
  triggerOnce = true,
  delay = 0,
  duration = 0.5,
  defaultAnimation = "fadeIn",
  direction = "up",
}) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
    rootMargin: "0px 0px -50px 0px",
  });

  // Default animations if no variants are provided
  const defaultVariants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        duration,
        delay,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants || defaultVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedGroup = ({ 
  children, 
  className = "",
  threshold = 0.1,
  triggerOnce = true,
  staggerDelay = 0.1
}) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
    rootMargin: "0px 0px -50px 0px",
  });

  const container = {
    hidden: { opacity: 0.5 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={container}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedChild = ({ 
  children,
  className = "",
  direction = "up"
}) => {
  const item = {
    hidden: { 
      opacity: 0.2,
      y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
      x: direction === "left" ? 20 : direction === "right" ? -20 : 0
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { 
        type: "spring",
        duration: 0.5,
        damping: 15
      }
    }
  };

  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}; 