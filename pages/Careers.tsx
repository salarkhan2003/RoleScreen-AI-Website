
import React from 'react';

const Careers: React.FC = () => {
  const jobs = [
    { title: "Senior AI Infrastructure Engineer", team: "Core Engine", location: "San Francisco / Remote" },
    { title: "Founding Product Designer", team: "Design", location: "Remote" },
    { title: "Head of Talent Ecosystem", team: "Operations", location: "London / Remote" },
    { title: "DevOps Engineer (Rust/Go)", team: "Platform", location: "SF / NYC" }
  ];

  return (
    <div className="pt-40 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">Build the Future of Hiring.</h1>
      <p className="text-xl text-white/40 mb-20 max-w-2xl">We're a small, hyper-efficient team building the infrastructure that will define the next decade of talent evaluation.</p>
      
      <div className="space-y-4">
        {jobs.map((job, i) => (
          <div key={i} className="glass squircle p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-white/5 hover:border-white/20 transition-all cursor-pointer group">
             <div>
                <h3 className="text-2xl font-bold mb-1 group-hover:text-[#007AFF] transition-colors">{job.title}</h3>
                <div className="flex gap-4 text-xs font-bold uppercase tracking-widest text-white/30">
                   <span>{job.team}</span>
                   <span>•</span>
                   <span>{job.location}</span>
                </div>
             </div>
             <button className="text-[10px] font-black uppercase tracking-[0.2em] px-6 py-3 border border-white/10 rounded-full group-hover:bg-white group-hover:text-black transition-all">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
