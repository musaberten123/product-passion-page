import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductPreview from "@/components/ProductPreview";
import Features from "@/components/Features";
import Marquee from "@/components/Marquee";
import ScrollReveal from "@/components/ScrollReveal";
import slide1 from "@/assets/slide-1.jpg";
import slide2 from "@/assets/slide-2.jpg";
import slide3 from "@/assets/slide-3.jpeg";

// Slides: Image 3 (fullscreen) → Image 1 (centered) → "OR" text → Image 2 (centered)
type SlideType = { type: "image"; src: string; fullscreen?: boolean } | { type: "text"; content: string };

const heroSlides: SlideType[] = [
  { type: "image", src: slide3, fullscreen: true },
  { type: "image", src: slide1, fullscreen: false },
  { type: "text", content: "OR" },
  { type: "image", src: slide2, fullscreen: false },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-cycle through slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Fullscreen Slideshow */}
      <section className="h-screen w-full relative overflow-hidden bg-white">
        <AnimatePresence mode="wait">
          {heroSlides.map((slide, index) =>
            currentSlide === index ? (
              slide.type === "image" ? (
                slide.fullscreen ? (
                  // Fullscreen image (slide 3) - contain to show text
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full bg-[#f5c4c0] flex items-center justify-center"
                  >
                    <img
                      src={slide.src}
                      alt="Product"
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                ) : (
                  // Centered smaller image (slides 1 and 2) - fixed size container
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full flex items-center justify-center bg-white"
                  >
                    <div className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[550px] lg:h-[550px] flex items-center justify-center">
                      <img
                        src={slide.src}
                        alt="Product"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </motion.div>
                )
              ) : (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full bg-black flex items-center justify-center"
                >
                  <motion.span
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-white text-8xl md:text-[12rem] lg:text-[16rem] font-bold tracking-widest"
                  >
                    {slide.content}
                  </motion.span>
                </motion.div>
              )
            ) : null
          )}
        </AnimatePresence>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-black/80"
          >
            <span className="text-sm font-medium">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* Marquee */}
      <Marquee />

      {/* Product Preview */}
      <ProductPreview />

      {/* Features */}
      <Features />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-t from-card to-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Designed For <span className="text-gradient">Your Comfort</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Join thousands of happy customers and experience the relief you deserve. 
                Order now and enjoy free UK shipping!
              </p>
              <Link to="/product">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-primary text-primary-foreground rounded-full font-semibold text-lg glow hover:glow transition-all"
                >
                  Buy Now - £25.00
                </motion.button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
