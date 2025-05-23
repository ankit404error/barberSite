import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const AnimatedCard = ({ 
  children, 
  className,
  hoverEffect = "lift", // lift, glow, tilt, scale, border
  hoverGlowColor = "rgba(59, 130, 246, 0.3)",
  hoverBorderColor = "rgba(59, 130, 246, 1)",
  ...props 
}) => {
  // Define hover animations based on effect type
  const getHoverProps = () => {
    switch (hoverEffect) {
      case "lift":
        return {
          whileHover: { y: -10, transition: { duration: 0.2 } }
        };
      case "glow":
        return {
          whileHover: { 
            boxShadow: `0 0 20px 5px ${hoverGlowColor}`,
            transition: { duration: 0.3 }
          }
        };
      case "tilt":
        return {
          whileHover: (e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const tiltX = (y - centerY) / 10;
            const tiltY = (centerX - x) / 10;
            
            return {
              rotateX: tiltX,
              rotateY: tiltY,
              transition: { duration: 0.1 }
            };
          }
        };
      case "scale":
        return {
          whileHover: { 
            scale: 1.05,
            transition: { duration: 0.2 }
          }
        };
      case "border":
        return {
          initial: { borderColor: "transparent" },
          whileHover: { 
            borderColor: hoverBorderColor,
            transition: { duration: 0.3 }
          }
        };
      default:
        return {};
    }
  };

  return (
    <motion.div
      className={cn(
        "rounded-lg p-6 bg-white/5 backdrop-blur-sm transition-all",
        hoverEffect === "border" && "border-2 border-transparent",
        className
      )}
      {...getHoverProps()}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const FlipCard = ({
  frontContent,
  backContent,
  className,
  frontClassName,
  backClassName,
  flipDirection = "horizontal", // horizontal or vertical
  ...props
}) => {
  return (
    <div 
      className={cn(
        "relative w-full aspect-[4/3] perspective-[1000px]", 
        className
      )}
      {...props}
    >
      <motion.div
        className="w-full h-full relative transition-all duration-500 transform-style-preserve-3d"
        initial={false}
        whileHover={
          flipDirection === "horizontal"
            ? { rotateY: 180 }
            : { rotateX: 180 }
        }
      >
        {/* Front */}
        <div className={cn(
          "absolute w-full h-full backface-hidden rounded-lg p-6",
          frontClassName
        )}>
          {frontContent}
        </div>

        {/* Back */}
        <div 
          className={cn(
            "absolute w-full h-full backface-hidden rounded-lg p-6 [transform:rotateY(180deg)]",
            flipDirection === "vertical" && "[transform:rotateX(180deg)]",
            backClassName
          )}
        >
          {backContent}
        </div>
      </motion.div>
    </div>
  );
};

export const HoverRevealCard = ({
  children,
  revealContent,
  className,
  revealClassName,
  direction = "bottom", // bottom, top, left, right
  ...props
}) => {
  // Set initial positioning based on direction
  const getRevealInitialStyle = () => {
    switch (direction) {
      case "bottom":
        return { bottom: "-100%" };
      case "top":
        return { top: "-100%" };
      case "left":
        return { left: "-100%" };
      case "right":
        return { right: "-100%" };
      default:
        return { bottom: "-100%" };
    }
  };

  // Set hover animation based on direction
  const getRevealHoverStyle = () => {
    switch (direction) {
      case "bottom":
      case "top":
        return { [direction]: 0 };
      case "left":
      case "right":
        return { [direction]: 0 };
      default:
        return { bottom: 0 };
    }
  };

  const isVertical = direction === "bottom" || direction === "top";

  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-lg",
        className
      )}
      initial="initial"
      whileHover="hover"
      {...props}
    >
      <div className="relative z-10">
        {children}
      </div>
      
      <motion.div
        className={cn(
          "absolute inset-0 z-20 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm",
          revealClassName
        )}
        initial={getRevealInitialStyle()}
        variants={{
          initial: getRevealInitialStyle(),
          hover: getRevealHoverStyle()
        }}
        transition={{ duration: 0.3 }}
      >
        {revealContent}
      </motion.div>
    </motion.div>
  );
}; 