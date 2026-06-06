import logo from '../assets/lotuslogo.png';

export function Footer() {
  return (
    <footer className="bg-dark-navy text-white pt-16 md:pt-20 pb-8 md:pb-10 border-t border-white/10 text-center md:text-left">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
               <img 
                 src={logo} 
                 alt="Lotus Events Logo" 
                 className="h-18 md:h-22 w-auto object-contain bg-white/0 p-2 rounded shadow-sm mx-auto md:mx-0"
               />
            </div>
            <p className="text-slate-400 max-w-sm mb-6 leadin-relaxed mx-auto md:mx-0">
               Premium event management established in 2013. Specializing in luxury weddings and high-impact corporate events across the globe.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Services</h4>
            <ul className="space-y-3 text-slate-400">
               <li><a href="#weddings" className="hover:text-light-blue transition-colors">Luxury Weddings</a></li>
               <li><a href="#corporate" className="hover:text-light-blue transition-colors">Corporate & MICE</a></li>
               <li><a href="#expertise" className="hover:text-light-blue transition-colors">Social Events</a></li>
               <li><a href="#expertise" className="hover:text-light-blue transition-colors">Spiritual Gatherings</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-3 text-slate-400">
               <li><a href="#about" className="hover:text-light-blue transition-colors">About Us</a></li>
               <li><a href="#portfolio" className="hover:text-light-blue transition-colors">Our Portfolio</a></li>
               <li><a href="#contact" className="hover:text-light-blue transition-colors">Contact</a></li>
               <li><a href="#" className="hover:text-light-blue transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
           &copy; {new Date().getFullYear()} Lotus Events & Productions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
