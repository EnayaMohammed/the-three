
import React from 'react';
import { Layout as LayoutIcon, GraduationCap, Calendar, Briefcase, Trophy, Users, MessageCircle, Send } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const ShieraLogo = () => (
  <div className="flex items-center gap-4 group cursor-pointer">
    <div className="relative w-14 h-14 flex items-center justify-center">
      {/* Precision Logo from the user's image */}
      <svg viewBox="0 0 100 100" className="w-14 h-14 transition-transform duration-700 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(124,58,237,0.15)]">
        {/* Outer Dark Quatrefoil Shape (#160f29) */}
        <path 
          d="M50 5 C60 5 70 10 75 20 C85 20 95 30 95 45 C95 60 85 75 75 75 C70 85 60 95 50 95 C40 95 30 85 25 75 C15 75 5 65 5 50 C5 35 15 25 25 25 C30 15 40 5 50 5 Z" 
          fill="#160f29" 
        />
        {/* Middle Light Diamond Shape (#d6d1f0) */}
        <path 
          d="M50 25 L75 50 L50 75 L25 50 Z" 
          fill="#d6d1f0" 
        />
        {/* Inner Dark Concave Star (#160f29) */}
        <path 
          d="M50 38 Q53 50 62 50 Q53 50 50 62 Q47 50 38 50 Q47 50 50 38 Z" 
          fill="#160f29" 
        />
      </svg>
    </div>
    <div className="flex flex-col -space-y-1">
      <div className="flex items-baseline gap-1.5">
        <span className="text-2xl font-black tracking-tighter text-white">SHI'ERA</span>

      </div>
      <span className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.4em] leading-none">Developers</span>
    </div>
  </div>
);

const Navbar: React.FC<{ activeTab: string; setActiveTab: (tab: string) => void }> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home', icon: <LayoutIcon size={18} />, label: 'Home' },
    { id: 'courses', icon: <GraduationCap size={18} />, label: 'Academy' },
    { id: 'events', icon: <Calendar size={18} />, label: 'Events' },
    { id: 'jobs', icon: <Briefcase size={18} />, label: 'Board' },
    { id: 'hackathon', icon: <Trophy size={18} />, label: 'Show' },
    { id: 'community', icon: <Users size={18} />, label: 'Community' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <div onClick={() => setActiveTab('home')}>
          <ShieraLogo />
        </div>
        <div className="hidden lg:flex items-center space-x-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full transition-all duration-300 font-bold text-sm ${
                activeTab === tab.id 
                ? 'purple-gradient text-white shadow-xl shadow-purple-500/20' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
        <button 
          onClick={() => setActiveTab('community')}
          className="hidden md:block purple-gradient text-white px-8 py-3 rounded-full font-black text-sm hover:scale-105 active:scale-95 transition-all shadow-xl shadow-purple-600/30 border border-white/10 uppercase tracking-widest"
        >
          Join Community
        </button>
      </div>
    </nav>
  );
};

export const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="min-h-screen flex flex-col pt-20 overflow-x-hidden selection:bg-purple-500 selection:text-white relative">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Global Background Elements for Section Definition */}
      <div className="fixed inset-0 pointer-events-none z-[-2] bg-[#050505]"></div>
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        {/* Animated Background Circles */}
        <div className="absolute top-[-10%] left-[-5%] w-[40rem] h-[40rem] bg-purple-900/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[35rem] h-[35rem] bg-indigo-900/10 rounded-full blur-[100px] animate-pulse delay-700"></div>
        
        {/* Floating Accent Circles */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full border border-purple-500/20 animate-float"></div>
        <div className="absolute bottom-1/3 left-1/2 w-8 h-8 rounded-full border border-indigo-500/10 animate-float delay-1000"></div>
        <div className="absolute top-2/3 right-1/4 w-6 h-6 rounded-full border border-purple-500/20 animate-float delay-500"></div>
      </div>
      
      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-black border-t border-white/5 py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
            <div className="col-span-1 md:col-span-2">
              <ShieraLogo />
              <p className="mt-8 text-gray-500 max-w-sm leading-relaxed text-base">
                An elite platform dedicated to the technical and professional growth of Muslim tech students in Ethiopian universities.
              </p>
              <div className="mt-10 flex gap-6">
                <a href="https://t.me/shieradevelopers" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-purple-600 transition-all border border-white/5">
                  <MessageCircle size={22} className="text-white" />
                </a>
                <a href="https://t.me/shieradevelopers" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-purple-600 transition-all border border-white/5">
                  <Send size={22} className="text-white" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-black text-white mb-8 uppercase tracking-[0.3em] text-[10px]">Navigation</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li onClick={() => setActiveTab('home')} className="hover:text-purple-400 cursor-pointer transition-colors">Vision</li>
                <li onClick={() => setActiveTab('courses')} className="hover:text-purple-400 cursor-pointer transition-colors">Academy</li>
                <li onClick={() => setActiveTab('hackathon')} className="hover:text-purple-400 cursor-pointer transition-colors">Tech-Show</li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-white mb-8 uppercase tracking-[0.3em] text-[10px]">Engineering</h4>
              <p className="text-gray-500 leading-relaxed mb-6 text-sm italic font-light">
                Developed for the community by the <span className="text-purple-400 font-black">ثلاثية النور</span> engineering team.
              </p>
              <div className="text-[10px] text-gray-700 uppercase tracking-widest font-black">
                &copy; {new Date().getFullYear()} SHI'ERA DEV HUB.
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Telegram Link */}
      <a href="https://t.me/shieradevelopers" target="_blank" rel="noopener noreferrer" className="fixed bottom-10 right-10 z-50 group">
        <div className="relative">
          <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-30 group-hover:opacity-70 transition-opacity"></div>
          <div className="w-16 h-16 rounded-2xl purple-gradient flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:-rotate-6 transition-all border border-white/20">
            <Send size={30} className="text-white fill-current" />
          </div>
        </div>
      </a>
    </div>
  );
};
