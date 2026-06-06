import { motion } from 'motion/react';
import { ArrowRight, CalendarHeart, Building2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[100vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-dark-navy">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2938&auto=format&fit=crop" 
            alt="Luxurious Event"
            className="w-full h-full object-cover opacity-40 scale-105"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-dark-navy/90 via-dark-navy/40 to-dark-navy/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center pt-32 pb-20 md:pt-24 md:pb-0">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-2 md:px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm font-medium mb-4 md:mb-6 uppercase tracking-widest text-lotus-blue">
            Established 2013
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-white leading-tight drop-shadow-lg mb-4 md:mb-6">
            Crafting Extraordinary Experiences <br className="hidden md:block"/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-blue to-lotus-blue italic font-normal">Beyond Imagination</span>
          </h1>
          <p className="text-base md:text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed mb-8 md:mb-10">
            From visionary corporate galas to breathtaking luxury weddings, Lotus Events & Productions transforms your milestones into unforgettable legacies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
             <a href="#weddings" className="group w-full sm:w-auto flex items-center justify-center sm:justify-between gap-3 bg-white text-dark-navy px-6 py-3.5 sm:px-8 sm:py-4 rounded-full font-semibold shadow-xl hover:bg-slate-50 transition-all hover:scale-105">
                <CalendarHeart className="w-5 h-5 text-lotus-blue" />
                Plan a Wedding
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </a>
             <a href="#corporate" className="group w-full sm:w-auto flex items-center justify-center sm:justify-between gap-3 bg-deep-blue text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-full font-semibold shadow-xl shadow-deep-blue/20 hover:bg-blue-700 transition-all hover:scale-105">
                <Building2 className="w-5 h-5 text-light-blue" />
                Corporate Events
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
