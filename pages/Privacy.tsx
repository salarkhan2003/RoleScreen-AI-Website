
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="pt-40 pb-24 px-6 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-4xl md:text-6xl font-bold mb-12 text-gradient">Privacy & Trust.</h1>
      <div className="space-y-12 text-white/60 leading-relaxed">
        <section>
          <h3 className="text-2xl font-bold text-white mb-4">Candidate Data Protection</h3>
          <p className="mb-4">RoleScreen AI is committed to the highest standards of data protection. Candidate assessment data is encrypted at rest using AES-256 and in transit using TLS 1.3. We never sell candidate data to third parties.</p>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-white mb-4">Compliance</h3>
          <p className="mb-4">We are fully GDPR, CCPA, and SOC2 Type II compliant. Our infrastructure is audited quarterly by external security firms to ensure zero-day vulnerabilities are addressed immediately.</p>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-white mb-4">AI Ethics</h3>
          <p className="mb-4">Our Fair Play logic is designed to eliminate subconscious human bias. We regularly audit our Mixture-of-Experts models for algorithmic fairness to ensure that candidates are evaluated solely on technical merit.</p>
        </section>
        <div className="p-8 bg-white/5 rounded-3xl border border-white/5">
           <p className="text-sm italic">Last Updated: October 2024. For specific inquiries, contact legal@rolescreen.ai</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
