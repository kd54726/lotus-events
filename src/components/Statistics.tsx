import { motion } from 'motion/react';

const stats = [
  { value: '11', label: 'Years of Excellence', suffix: '+' },
  { value: '500', label: 'Events Executed', suffix: '+' },
  { value: '50', label: 'Corporate Clients', suffix: '+' },
  { value: '100', label: 'Client Satisfaction', suffix: '%' },
];

export function Statistics() {
  return (
    <section className="pt-8 pb-16 bg-deep-blue text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 md:gap-4 divide-x-0 md:divide-x divide-white/20 text-center">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center py-2 md:py-4 h-full"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-light-blue mb-1 md:mb-2 flex items-center justify-center text-center gap-1">
                {stat.value}
                <span className="text-2xl sm:text-3xl text-lotus-blue">{stat.suffix}</span>
              </div>
              <div className="text-xs md:text-base font-medium text-white/80 uppercase tracking-wider text-center px-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
