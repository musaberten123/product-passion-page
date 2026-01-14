import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductPreview from "@/components/ProductPreview";

import Marquee from "@/components/Marquee";
import ScrollReveal from "@/components/ScrollReveal";
import slide1 from "@/assets/slide-1-new.jpg";
import slide2 from "@/assets/slide-2-new.jpg";
import slide3 from "@/assets/slide-3-new.jpeg";

// Slideshow order: Image 3 → Image 1 → "OR" → Image 2 → loop
type SlideType = 
  | { type: "image"; src: string; bgColor: string; objectFit: "cover" | "contain"; productSize?: string } 
  | { type: "text"; content: string };

const heroSlides: SlideType[] = [
  { type: "image", src: slide3, bgColor: "#f5d5d5", objectFit: "contain", productSize: "w-full h-full" },
  { type: "image", src: slide1, bgColor: "#fefefe", objectFit: "contain", productSize: "max-w-[500px] max-h-[70vh]" },
  { type: "text", content: "OR" },
  { type: "image", src: slide2, bgColor: "#ffffff", objectFit: "contain", productSize: "max-w-[85vw] max-h-[60vh] md:max-w-[500px] md:max-h-[70vh]" },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const contentY = useTransform(scrollY, [0, 300], [0, -50]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollClick = () => {
    contentRef.current?.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <motion.section 
        style={{ opacity: heroOpacity }}
        className="h-screen w-full relative overflow-hidden pt-16 md:pt-20"
      >
        <AnimatePresence mode="wait">
          {currentSlideData.type === "image" ? (
            <Link to="/product" className="absolute inset-0 w-full h-full">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full h-full flex items-center justify-center cursor-pointer"
                style={{ backgroundColor: currentSlideData.bgColor }}
              >
                <img
                  src={currentSlideData.src}
                  alt="Product"
                  className={`object-contain ${currentSlideData.productSize || ""}`}
                />
              </motion.div>
            </Link>
          ) : (
            <Link to="/product" className="absolute inset-0 w-full h-full">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full h-full bg-black flex items-center justify-center cursor-pointer"
              >
                <span className="text-white text-7xl sm:text-8xl md:text-[10rem] lg:text-[14rem] font-bold tracking-widest">
                  {currentSlideData.content}
                </span>
              </motion.div>
            </Link>
          )}
        </AnimatePresence>

        <motion.button
          onClick={handleScrollClick}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 md:gap-2 z-10 cursor-pointer transition-colors duration-300 group"
        >
          <span className="text-xs md:text-sm tracking-widest uppercase text-gray-600 group-hover:text-gray-900 transition-all duration-300">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-gray-600 group-hover:text-gray-900 transition-transform duration-300" />
          </motion.div>
        </motion.button>
      </motion.section>

      <motion.div 
        ref={contentRef}
        style={{ y: contentY }}
        className="relative z-10 bg-background"
      >
        <Marquee />
        <ProductPreview />
        
        {/* Simple Trust Section */}
        <section className="py-12 md:py-16 bg-card border-y border-border">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-center">
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-bold text-primary mb-1">3-5s</span>
                <span className="text-xs md:text-sm text-muted-foreground">Heat Up Time</span>
              </div>
              <div className="w-px h-12 bg-border hidden md:block" />
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-bold text-primary mb-1">4</span>
                <span className="text-xs md:text-sm text-muted-foreground">Massage Modes</span>
              </div>
              <div className="w-px h-12 bg-border hidden md:block" />
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-bold text-primary mb-1">50%</span>
                <span className="text-xs md:text-sm text-muted-foreground">Off Today</span>
              </div>
              <div className="w-px h-12 bg-border hidden md:block" />
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-bold text-primary mb-1">30</span>
                <span className="text-xs md:text-sm text-muted-foreground">Day Returns</span>
              </div>
            </div>
          </div>
        </section>

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
