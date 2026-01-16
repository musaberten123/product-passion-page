import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Heart, Shield, Truck, CreditCard, RefreshCw, Lock } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const trustBadges = [
    { icon: Shield, label: "Güvenli Alışveriş" },
    { icon: Lock, label: "SSL Korumalı" },
    { icon: Truck, label: "Hızlı Kargo" },
    { icon: RefreshCw, label: "Kolay İade" },
  ];

  const policies = [
    { name: "Gizlilik Politikası", href: "/privacy" },
    { name: "İade Politikası", href: "/returns" },
    { name: "Kargo Politikası", href: "/shipping" },
    { name: "Kullanım Şartları", href: "/terms" },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-card/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      {/* Trust Badges Section */}
      <div className="relative border-t border-border/50">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-border/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                  <badge.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground/80 text-center">{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative border-t border-border/30">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-1"
            >
              <h3 className="text-2xl font-display font-bold text-gradient mb-4">
                WarmRelief
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Regl ağrılarına etkili ve konforlu çözüm. 
                Isıtma ve masaj teknolojisiyle rahatlık sağlıyoruz.
              </p>
              {/* Payment Icons */}
              <div className="flex items-center gap-2 mt-4">
                <div className="p-2 rounded-md bg-white/10 border border-border/30">
                  <CreditCard className="w-5 h-5 text-muted-foreground" />
                </div>
                <span className="text-xs text-muted-foreground">Güvenli Ödeme</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-foreground">Hızlı Linkler</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    Ana Sayfa
                  </Link>
                </li>
                <li>
                  <Link
                    to="/product"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    Ürün
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    İletişim
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Policies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-foreground">Politikalar</h4>
              <ul className="space-y-3">
                {policies.map((policy) => (
                  <li key={policy.name}>
                    <Link
                      to={policy.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                      {policy.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-foreground">İletişim</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-muted-foreground text-sm group">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <span>info@warmrelief.com</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground text-sm group">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <span>+90 555 123 4567</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground text-sm group">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <span>İstanbul, Türkiye</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-border/30">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 WarmRelief. Tüm hakları saklıdır.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-2">
              <span>Konforunuz için</span>
              <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
              <span>ile yapıldı</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
