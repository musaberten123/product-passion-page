import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Truck, Clock, Globe, Package } from "lucide-react";

const Shipping = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <ScrollReveal>
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-8">
              Shipping Policy
            </h1>
          </ScrollReveal>

          {/* Shipping Options Cards */}
          <ScrollReveal delay={0.1}>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 bg-gradient-to-b from-primary/10 to-primary/5 rounded-2xl border border-primary/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Truck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Standard UK Delivery</h3>
                    <span className="text-primary font-bold">FREE</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">3-5 business days via Royal Mail</p>
              </div>

              <div className="p-6 bg-card rounded-2xl border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Express UK Delivery</h3>
                    <span className="text-foreground font-bold">£4.99</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">1-2 business days via DPD</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="prose prose-invert max-w-none space-y-8">
              <section className="space-y-4">
                <h2 className="text-xl font-semibold">UK Delivery</h2>
                <p className="text-muted-foreground">
                  We offer free standard delivery on all UK orders. Your order will be dispatched within 1-2 business days and delivered within 3-5 business days.
                </p>
                <div className="bg-card p-4 rounded-xl border border-border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2">Service</th>
                        <th className="text-left py-2">Delivery Time</th>
                        <th className="text-left py-2">Cost</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="py-2">Standard (Royal Mail)</td>
                        <td className="py-2">3-5 business days</td>
                        <td className="py-2 text-primary font-semibold">FREE</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2">Express (DPD)</td>
                        <td className="py-2">1-2 business days</td>
                        <td className="py-2">£4.99</td>
                      </tr>
                      <tr>
                        <td className="py-2">Next Day (DPD)</td>
                        <td className="py-2">Next business day</td>
                        <td className="py-2">£7.99</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">Order Processing</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Orders placed before 2pm GMT on business days are dispatched the same day</li>
                  <li>Orders placed after 2pm or on weekends are dispatched the next business day</li>
                  <li>You'll receive a confirmation email with tracking information once dispatched</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">Tracking Your Order</h2>
                <p className="text-muted-foreground">
                  Once your order has been dispatched, you'll receive an email with a tracking number. You can track your delivery on the Royal Mail or DPD website.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">International Shipping</h2>
                <p className="text-muted-foreground">
                  We currently ship to selected European countries. International shipping rates and delivery times vary by location.
                </p>
                <div className="bg-card p-4 rounded-xl border border-border">
                  <div className="flex items-center gap-2 mb-3">
                    <Globe className="w-5 h-5 text-primary" />
                    <span className="font-medium">International Delivery</span>
                  </div>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2">Region</th>
                        <th className="text-left py-2">Delivery Time</th>
                        <th className="text-left py-2">Cost</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="py-2">Europe</td>
                        <td className="py-2">5-10 business days</td>
                        <td className="py-2">£9.99</td>
                      </tr>
                      <tr>
                        <td className="py-2">Rest of World</td>
                        <td className="py-2">10-15 business days</td>
                        <td className="py-2">£14.99</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">Delivery Issues</h2>
                <p className="text-muted-foreground">
                  If your order hasn't arrived within the expected timeframe, please contact us at delivery@warmrelief.com and we'll investigate and resolve the issue promptly.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">Contact Us</h2>
                <p className="text-muted-foreground">
                  For any shipping questions, please contact us at:<br />
                  Email: delivery@warmrelief.com<br />
                  Phone: +44 20 1234 5678
                </p>
              </section>
            </div>
          </ScrollReveal>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shipping;
