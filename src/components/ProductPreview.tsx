import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import productImage from "@/assets/product-reference.webp";

const ProductPreview = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="text-gradient">Shop Now</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience relief with our heating and massage technology
            </p>
          </div>
        </ScrollReveal>

        <Link to="/product">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative max-w-4xl mx-auto bg-card rounded-3xl overflow-hidden border border-border group cursor-pointer"
          >
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              <ScrollReveal direction="left" delay={0.2}>
                <div className="relative aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden bg-secondary/50">
                  <img
                    src={productImage}
                    alt="Menstrual Relief Belt"
                    className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.3}>
                <div className="flex flex-col justify-center">
                  <span className="text-primary text-sm font-semibold tracking-wider mb-2">
                    BEST SELLER
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                    Menstrual Relief Heating Massage Belt
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Combining gentle heat with targeted massage, this belt relieves 
                    cramps and reduces discomfort. Provides comfort when you need it most.
                  </p>
                  
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-3xl font-bold text-primary">£25.00</span>
                    <span className="text-muted-foreground line-through">£50.00</span>
                    <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-semibold rounded-full">
                      50% OFF
                    </span>
                  </div>

                  <motion.div
                    className="flex items-center gap-2 text-foreground font-medium group-hover:text-primary transition-colors"
                  >
                    View Product
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </motion.div>
                </div>
              </ScrollReveal>
            </div>
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default ProductPreview;
