import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroAnimation from "@/components/HeroAnimation";
import ProductPreview from "@/components/ProductPreview";
import Features from "@/components/Features";
import Marquee from "@/components/Marquee";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center pt-20 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6"
              >
                ✨ Yeni Nesil Rahatlama
              </motion.span>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
                <span className="text-gradient">Ağrısız</span>
                <br />
                Günler Başlasın
              </h1>

              <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
                Isıtma ve masaj teknolojisiyle donatılmış özel kemermiz, regl
                dönemlerindeki ağrılarınızı hafifletir ve size konfor sağlar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/product">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold glow hover:glow transition-all"
                  >
                    Şimdi Satın Al
                  </motion.button>
                </Link>
                <Link to="/product">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border border-border rounded-full font-semibold hover:border-primary hover:text-primary transition-all"
                  >
                    Daha Fazla Bilgi
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <HeroAnimation />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm">Keşfet</span>
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
                Konforunuz İçin <span className="text-gradient">Tasarlandı</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Binlerce mutlu müşterimiz gibi siz de rahatlamanın keyfini çıkarın.
                Hemen sipariş verin, ücretsiz kargo fırsatını kaçırmayın!
              </p>
              <Link to="/product">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-primary text-primary-foreground rounded-full font-semibold text-lg glow hover:glow transition-all"
                >
                  Hemen Satın Al - $24.95
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
