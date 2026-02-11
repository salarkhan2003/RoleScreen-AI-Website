import React, { useState } from 'react';

const NoiseSignal: React.FC = () => {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="inline-block px-4 py-1 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-6">Efficiency Layer 01</div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
            Noise <br/> <span className="text-white/20">vs.</span> Signal.
          </h2>
          <p className="text-xl md:text-2xl text-white/50 mb-12 leading-relaxed font-medium">
            Recruiters drown in 1,000+ AI-written resumes per role. RoleScreen AI instantly filters out the 99% of "hallucinated skills" using live, adaptive gates.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {[
              { v: "92%", l: "Time Saved", c: "#007AFF" },
              { v: "0%", l: "Resume Spam", c: "#34C759" },
              { v: "10x", l: "Interview Quality", c: "#FFFFFF" }
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-5xl font-black tracking-tighter" style={{ color: stat.c }}>{stat.v}</div>
                <div className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-black">{stat.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative group">
          <div className="glass squircle aspect-[4/3] overflow-hidden ios-shadow border border-white/10 relative">
            {/* "Before" Side - Messy Resumes */}
            <div 
              className="absolute inset-0 bg-neutral-900 flex items-center justify-center overflow-hidden transition-all"
              style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
            >
              <div className="grid grid-cols-4 gap-4 p-8 opacity-20 scale-125 rotate-12">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="bg-white/10 h-32 w-24 rounded border border-white/10 shadow-lg flex flex-col p-2 gap-1">
                    <div className="h-1 w-full bg-white/20 rounded"></div>
                    <div className="h-1 w-3/4 bg-white/10 rounded"></div>
                  </div>
                ))}
              </div>
              <div className="absolute top-8 left-8 bg-[#FF3B30]/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] text-white font-black uppercase tracking-[0.3em]">The Noise Funnel</div>
            </div>

            {/* "After" Side - Clean Elite Queue */}
            <div 
              className="absolute inset-0 bg-[#007AFF]/10 flex flex-col gap-6 p-10 justify-center"
              style={{ clipPath: `inset(0 0 0 ${sliderValue}%)` }}
            >
              {[1, 2, 3].map((i) => (
                <div key={i} className="glass rounded-3xl p-5 flex items-center justify-between border-white/20 ios-shadow translate-x-4">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-neutral-700 to-neutral-900 border border-white/10 flex items-center justify-center font-bold text-white/30">C{i}</div>
                    <div>
                      <div className="text-base font-bold">Candidate #{i + 841}</div>
                      <div className="text-[10px] text-white/40 font-black uppercase tracking-widest">Verified Infrastructure Expert</div>
                    </div>
                  </div>
                  <div className="bg-[#34C759] text-black px-4 py-2 rounded-full text-[11px] font-black tracking-tighter">98 SCORE</div>
                </div>
              ))}
              <div className="absolute top-8 right-8 bg-[#34C759]/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] text-black font-black uppercase tracking-[0.3em]">The Signal Gate</div>
            </div>

            {/* Slider Control */}
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderValue} 
              onChange={(e) => setSliderValue(Number(e.target.value))}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-white/10 rounded-full appearance-none cursor-pointer outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-2xl active:[&::-webkit-slider-thumb]:scale-110 transition-all z-20"
            />
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Interactive: Toggle Analysis</div>
        </div>
      </div>
    </section>
  );
};

export default NoiseSignal;