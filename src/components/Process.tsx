import { motion } from 'motion/react';

const steps = [
  { num: '01', title: 'Discovery & Ideation', desc: 'We start by deeply understanding your vision, objectives, and brand identity.' },
  { num: '02', title: 'Conceptual Design', desc: 'Our team crafts a comprehensive visual and experiential blueprint for your event.' },
  { num: '03', title: 'Logistics & Fabrication', desc: 'From custom stages to vendor coordination, we build the underlying architecture.' },
  { num: '04', title: 'Flawless Execution', desc: 'On-ground management ensuring every second unfolds perfectly as planned.' }
];

export function Process() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <span className="text-deep-blue uppercase tracking-widest text-sm font-bold mb-2 block">How We Work</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-dark-navy">The Architecture of Perfection</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-10 md:gap-8 relative">
           <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-slate-300 z-0"></div>
           {steps.map((step, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="relative z-10 text-center"
             >
                <div className="w-24 h-24 mx-auto bg-white border-4 border-slate-50 rounded-full flex items-center justify-center shadow-lg shadow-deep-blue/10 mb-6 group hover:scale-110 transition-transform">
                   <span className="text-3xl font-display font-bold text-lotus-blue">{step.num}</span>
                </div>
                <h3 className="text-xl font-bold text-dark-navy mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-[250px] mx-auto">{step.desc}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
