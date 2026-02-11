
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Infrastructure: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-block", {
        y: 60,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
        ease: "power4.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const features = [
    {
      id: "screeniq",
      title: "ScreenIQ",
      subtitle: "The Autonomous Evaluator",
      description: "ScreenIQ isn't just a test; it's a context-aware engine that understands the nuances of your specific stack. It generates unique, non-repetitive coding challenges and architecture prompts that adapt to the candidate's proficiency in real-time.",
      stats: ["99.4% Accuracy", "Real-time Adaptation", "MoE Architecture"],
      color: "#007AFF"
    },
    {
      id: "neural-link",
      title: "Neural Link",
      subtitle: "Anti-Cheat Intelligence",
      description: "Our proprietary neural link analyzes keystroke patterns, tab switching behaviors, and browser anomalies to detect LLM-assisted cheating or proxy testing. It ensures that every score is 100% verified and human-earned.",
      stats: ["AI Detection", "Pattern Matching", "Zero False Positives"],
      color: "#FF3B30"
    },
    {
      id: "skill-passport",
      title: "Skill Passport",
      subtitle: "The Verified Identity",
      description: "Candidates shouldn't have to prove themselves repeatedly. The Skill Passport is a portable, cryptographically signed record of a candidate's achievements on RoleScreen AI, accepted by all partners in our ecosystem.",
      stats: ["Portable Credential", "Encrypted Data", "One-Click Apply"],
      color: "#34C759"
    }
  ];

  return (
    <div ref={containerRef} className="pt-40 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="mb-24 text-center">
        <h1 className="text-6xl md:text-8xl font-black tracking-tight text-gradient mb-6 leading-none">The Machine.</h1>
        <p className="text-xl md:text-2xl text-white/40 max-w-2xl mx-auto leading-relaxed">
          The core technological pillars that make RoleScreen AI the most trusted hiring infrastructure on the planet.
        </p>
      </div>

      <div className="space-y-32">
        {features.map((f, i) => (
          <div key={f.id} id={f.id} className="feature-block flex flex-col lg:flex-row gap-16 items-center">
            <div className={`flex-1 ${i % 2 === 0 ? '' : 'lg:order-2'}`}>
              <div className="inline-block px-4 py-1 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-6">Pillar 0{i+1}</div>
              <h2 className="text-5xl font-bold mb-4" style={{ color: f.color }}>{f.title}</h2>
              <h3 className="text-2xl font-bold mb-8 text-white/80">{f.subtitle}</h3>
              <p className="text-lg text-white/50 leading-relaxed mb-10">{f.description}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {f.stats.map(s => (
                  <div key={s} className="glass squircle p-4 text-center border-white/5">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/30">{s}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 w-full aspect-video bg-white/[0.02] glass squircle flex items-center justify-center border-white/5 relative group overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent opacity-60 z-10"></div>
               <div className="text-6xl filter blur-[1px] group-hover:blur-0 transition-all duration-700 opacity-20 scale-150">{f.title.charAt(0)}</div>
               <div className="absolute bottom-8 left-8 z-20 text-[10px] font-black uppercase tracking-widest text-white/30">System Visualizer v2.0</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Infrastructure;
