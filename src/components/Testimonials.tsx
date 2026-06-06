import { MessageSquareQuote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "Lotus completely transformed our annual summit. From stage fabrication to seamless guest management, absolute perfection.",
    author: "Sarah Jenkins",
    role: "VP Marketing, TechCorp"
  },
  {
    quote: "Our destination wedding in Rajasthan was flawless. We didn't have to stress about a single vendor. True professionals.",
    author: "Rahul & Priya",
    role: "Married 2023"
  },
  {
    quote: "The attention to detail during our product launch exceeded all expectations. They are now our exclusive event partners.",
    author: "David Chen",
    role: "Founder, Innovate Inc"
  }
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-deep-blue text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16 max-w-2xl mx-auto">
          <span className="text-light-blue uppercase tracking-widest text-sm font-bold mb-2 block">Client Stories</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">A Legacy of Trust</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-dark-navy/50 p-6 md:p-8 rounded-3xl border border-white/10 relative"
            >
              <MessageSquareQuote className="w-10 h-10 text-lotus-blue/40 absolute top-6 right-6 hidden md:block" />
              <p className="text-lg leading-relaxed text-slate-300 font-light mb-8 italic">"{t.quote}"</p>
              <div>
                 <p className="font-bold text-white text-lg">{t.author}</p>
                 <p className="text-sm text-light-blue">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
