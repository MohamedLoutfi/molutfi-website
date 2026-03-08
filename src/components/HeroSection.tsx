import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* Full-screen YouTube embed as hero background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.youtube.com/embed/8w-UUT2oWeI?autoplay=1&mute=1&loop=1&playlist=8w-UUT2oWeI&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          title="Showreel"
          className="absolute top-1/2 left-1/2 w-[180%] h-[180%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ border: "none" }}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-background/60" />

      <div className="relative z-10 flex flex-col items-center justify-end h-full pb-32 text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl tracking-[0.3em] uppercase text-foreground/80 font-light"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Seeing stories through the frame
        </motion.h2>

        <motion.a
          href="#brands"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 text-foreground/30 hover:text-primary transition-colors"
        >
          <ChevronDown className="w-10 h-10 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
