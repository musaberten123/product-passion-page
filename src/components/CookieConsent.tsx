import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl p-4 md:p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              {/* Icon */}
              <div className="hidden md:flex w-12 h-12 rounded-full bg-primary/10 items-center justify-center flex-shrink-0">
                <Cookie className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-base md:text-lg font-semibold mb-1 flex items-center gap-2">
                  <Cookie className="w-5 h-5 text-primary md:hidden" />
                  We use cookies
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We use cookies to enhance your browsing experience, serve personalised ads or content, and analyse our traffic. By clicking "Accept All", you consent to our use of cookies. Read our{" "}
                  <Link to="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>{" "}
                  for more information.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-2 w-full md:w-auto">
                <button
                  onClick={handleDecline}
                  className="flex-1 md:flex-none px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground border border-border rounded-full hover:border-foreground/30 transition-colors"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 md:flex-none px-6 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                >
                  Accept All
                </button>
              </div>

              {/* Close button */}
              <button
                onClick={handleDecline}
                className="absolute top-3 right-3 md:hidden p-1 text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
