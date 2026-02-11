import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetPath: string) => {
    const [path, hash] = targetPath.split('#');
    if (location.pathname === path && hash) {
      const element = document.getElementById(hash);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.pathname === targetPath) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <div className="glass squircle px-8 py-3 flex items-center gap-12 ios-shadow max-w-5xl w-full justify-between">
        <Link to="/" onClick={(e) => handleNavClick(e, '/')} className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#007AFF] rounded-lg flex items-center justify-center font-bold text-white group-hover:scale-110 transition-transform">R</div>
          <span className="text-xl font-bold tracking-tight">RoleScreen AI</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link 
            to="/infrastructure" 
            className={`${isActive('/infrastructure') ? 'text-white' : 'text-white/60'} hover:text-white transition-colors`}
          >
            Infrastructure
          </Link>
          <Link 
            to="/team" 
            className={`${isActive('/team') ? 'text-white' : 'text-white/60'} hover:text-white transition-colors`}
          >
            Team
          </Link>
          <Link 
            to="/blog" 
            className={`${isActive('/blog') ? 'text-white' : 'text-white/60'} hover:text-white transition-colors`}
          >
            Blog
          </Link>
          <Link 
            to="/enterprise" 
            className={`${isActive('/enterprise') ? 'text-white' : 'text-white/60'} hover:text-white transition-colors`}
          >
            Enterprise
          </Link>
        </div>

        <button className="bg-white text-black px-5 py-2 squircle text-sm font-bold hover:bg-white/90 transition-all active:scale-95">
          Join Beta
        </button>
      </div>
    </nav>
  );
};

export default Navbar;