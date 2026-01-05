import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
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
import productHero from "@/assets/product-hero.jpg";

// Slides: Product hero → Image 1 (centered) → "OR" text → Image 2 (centered)
type SlideType = { type: "image"; src: string; fullscreen?: boolean } | { type: "text"; content: string };

const heroSlides: SlideType[] = [
  { type: "image", src: productHero, fullscreen: true },
  { type: "image", src: slide1, fullscreen: false },
  { type: "text", content: "OR" },
  { type: "image", src: slide2, fullscreen: false },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll-based parallax effect
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.9]);
  const contentY = useTransform(scrollY, [0, 300], [0, -50]);

  // Auto-cycle through slides - fast interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const handleScrollClick = () => {
    contentRef.current?.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section - Fullscreen Slideshow with parallax */}
      <motion.section 
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="h-screen w-full relative overflow-hidden bg-background"
      >
        <AnimatePresence mode="wait">
          {heroSlides.map((slide, index) =>
            currentSlide === index ? (
              slide.type === "image" ? (
                slide.fullscreen ? (
                  // Fullscreen product image - white/light background
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full bg-gradient-to-b from-white via-gray-50 to-gray-100 flex items-center justify-center"
                  >
                    <img
                      src={slide.src}
                      alt="Product"
                      className="max-w-[85%] max-h-[70%] md:max-w-[60%] md:max-h-[75%] object-contain drop-shadow-2xl"
                    />
                  </motion.div>
                ) : (
                  // Centered smaller image (slides 1 and 2)
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full flex items-center justify-center bg-white"
                  >
                    <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[550px] md:h-[550px] lg:w-[650px] lg:h-[650px] flex items-center justify-center">
                      <img
                        src={slide.src}
                        alt="Product"
                        className="w-full h-full object-contain drop-shadow-xl"
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
                    initial={{ scale: 0.3, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.8, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="text-white text-6xl sm:text-8xl md:text-[12rem] lg:text-[16rem] font-bold tracking-widest"
                  >
                    {slide.content}
                  </motion.span>
                </motion.div>
              )
            ) : null
          )}
        </AnimatePresence>

        {/* Scroll indicator */}
        <motion.button
          onClick={handleScrollClick}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 md:gap-2 text-foreground/60 z-10 cursor-pointer hover:text-foreground transition-colors duration-300 group"
        >
          <motion.span 
            className="text-xs md:text-sm tracking-widest uppercase group-hover:tracking-[0.3em] transition-all duration-300"
          >
            Scroll
          </motion.span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-125 transition-transform duration-300" />
          </motion.div>
        </motion.button>
      </motion.section>

      {/* Content section with scroll reveal effect */}
      <motion.div 
        ref={contentRef}
        style={{ y: contentY }}
        className="relative z-10 bg-background"
      >
        <Marquee />

        <ProductPreview />

        <Features />

        {/* CTA Section */}
        <section className="py-16 md:py-24 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 md:px-8">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-4 md:mb-6">
                  Discover Your Next Favorite
                </h2>
                <p className="text-muted-foreground text-sm md:text-lg mb-6 md:mb-8 px-4">
                  Minimalist design meets exceptional quality in every piece we create.
                </p>
                <Link to="/product">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 md:px-8 py-3 md:py-4 bg-foreground text-background font-medium tracking-wider hover:bg-foreground/90 transition-colors text-sm md:text-base"
                  >
                    Buy Now
                  </motion.button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </motion.div>
    </div>
  );
};

export default Index;
