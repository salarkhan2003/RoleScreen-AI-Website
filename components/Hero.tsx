import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      
      tl.fromTo(orbRef.current, { scale: 0.5, opacity: 0, rotate: -45 }, { scale: 1, opacity: 1, rotate: 0, duration: 1.8 });
      tl.fromTo(titleRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 }, "-=1.2");
      tl.fromTo(subtextRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=1");
      tl.fromTo(buttonsRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.8");

      // Continuous float animation
      gsap.to(orbRef.current, {
        y: 15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Subtle mouse tracking
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 40;
        const yPos = (clientY / window.innerHeight - 0.5) * 40;
        gsap.to(".parallax-bg", { x: xPos * 0.5, y: yPos * 0.5, duration: 2, ease: "power2.out" });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[110vh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="parallax-bg absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#007AFF] rounded-full mix-blend-screen filter blur-[140px] opacity-10"></div>
        <div className="parallax-bg absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#5856D6] rounded-full mix-blend-screen filter blur-[160px] opacity-10"></div>
      </div>

      <div ref={orbRef} className="relative z-10 mb-16 opacity-0">
        <div className="w-56 h-56 md:w-80 md:h-80 rounded-full relative overflow-hidden flex items-center justify-center bg-black/60 border border-white/10 ios-shadow group backdrop-blur-3xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#007AFF_0%,transparent_80%)] opacity-30 group-hover:opacity-50 transition-opacity"></div>
          <div className="absolute w-[250%] h-[250%] border-[0.5px] border-white/10 rounded-full animate-[spin_30s_linear_infinite]"></div>
          
          <div className="relative text-center z-10 px-6">
            <div className="text-4xl md:text-6xl font-black tracking-tighter text-white">ScreenIQ</div>
            <div className="text-[9px] uppercase tracking-[0.5em] text-[#007AFF] font-black mt-2">Autonomous Assessment V4.2</div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl text-center px-6 relative z-10">
        <h1 ref={titleRef} className="text-6xl md:text-[100px] font-black tracking-tighter mb-8 text-gradient leading-[0.9] opacity-0">
          The End of the <br className="hidden md:block"/> Resume Era.
        </h1>
        <p ref={subtextRef} className="text-xl md:text-3xl text-white/50 mb-12 max-w-3xl mx-auto leading-tight font-medium opacity-0">
          Autonomous hiring infrastructure that gates your pipeline with <span className="text-white">adaptive technical assessments</span>. 
          Stop screening keywords, start verifying code.
        </p>
        
        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0">
          <button className="bg-[#007AFF] hover:bg-[#0066CC] text-white px-12 py-6 squircle text-xl font-bold shadow-[0_20px_50px_rgba(0,122,255,0.4)] transition-all hover:scale-105 active:scale-95 w-full sm:w-auto">
            Build Your Pipeline
          </button>
          <button className="glass hover:bg-white/10 text-white px-12 py-6 squircle text-xl font-bold transition-all w-full sm:w-auto border-white/20">
            View Infrastructure
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 flex flex-col items-center gap-4 text-[10px] font-black text-white/20 uppercase tracking-[0.5em]">
        <span>Scroll to Decipher</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/30 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;