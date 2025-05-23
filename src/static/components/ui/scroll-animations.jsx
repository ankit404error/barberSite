"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

// Parallax element that moves opposite to scroll direction
export const ParallaxElement = ({
  children,
  className,
  speed = 0.5, // Higher value = more movement
  direction = "y", // x or y
  ...props
}) => {
  const { scrollY } = useScroll();
  const [elementTop, setElementTop] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  
  useEffect(() => {
    const element = document.getElementById('parallax-wrapper');
    if (!element) return;
    
    const onResize = () => {
      setElementTop(element.offsetTop);
      setElementHeight(element.offsetHeight);
      setClientHeight(window.innerHeight);
    };
    
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  
  const transformValue = direction === "y" 
    ? useTransform(
        scrollY,
        [elementTop - clientHeight, elementTop + elementHeight],
        [`${-speed * 100}px`, `${speed * 100}px`]
      )
    : useTransform(
        scrollY,
        [elementTop - clientHeight, elementTop + elementHeight],
        [`${-speed * 50}px`, `${speed * 50}px`]
      );
  
  const springValue = useSpring(transformValue, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div id="parallax-wrapper" className="relative overflow-hidden">
      <motion.div 
        className={cn("relative", className)}
        style={{ [direction === "y" ? "y" : "x"]: springValue }}
        {...props}
      >
        {children}
      </motion.div>
    </div>
  );
};

// Progress bar that fills based on scroll progress
export const ScrollProgressBar = ({
  className,
  barColor = "#3b82f6",
  height = "4px",
  position = "top", // top, bottom
  ...props
}) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className={cn(
        "fixed left-0 right-0 z-50 origin-left",
        position === "top" ? "top-0" : "bottom-0",
        className
      )}
      style={{
        scaleX,
        height,
        backgroundColor: barColor,
      }}
      {...props}
    />
  );
};

// Reveal elements as they enter the viewport with sequenced animation
export const SequencedReveal = ({
  children,
  className,
  staggerDelay = 0.1,
  animation = "fadeInUp", // fadeInUp, fadeInDown, fadeInLeft, fadeInRight
  ...props
}) => {
  const { scrollYProgress } = useScroll();
  
  const getAnimationVariants = () => {
    switch (animation) {
      case "fadeInUp":
        return {
          hidden: { opacity: 0, y: 50 },
          visible: i => ({
            opacity: 1,
            y: 0,
            transition: {
              delay: i * staggerDelay,
              duration: 0.5,
            }
          })
        };
      case "fadeInDown":
        return {
          hidden: { opacity: 0, y: -50 },
          visible: i => ({
            opacity: 1,
            y: 0,
            transition: {
              delay: i * staggerDelay,
              duration: 0.5,
            }
          })
        };
      case "fadeInLeft":
        return {
          hidden: { opacity: 0, x: -50 },
          visible: i => ({
            opacity: 1,
            x: 0,
            transition: {
              delay: i * staggerDelay,
              duration: 0.5,
            }
          })
        };
      case "fadeInRight":
        return {
          hidden: { opacity: 0, x: 50 },
          visible: i => ({
            opacity: 1,
            x: 0,
            transition: {
              delay: i * staggerDelay,
              duration: 0.5,
            }
          })
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: i => ({
            opacity: 1,
            transition: {
              delay: i * staggerDelay,
              duration: 0.5,
            }
          })
        };
    }
  };
  
  const variants = getAnimationVariants();

  return (
    <motion.div
      className={cn("w-full", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      {...props}
    >
      {Array.isArray(children) 
        ? children.map((child, i) => (
            <motion.div
              key={i}
              variants={variants}
              custom={i}
            >
              {child}
            </motion.div>
          ))
        : <motion.div variants={variants} custom={0}>
            {children}
          </motion.div>
      }
    </motion.div>
  );
};

// Text that reveals character by character as you scroll
export const ScrollRevealText = ({
  text,
  className,
  threshold = 0.5, // When in viewport to start reveal
  ...props
}) => {
  const { scrollYProgress } = useScroll();
  
  const characters = Array.from(text);
  
  return (
    <motion.p
      className={cn("flex flex-wrap", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, threshold }}
      {...props}
    >
      {characters.map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                duration: 0.1,
                delay: i * 0.03
              }
            }
          }}
          className={char === " " ? "mr-1.5" : ""}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.p>
  );
};

// Scroll-triggered counter animation
export const ScrollCounter = ({ 
  start = 0,
  end = 100,
  duration = 2,
  className,
  onComplete,
  prefix = "",
  suffix = "",
  decimals = 0,
  ...props
}) => {
  const count = useMotionValue(start);
  const [displayValue, setDisplayValue] = useState(start);
  
  useEffect(() => {
    const handleUpdate = (latest) => {
      setDisplayValue(parseFloat(latest.toFixed(decimals)));
    };
    
    const controls = count.on("change", handleUpdate);
    
    return () => controls();
  }, [count, decimals]);

  return (
    <motion.span
      className={cn("font-mono", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { 
            duration: 0.5,
          },
        }
      }}
      onAnimationComplete={() => {
        if (onComplete) onComplete();
      }}
      {...props}
    >
      <motion.span
        animate={{ 
          from: start, 
          to: end
        }}
        transition={{ 
          duration, 
          delay: 0.2, 
          ease: "easeOut" 
        }}
        onUpdate={(latest) => {
          count.set(latest);
        }}
      />
      {prefix}{displayValue}{suffix}
    </motion.span>
  );
};

// Image reveal on scroll
export const ImageReveal = ({
  src,
  alt = "",
  className,
  overlayColor = "#000",
  direction = "left-to-right", // left-to-right, right-to-left, top-to-bottom, bottom-to-top
  duration = 1.5,
  ...props
}) => {
  const getInitialReveal = () => {
    switch (direction) {
      case "left-to-right":
        return { scaleX: 0, originX: 0 };
      case "right-to-left":
        return { scaleX: 0, originX: 1 };
      case "top-to-bottom":
        return { scaleY: 0, originY: 0 };
      case "bottom-to-top":
        return { scaleY: 0, originY: 1 };
      default:
        return { scaleX: 0, originX: 0 };
    }
  };

  const getRevealAnimation = () => {
    const isHorizontal = direction === "left-to-right" || direction === "right-to-left";
    
    return {
      hidden: { 
        ...(isHorizontal ? { scaleX: 1 } : { scaleY: 1 }),
        transition: { duration, ease: "easeInOut" }
      },
      visible: { 
        ...(isHorizontal ? { scaleX: 0 } : { scaleY: 0 }),
        transition: { duration, delay: 0.2, ease: "easeInOut" }
      }
    };
  };

  const revealVariants = getRevealAnimation();
  const initialReveal = getInitialReveal();

  return (
    <motion.div
      className={cn("relative overflow-hidden w-full", className)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      {...props}
    >
      <motion.div
        className="w-full h-full"
        initial={{ opacity: 0, scale: 1.1 }}
        variants={{
          initial: { opacity: 0, scale: 1.1 },
          animate: { 
            opacity: 1,
            scale: 1,
            transition: { duration: duration + 0.3, ease: "easeOut" }
          }
        }}
      >
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      <motion.div
        className="absolute inset-0 bg-black"
        initial={initialReveal}
        variants={revealVariants}
        style={{ backgroundColor: overlayColor }}
      />
    </motion.div>
  );
}; 