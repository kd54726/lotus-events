import { motion } from 'motion/react';

// Using placeholder icons/text for clients
const clients = ['TechCorp Global', 'Innovate Inc', 'Apex Financial', 'Quantum Dynamics', 'Lumina Luxury'];

export function CorporateClients() {
  return (
    <section className="py-10 md:py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 md:mb-10">Trusted by Industry Leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
           {clients.map((client, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="text-lg md:text-xl lg:text-2xl font-display font-medium text-slate-800"
             >
                {client}
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
