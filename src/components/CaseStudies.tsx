import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const cases = [
  {
    title: "Global Tech Summit 2023",
    category: "Corporate / MICE",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
    metric: "15,000+ Attendees"
  },
  {
    title: "Royal Palace Wedding",
    category: "Luxury Wedding",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    metric: "3-Day Celebration"
  },
  {
    title: "Automotive Brand Launch",
    category: "Product Launch",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
    metric: "Nationwide Coverage"
  }
];

export function CaseStudies() {
  return (
    <section className="py-16 md:py-24 bg-white" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 mb-10 md:mb-16 text-center md:text-left">
           <div className="max-w-2xl">
              <span className="text-deep-blue uppercase tracking-widest text-sm font-bold mb-2 block">Our Masterpieces</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-dark-navy">Featured Case Studies</h2>
           </div>
           <a href="#contact" className="hidden border-b border-dark-navy text-dark-navy font-semibold hover:text-lotus-blue hover:border-lotus-blue transition-colors pb-1 md:flex items-center gap-2">
              View Full Portfolio <ArrowUpRight className="w-4 h-4" />
           </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, idx) => (
            <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="group cursor-pointer"
            >
               <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-6">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                     <span className="bg-white text-dark-navy text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{item.metric}</span>
                  </div>
               </div>
               <p className="text-lotus-blue font-bold text-sm tracking-wide mb-2 uppercase">{item.category}</p>
               <h3 className="text-2xl font-display font-bold text-dark-navy group-hover:text-deep-blue transition-colors">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
