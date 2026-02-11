import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Pricing: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tiersRef = useRef<(HTMLDivElement | null)[]>([]);

  const tiers = [
    {
      name: "Standard",
      price: "$299",
      period: "/mo",
      description: "For startups focused on quality over quantity. Gate your main engineering pipeline.",
      features: [
        "1 Verified Pipeline",
        "Adaptive Screening Gate",
        "Keystroke Biometric Protection",
        "Instant Candidate Reports",
        "Weekly Hiring Analytics",
        "Greenhouse & Ashby Integration",
        "Standard Skill Passport Access",
        "Community Support"
      ],
      cta: "Start 14-Day Trial"
    },
    {
      name: "Scale",
      price: "$899",
      period: "/mo",
      description: "For rapid growth teams needing deep intelligence and custom stack coverage.",
      features: [
        "Unlimited Active Pipelines",
        "MoE Assessment (Custom Stack)",
        "Advanced Neural Link Suite",
        "Team Calibration Insights",
        "24/7 Priority Engineer Support",
        "Full ATS Bi-Directional Sync",
        "Semantic Candidate Search",
        "Live Coding Heatmaps",
        "Skill Passport Enterprise"
      ],
      cta: "Join the Scale Tier",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Customized security, data sovereignty, and white-label candidate experience.",
      features: [
        "Dedicated MoE Model Training",
        "Private Cloud Deployment",
        "SAML SSO & Audit Logs",
        "Global Data Residency Control",
        "White-label Candidate Portal",
        "Dedicated Success Architect",
        "Custom Ephemeral Environments",
        "SOC2 Type II Package",
        "Unlimited User Seats"
      ],
      cta: "Talk to Infrastructure Lead"
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      const validTiers = tiersRef.current.filter(Boolean);
      if (validTiers.length > 0) {
        gsap.fromTo(validTiers, 
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
              toggleActions: "play none none none"
            },
          }
        );
      }
    }, containerRef);

    const timeout = setTimeout(() => {
      tiersRef.current.forEach(tier => {
        if (tier) tier.style.opacity = "1";
      });
    }, 2000);

    return () => {
      ctx.revert();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section id="pricing" ref={containerRef} className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <div className="inline-block px-4 py-1 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-[0.4em] text-[#34C759] mb-6">Transparent Infrastructure</div>
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-none">Transparent Scale.</h2>
        <p className="text-xl md:text-2xl text-white/40 max-w-2xl mx-auto leading-relaxed">
          Our pricing scales with your hiring velocity. No hidden seats, just pure infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 items-stretch">
        {tiers.map((tier, idx) => (
          <div 
            key={idx} 
            ref={el => tiersRef.current[idx] = el}
            className={`glass squircle p-8 md:p-12 border transition-all hover:scale-[1.01] flex flex-col relative overflow-hidden group ${tier.popular ? 'border-[#007AFF] bg-white/[0.08] ios-shadow z-10' : 'border-white/5'}`}
            style={{ opacity: 0 }}
          >
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#007AFF] text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full ios-shadow z-20">
                Industry Standard
              </div>
            )}
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4 text-white">{tier.name}</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl md:text-6xl font-black text-white tracking-tighter">{tier.price}</span>
                  <span className="text-white/30 text-sm font-black uppercase tracking-widest">{tier.period}</span>
                </div>
                <p className="text-white/50 text-lg leading-relaxed">{tier.description}</p>
              </div>

              <div className="h-px w-full bg-white/10 mb-12"></div>

              <div className="space-y-6 mb-16 flex-grow">
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-2">Package Contents:</div>
                {tier.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-4 text-white/80 group-hover:text-white transition-colors">
                    <div className="w-5 h-5 rounded-full bg-[#007AFF]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#007AFF]"></div>
                    </div>
                    <span className="text-base leading-snug">{f}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-6 squircle text-lg font-bold transition-all active:scale-[0.98] mt-auto relative z-10 ${tier.popular ? 'bg-[#007AFF] text-white hover:bg-[#0066CC] shadow-[0_20px_40px_rgba(0,122,255,0.4)]' : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'}`}>
                {tier.cta}
              </button>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;