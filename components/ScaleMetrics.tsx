import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ScaleMetrics: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState({ engineers: 0, code: 0, latency: 120 });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.from(".metric-fade", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out"
      });
    }, containerRef);

    // Simple ticker effect
    const interval = setInterval(() => {
      setCounts(prev => ({
        engineers: prev.engineers < 142000 ? prev.engineers + 1142 : 142000,
        code: prev.code < 8200000 ? prev.code + 58200 : 8200000,
        latency: 120 - Math.floor(Math.random() * 5)
      }));
    }, 50);

    return () => {
      ctx.revert();
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="metrics" ref={containerRef} className="py-32 px-6 bg-[#050505] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="flex-1">
             <div className="metric-fade inline-block px-4 py-1 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-6">Global Throughput</div>
             <h2 className="metric-fade text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">Scale Without <br/><span className="text-[#34C759]">Compromise.</span></h2>
             <p className="metric-fade text-xl text-white/50 leading-relaxed mb-12">
               RoleScreen AI processes massive volumes of candidate telemetry every second. Our infrastructure is battle-tested by the world's most aggressive engineering teams.
             </p>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="metric-fade">
                   <div className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-2">{counts.engineers.toLocaleString()}+</div>
                   <div className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-black">Verified Engineers</div>
                </div>
                <div className="metric-fade">
                   <div className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-2">{counts.code.toLocaleString()}</div>
                   <div className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-black">Lines of Code Screened</div>
                </div>
                <div className="metric-fade">
                   <div className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-2">{counts.latency}ms</div>
                   <div className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-black">Global Median Latency</div>
                </div>
                <div className="metric-fade">
                   <div className="text-4xl md:text-6xl font-black tracking-tighter text-[#34C759] mb-2">99.99%</div>
                   <div className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-black">Uptime Integrity</div>
                </div>
             </div>
          </div>

          <div className="flex-1 w-full max-w-lg">
             <div className="metric-fade glass squircle p-8 ios-shadow relative overflow-hidden aspect-square flex items-center justify-center border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#34C75911_0%,transparent_70%)]"></div>
                
                {/* Visualizing "Scale" with a mesh grid */}
                <div className="grid grid-cols-8 grid-rows-8 gap-4 w-full h-full opacity-20 group">
                   {[...Array(64)].map((_, i) => (
                     <div key={i} className="bg-white/10 rounded-sm animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
                   ))}
                </div>
                
                <div className="absolute z-10 text-center">
                   <div className="text-7xl font-black tracking-tighter text-white mb-2">∞</div>
                   <div className="text-[10px] uppercase tracking-[0.5em] text-white/40 font-black">Active Clusters</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScaleMetrics;