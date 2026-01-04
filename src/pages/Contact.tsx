import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mesajınız gönderildi!",
      description: "En kısa sürede size dönüş yapacağız.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "E-posta",
      value: "info@warmrelief.com",
      description: "7/24 mesaj gönderebilirsiniz",
    },
    {
      icon: Phone,
      title: "Telefon",
      value: "+90 555 123 45 67",
      description: "Pzt-Cuma 09:00-18:00",
    },
    {
      icon: MapPin,
      title: "Adres",
      value: "İstanbul, Türkiye",
      description: "Merkez ofisimiz",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                Bize Ulaşın
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                <span className="text-gradient">İletişim</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Sorularınız mı var? Size yardımcı olmaktan mutluluk duyarız.
                Aşağıdaki formu doldurun veya iletişim bilgilerimizi kullanın.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <ScrollReveal direction="left">
              <div className="bg-card rounded-2xl border border-border p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-display font-bold">
                    Mesaj Gönderin
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Adınız</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="Adınızı girin"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">E-posta</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="E-posta adresiniz"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Konu</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Mesajınızın konusu"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Mesajınız</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                      placeholder="Mesajınızı buraya yazın..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-semibold flex items-center justify-center gap-2 glow-sm hover:glow transition-all"
                  >
                    <Send className="w-5 h-5" />
                    Gönder
                  </motion.button>
                </form>
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="p-6 bg-card rounded-2xl border border-border flex items-start gap-5 group cursor-pointer hover:border-primary/50 transition-colors"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      <p className="text-lg font-medium text-primary mb-1">
                        {info.value}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {/* FAQ Teaser */}
                <div className="p-6 bg-gradient-to-br from-primary/20 to-pink-500/10 rounded-2xl border border-primary/30">
                  <h3 className="text-xl font-display font-bold mb-3">
                    Sıkça Sorulan Sorular
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Merak ettiğiniz soruların cevaplarını hızlıca bulabilirsiniz.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Ürün garantisi var mı?
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Kargo süresi ne kadar?
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      İade koşulları nelerdir?
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
