
import React from 'react';

const Enterprise: React.FC = () => {
  return (
    <div className="pt-40 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-black tracking-tight text-gradient mb-8 leading-none">Enterprise Infrastructure.</h1>
        <p className="text-xl md:text-2xl text-white/50 mb-16 leading-relaxed">
          Customized AI training, strict data sovereignty, and dedicated support for organizations hiring at scale.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="glass squircle p-10 border-white/5">
            <h3 className="text-2xl font-bold mb-4">Data Sovereignty</h3>
            <p className="text-white/40 leading-relaxed">Host your candidate data on private clusters with SOC2 Type II compliance and regional data residency guarantees.</p>
          </div>
          <div className="glass squircle p-10 border-white/5">
            <h3 className="text-2xl font-bold mb-4">Custom MoE Models</h3>
            <p className="text-white/40 leading-relaxed">Fine-tune our Mixture-of-Experts models on your internal codebase to generate highly specific architectural assessments.</p>
          </div>
          <div className="glass squircle p-10 border-white/5">
            <h3 className="text-2xl font-bold mb-4">Priority SLA</h3>
            <p className="text-white/40 leading-relaxed">99.99% uptime guarantee with a dedicated Technical Account Manager and 1-hour critical response time.</p>
          </div>
          <div className="glass squircle p-10 border-white/5">
            <h3 className="text-2xl font-bold mb-4">White-Label Portal</h3>
            <p className="text-white/40 leading-relaxed">Provide a seamless candidate experience that looks and feels exactly like your own company's engineering brand.</p>
          </div>
        </div>

        <div className="bg-[#007AFF] squircle p-12 ios-shadow flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2">Ready for a Technical Deep-Dive?</h2>
              <p className="text-white/80">Schedule a session with our Infrastructure Architects.</p>
           </div>
           <button className="bg-white text-black px-10 py-5 squircle font-bold hover:bg-white/90 transition-all active:scale-95">
              Book Consultation
           </button>
        </div>
      </div>
    </div>
  );
};

export default Enterprise;
