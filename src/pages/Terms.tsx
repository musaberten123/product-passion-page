import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <ScrollReveal>
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-8">
              Terms of Use
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="prose prose-invert max-w-none space-y-8">
              <p className="text-muted-foreground text-lg">
                Last updated: January 2024
              </p>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">1. Introduction</h2>
                <p className="text-muted-foreground">
                  Welcome to WarmRelief. These Terms of Use govern your use of our website and the purchase of products from us. By accessing our website or placing an order, you agree to be bound by these terms.
                </p>
                <p className="text-muted-foreground">
                  WarmRelief Ltd is a company registered in England and Wales.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">2. Products and Pricing</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>All prices are displayed in British Pounds (GBP) and include VAT where applicable</li>
                  <li>We reserve the right to change prices at any time without notice</li>
                  <li>In the event of a pricing error, we will contact you before processing your order</li>
                  <li>Product images are for illustration purposes; actual products may vary slightly</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">3. Ordering and Payment</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>By placing an order, you are making an offer to purchase our products</li>
                  <li>We reserve the right to refuse or cancel any order</li>
                  <li>Payment must be made in full at the time of ordering</li>
                  <li>We accept major credit/debit cards, PayPal, and other payment methods as displayed at checkout</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">4. Delivery</h2>
                <p className="text-muted-foreground">
                  Please refer to our <a href="/shipping" className="text-primary hover:underline">Shipping Policy</a> for full details on delivery times and costs. Risk of loss and damage passes to you upon delivery.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">5. Returns and Refunds</h2>
                <p className="text-muted-foreground">
                  Please refer to our <a href="/returns" className="text-primary hover:underline">Return Policy</a> for full details on returns and refunds. Your statutory rights under the Consumer Rights Act 2015 are not affected.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">6. Product Use and Safety</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Our products are designed for adult use only</li>
                  <li>Please read all product instructions and safety warnings before use</li>
                  <li>Do not use if you have any medical conditions that may be affected by heat therapy</li>
                  <li>Consult a healthcare professional if you are pregnant or have any concerns</li>
                  <li>We are not responsible for misuse of our products</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">7. Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All content on this website, including text, images, logos, and designs, is the property of WarmRelief Ltd and is protected by copyright and trademark laws. You may not use, reproduce, or distribute any content without our written permission.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">8. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  To the fullest extent permitted by law, WarmRelief Ltd shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our products or website. Nothing in these terms excludes or limits our liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded by law.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">9. Governing Law</h2>
                <p className="text-muted-foreground">
                  These terms are governed by and construed in accordance with the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">10. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to update these terms at any time. Changes will be posted on this page with an updated "Last updated" date. Your continued use of the website constitutes acceptance of the updated terms.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">11. Contact Us</h2>
                <p className="text-muted-foreground">
                  For any questions about these terms, please contact us at:<br />
                  Email: legal@warmrelief.com<br />
                  Address: WarmRelief Ltd, London, United Kingdom
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

export default Terms;
