import { Thermometer, Vibrate, Battery, Shield } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: Thermometer,
    title: "Hızlı Isınma",
    description: "3-5 saniyede ısınır ve uzak kızılötesi dalgalar yayar",
  },
  {
    icon: Vibrate,
    title: "4 Kademe Masaj",
    description: "4 farklı titreşim modu ile kişiselleştirilmiş rahatlama",
  },
  {
    icon: Battery,
    title: "3 Sıcaklık Ayarı",
    description: "50°C, 55°C ve 60°C arasında akıllı sıcaklık kontrolü",
  },
  {
    icon: Shield,
    title: "Güvenli Kullanım",
    description: "Akıllı güvenlik çipi ile aşırı ısınmaya karşı koruma",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Neden <span className="text-gradient">WarmRelief?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              En son teknolojiyle tasarlanmış, konforunuz için optimize edilmiş
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="p-8 bg-background rounded-2xl border border-border hover:border-primary/50 transition-colors group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
