import { motion } from 'motion/react';
import { Target, Gem, ShieldCheck, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    icon: Gem,
    title: 'Uncompromising Quality',
    desc: 'From custom stage fabrication to premium floral designs, we deliver unmatched production value.'
  },
  {
    icon: Target,
    title: 'Precision Planning',
    desc: 'Our meticulous timeline management ensures everything triggers exactly when it should.'
  },
  {
    icon: ShieldCheck,
    title: 'Absolute Reliability',
    desc: 'Over a decade of industry relationships means we navigate challenges before they arise.'
  },
  {
    icon: HeartHandshake,
    title: 'Personalized Service',
    desc: 'You deal directly with dedicated event architects who treat your event like their own.'
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-dark-navy relative overflow-hidden" id="about">
      {/* Decorative vectors */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-deep-blue/20 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-lotus-blue/10 blur-[100px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="text-center lg:text-left"
          >
            <span className="text-light-blue uppercase tracking-widest text-sm font-bold mb-4 block">The Lotus Approach</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4 md:mb-6 leading-tight">Mastering the Art of Flawless Execution</h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              Founded in 2013, Lotus Events & Productions was built on a simple premise: great visions require masterful engineering. 
              We don't just plan events; we architect experiences. Our in-house production capabilities and elite vendor network allow us to bring ambitious concepts to life seamlessly.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
               <a href="#contact" className="bg-white text-dark-navy px-8 py-3.5 rounded-full font-semibold hover:bg-light-blue transition-colors">
                  Meet the Team
               </a>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {reasons.map((item, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className="glass-dark p-6 md:p-8 rounded-2xl hover:bg-white/10 transition-colors"
               >
                 <div className="w-12 h-12 rounded-full bg-deep-blue/50 flex items-center justify-center mb-5 border border-light-blue/20">
                   <item.icon className="w-5 h-5 text-light-blue" />
                 </div>
                 <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                 <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
               </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
