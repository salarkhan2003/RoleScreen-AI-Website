import React from 'react';

const Blog: React.FC = () => {
  const posts = [
    { title: "Why the Resume is Dead", date: "Oct 12, 2024", excerpt: "How LLMs have made traditional screening metrics obsolete overnight." },
    { title: "Mixture-of-Experts in Recruitment", date: "Oct 08, 2024", excerpt: "A deep dive into our proprietary MoE assessment engine." },
    { title: "The Ethics of AI Gatekeeping", date: "Sep 28, 2024", excerpt: "Our framework for ensuring 100% fair play in hiring." },
  ];

  return (
    <div className="pt-40 pb-24 px-6 max-w-7xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-bold mb-16 text-gradient">Latest Insights.</h1>
      <div className="space-y-8">
        {posts.map((p, i) => (
          <div key={i} className="glass squircle p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 group cursor-pointer hover:bg-white/[0.08] transition-all border-white/5">
             <div>
                <div className="text-[#007AFF] text-xs font-black uppercase tracking-widest mb-2">{p.date}</div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-[#007AFF] transition-colors">{p.title}</h3>
                <p className="text-white/40 text-lg">{p.excerpt}</p>
             </div>
             <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;