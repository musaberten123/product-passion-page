import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductPreview from "@/components/ProductPreview";
import Features from "@/components/Features";
import Marquee from "@/components/Marquee";
import ScrollReveal from "@/components/ScrollReveal";
// Hero images that will cycle through like a GIF
const heroImages = [
  "https://ae01.alicdn.com/kf/Se1d825a2188140dab7e17e97b1dbb85dD.jpg",
  "https://ae01.alicdn.com/kf/S620bc0cbe6894830a0ba7180dd165dd25.jpg",
  "https://m.media-amazon.com/images/I/61WkuDKC5QL._AC_UF894,1000_QL80_.jpg",
  "https://i.ebayimg.com/images/g/izgAAOSw5cplS3Gm/s-l140.webp",
  "https://i.ebayimg.com/images/g/vUIAAOSwUVdlS3Gm/s-l140.webp",
];

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-cycle through images like a GIF
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section with Cycling Images like its24heartz.com */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        {/* Image Slideshow Background */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt="Hero"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: currentImageIndex === index ? 1 : 0,
                scale: currentImageIndex === index ? 1 : 1.1
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ))}
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60" />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-primary text-sm font-medium mb-6"
            >
              ✨ Next Generation Relief
            </motion.span>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6 text-white drop-shadow-2xl">
              <span className="text-gradient">Pain-Free</span>
              <br />
              Days Ahead
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-lg">
              Experience ultimate comfort with our heating and massage belt. 
              Designed to relieve menstrual cramps and provide soothing relief.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/product">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg glow hover:glow transition-all"
                >
                  Shop Now
                </motion.button>
              </Link>
              <Link to="/product">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 border-2 border-white/50 backdrop-blur-sm rounded-full font-semibold text-lg text-white hover:bg-white/10 transition-all"
                >
                  Learn More
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

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
            className="flex flex-col items-center gap-2 text-white/80"
          >
            <span className="text-sm">Discover</span>
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
