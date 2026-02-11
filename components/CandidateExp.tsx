import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const CandidateExp: React.FC = () => {
  const [isValidating, setIsValidating] = useState(false);
  const [score, setScore] = useState(0);
  const [isVerified, setIsVerified] = useState(false);
  
  const progressRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const startValidation = () => {
    if (isValidating) return;
    setIsValidating(true);
    setIsVerified(false);
    setScore(0);

    const tl = gsap.timeline({
      onComplete: () => {
        setIsValidating(false);
        setIsVerified(true);
        if (badgeRef.current) {
          gsap.fromTo(badgeRef.current, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" });
        }
      }
    });

    const obj = { val: 0 };
    tl.to(progressRef.current, { width: '92%', duration: 2, ease: "power2.inOut" });
    tl.to(obj, {
      val: 92,
      duration: 2,
      ease: "power2.inOut",
      onUpdate: () => setScore(Math.floor(obj.val))
    }, 0);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.from(".exp-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        x: -40,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
        <div className="flex-1">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Candidates Love Us Too.</h2>
          <div className="space-y-8">
            <div className="exp-item flex gap-6">
              <div className="w-12 h-12 glass squircle flex items-center justify-center flex-shrink-0 text-[#007AFF] font-bold">1</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Instant Skill Report</h4>
                <p className="text-white/40 leading-relaxed">Candidates receive immediate, actionable feedback after assessments. No more ghosting.</p>
              </div>
            </div>
            <div className="exp-item flex gap-6">
              <div className="w-12 h-12 glass squircle flex items-center justify-center flex-shrink-0 text-[#34C759] font-bold">2</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Fair Play Logic</h4>
                <p className="text-white/40 leading-relaxed">Our AI eliminates subconscious bias by focusing purely on technical results and verified skills.</p>
              </div>
            </div>
            <div className="exp-item flex gap-6">
              <div className="w-12 h-12 glass squircle flex items-center justify-center flex-shrink-0 text-white font-bold">3</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Skill Passport</h4>
                <p className="text-white/40 leading-relaxed">Carry your score to the next interview. One assessment, multiple career opportunities.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-md relative group">
          <div className="glass squircle p-8 ios-shadow relative overflow-hidden border-white/10 transition-all hover:border-white/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#007AFF] blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
            
            {isValidating && (
              <div className="absolute inset-0 bg-blue-500/5 z-20 pointer-events-none">
                <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#007AFF] to-transparent animate-[scan_2s_ease-in-out_infinite] absolute shadow-[0_0_15px_#007AFF]"></div>
              </div>
            )}

            <div className="relative z-10">
               <div className="flex items-center gap-4 mb-8">
                  <div className="relative">
                    <img src="https://picsum.photos/100/100?seed=candidate" className="w-16 h-16 rounded-2xl border border-white/20" alt="Avatar" />
                    {isVerified && (
                      <div ref={badgeRef} className="absolute -bottom-1 -right-1 bg-[#34C759] w-6 h-6 rounded-full flex items-center justify-center border-2 border-black text-white">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="font-bold text-lg">Alex Chen</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">Full-Stack Engineer</div>
                  </div>
               </div>

               <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-white/50">{isValidating ? 'Validating Experience...' : 'Core Proficiency'}</span>
                      <span className={`${score >= 90 ? 'text-[#34C759]' : 'text-[#007AFF]'} font-bold`}>{isValidating ? 'ANALYZING' : `Top ${Math.max(1, 10 - Math.floor(score/10))}%`}</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div 
                        ref={progressRef} 
                        className={`h-full ${score >= 90 ? 'bg-[#34C759]' : 'bg-[#007AFF]'} rounded-full shadow-[0_0_10px_rgba(0,122,255,0.3)] transition-colors`}
                        style={{ width: isValidating ? '0%' : isVerified ? '92%' : '0%' }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-4xl font-black tracking-tighter">
                      {score}<span className="text-sm font-normal text-white/30 ml-1">/100</span>
                    </div>
                    <button 
                      onClick={startValidation}
                      disabled={isValidating}
                      className="text-[10px] font-black uppercase tracking-widest bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all active:scale-95 disabled:opacity-50"
                    >
                      {isValidating ? 'Scanning...' : isVerified ? 'Re-Validate' : 'Run Fair Play Scan'}
                    </button>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                    <p className="text-xs italic text-white/60">
                      {isVerified 
                        ? '"The assessment was challenging but precise. The instant feedback verified my skills without resume bias."' 
                        : '"RoleScreen AI uses Fair Play logic to ensure results are based strictly on my verified technical output."'}
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: 0; }
          50% { top: 100%; }
          100% { top: 0; }
        }
      `}</style>
    </section>
  );
};

export default CandidateExp;