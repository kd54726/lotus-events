import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, PhoneCall } from 'lucide-react';
import { useState, useEffect } from 'react';

export function StickyActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approx 500px)
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 md:hidden"
        >
          <div className="flex items-center gap-3 bg-white/90 backdrop-blur-xl p-2 rounded-full shadow-2xl border border-slate-200 w-full max-w-sm mx-auto">
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-full font-semibold shadow-md active:scale-95 transition-transform">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
            <a href="tel:+919876543210" className="flex-1 flex items-center justify-center gap-2 bg-deep-blue text-white py-3 rounded-full font-semibold shadow-md active:scale-95 transition-transform">
              <PhoneCall className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
