import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Minus, Plus, Truck, Shield, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import productReference from "@/assets/product-reference.webp";
import productHero from "@/assets/product-hero.jpg";

// Product images - unique clean product shots
const productImages = [
  productHero,
  productReference,
  "https://zovana.shop/cdn/shop/files/S359d367857b24152ba61a2509eb07645y.webp?v=1725442358&width=800",
  "https://zovana.shop/cdn/shop/files/S33c84dd96a1e4fbebc5b71ee0132bbdcT.webp?v=1725442356&width=800",
  "https://zovana.shop/cdn/shop/files/Sa9ee1f833de24f818dd8f09c3436a4b4b.webp?v=1725442356&width=800",
  "https://zovana.shop/cdn/shop/files/S6b5475b3f30d407882cc072e10cfe8837.webp?v=1725442356&width=800",
  "https://zovana.shop/cdn/shop/files/S799c1eafe79a42c698c36b6188f2f8e1Z.webp?v=1725442356&width=800",
];

const features = [
  "Adjustable elastic strap and buckle",
  "Heats up in 3-5 seconds",
  "3-level smart temperature control (50/55/60°C)",
  "4-level vibration massage",
  "Lightweight design (only 0.5 lbs)",
  "Soft and breathable fabric",
  "Strap extends up to 52 inches",
  "Far-infrared wave technology",
];

