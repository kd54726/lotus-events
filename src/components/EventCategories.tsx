import { motion } from 'motion/react';
import { PartyPopper, Flame, Building, Plane } from 'lucide-react';

const categories = [
  {
    icon: PartyPopper,
    title: 'Social Events',
    description: 'Birthdays, anniversaries, and grand private parties meticulously detailed.'
  },
  {
    icon: Flame,
    title: 'Spiritual Events',
    description: 'Serene and beautifully orchestrated religious or spiritual gatherings.'
  },
  {
    icon: Plane,
    title: 'MICE',
    description: 'Specialized management for complex corporate retreats and exhibitions.'
  },
  {
    icon: Building,
    title: 'Venue Management',
    description: 'Sourcing and transforming world-class venues tailored to your event.'
  }
];

export function EventCategories() {
  return (
    <section className="py-16 md:py-24 bg-white" id="expertise">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-16 text-center lg:text-left flex flex-col lg:flex-row justify-between items-center lg:items-end gap-6 md:gap-8"
        >
          <div className="max-w-2xl">
             <span className="text-lotus-blue uppercase tracking-widest text-sm font-bold mb-2 block">Comprehensive Expertise</span>
             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-dark-navy">Beyond the Ordinary</h2>
          </div>
          <p className="text-slate-600 max-w-md text-base md:text-lg">
             Our capabilities extend across highly specialized event disciplines, ensuring flawless execution no matter the occasion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="h-full"
            >
              <div className="p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all border border-slate-100 group h-full">
                <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-light-blue/10 transition-colors">
                  <cat.icon className="w-6 h-6 text-deep-blue group-hover:text-lotus-blue transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-dark-navy mb-3">{cat.title}</h3>
                <p className="text-slate-600 leading-relaxed">{cat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
