
import React from 'react';

const Team: React.FC = () => {
  const members = [
    { name: "Dr. Sarah Miller", role: "CEO & AI Research", bio: "Former Lead Scientist at OpenAI, specializing in MoE architectures." },
    { name: "Julian Vance", role: "CTO", bio: "Previously Infrastructure Lead at Stripe. Expert in high-latency system design." },
    { name: "Marcus Thorne", role: "Head of Product", bio: "Led Product at Greenhouse. Obsessed with candidate UX and fairness." },
  ];

  return (
    <div className="pt-40 pb-24 px-6 max-w-7xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-bold mb-16 text-gradient">The Minds Behind the Screen.</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {members.map((m, i) => (
          <div key={i} className="glass squircle p-8 border-white/5 hover:border-white/20 transition-all group">
             <div className="w-full aspect-square mb-6 overflow-hidden squircle grayscale group-hover:grayscale-0 transition-all duration-500">
                <img src={`https://picsum.photos/400/400?random=${i}`} alt={m.name} className="w-full h-full object-cover" />
             </div>
             <h3 className="text-2xl font-bold mb-1">{m.name}</h3>
             <div className="text-[#007AFF] text-sm font-bold uppercase tracking-widest mb-4">{m.role}</div>
             <p className="text-white/40 leading-relaxed">{m.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
