import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.svg";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2200);

    return () => {
      document.body.style.overflow = "unset";
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          key="preloader"
          // The "Curtain" Slide Up
          exit={{ y: "-100%" }}
          transition={{ 
            duration: 0.9, 
            ease: [0.85, 0, 0.15, 1] // Custom "Expo" curve for a snappy finish
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: [0.4, 1, 0.4], // Smooth breathing loop
              scale: 1 
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.95,
              transition: { duration: 0.4 } // Logo fades fast before curtain moves
            }}
            transition={{ 
              opacity: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              },
              scale: {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1]
              }
            }}
          >
            <img 
              src={logo} 
              alt="Loading..." 
              className="h-16 md:h-24 w-auto grayscale brightness-110" 
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;