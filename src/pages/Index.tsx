import { useState, useEffect, useRef } from "react";
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
  const contentRef = useRef<HTMLDivElement>(null);

  // Auto-cycle through slides - faster interval (1.5s instead of 2.5s)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const handleScrollClick = () => {
    contentRef.current?.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  };

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
                    transition={{ duration: 0.4, ease: "easeInOut" }}
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
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full flex items-center justify-center bg-white"
                  >
                    <div className="w-[450px] h-[450px] md:w-[550px] md:h-[550px] lg:w-[650px] lg:h-[650px] flex items-center justify-center">
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
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full bg-black flex items-center justify-center"
                >
                  <motion.span
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="text-white text-8xl md:text-[12rem] lg:text-[16rem] font-bold tracking-widest"
                  >
                    {slide.content}
                  </motion.span>
                </motion.div>
              )
            ) : null
          )}
        </AnimatePresence>

        {/* Scroll indicator - clickable with smooth scroll */}
        <motion.button
          onClick={handleScrollClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/60 z-10 cursor-pointer hover:text-foreground transition-colors duration-300 group"
        >
          <motion.span 
            className="text-sm tracking-widest uppercase group-hover:tracking-[0.3em] transition-all duration-300"
          >
            Scroll
          </motion.span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
          </motion.div>
        </motion.button>
      </section>

      {/* Content section with ref for smooth scroll target */}
      <div ref={contentRef}>
        <Marquee />

        <ProductPreview />

        <Features />

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4 md:px-8">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-light mb-6">
                  Discover Your Next Favorite
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Minimalist design meets exceptional quality in every piece we create.
                </p>
                <Link to="/product">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-foreground text-background font-medium tracking-wider hover:bg-foreground/90 transition-colors"
                  >
                    Buy Now
                  </motion.button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
