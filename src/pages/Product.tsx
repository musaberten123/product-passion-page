import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Minus, Plus, Truck, Shield, RotateCcw, ChevronLeft, ChevronRight, Thermometer, Vibrate, Battery, Settings2, Zap, Feather, Wind, Maximize2, Waves } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PaymentIcons, { PaymentIconsLarge } from "@/components/PaymentIcons";
import productReference from "@/assets/product-reference.webp";
import productHero from "@/assets/product-hero.jpg";
import slide2White from "@/assets/slide-2-new.jpg";

// Product images by color
const productImagesByColor = {
  pink: [
    productHero,
    productReference,
    "https://zovana.shop/cdn/shop/files/S359d367857b24152ba61a2509eb07645y.webp?v=1725442358&width=800",
    "https://zovana.shop/cdn/shop/files/S33c84dd96a1e4fbebc5b71ee0132bbdcT.webp?v=1725442356&width=800",
    "https://zovana.shop/cdn/shop/files/Sa9ee1f833de24f818dd8f09c3436a4b4b.webp?v=1725442356&width=800",
  ],
  white: [
    slide2White,
    "https://m.media-amazon.com/images/I/61YlkrFVRoL._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/51uueBATAaL._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/41Hcl6OWcCL._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/412dxPM5ewL._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/41pLXObtEtL._AC_SL1500_.jpg",
  ],
};

const features = [
  { text: "Adjustable elastic strap and buckle", icon: "Settings2" },
  { text: "Heats up in 3-5 seconds", icon: "Zap" },
  { text: "3-level smart temperature control (50/55/60°C)", icon: "Thermometer" },
  { text: "4-level vibration massage", icon: "Vibrate" },
  { text: "Lightweight design (only 0.5 lbs)", icon: "Feather" },
  { text: "Soft and breathable fabric", icon: "Wind" },
  { text: "Strap extends up to 52 inches", icon: "Maximize2" },
  { text: "Far-infrared wave technology", icon: "Waves" },
];

const PRICE = 25;

