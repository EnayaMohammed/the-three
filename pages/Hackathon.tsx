
import React from 'react';
import { Calendar, MapPin, Clock, Trophy, Users, Zap, QrCode, ArrowRight } from 'lucide-react';

export const HackathonPage: React.FC = () => {
  return (
    <div className="pb-40 animate-in fade-in duration-700">
      {/* Hero Header */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass border border-purple-500/30 text-purple-400 text-sm font-bold uppercase tracking-widest mb-8">
            <Zap size={16} /> Showcase & Compete
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase">
            SHI'ERA <span className="text-purple-500">Tech-Show</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A premier platform for innovation, technical excellence, and networking for Muslim students in Ethiopian universities.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-40">
        
        {/* Edition 2.0 - Upcoming */}
        <section className="relative">
           <div className="glass rounded-[3.5rem] p-12 md:p-20 border border-purple-500/20 shadow-3xl shadow-purple-900/10">
              <div className="flex flex-col lg:flex-row gap-16 items-start">
                 <div className="flex-grow">
                    <div className="flex items-center gap-4 mb-8">
                       <span className="bg-purple-600 text-white px-6 py-1.5 rounded-full text-sm font-black uppercase tracking-[0.2em]">Edition 2.0</span>
                       <span className="text-gray-500 font-bold uppercase tracking-widest text-xs italic">Wednesday, Jan 7, 2026</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black mb-10 leading-none">HACKATHON 2.0</h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-12 font-light">
                       Building on the incredible energy of our first event, Shi'era-Hack 2.0 is back! Join us for a morning dedicated to showcasing talent and exploring the future of technology.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                       <div className="bg-white/5 border border-white/5 p-6 rounded-3xl text-center">
                          <h4 className="text-white font-bold mb-2">Tech-Show</h4>
                          <p className="text-xs text-gray-500">Live demos and project exhibitions.</p>
                       </div>
                       <div className="bg-white/5 border border-white/5 p-6 rounded-3xl text-center">
                          <h4 className="text-white font-bold mb-2">Discussions</h4>
                          <p className="text-xs text-gray-500">Insightful sessions with mentors.</p>
                       </div>
                       <div className="bg-white/5 border border-white/5 p-6 rounded-3xl text-center">
                          <h4 className="text-white font-bold mb-2">Prizes</h4>
                          <p className="text-xs text-gray-500">Exciting rewards for top projects.</p>
                       </div>
                    </div>

                    <div className="space-y-4 mb-12">
                       <div className="flex items-center gap-4 text-gray-300">
                          <Calendar className="text-purple-500" size={24} />
                          <span className="font-bold">January 7, 2026</span>
                       </div>
                       <div className="flex items-center gap-4 text-gray-300">
                          <MapPin className="text-purple-500" size={24} />
                          <span className="font-bold">Reyan Mesjid (JiT Campus)</span>
                       </div>
                       <div className="flex items-center gap-4 text-gray-300">
                          <Clock className="text-purple-500" size={24} />
                          <span className="font-bold">Morning Session</span>
                       </div>
                    </div>

                    <button className="purple-gradient text-white px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl shadow-purple-500/30 uppercase tracking-widest">
                       Secure Your Spot
                    </button>
                 </div>

                 <div className="w-full lg:w-[320px] shrink-0">
                    <div className="bg-white rounded-[2.5rem] p-8 flex flex-col items-center text-center">
                       <div className="text-black font-black uppercase tracking-widest text-sm mb-6">Registration QR</div>
                       <div className="w-full aspect-square bg-gray-100 rounded-2xl flex items-center justify-center border-4 border-black/5">
                          <QrCode size={180} className="text-black" />
                       </div>
                       <div className="mt-8 text-black font-bold">Registration Dates</div>
                       <div className="text-purple-600 font-black text-2xl">Dec 19 - 21</div>
                       <div className="mt-2 text-xs text-gray-400">Powered by K-JUMJ Students</div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Previous Edition 1.0 */}
        <section>
           <div className="flex items-center gap-8 mb-16">
              <h2 className="text-4xl font-black">Past Events</h2>
              <div className="flex-grow h-px bg-white/5"></div>
           </div>

           <div className="glass rounded-[3rem] p-12 border border-white/5 hover:bg-white/[0.04] transition-colors group">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                 <div className="w-full md:w-64 h-64 rounded-3xl bg-purple-900/20 flex flex-col items-center justify-center border border-white/10 shrink-0">
                    <Trophy size={80} className="text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
                    <span className="text-xl font-black uppercase tracking-widest">Version 1.0</span>
                 </div>
                 <div className="flex-grow">
                    <div className="flex items-center gap-4 mb-6">
                       <span className="text-purple-400 font-bold uppercase tracking-widest text-xs">Sunday, May 18, 2025</span>
                    </div>
                    <h3 className="text-4xl font-black mb-6">SHIERA TECH-SHOW / HACKATHON</h3>
                    <p className="text-gray-400 leading-relaxed mb-8 max-w-2xl">
                       Our inaugural event brought together developers, designers, and students to collaborate, compete, and showcase groundbreaking ideas. It set the stage for our growing community.
                    </p>
                    <div className="flex flex-wrap gap-8 text-sm text-gray-500">
                       <div className="flex items-center gap-2"><Users size={18} /> 150+ Participants</div>
                       <div className="flex items-center gap-2"><Trophy size={18} /> 5 Awards Given</div>
                       <div className="flex items-center gap-2"><MapPin size={18} /> JiT Campus</div>
                    </div>
                 </div>
                 <button className="text-white font-bold flex items-center gap-2 hover:text-purple-400 transition-colors">
                    Recap Video <ArrowRight size={20} />
                  </button>
              </div>
           </div>
        </section>

      </div>
    </div>
  );
};
