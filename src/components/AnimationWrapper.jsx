import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';

export function AnimationWrapper({ children, className = '' }) {
  const shouldReduceMotion = useReducedMotion();

  const animations = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: shouldReduceMotion ? 0 : 0.3 }
  };

  return (
    <motion.div
      {...animations}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3 }
};

export const slideIn = {
  initial: { x: -20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.3 }
};

export const scaleIn = {
  initial: { scale: 0.95, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.3 }
};

export const buttonHover = {
  scale: 1.05,
  transition: { duration: 0.2 }
};

export const buttonTap = {
  scale: 0.95,
  transition: { duration: 0.1 }
};