import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const IntegrityShield: React.FC = () => {
  const shieldRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.from(".shield-reveal", {
        scrollTrigger: {
          trigger: shieldRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out"
      });
    }, shieldRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="security" ref={shieldRef} className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-black to-[#050505]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        <div className="flex-1">
          <div className="shield-reveal inline-block px-4 py-1 rounded-full border border-[#FF3B30]/30 text-[10px] font-black uppercase tracking-[0.3em] text-[#FF3B30] mb-6">Security Layer 02</div>
          <h2 className="shield-reveal text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">The Neural Link Integrity Shield.</h2>
          <p className="shield-reveal text-xl text-white/50 leading-relaxed mb-10">
            In the age of LLMs, coding tests are easy to game. RoleScreen AI uses hardware-level telemetry and keystroke pattern analysis to ensure every character was typed by a human.
          </p>
          
          <div className="space-y-6">
            {[
              { t: "Keystroke Biometrics", d: "Analysis of typing cadence to match unique developer profiles." },
              { t: "Tab-Flow Analysis", d: "Real-time tracking of browser focus shifts and copy-paste events." },
              { t: "LLM Pattern Detection", d: "Neural networks that identify AI-generated code structure in real-time." }
            ].map((item, i) => (
              <div key={i} className="shield-reveal flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF3B30] mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-lg">{item.t}</h4>
                  <p className="text-white/40 text-sm">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 w-full max-w-xl relative group">
          <div className="glass squircle aspect-square flex items-center justify-center relative border-[#FF3B30]/10 overflow-hidden">
            <div className="absolute inset-0 bg-[#FF3B30] opacity-5 blur-[100px]"></div>
            
            {/* 3D-like HUD Visualization */}
            <div className="relative w-4/5 h-4/5 border border-white/10 rounded-full flex items-center justify-center">
              <div className="absolute w-full h-full border border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute w-3/4 h-3/4 border-2 border-[#FF3B30]/20 rounded-full animate-[spin_10s_linear_infinite_reverse]"></div>
              
              <div className="text-center z-10 space-y-2">
                <div className="text-[#FF3B30] text-4xl font-black">ACTIVE</div>
                <div className="text-[10px] text-white/30 uppercase tracking-[0.4em]">Monitoring Telemetry</div>
                <div className="font-mono text-[8px] text-white/20 whitespace-pre text-left bg-black/40 p-2 rounded border border-white/5">
                  {`> analyzing keystroke... 
> velocity: 142 wpm
> entropy: 0.82
> scan: 100% human`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrityShield;