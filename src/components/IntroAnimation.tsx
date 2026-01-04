import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import heroWoman from "@/assets/hero-woman.jpg";

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [phase, setPhase] = useState<"image" | "zoom" | "done">("image");

  useEffect(() => {
    // Phase 1: Show image with glow for 2.5 seconds
    const timer1 = setTimeout(() => {
      setPhase("zoom");
    }, 2500);

    // Phase 2: Zoom and fade out
    const timer2 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 bg-background flex items-center justify-center overflow-hidden"
        >
          {/* Background glow effects */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0.3, 0.6, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-pink-500/20"
          />
          
          {/* Pulsing rings */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0, 0.3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute w-[600px] h-[600px] border-2 border-primary/30 rounded-full"
          />
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: [0.6, 1, 0.6], opacity: [0, 0.4, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="absolute w-[400px] h-[400px] border border-pink-500/40 rounded-full"
          />

          {/* Main image container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              phase === "zoom"
                ? { opacity: 0, scale: 1.5 }
                : { opacity: 1, scale: 1 }
            }
            transition={{ 
              duration: phase === "zoom" ? 1 : 0.8, 
              ease: "easeInOut" 
            }}
            className="relative z-10 w-full max-w-5xl mx-4"
          >
            {/* Image with glow */}
            <div className="relative">
              {/* Glow behind image */}
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 60px 20px hsl(var(--primary) / 0.3)",
                    "0 0 100px 40px hsl(var(--primary) / 0.5)",
                    "0 0 60px 20px hsl(var(--primary) / 0.3)",
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-3xl"
              />
              
              <motion.img
                src={heroWoman}
                alt="Menstrual Relief Belt"
                className="w-full h-auto rounded-3xl shadow-2xl relative z-10"
                initial={{ filter: "brightness(0.8)" }}
                animate={{ 
                  filter: ["brightness(0.8)", "brightness(1.1)", "brightness(0.9)", "brightness(1)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Overlay text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute inset-0 flex flex-col items-center justify-center z-20"
              >
                <motion.h1
                  className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white text-center drop-shadow-2xl"
                  animate={{ 
                    textShadow: [
                      "0 0 20px hsl(var(--primary) / 0.8)",
                      "0 0 40px hsl(var(--primary) / 1)",
                      "0 0 20px hsl(var(--primary) / 0.8)",
                    ]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Ağrısız Günler
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="text-lg md:text-xl text-white/90 mt-4 drop-shadow-lg"
                >
                  Rahatlığınız için tasarlandı
                </motion.p>
              </motion.div>
            </div>
          </motion.div>

          {/* Floating particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full"
              initial={{ 
                opacity: 0,
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 20
              }}
              animate={{ 
                opacity: [0, 1, 0],
                y: -20,
              }}
              transition={{ 
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "linear"
              }}
              style={{
                left: `${10 + Math.random() * 80}%`,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
