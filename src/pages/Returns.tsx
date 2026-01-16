import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { RotateCcw, Package, Clock, CheckCircle } from "lucide-react";

const Returns = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <ScrollReveal>
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-8">
              Return Policy
            </h1>
          </ScrollReveal>

          {/* Quick Info Cards */}
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="p-4 bg-card rounded-xl border border-border text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="text-2xl font-bold block">30</span>
                <span className="text-sm text-muted-foreground">Days to Return</span>
              </div>
              <div className="p-4 bg-card rounded-xl border border-border text-center">
                <RotateCcw className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="text-2xl font-bold block">Free</span>
                <span className="text-sm text-muted-foreground">UK Returns</span>
              </div>
              <div className="p-4 bg-card rounded-xl border border-border text-center">
                <Package className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="text-2xl font-bold block">Easy</span>
                <span className="text-sm text-muted-foreground">Process</span>
              </div>
              <div className="p-4 bg-card rounded-xl border border-border text-center">
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="text-2xl font-bold block">Full</span>
                <span className="text-sm text-muted-foreground">Refund</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="prose prose-invert max-w-none space-y-8">
              <section className="space-y-4">
                <h2 className="text-xl font-semibold">Our 30-Day Return Guarantee</h2>
                <p className="text-muted-foreground">
                  We want you to be completely satisfied with your WarmRelief purchase. If for any reason you're not happy, you can return your item within 30 days of delivery for a full refund.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">Return Conditions</h2>
                <p className="text-muted-foreground">To be eligible for a return, items must be:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Returned within 30 days of delivery</li>
                  <li>In original, unused condition</li>
                  <li>In original packaging with all tags attached</li>
                  <li>Accompanied by proof of purchase</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">How to Return</h2>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold flex-shrink-0">1</span>
                    <div>
                      <h3 className="font-medium">Contact Us</h3>
                      <p className="text-muted-foreground text-sm">Email us at returns@warmrelief.com with your order number and reason for return.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold flex-shrink-0">2</span>
                    <div>
                      <h3 className="font-medium">Receive Return Label</h3>
                      <p className="text-muted-foreground text-sm">We'll email you a free prepaid return label within 24 hours (UK only).</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold flex-shrink-0">3</span>
                    <div>
                      <h3 className="font-medium">Ship Your Return</h3>
                      <p className="text-muted-foreground text-sm">Pack your item securely and drop it off at your nearest Royal Mail location.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold flex-shrink-0">4</span>
                    <div>
                      <h3 className="font-medium">Receive Refund</h3>
                      <p className="text-muted-foreground text-sm">Once we receive your return, we'll process your refund within 5-7 business days.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">Refund Information</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Refunds will be issued to your original payment method</li>
                  <li>Please allow 5-7 business days for the refund to appear in your account</li>
                  <li>Original shipping costs are non-refundable unless the item is faulty</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">Faulty or Damaged Items</h2>
                <p className="text-muted-foreground">
                  If you receive a faulty or damaged item, please contact us immediately at returns@warmrelief.com. We'll arrange a free return and send you a replacement or full refund including original shipping costs.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">Your Statutory Rights</h2>
                <p className="text-muted-foreground">
                  This return policy does not affect your statutory rights under the Consumer Rights Act 2015. You have the right to reject goods within 30 days if they are faulty, not as described, or not fit for purpose.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">Contact Us</h2>
                <p className="text-muted-foreground">
                  For any questions about returns, please contact us at:<br />
                  Email: returns@warmrelief.com<br />
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

export default Returns;
