import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Minus, Plus, Truck, Shield, RotateCcw } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import productReference from "@/assets/product-reference.webp";

// Product images - only clean product shots without packaging
const productImages = [
  productReference,
  "https://zovana.shop/cdn/shop/files/S359d367857b24152ba61a2509eb07645y.webp?v=1725442358&width=800",
  "https://zovana.shop/cdn/shop/files/S33c84dd96a1e4fbebc5b71ee0132bbdcT.webp?v=1725442356&width=800",
  "https://zovana.shop/cdn/shop/files/Sa9ee1f833de24f818dd8f09c3436a4b4b.webp?v=1725442356&width=800",
  "https://zovana.shop/cdn/shop/files/Sae8c6b0b358246aeb64e7676f35d11a3d.webp?v=1725442356&width=800",
  "https://zovana.shop/cdn/shop/files/S6b5475b3f30d407882cc072e10cfe8837.webp?v=1725442356&width=800",
  "https://zovana.shop/cdn/shop/files/S1e01533777114564b630bb07769dba1c3.webp?v=1725442356&width=800",
  "https://zovana.shop/cdn/shop/files/S799c1eafe79a42c698c36b6188f2f8e1Z.webp?v=1725442356&width=800",
  "https://zovana.shop/cdn/shop/files/S13afc97e8d654229b53b1b74a6ae7841B.webp?v=1725442358&width=800",
  "https://zovana.shop/cdn/shop/files/S67958c0bf63946d69c25a11a09704b96z.webp?v=1725442358&width=800",
  "https://zovana.shop/cdn/shop/files/S9fc3e5bef3a24ca08ca6ba7706724998I.webp?v=1725442358&width=800",
  "https://zovana.shop/cdn/shop/files/S5569eaeefc584500800ce71e0f6da55eh.webp?v=1725442358&width=800",
  "https://zovana.shop/cdn/shop/files/S747e495455784f4f986da128984db4d6O.webp?v=1725442358&width=800",
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

  const handleAddToCart = () => {
    addToCart({
      name: "Menstrual Relief Heating Massage Belt",
      price: PRICE,
      quantity,
      color: selectedColor,
      image: productImages[0],
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <ScrollReveal direction="left">
              <div className="space-y-4">
                <motion.div
                  className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden bg-card border border-border"
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
                        className="w-full h-full object-contain p-1 bg-card"
                        loading="lazy"
                      />
                    </motion.button>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Product Info */}
            <ScrollReveal direction="right" delay={0.2}>
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
                  <span className="text-xl text-muted-foreground line-through">
                    £50.00
                  </span>
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
                      aria-label="Select pink colour"
                    />
                    <button
                      type="button"
                      onClick={() => setSelectedColor("white")}
                      className={`w-10 h-10 rounded-full bg-gray-200 border-2 transition-all ${
                        selectedColor === "white"
                          ? "border-foreground scale-110"
                          : "border-muted"
                      }`}
                      aria-label="Select white colour"
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
                    <span className="text-xl font-semibold w-8 text-center">
                      {quantity}
                    </span>
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
                    <span className="text-xs text-muted-foreground">
                      Free UK Shipping
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-card rounded-xl border border-border">
                    <Shield className="w-6 h-6 text-primary mb-2" />
                    <span className="text-xs text-muted-foreground">
                      Secure Payment
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-card rounded-xl border border-border">
                    <RotateCcw className="w-6 h-6 text-primary mb-2" />
                    <span className="text-xs text-muted-foreground">
                      30-Day Returns
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Features Section */}
          <section className="mt-24">
            <ScrollReveal>
              <h2 className="text-3xl font-display font-bold mb-8 text-center">
                Product <span className="text-gradient">Features</span>
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {features.map((feature, index) => (
                <ScrollReveal key={index} delay={index * 0.05}>
                  <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* Product Images Gallery */}
          <section className="mt-24">
            <ScrollReveal>
              <h2 className="text-3xl font-display font-bold mb-8 text-center">
                Detailed <span className="text-gradient">Images</span>
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {productImages.slice(1).map((img, index) => (
                <ScrollReveal key={index} delay={index * 0.05}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedImage(index + 1)}
                    className="aspect-square rounded-2xl overflow-hidden bg-card border border-border cursor-pointer"
                  >
                    <img
                      src={img}
                      alt={`Detail ${index + 1}`}
                      className="w-full h-full object-contain p-4"
                      loading="lazy"
                    />
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* Safety Notes */}
          <section className="mt-24">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto p-8 bg-card rounded-2xl border border-border">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  ⚠️ Important Warnings
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
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
