import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const data = [
  { subject: 'Coding', A: 120, fullMark: 150 },
  { subject: 'System Design', A: 98, fullMark: 150 },
  { subject: 'Logic', A: 86, fullMark: 150 },
  { subject: 'Architecture', A: 99, fullMark: 150 },
  { subject: 'Security', A: 85, fullMark: 150 },
  { subject: 'Latency', A: 65, fullMark: 150 },
];

const Workflow: React.FC = () => {
  return (
    <section id="workflow" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">The Infrastructure Workflow</h2>
        <p className="text-xl text-white/40">From Smart Posting to Command Center.</p>
      </div>

      <div className="flex gap-8 overflow-x-auto px-6 pb-12 no-scrollbar snap-x">
        {/* Step 1 */}
        <div className="min-w-[320px] md:min-w-[450px] snap-center">
          <div className="glass squircle p-8 h-full border-white/5 hover:border-white/20 transition-all">
            <div className="text-[#007AFF] text-sm font-bold mb-4 uppercase tracking-[0.2em]">Step 01</div>
            <h3 className="text-3xl font-bold mb-6">Smart Post</h3>
            <p className="text-white/50 mb-8 leading-relaxed">
              AI-optimized job descriptions with real-time skill weighting. Our engine scrapes market data to ensure your JD attracts the top 1% of talent.
            </p>
            <div className="bg-black/40 rounded-2xl p-6 border border-white/5">
               <div className="space-y-4">
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#007AFF] w-3/4"></div>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#007AFF] w-1/2"></div>
                  </div>
               </div>
               <div className="mt-4 text-[10px] text-white/30 font-bold uppercase">Weighting Skills...</div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="min-w-[320px] md:min-w-[450px] snap-center">
          <div className="glass squircle p-8 h-full border-white/5 hover:border-white/20 transition-all">
            <div className="text-[#007AFF] text-sm font-bold mb-4 uppercase tracking-[0.2em]">Step 02</div>
            <h3 className="text-3xl font-bold mb-6">The Assessment Gate</h3>
            <p className="text-white/50 mb-8 leading-relaxed">
              Adaptive testing UI with 3D elements showing tab-switch detection and "Confidence-Based Scoring."
            </p>
            <div className="bg-black/40 rounded-2xl p-4 border border-white/5 flex flex-col items-center">
               <div className="w-full h-32 flex items-end justify-between gap-1">
                  {[40, 70, 45, 90, 65, 80, 50, 85].map((h, i) => (
                    <div key={i} className="w-full bg-[#007AFF]/20 rounded-t-sm" style={{ height: `${h}%` }}>
                      <div className="w-full bg-[#007AFF] rounded-t-sm animate-pulse" style={{ height: '30%' }}></div>
                    </div>
                  ))}
               </div>
               <div className="mt-4 text-[10px] text-red-500 font-bold uppercase">Anomaly Detected: Tab Switch</div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="min-w-[320px] md:min-w-[450px] snap-center">
          <div className="glass squircle p-8 h-full border-white/5 hover:border-white/20 transition-all">
            <div className="text-[#007AFF] text-sm font-bold mb-4 uppercase tracking-[0.2em]">Step 03</div>
            <h3 className="text-3xl font-bold mb-6">Command Center</h3>
            <p className="text-white/50 mb-8 leading-relaxed">
              Candidate Radar (Spider Chart) and Integrity Shield. Visualize every candidate's DNA across technical and behavioral axis.
            </p>
            <div className="bg-black/40 rounded-2xl h-48 border border-white/5 overflow-hidden">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="60%" data={data}>
                  <PolarGrid stroke="#ffffff22" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#ffffff55', fontSize: 10 }} />
                  <Radar
                    name="Candidate"
                    dataKey="A"
                    stroke="#007AFF"
                    fill="#007AFF"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;