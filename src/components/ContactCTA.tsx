import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export function ContactCTA() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden" id="contact">
      <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(to_bottom_right,transparent_40%,#11ACE715_100%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden shadow-deep-blue/5 border border-slate-100 flex flex-col lg:flex-row">
          
          {/* Info Side */}
          <div className="lg:w-2/5 p-8 md:p-10 lg:p-16 bg-dark-navy text-white relative overflow-hidden">
             <div className="absolute inset-0 bg-deep-blue/20" />
             <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                   <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Start Your Journey</h2>
                   <p className="text-white/80 mb-8 md:mb-12 text-sm md:text-base">Whether you're planning a corporate summit or the wedding of your dreams, let's discuss how we can make it extraordinary.</p>
                   
                   <div className="space-y-6 md:space-y-8">
                     <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                           <Phone className="w-4 h-4 text-light-blue" />
                        </div>
                        <div>
                           <p className="text-sm text-white/60 mb-1">Call Us (Mon-Sat, 9AM-8PM)</p>
                           <p className="text-lg font-medium">+91 98765 43210</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                           <Mail className="w-4 h-4 text-light-blue" />
                        </div>
                        <div>
                           <p className="text-sm text-white/60 mb-1">Email Us</p>
                           <p className="text-lg font-medium">hello@lotusevents.com</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                           <MapPin className="w-4 h-4 text-light-blue" />
                        </div>
                        <div>
                           <p className="text-sm text-white/60 mb-1">Headquarters</p>
                           <p className="text-lg font-medium">101 Event Plaza, Mumbai, India</p>
                        </div>
                     </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-8 md:p-10 lg:p-16">
            <h3 className="text-2xl font-bold text-dark-navy mb-6 md:mb-8">Request a Consultation</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
               <div className="grid md:grid-cols-2 gap-6">
                 <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-deep-blue/20 focus:border-deep-blue transition-all" placeholder="John Doe" />
                 </div>
                 <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-deep-blue/20 focus:border-deep-blue transition-all" placeholder="+91" />
                 </div>
               </div>
               
               <div className="grid md:grid-cols-2 gap-6">
                 <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-deep-blue/20 focus:border-deep-blue transition-all" placeholder="john@company.com" />
                 </div>
                 <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Event Type</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-deep-blue/20 focus:border-deep-blue transition-all text-slate-700">
                       <option>Corporate Event / MICE</option>
                       <option>Wedding Celebration</option>
                       <option>Social or Private Party</option>
                       <option>Spiritual Gathering</option>
                       <option>Other</option>
                    </select>
                 </div>
               </div>

               <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Event Details (Optional)</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-deep-blue/20 focus:border-deep-blue transition-all resize-none" placeholder="Dates, estimated guest count, specific requirements..." />
               </div>

               <button className="w-full bg-deep-blue text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:bg-dark-navy transition-colors shadow-xl shadow-deep-blue/20 group">
                  Submit Request
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
