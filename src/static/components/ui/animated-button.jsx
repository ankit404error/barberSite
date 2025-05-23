import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { hoverScale, hoverGlow, hoverBackgroundChange } from "@/lib/animation";

export const ScaleButton = ({ 
  children, 
  className, 
  onClick,
  disabled = false,
  ...props 
}) => {
  return (
    <motion.button
      className={cn(
        "px-5 py-2.5 rounded font-medium transition-all", 
        className
      )}
      onClick={onClick}
      disabled={disabled}
      {...hoverScale}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export const GlowButton = ({ 
  children, 
  className, 
  onClick,
  glowColor = "rgba(59, 130, 246, 0.5)", 
  disabled = false,
  ...props 
}) => {
  return (
    <motion.button
      className={cn(
        "px-5 py-2.5 rounded font-medium transition-all", 
        className
      )}
      onClick={onClick}
      disabled={disabled}
      {...hoverGlow(glowColor)}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export const UnderlineButton = ({ 
  children, 
  className, 
  onClick,
  underlineColor = "currentColor",
  disabled = false,
  ...props 
}) => {
  return (
    <motion.button
      className={cn(
        "relative font-medium transition-all", 
        className
      )}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
      <motion.span
        className="absolute bottom-0 left-0 h-0.5 w-0 bg-current"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
        style={{ backgroundColor: underlineColor }}
      />
    </motion.button>
  );
};

export const BackgroundShiftButton = ({
  children,
  className,
  onClick,
  fromColor = "transparent",
  toColor = "rgba(59, 130, 246, 0.1)",
  disabled = false,
  ...props
}) => {
  return (
    <motion.button
      className={cn(
        "px-5 py-2.5 rounded font-medium transition-all", 
        className
      )}
      onClick={onClick}
      disabled={disabled}
      {...hoverBackgroundChange(fromColor, toColor)}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export const IconShiftButton = ({
  children,
  className,
  icon,
  iconPosition = "right",
  shiftAmount = 5,
  onClick,
  disabled = false,
  ...props
}) => {
  const isLeft = iconPosition === "left";
  
  return (
    <motion.button
      className={cn(
        "px-5 py-2.5 rounded font-medium transition-all flex items-center gap-2", 
        className
      )}
      onClick={onClick}
      disabled={disabled}
      whileHover="hover"
      {...props}
    >
      {isLeft && (
        <motion.span
          variants={{
            hover: { x: -shiftAmount }
          }}
        >
          {icon}
        </motion.span>
      )}
      
      <span>{children}</span>
      
      {!isLeft && (
        <motion.span
          variants={{
            hover: { x: shiftAmount }
          }}
        >
          {icon}
        </motion.span>
      )}
    </motion.button>
  );
}; 