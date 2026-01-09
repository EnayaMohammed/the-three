
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
  onJoin: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onJoin }) => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden py-32 px-4">
      {/* Eye-catching animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large rotating gradient circles */}
        <div className="absolute top-[10%] left-[5%] w-[45rem] h-[45rem] bg-purple-600/5 rounded-full blur-[150px] animate-[spin_30s_linear_infinite]"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[50rem] h-[50rem] bg-indigo-600/5 rounded-full blur-[150px] animate-[spin_40s_linear_infinite_reverse]"></div>
        
        {/* Orbiting circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] border border-white/5 rounded-full animate-[spin_50s_linear_infinite]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-500/20 rounded-full blur-sm"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] border border-white/[0.03] rounded-full animate-[spin_35s_linear_infinite_reverse]">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-indigo-500/20 rounded-full blur-sm"></div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Engineering Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full glass border border-purple-500/20 text-purple-300 text-[10px] font-black uppercase tracking-[0.3em] mb-12 animate-float shadow-2xl">
          <Sparkles size={14} className="text-purple-400" />
          <span>Prepared by ثلاثية النور</span>
        </div>
        
        {/* Hero Title */}
        <h1 className="text-5xl md:text-[6.5rem] font-black mb-12 leading-[0.9] tracking-tighter">
          <span className="text-white/40 font-light">Empowering the</span> <br />
          <span className="bg-gradient-to-r from-purple-100 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
            Next Generation
          </span> <br />
          <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">Of Tech Innovators</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-2xl text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
          A dedicated community for Muslim tech students to inspire, innovate, and master the ever-evolving landscape of programming.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <button 
            onClick={onExplore}
            className="group w-full sm:w-auto purple-gradient text-white px-12 py-5 rounded-[2rem] font-black text-xl flex items-center justify-center gap-4 shadow-[0_20px_50px_rgba(124,58,237,0.3)] hover:scale-105 transition-all border border-white/20"
          >
            Start Learning
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </button>
          <button 
            onClick={onJoin}
            className="w-full sm:w-auto glass text-white px-12 py-5 rounded-[2rem] font-black text-xl border border-white/5 hover:bg-white/10 hover:border-purple-500/40 transition-all shadow-xl"
          >
            Join the Community
          </button>
        </div>

        {/* Stats */}
        <div className="mt-40 flex flex-wrap justify-center gap-16 md:gap-32 opacity-40">
           <div className="flex flex-col items-center">
             <span className="text-5xl font-black text-white mb-2">500+</span>
             <span className="text-[10px] text-purple-400 font-black uppercase tracking-widest">Students</span>
           </div>
           <div className="flex flex-col items-center">
             <span className="text-5xl font-black text-white mb-2">25+</span>
             <span className="text-[10px] text-purple-400 font-black uppercase tracking-widest">Campuses</span>
           </div>
           <div className="flex flex-col items-center">
             <span className="text-5xl font-black text-white mb-2">12+</span>
             <span className="text-[10px] text-purple-400 font-black uppercase tracking-widest">Expert Mentors</span>
           </div>
        </div>
      </div>
    </section>
  );
};
