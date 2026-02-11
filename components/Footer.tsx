import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetPath: string) => {
    const [path, hash] = targetPath.split('#');
    
    // If we're already on the path and there's a hash, smooth scroll
    if (location.pathname === path && hash) {
      const element = document.getElementById(hash);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.pathname === targetPath) {
      // If clicking home while on home, scroll to top
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-white/5 pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-16 mb-24">
        <div className="col-span-2">
           <div className="flex items-center gap-2 mb-8">
              <Link to="/" onClick={(e) => handleNavClick(e, '/')} className="w-10 h-10 bg-[#007AFF] rounded-xl flex items-center justify-center font-bold text-white text-xl">R</Link>
              <span className="text-2xl font-black tracking-tighter">RoleScreen AI</span>
           </div>
           <p className="text-white/40 max-w-sm leading-relaxed mb-10 text-lg font-medium">
              Replacing the fragile resume with a robust, verified infrastructure for technical talent. Built for the era of AI-native engineering teams.
           </p>
           <div className="flex gap-6">
              {['X', 'in', 'GH'].map(icon => (
                <div key={icon} className="w-12 h-12 glass rounded-2xl flex items-center justify-center cursor-pointer hover:bg-white/10 hover:scale-110 transition-all border-white/10 font-bold">
                  {icon}
                </div>
              ))}
           </div>
        </div>
        
        <div className="flex flex-col gap-6">
           <h5 className="font-black text-[10px] uppercase tracking-[0.4em] text-white/30">Infrastructure</h5>
           <div className="flex flex-col gap-4 text-sm font-bold text-white/50">
             <Link to="/infrastructure#screeniq" onClick={(e) => handleNavClick(e, '/infrastructure#screeniq')} className="hover:text-white transition-colors">ScreenIQ Engine</Link>
             <Link to="/infrastructure#neural-link" onClick={(e) => handleNavClick(e, '/infrastructure#neural-link')} className="hover:text-white transition-colors">Neural Link</Link>
             <Link to="/infrastructure#skill-passport" onClick={(e) => handleNavClick(e, '/infrastructure#skill-passport')} className="hover:text-white transition-colors">Skill Passport</Link>
             <Link to="/enterprise" className="hover:text-white transition-colors">Enterprise Gate</Link>
             <Link to="/#pricing" onClick={(e) => handleNavClick(e, '/#pricing')} className="hover:text-white transition-colors">Pricing</Link>
           </div>
        </div>

        <div className="flex flex-col gap-6">
           <h5 className="font-black text-[10px] uppercase tracking-[0.4em] text-white/30">Company</h5>
           <div className="flex flex-col gap-4 text-sm font-bold text-white/50">
             <Link to="/team" className="hover:text-white transition-colors">The Team</Link>
             <Link to="/blog" className="hover:text-white transition-colors">Insights</Link>
             <Link to="/careers" className="hover:text-white transition-colors">Join Us</Link>
             <Link to="/privacy" className="hover:text-white transition-colors">Trust Center</Link>
             <Link to="/#workflow" onClick={(e) => handleNavClick(e, '/#workflow')} className="hover:text-white transition-colors">Our Workflow</Link>
           </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5 text-[10px] text-white/20 uppercase tracking-[0.5em] font-black">
         <span>© 2024 RoleScreen AI Inc. Global HQ</span>
         <div className="flex gap-12">
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#34C759]"></div> All Systems Active</span>
            <span>Made in SF / Remote</span>
         </div>
      </div>
    </footer>
  );
};

export default Footer;