import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md" : ""
      }`}
    >
      <div className="w-full px-8 md:px-12 py-6 flex items-center justify-center">
        <a href="#" className="font-script text-3xl md:text-4xl text-foreground hover:text-primary transition-colors duration-300">
          Mohamed Loutfy
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