const PRICE = 25;

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("pink");
  const { addToCart } = useCart();

  // Prevent auto-zoom on mobile
  useEffect(() => {
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (metaViewport) {
      metaViewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no');
    }
    return () => {
      if (metaViewport) {
        metaViewport.setAttribute('content', 'width=device-width, initial-scale=1');
      }
    };
  }, []);

  const handleAddToCart = () => {
    addToCart({
      name: "Menstrual Relief Heating Massage Belt",
      price: PRICE,
      quantity,
      color: selectedColor,
      image: productImages[0],
    });
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <main className="pt-16 pb-8 md:pt-24 md:pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-4 md:gap-12">
            
            {/* Mobile Image Gallery - Swipeable style */}
            <div className="lg:hidden">
              <div className="relative">
                {/* Main Image */}
                <div className="relative aspect-square bg-gradient-to-b from-white to-gray-50 rounded-2xl overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={selectedImage}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      src={productImages[selectedImage]}
                      alt="Product"
                      className="w-full h-full object-contain p-4"
                    />
                  </AnimatePresence>
                  
                  {/* Navigation arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Dots indicator */}
                <div className="flex justify-center gap-1.5 mt-3">
                  {productImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        selectedImage === index
                          ? "bg-primary w-6"
                          : "bg-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Mobile Product Info */}
              <div className="mt-4 space-y-4">
                <div>
                  <span className="inline-block px-2.5 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full mb-2">
                    Best Seller
                  </span>
                  <h1 className="text-xl font-display font-bold leading-tight">
                    Menstrual Relief Heating Massage Belt
                  </h1>
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-2xl font-bold text-primary">£{PRICE.toFixed(2)}</span>
                  <span className="text-base text-muted-foreground line-through">£50.00</span>
                  <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full">
                    Save 50%
                  </span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  Combining gentle heat with targeted massage for cramp relief. Adjustable and portable.
                </p>

                {/* Color Selection */}
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">Colour:</span>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedColor("pink")}
                      className={`w-8 h-8 rounded-full bg-pink-400 border-2 transition-all ${
                        selectedColor === "pink" ? "border-foreground scale-110" : "border-transparent"
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setSelectedColor("white")}
                      className={`w-8 h-8 rounded-full bg-gray-200 border-2 transition-all ${
                        selectedColor === "white" ? "border-foreground scale-110" : "border-muted"
                      }`}
                    />
                  </div>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">Qty:</span>
                  <div className="flex items-center gap-3 bg-card rounded-full p-1 border border-border">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 rounded-full flex items-center justify-center active:bg-muted transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-base font-semibold w-6 text-center">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 rounded-full flex items-center justify-center active:bg-muted transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Add to Cart - Fixed bottom on mobile */}
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  className="w-full py-4 bg-primary text-primary-foreground rounded-full font-semibold text-base glow transition-all"
                >
                  Add to Basket - £{(PRICE * quantity).toFixed(2)}
                </motion.button>

                {/* Trust badges - Compact */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="flex flex-col items-center text-center p-2 bg-card rounded-xl border border-border">
                    <Truck className="w-4 h-4 text-primary mb-1" />
                    <span className="text-[10px] text-muted-foreground">Free Shipping</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-2 bg-card rounded-xl border border-border">
                    <Shield className="w-4 h-4 text-primary mb-1" />
                    <span className="text-[10px] text-muted-foreground">Secure Pay</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-2 bg-card rounded-xl border border-border">
                    <RotateCcw className="w-4 h-4 text-primary mb-1" />
                    <span className="text-[10px] text-muted-foreground">30-Day Return</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Image Gallery */}
            <ScrollReveal direction="left" className="hidden lg:block">
              <div className="space-y-4">
                <motion.div
                  className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden bg-gradient-to-b from-white to-gray-50 border border-border"
                  layoutId="productImage"
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={selectedImage}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      src={productImages[selectedImage]}
                      alt="Product"
                      className="w-full h-full object-contain p-6"
                      loading="eager"
                    />
                  </AnimatePresence>
                </motion.div>

                <div className="flex gap-3 overflow-x-auto pb-2 justify-start px-2">
                  {productImages.map((img, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-colors ${
                        selectedImage === index
                          ? "border-primary"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Product ${index + 1}`}
                        className="w-full h-full object-contain p-1 bg-white"
                        loading="lazy"
                      />
                    </motion.button>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Desktop Product Info */}
            <ScrollReveal direction="right" delay={0.2} className="hidden lg:block">
              <div className="space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-4">
                    Best Seller
                  </span>
                  <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
                    Menstrual Relief Heating Massage Belt
                  </h1>
                  <p className="text-muted-foreground leading-relaxed">
                    Combining gentle heat with targeted massage, this belt relieves 
                    cramps and discomfort. Adjustable and portable for use at home 
                    or on the go, letting you manage your pain wherever you are.
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-primary">£{PRICE.toFixed(2)}</span>
                  <span className="text-xl text-muted-foreground line-through">£50.00</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-semibold rounded-full">
                    Save 50%
                  </span>
                </div>

                {/* Color Selection */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">Colour</label>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedColor("pink")}
                      className={`w-10 h-10 rounded-full bg-pink-400 border-2 transition-all ${
                        selectedColor === "pink"
                          ? "border-foreground scale-110"
                          : "border-transparent"
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setSelectedColor("white")}
                      className={`w-10 h-10 rounded-full bg-gray-200 border-2 transition-all ${
                        selectedColor === "white"
                          ? "border-foreground scale-110"
                          : "border-muted"
                      }`}
                    />
                  </div>
                </div>

                {/* Quantity */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">Quantity</label>
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-xl font-semibold w-8 text-center">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Add to Cart */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  className="w-full py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg glow hover:glow transition-all"
                >
                  Add to Basket - £{(PRICE * quantity).toFixed(2)}
                </motion.button>

                {/* Trust badges */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="flex flex-col items-center text-center p-4 bg-card rounded-xl border border-border">
                    <Truck className="w-6 h-6 text-primary mb-2" />
                    <span className="text-xs text-muted-foreground">Free UK Shipping</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-card rounded-xl border border-border">
                    <Shield className="w-6 h-6 text-primary mb-2" />
                    <span className="text-xs text-muted-foreground">Secure Payment</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-card rounded-xl border border-border">
                    <RotateCcw className="w-6 h-6 text-primary mb-2" />
                    <span className="text-xs text-muted-foreground">30-Day Returns</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Features Section */}
          <section className="mt-12 md:mt-24">
            <ScrollReveal>
              <h2 className="text-xl md:text-3xl font-display font-bold mb-6 md:mb-8 text-center">
                Product <span className="text-gradient">Features</span>
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 max-w-3xl mx-auto">
              {features.map((feature, index) => (
                <ScrollReveal key={index} delay={index * 0.05}>
                  <div className="flex items-center gap-3 p-3 md:p-4 bg-card rounded-xl border border-border">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                    </div>
                    <span className="text-xs md:text-sm">{feature}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* Safety Notes */}
          <section className="mt-12 md:mt-24">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto p-4 md:p-8 bg-card rounded-xl md:rounded-2xl border border-border">
                <h3 className="text-base md:text-xl font-semibold mb-3 md:mb-4 text-primary">
                  ⚠️ Important Warnings
                </h3>
                <ul className="space-y-1.5 md:space-y-2 text-muted-foreground text-xs md:text-sm">
                  <li>• Do not use high temperature setting for more than 8 minutes.</li>
                  <li>• For sensitive skin, use over clothing.</li>
                  <li>• Not suitable for pregnant women.</li>
                  <li>• People with serious cardiovascular conditions should not use.</li>
                  <li>• Those with skin sensitivity disorders should use with caution.</li>
                </ul>
              </div>
            </ScrollReveal>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Product;
