import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    q: "How far in advance should we book your services?",
    a: "For large-scale corporate summits or destination weddings, we recommend booking 8-12 months in advance. For social events and smaller activations, 3-6 months is generally sufficient to guarantee availability and secure premium vendors."
  },
  {
    q: "Do you handle destination events outside of India?",
    a: "Absolutely. We have extensive experience managing high-profile destination weddings and MICE operations across the Middle East, Europe, and Southeast Asia. We manage all travel logistics, customs, and local vendor sourcing."
  },
  {
    q: "Do you offer partial planning, or only full-service?",
    a: "We only provide end-to-end event production and full-service planning. Our standard of flawless execution requires us to have control over all aspects of production, from design concept to teardown."
  },
  {
    q: "Can we use our own vendors for specific services?",
    a: "We have an elite roster of trusted partners to ensure quality control. However, we are open to working with your preferred vendors (e.g., a specific family photographer) upon review to ensure they meet our operational standards."
  }
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-deep-blue uppercase tracking-widest text-sm font-bold mb-2 block">Clarifications</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-dark-navy">Common Inquiries</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 transition-colors hover:border-slate-300"
             >
                <button 
                  className="w-full text-left px-6 py-5 flex items-center justify-between font-semibold text-lg text-dark-navy"
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                >
                  {faq.q}
                  <ChevronDown className={`w-5 h-5 text-lotus-blue transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${openIdx === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                   <div className="overflow-hidden">
                     <p className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                        {faq.a}
                     </p>
                   </div>
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
