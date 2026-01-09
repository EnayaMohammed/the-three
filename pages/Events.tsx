
import React from 'react';
// Added MessageCircle to imports to fix error on line 89
import { Mic, Video, Users, Calendar, MapPin, ExternalLink, Play, Sparkles, MessageCircle } from 'lucide-react';

const EVENTS_DATA = [
  {
    id: 'talk-show-s2-e3',
    title: 'Talk Live Show: Legacy Talks',
    subtitle: 'Season 2 - Episode 3',
    description: 'Habits, Choices, and Lessons That Shape Your Future. An insightful discussion with our community leaders.',
    type: 'Podcast / Live Show',
    date: 'TBA',
    venue: 'Telegram Live',
    guests: ['Abdurezak Yisihak', 'Semer Nur', 'Esmael Abdulkadir', 'Philo', 'Kedir Jabir'],
    isFeatured: true,
    link: 'https://t.me/shieradevelopers'
  },
  {
    id: 'habit-sharing-weekly',
    title: 'Habit-Sharing Session',
    subtitle: 'Building a Productive Muslim Tech Life',
    description: 'Join us every Friday to discuss habits that help us excel in both our Deen and our professional tech careers.',
    type: 'Community Circle',
    date: 'Every Friday',
    // Fixed syntax error by using double quotes to allow single quote in SHI'ERA
    venue: "SHI'ERA Hub / Zoom",
    isFeatured: false,
    link: '#'
  }
];

export const EventsPage: React.FC = () => {
  const featured = EVENTS_DATA.find(e => e.isFeatured);
  const others = EVENTS_DATA.filter(e => !e.isFeatured);

  return (
    <div className="pb-40 animate-in fade-in duration-700">
      {/* Header */}
      <section className="py-24 bg-gradient-to-b from-purple-900/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-widest mb-8">
            <Mic size={14} /> Podcast & Announcements
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tighter uppercase">Events <span className="text-purple-500">Hub</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl leading-relaxed font-light">
            Stay connected with the community through our live shows, talk sessions, and university meetups.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Featured Live Show (based on poster) */}
        {featured && (
          <div className="relative mb-32">
            <div className="absolute inset-0 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="glass rounded-[3rem] border border-purple-500/20 overflow-hidden group">
               <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-2/5 relative h-80 lg:h-auto bg-black">
                     <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
                        <div className="text-purple-400 font-black text-6xl mb-2 italic">TALK</div>
                        <div className="bg-purple-600 text-white px-6 py-1 font-black text-2xl uppercase tracking-widest mb-2">LIVE</div>
                        <div className="text-white font-black text-7xl uppercase tracking-tighter leading-none">SHOW</div>
                        <div className="mt-8 text-purple-400 font-bold uppercase tracking-widest text-xs">Season 2 — Episode 3</div>
                     </div>
                     <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                        <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                           <Play fill="currentColor" size={32} />
                        </div>
                     </div>
                  </div>
                  <div className="lg:w-3/5 p-12 md:p-20 flex flex-col">
                     <div className="flex items-center gap-3 mb-8">
                        <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Featured Session</span>
                        <div className="flex -space-x-3">
                           {[1,2,3,4,5].map(i => (
                             <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center text-[10px] font-bold">
                                {String.fromCharCode(64 + i)}
                             </div>
                           ))}
                        </div>
                     </div>
                     <h2 className="text-5xl font-black mb-6 leading-tight group-hover:text-purple-400 transition-colors">Legacy Talks: Habits, Choices, and Lessons</h2>
                     <p className="text-gray-400 text-lg leading-relaxed mb-10 font-light">
                        Building a legacy in tech requires more than just code. Join our panelists for Episode 3 as they dive deep into the habits that shape a successful future.
                     </p>
                     
                     <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12 border-t border-white/5 pt-10">
                        <div>
                           <div className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Platform</div>
                           <div className="text-white font-bold flex items-center gap-2"><MessageCircle size={16} className="text-purple-500" /> Telegram Live</div>
                        </div>
                        <div>
                           <div className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Guests</div>
                           <div className="text-white font-bold">{featured.guests?.length} Experts</div>
                        </div>
                     </div>

                     <a 
                       href={featured.link} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="w-full md:w-fit purple-gradient text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-xl shadow-purple-500/20 hover:scale-[1.02] transition-all uppercase tracking-widest"
                     >
                        Listen to Recording
                        <ExternalLink size={20} />
                     </a>
                  </div>
               </div>
            </div>
          </div>
        )}

        {/* Other Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {others.map(event => (
            <div key={event.id} className="glass p-10 rounded-[2.5rem] border border-white/5 hover:border-purple-500/20 transition-all group">
               <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all">
                     <Users size={28} />
                  </div>
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{event.type}</span>
               </div>
               <h3 className="text-3xl font-black mb-4 group-hover:text-purple-400 transition-colors">{event.title}</h3>
               <p className="text-gray-400 mb-8 leading-relaxed line-clamp-2">{event.description}</p>
               
               <div className="space-y-3 mb-10 pt-6 border-t border-white/5">
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                     <Calendar size={16} className="text-purple-500" /> {event.date}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                     <MapPin size={16} className="text-purple-500" /> {event.venue}
                  </div>
               </div>
               
               <button className="w-full py-4 rounded-xl bg-white/5 border border-white/10 font-bold hover:bg-white/10 transition-all">
                  Get Notified
               </button>
            </div>
          ))}
          
          <div className="glass rounded-[2.5rem] border border-dashed border-white/10 p-10 flex flex-col items-center justify-center text-center">
             <div className="w-16 h-16 rounded-full bg-purple-900/20 flex items-center justify-center mb-6">
                <Sparkles size={32} className="text-purple-400" />
             </div>
             <h3 className="text-xl font-black mb-2">Host an Event?</h3>
             <p className="text-gray-500 text-sm mb-6 max-w-[200px]">Want to start a tech circle in your university campus?</p>
             <button className="text-purple-400 font-bold hover:underline">Apply as Lead →</button>
          </div>
        </div>
      </div>
    </div>
  );
};
