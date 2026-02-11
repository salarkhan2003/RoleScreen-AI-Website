import React from 'react';
import Hero from '../components/Hero.tsx';
import NoiseSignal from '../components/NoiseSignal.tsx';
import IntegrityShield from '../components/IntegrityShield.tsx';
import Workflow from '../components/Workflow.tsx';
import TechnicalMoat from '../components/TechnicalMoat.tsx';
import ScaleMetrics from '../components/ScaleMetrics.tsx';
import CandidateExp from '../components/CandidateExp.tsx';
import Pricing from '../components/Pricing.tsx';

const Home: React.FC = () => {
  return (
    <div className="space-y-0">
      <Hero />
      <NoiseSignal />
      <Workflow />
      <IntegrityShield />
      <TechnicalMoat />
      <ScaleMetrics />
      <div className="py-24 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Replacing Resumes with Results.</h2>
        <p className="text-xl text-white/40 leading-relaxed">
          Stop hiring people who are good at writing resumes. Start hiring people who are good at building systems. RoleScreen AI is the infrastructure layer for the next generation of software engineering teams.
        </p>
      </div>
      <CandidateExp />
      <Pricing />
    </div>
  );
};

export default Home;