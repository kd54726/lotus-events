import { motion } from 'motion/react';
import { CalendarHeart, Building2, Music, CheckCircle2, ArrowRight } from 'lucide-react';

export function SplitFunnels() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 relative -mt-10 z-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-dark-navy mb-4">Tailored to Your Vision</h2>
          <p className="text-slate-600 text-base md:text-lg">We understand that every event type requires an entirely different approach. Choose your path.</p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Weddings Funnel */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group rounded-3xl overflow-hidden bg-white shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl transition-shadow"
            id="weddings"
          >
            <div className="h-64 sm:h-80 lg:h-64 overflow-hidden relative">
               <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop" alt="Luxury Wedding" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/80 to-transparent" />
               <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl text-white">
                     <CalendarHeart className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-display font-medium text-white shadow-sm">Weddings</h3>
               </div>
            </div>
            <div className="p-6 md:p-8">
               <p className="text-slate-600 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                 Your love story deserves a flawless execution. From intimate destination weddings to grand traditional celebrations, we handle design, & vendor management so you can be fully present.
               </p>
               <ul className="space-y-4 mb-10">
                 {['Destination & Local Weddings', 'Decor & Thematic Design', 'End-to-End Coordination', 'Custom Guest Experiences'].map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-dark-navy font-medium">
                       <CheckCircle2 className="w-5 h-5 text-lotus-blue mt-0.5 shrink-0" />
                       <span className="text-sm">{feature}</span>
                    </li>
                 ))}
               </ul>
               <a href="#contact-weddings" className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-slate-50 text-dark-navy font-semibold border border-slate-200 hover:bg-dark-navy hover:text-white transition-colors group/btn">
                  Wedding Proposal
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
               </a>
            </div>
          </motion.div>

          {/* Corporate Funnel */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group rounded-3xl overflow-hidden bg-white shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl transition-shadow"
            id="corporate"
          >
            <div className="h-64 sm:h-80 lg:h-64 overflow-hidden relative">
               <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop" alt="Corporate Event" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 to-transparent" />
               <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl text-white">
                     <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-display font-medium text-white shadow-sm">Corporate</h3>
               </div>
            </div>
            <div className="p-6 md:p-8">
               <p className="text-slate-600 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                 Elevate your brand with high-impact corporate events. We specialize in MICE (Meetings, Incentives, Conferences, and Exhibitions) that drive engagement and leave lasting professional impressions.
               </p>
               <ul className="space-y-4 mb-10">
                 {['Conferences & Summits', 'Gala Dinners & Awards', 'Product Launches', 'MICE & Activations'].map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-dark-navy font-medium">
                       <CheckCircle2 className="w-5 h-5 text-deep-blue mt-0.5 shrink-0" />
                       <span className="text-sm">{feature}</span>
                    </li>
                 ))}
               </ul>
               <a href="#contact-corporate" className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-slate-50 text-dark-navy font-semibold border border-slate-200 hover:bg-deep-blue hover:text-white transition-colors group/btn">
                  Corporate Proposal
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
               </a>
            </div>
          </motion.div>

          {/* Entertainment Funnel */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group rounded-3xl overflow-hidden bg-white shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl transition-shadow"
            id="entertainment"
          >
            <div className="h-64 sm:h-80 lg:h-64 overflow-hidden relative">
               <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop" alt="Entertainment" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-lotus-blue/80 to-transparent" />
               <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl text-white">
                     <Music className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-display font-medium text-white shadow-sm">Entertainment</h3>
               </div>
            </div>
            <div className="p-6 md:p-8">
               <p className="text-slate-600 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                 Deliver show-stopping performances and immersive experiences. From celebrity talent management to breathtaking audio-visual production, we keep your audience captivated.
               </p>
               <ul className="space-y-4 mb-10">
                 {['Celebrity Management', 'Live Bands & Musicians', 'Theatrical Performers', 'Audio-Visual Production'].map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-dark-navy font-medium">
                       <CheckCircle2 className="w-5 h-5 text-light-blue mt-0.5 shrink-0" />
                       <span className="text-sm">{feature}</span>
                    </li>
                 ))}
               </ul>
               <a href="#contact-entertainment" className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-slate-50 text-dark-navy font-semibold border border-slate-200 hover:bg-lotus-blue hover:text-white transition-colors group/btn">
                  Entertainment Proposal
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
               </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
