import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <ScrollReveal>
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-8">
              Privacy Policy
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
                  WarmRelief ("we", "our", or "us") is committed to protecting your personal data and respecting your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or purchase our products.
                </p>
                <p className="text-muted-foreground">
                  We comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">2. Information We Collect</h2>
                <p className="text-muted-foreground">We may collect the following types of information:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, delivery address, billing address</li>
                  <li><strong>Payment Information:</strong> Payment card details (processed securely by our payment provider)</li>
                  <li><strong>Technical Information:</strong> IP address, browser type, device information, cookies</li>
                  <li><strong>Usage Information:</strong> Pages visited, products viewed, purchase history</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">3. How We Use Your Information</h2>
                <p className="text-muted-foreground">We use your information to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Process and fulfil your orders</li>
                  <li>Communicate with you about your orders</li>
                  <li>Provide customer support</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">4. Legal Basis for Processing</h2>
                <p className="text-muted-foreground">We process your data based on:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Contract:</strong> To fulfil orders and provide services</li>
                  <li><strong>Consent:</strong> For marketing communications</li>
                  <li><strong>Legitimate Interest:</strong> To improve our services and prevent fraud</li>
                  <li><strong>Legal Obligation:</strong> To comply with tax and accounting requirements</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">5. Cookies</h2>
                <p className="text-muted-foreground">
                  We use cookies to enhance your browsing experience. You can manage your cookie preferences through your browser settings. For more information, see our cookie banner when you first visit our site.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">6. Data Sharing</h2>
                <p className="text-muted-foreground">We may share your data with:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Payment processors (to process transactions)</li>
                  <li>Delivery partners (to fulfil orders)</li>
                  <li>Analytics providers (to improve our services)</li>
                  <li>Legal authorities (when required by law)</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">7. Your Rights</h2>
                <p className="text-muted-foreground">Under UK GDPR, you have the right to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Access your personal data</li>
                  <li>Rectify inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">8. Data Retention</h2>
                <p className="text-muted-foreground">
                  We retain your personal data for as long as necessary to fulfil the purposes for which it was collected, typically for 6 years after your last purchase for tax and legal purposes.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">9. Contact Us</h2>
                <p className="text-muted-foreground">
                  For any privacy-related questions or to exercise your rights, please contact us at:
                </p>
                <p className="text-muted-foreground">
                  Email: privacy@warmrelief.com<br />
                  Address: WarmRelief Ltd, London, United Kingdom
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">10. Complaints</h2>
                <p className="text-muted-foreground">
                  If you are not satisfied with our response, you have the right to lodge a complaint with the Information Commissioner's Office (ICO) at <a href="https://ico.org.uk" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
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

export default Privacy;
