
import React from 'react';
import { Hero } from '../components/Hero';
import { COURSES, EVENTS } from '../constants';
import { ChevronRight, Award, Code, Globe, Shield, Terminal, Zap, Calendar, Target, BookOpen, Users } from 'lucide-react';

interface HomePageProps {
  onExplore: () => void;
  onJoin: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onExplore, onJoin }) => {
  return (
    <div className="pb-32">
      <Hero onExplore={onExplore} onJoin={onJoin} />

      {/* Distinct Separator Line */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      {/* About Section - Visual Mission with subtle background contrast */}
      <section className="relative py-32 md:py-48 overflow-hidden bg-zinc-950/20">
        {/* Floating circles for the about section */}
        <div className="absolute top-1/4 left-0 w-[30rem] h-[30rem] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              {/* Background accent circle */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/20 blur-[60px] rounded-full animate-pulse"></div>
              
              <div className="relative z-10 rounded-[3.5rem] overflow-hidden border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.6)]">
                {/* Updated Image: Muslim male students collaborating on technology */}
                <img 
                  src="https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=1200&h=1200&auto=format&fit=crop" 
                  alt="Muslim Students Collaborating in Tech" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>
                
                <div className="absolute bottom-10 left-10 right-10 glass p-10 rounded-3xl border border-purple-500/30 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                  <h4 className="text-purple-400 font-black mb-2 uppercase text-[10px] tracking-[0.3em]">Our Guiding Light</h4>
                  <p className="text-gray-200 font-light leading-relaxed">
                    Bridging the gap between academic theory and world-class digital application for the next generation.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="text-purple-400 font-black uppercase tracking-[0.5em] mb-8 text-[11px] flex items-center gap-4">
                <span className="w-10 h-px bg-purple-500/30"></span>
                A Faith-Aligned Community
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-12 leading-[1.1] tracking-tighter">
                Inspire. Empower. <br />
                <span className="text-purple-500 drop-shadow-[0_0_20px_rgba(168,85,247,0.2)]">Grow Together.</span>
              </h2>
              
              <div className="space-y-8 text-gray-400 text-xl leading-relaxed font-light">
                <p>
                  Shi'era is a movement of <span className="text-white font-bold">Muslim undergraduate and postgraduate students</span> committed to redefining the technological landscape in Ethiopia.
                </p>
                <p>
                  Through mentorship and community-led learning, we empower our members to master high-impact skills while maintaining Islamic professional values.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-16">
                 <div className="flex gap-6 items-start group">
                   <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-xl">
                     <Target size={28} />
                   </div>
                   <div>
                      <h4 className="text-white font-black mb-2 text-lg uppercase tracking-tight">Skill Proof</h4>
                      <p className="text-sm text-gray-500 font-medium">Verify your expertise through real projects.</p>
                   </div>
                 </div>
                 <div className="flex gap-6 items-start group">
                   <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-xl">
                     <BookOpen size={28} />
                   </div>
                   <div>
                      <h4 className="text-white font-black mb-2 text-lg uppercase tracking-tight">Mentorship</h4>
                      <p className="text-sm text-gray-500 font-medium">Guidance from experienced professionals.</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academy Preview Section with distinct background */}
      <section className="py-32 md:py-48 bg-black relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">The Academy</h2>
              <p className="text-gray-500 max-w-lg text-xl font-light">High-impact modules designed for the modern engineering market.</p>
            </div>
            <button 
              onClick={onExplore}
              className="w-fit text-purple-400 font-black flex items-center gap-3 hover:gap-6 transition-all uppercase tracking-[0.2em] text-[11px] group"
            >
              Browse Academy <ChevronRight size={18} className="group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {COURSES.slice(0, 3).map((course) => (
              <div key={course.id} className="group glass rounded-[3rem] overflow-hidden hover:border-purple-500/40 transition-all duration-700 shadow-2xl hover:-translate-y-4">
                <div className="h-64 overflow-hidden relative">
                  <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  <div className="absolute top-8 right-8 bg-black/80 backdrop-blur-xl px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10 text-white">
                    {course.level}
                  </div>
                </div>
                <div className="p-12">
                  <div className="text-purple-400 text-[9px] font-black uppercase tracking-[0.4em] mb-6">{course.category}</div>
                  <h3 className="text-2xl font-black mb-8 group-hover:text-purple-300 transition-colors leading-tight">{course.title}</h3>
                  
                  <div className="flex items-center justify-between pt-8 border-t border-white/5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl purple-gradient flex items-center justify-center text-sm font-black shadow-2xl text-white border border-white/10">
                        {course.mentor.charAt(0)}
                      </div>
                      <div>
                        <div className="text-[9px] text-gray-600 font-bold uppercase tracking-widest">Mentor</div>
                        <div className="text-sm text-white font-black">{course.mentor}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Recognition with luxurious dark sectioning */}
      <section className="py-40 md:py-56 bg-zinc-950 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
           <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass border border-white/5 text-gray-500 text-[9px] font-black uppercase tracking-widest mb-16">
              Platform Engineering
           </div>
           
           <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
              <div className="text-7xl md:text-9xl font-arabic text-purple-400 drop-shadow-[0_0_40px_rgba(168,85,247,0.2)] animate-pulse" dir="rtl">
                ثلاثية النور
              </div>
              <div className="hidden md:block w-px h-32 bg-white/10"></div>
              <div className="text-center md:text-left">
                 <h3 className="text-white font-black text-4xl leading-none mb-4 tracking-tighter uppercase">Trio Of Light</h3>
                 <p className="text-gray-500 text-[11px] font-bold uppercase tracking-[0.4em] mb-1">Developed for SHI'ERA Community</p>
                 <p className="text-gray-600 text-[10px] italic">By 3 Dedicated Muslim Female Engineers</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};
