import { useState, useEffect } from 'react';
import { Menu, X, Phone, CalendarHeart, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-1' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img 
            src="http://www.lotusep.in/img/lotuslogo.png" 
            alt="Lotus Events Logo" 
            className="h-14 md:h-20 w-auto object-contain bg-white/0 p-1 rounded shrink-0 transition-all"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Expertise', 'Weddings', 'Corporate', 'Portfolio', 'About'].map((item) => (
             <a key={item} href={`#${item.toLowerCase()}`} className={`text-sm font-medium transition-colors hover:text-lotus-blue ${isScrolled ? 'text-dark-navy/80' : 'text-white/90 drop-shadow-sm'}`}>
                {item}
             </a>
          ))}
          <a href="#contact" className="bg-deep-blue text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-deep-blue/20 hover:bg-dark-navy transition-colors flex items-center gap-2">
            Book Consultation
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-2xl relative z-50 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
           {mobileMenuOpen ? <X className={isScrolled || mobileMenuOpen ? 'text-dark-navy' : 'text-white'} /> : <Menu className={isScrolled ? 'text-dark-navy' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass bg-white/95 border-t border-gray-100 p-4 md:hidden shadow-2xl flex flex-col gap-4"
          >
             {['Expertise', 'Weddings', 'Corporate', 'Portfolio', 'About'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-dark-navy font-medium text-lg px-4 py-2 hover:bg-slate-50 rounded-lg">
                   {item}
                </a>
             ))}
             <div className="h-px bg-gray-100 my-2" />
             <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-deep-blue text-white px-6 py-3 rounded-full text-center font-semibold mb-2">Book Consultation</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
