import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroAnimation = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const productImages = [
    "https://zovana.shop/cdn/shop/files/S359d367857b24152ba61a2509eb07645y.webp?v=1725442358&width=800",
    "https://ae01.alicdn.com/kf/S13afc97e8d654229b53b1b74a6ae7841B.jpg",
    "https://ae01.alicdn.com/kf/S67958c0bf63946d69c25a11a09704b96z.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % productImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-pink-500/30 rounded-full blur-3xl animate-pulse-glow" />
      
      {/* Rotating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-4 border-2 border-primary/30 rounded-full"
      />
      
      {/* Second rotating ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-12 border border-pink-500/20 rounded-full"
      />
      
      {/* Product image container */}
      <div className="relative z-10 flex items-center justify-center h-full">
        {productImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
            animate={{
              opacity: currentImage === index ? 1 : 0,
              scale: currentImage === index ? 1 : 0.8,
              rotateY: currentImage === index ? 0 : 90,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <img
              src={img}
              alt="Menstrual Relief Belt"
              className="w-3/4 h-3/4 object-contain drop-shadow-2xl animate-float"
            />
          </motion.div>
        ))}
      </div>

      {/* Decorative particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary rounded-full"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            x: [0, (i % 2 === 0 ? 1 : -1) * 50],
            y: [0, -80 - i * 20],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeOut",
          }}
          style={{
            left: `${30 + i * 8}%`,
            bottom: "30%",
          }}
        />
      ))}
    </div>
  );
};

export default HeroAnimation;
