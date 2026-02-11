import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';

// Page Imports
import Home from './pages/Home.tsx';
import Team from './pages/Team.tsx';
import Blog from './pages/Blog.tsx';
import Infrastructure from './pages/Infrastructure.tsx';
import Enterprise from './pages/Enterprise.tsx';
import Careers from './pages/Careers.tsx';
import Privacy from './pages/Privacy.tsx';

// Component to handle scroll reset on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-black text-white selection:bg-[#007AFF] selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/team" element={<Team />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;