// Bundle deals
const bundles = [
  { qty: 1, discount: 0, label: "Buy 1", savings: null, popular: false },
  { qty: 2, discount: 10, label: "Buy 2", savings: "Save 10%", popular: true },
  { qty: 3, discount: 20, label: "Buy 3", savings: "Save 20%", popular: false },
];

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<"pink" | "white">("pink");
  const [selectedBundle, setSelectedBundle] = useState<number | null>(null);
  const { addToCart } = useCart();

  // Calculate price with bundle discount
  const getDiscountedPrice = () => {
    if (selectedBundle !== null) {
      const bundle = bundles[selectedBundle];
      const totalPrice = PRICE * bundle.qty;
      const discountAmount = totalPrice * (bundle.discount / 100);
      return totalPrice - discountAmount;
    }
    return PRICE * quantity;
  };

  const getEffectiveQuantity = () => {
    if (selectedBundle !== null) {
      return bundles[selectedBundle].qty;
    }
    return quantity;
  };

  // Get current color's images
  const productImages = productImagesByColor[selectedColor];

  // Reset selected image when color changes
  useEffect(() => {
    setSelectedImage(0);
  }, [selectedColor]);

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
    const effectiveQty = getEffectiveQuantity();
    const effectivePrice = selectedBundle !== null 
      ? getDiscountedPrice() / effectiveQty 
      : PRICE;
    
    addToCart({
      name: "Menstrual Relief Heating Massage Belt",
      price: effectivePrice,
      quantity: effectiveQty,
      color: selectedColor,
      image: productImages[0],
    });
  };

  const handleBundleSelect = (index: number) => {
    if (selectedBundle === index) {
      setSelectedBundle(null);
    } else {
      setSelectedBundle(index);
    }
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

                {/* Bundle Deals */}
                <div className="space-y-2">
                  <span className="text-sm font-medium">Special Offers:</span>
                  <div className="space-y-2">
                    {bundles.map((bundle, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleBundleSelect(index)}
                        className={`w-full p-3 rounded-xl border-2 transition-all flex items-center justify-between relative ${
                          selectedBundle === index
                            ? "border-primary bg-primary/10 shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]"
                            : bundle.popular
                              ? "border-primary bg-primary/10 shadow-[0_0_20px_rgba(var(--primary-rgb),0.25)]"
                              : "border-border hover:border-primary/50"
                        }`}
                      >
                        {bundle.popular && (
                          <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-primary text-primary-foreground text-[10px] font-bold rounded-full shadow-lg">
                            ⭐ MOST POPULAR
                          </span>
                        )}
                        <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                            selectedBundle === index ? "border-primary bg-primary/20" : bundle.popular ? "border-primary" : "border-muted-foreground"
                          }`}>
                            {selectedBundle === index && (
                              <div className="w-2 h-2 rounded-full bg-primary" />
                            )}
                          </div>
                          <span className={`text-sm font-medium ${bundle.popular ? "font-bold" : ""}`}>{bundle.label}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {bundle.discount > 0 && (
                            <span className="text-xs line-through text-muted-foreground">
                              £{(PRICE * bundle.qty).toFixed(2)}
                            </span>
                          )}
                          <span className={`text-sm font-bold ${bundle.popular ? "text-primary text-base" : ""}`}>
                            £{(PRICE * bundle.qty * (1 - bundle.discount / 100)).toFixed(2)}
                          </span>
                          {bundle.savings && (
                            <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                              bundle.popular 
                                ? "bg-primary text-primary-foreground" 
                                : "bg-green-500/20 text-green-500"
                            }`}>
                              {bundle.savings}
                            </span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Add to Cart - Fixed bottom on mobile */}
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  className="w-full py-4 bg-primary text-primary-foreground rounded-full font-semibold text-base glow transition-all"
                >
                  Add to Basket - £{getDiscountedPrice().toFixed(2)}
                </motion.button>

                {/* Payment Methods */}
                <PaymentIcons className="h-6" />

                {/* Trust badges - Compact */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="flex flex-col items-center text-center p-3 bg-gradient-to-b from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mb-1.5">
                      <Truck className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-[11px] font-semibold text-foreground">Free Shipping</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-3 bg-gradient-to-b from-green-500/10 to-green-500/5 rounded-xl border border-green-500/20">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mb-1.5">
                      <Shield className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-[11px] font-semibold text-foreground">Secure Pay</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-3 bg-gradient-to-b from-blue-500/10 to-blue-500/5 rounded-xl border border-blue-500/20">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mb-1.5">
                      <RotateCcw className="w-4 h-4 text-blue-500" />
                    </div>
                    <span className="text-[11px] font-semibold text-foreground">30-Day Return</span>
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
                      onClick={() => { setQuantity(Math.max(1, quantity - 1)); setSelectedBundle(null); }}
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-xl font-semibold w-8 text-center">{selectedBundle !== null ? bundles[selectedBundle].qty : quantity}</span>
                    <button
                      type="button"
                      onClick={() => { setQuantity(quantity + 1); setSelectedBundle(null); }}
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Bundle Deals */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">Special Offers</label>
                  <div className="space-y-3">
                    {bundles.map((bundle, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleBundleSelect(index)}
                        className={`w-full p-4 rounded-xl border-2 transition-all flex items-center justify-between relative ${
                          selectedBundle === index
                            ? "border-primary bg-primary/10 shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]"
                            : bundle.popular
                              ? "border-primary bg-primary/10 shadow-[0_0_25px_rgba(var(--primary-rgb),0.25)]"
                              : "border-border hover:border-primary/50"
                        }`}
                      >
                        {bundle.popular && (
                          <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full shadow-lg">
                            ⭐ MOST POPULAR
                          </span>
                        )}
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            selectedBundle === index ? "border-primary bg-primary/20" : bundle.popular ? "border-primary" : "border-muted-foreground"
                          }`}>
                            {selectedBundle === index && (
                              <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                            )}
                          </div>
                          <span className={`font-medium ${bundle.popular ? "font-bold text-lg" : ""}`}>{bundle.label}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          {bundle.discount > 0 && (
                            <span className="text-sm line-through text-muted-foreground">
                              £{(PRICE * bundle.qty).toFixed(2)}
                            </span>
                          )}
                          <span className={`font-bold ${bundle.popular ? "text-primary text-xl" : "text-lg"}`}>
                            £{(PRICE * bundle.qty * (1 - bundle.discount / 100)).toFixed(2)}
                          </span>
                          {bundle.savings && (
                            <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${
                              bundle.popular 
                                ? "bg-primary text-primary-foreground" 
                                : "bg-green-500/20 text-green-500"
                            }`}>
                              {bundle.savings}
                            </span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Add to Cart */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  className="w-full py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg glow hover:glow transition-all"
                >
                  Add to Basket - £{getDiscountedPrice().toFixed(2)}
                </motion.button>

                {/* Payment Methods */}
                <PaymentIconsLarge className="h-7" />

                {/* Trust badges */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="flex flex-col items-center text-center p-5 bg-gradient-to-b from-primary/15 to-primary/5 rounded-2xl border border-primary/30 hover:border-primary/50 transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Truck className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">Free UK Shipping</span>
                    <span className="text-xs text-muted-foreground mt-0.5">On all orders</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-5 bg-gradient-to-b from-green-500/15 to-green-500/5 rounded-2xl border border-green-500/30 hover:border-green-500/50 transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Shield className="w-6 h-6 text-green-500" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">Secure Payment</span>
                    <span className="text-xs text-muted-foreground mt-0.5">SSL encrypted</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-5 bg-gradient-to-b from-blue-500/15 to-blue-500/5 rounded-2xl border border-blue-500/30 hover:border-blue-500/50 transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <RotateCcw className="w-6 h-6 text-blue-500" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">30-Day Returns</span>
                    <span className="text-xs text-muted-foreground mt-0.5">Money back</span>
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5 max-w-4xl mx-auto">
              {features.map((feature, index) => {
                const IconComponent = {
                  Settings2, Zap, Thermometer, Vibrate, Feather, Wind, Maximize2, Waves
                }[feature.icon] || Check;
                
                return (
                  <ScrollReveal key={index} delay={index * 0.05}>
                    <div className="flex items-center gap-4 p-4 md:p-5 bg-card rounded-xl md:rounded-2xl border border-border hover:border-primary/30 transition-colors group">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </div>
                      <span className="text-sm md:text-base font-medium">{feature.text}</span>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </section>

          {/* Why WarmRelief Section */}
          <section className="mt-12 md:mt-24 py-12 md:py-16 bg-card rounded-2xl md:rounded-3xl">
            <div className="px-4 md:px-8">
              <ScrollReveal>
                <div className="text-center mb-8 md:mb-12">
                  <h2 className="text-2xl md:text-4xl font-display font-bold mb-3">
                    Why <span className="text-gradient">WarmRelief?</span>
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
                    Designed with the latest technology, optimized for your comfort
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                <ScrollReveal delay={0}>
                  <div className="p-4 md:p-6 bg-background rounded-xl md:rounded-2xl border border-border hover:border-primary/50 transition-colors group h-full">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary/20 transition-colors">
                      <Thermometer className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <h3 className="text-sm md:text-lg font-semibold mb-1.5 md:mb-2">Rapid Heating</h3>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                      Heats up in 3-5 seconds and emits far-infrared waves for deep tissue relief
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                  <div className="p-4 md:p-6 bg-background rounded-xl md:rounded-2xl border border-border hover:border-primary/50 transition-colors group h-full">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary/20 transition-colors">
                      <Vibrate className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <h3 className="text-sm md:text-lg font-semibold mb-1.5 md:mb-2">4-Level Massage</h3>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                      4 different vibration modes for personalized relaxation and comfort
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <div className="p-4 md:p-6 bg-background rounded-xl md:rounded-2xl border border-border hover:border-primary/50 transition-colors group h-full">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary/20 transition-colors">
                      <Battery className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <h3 className="text-sm md:text-lg font-semibold mb-1.5 md:mb-2">3 Heat Settings</h3>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                      Smart temperature control between 50°C, 55°C, and 60°C for perfect warmth
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <div className="p-4 md:p-6 bg-background rounded-xl md:rounded-2xl border border-border hover:border-primary/50 transition-colors group h-full">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary/20 transition-colors">
                      <Shield className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <h3 className="text-sm md:text-lg font-semibold mb-1.5 md:mb-2">Safe to Use</h3>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                      Smart safety chip protects against overheating for worry-free use
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>

          {/* Safety Notes - Integrated Design */}
          <section className="mt-12 md:mt-24">
            <ScrollReveal>
              <div className="text-center mb-6 md:mb-8">
                <h2 className="text-2xl md:text-4xl font-display font-bold mb-3">
                  Safety <span className="text-gradient">Guidelines</span>
                </h2>
                <p className="text-muted-foreground text-sm md:text-base">
                  Please read before using your WarmRelief belt
                </p>
              </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
              <ScrollReveal delay={0}>
                <div className="p-4 md:p-5 bg-card rounded-xl md:rounded-2xl border border-border hover:border-amber-500/50 transition-colors group">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                      <span className="text-amber-500 text-sm md:text-base">⏱️</span>
                    </div>
                    <div>
                      <h4 className="text-sm md:text-base font-semibold mb-1">Time Limit</h4>
                      <p className="text-muted-foreground text-xs md:text-sm">Max 8 minutes on high temperature</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <div className="p-4 md:p-5 bg-card rounded-xl md:rounded-2xl border border-border hover:border-amber-500/50 transition-colors group">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                      <span className="text-amber-500 text-sm md:text-base">👗</span>
                    </div>
                    <div>
                      <h4 className="text-sm md:text-base font-semibold mb-1">Sensitive Skin</h4>
                      <p className="text-muted-foreground text-xs md:text-sm">Use over clothing if needed</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="p-4 md:p-5 bg-card rounded-xl md:rounded-2xl border border-border hover:border-red-500/50 transition-colors group">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition-colors">
                      <span className="text-red-500 text-sm md:text-base">🤰</span>
                    </div>
                    <div>
                      <h4 className="text-sm md:text-base font-semibold mb-1">Not for Pregnancy</h4>
                      <p className="text-muted-foreground text-xs md:text-sm">Avoid use during pregnancy</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="p-4 md:p-5 bg-card rounded-xl md:rounded-2xl border border-border hover:border-red-500/50 transition-colors group">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition-colors">
                      <span className="text-red-500 text-sm md:text-base">❤️</span>
                    </div>
                    <div>
                      <h4 className="text-sm md:text-base font-semibold mb-1">Heart Conditions</h4>
                      <p className="text-muted-foreground text-xs md:text-sm">Not for cardiovascular issues</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="p-4 md:p-5 bg-card rounded-xl md:rounded-2xl border border-border hover:border-amber-500/50 transition-colors group sm:col-span-2 lg:col-span-1">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                      <span className="text-amber-500 text-sm md:text-base">⚡</span>
                    </div>
                    <div>
                      <h4 className="text-sm md:text-base font-semibold mb-1">Skin Disorders</h4>
                      <p className="text-muted-foreground text-xs md:text-sm">Use with caution if sensitive</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Product;
