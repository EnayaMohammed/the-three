
import React from 'react';
import { Github, Linkedin, Award, Code, GraduationCap, CheckCircle2 } from 'lucide-react';

const MOCK_PROFILES = [
  {
    name: "Mariam Ahmed",
    role: "Postgraduate Mentor",
    bio: "AI researcher focusing on ethical frameworks. Helping students bridge the gap between academia and industry.",
    skills: ["Python", "TensorFlow", "Ethics", "NLP"],
    projects: 14,
    certs: 5,
    status: "Mentor",
    avatar: "https://picsum.photos/seed/mariam/150/150"
  },
  {
    name: "Omar Farooq",
    role: "Undergraduate Student",
    bio: "Junior Frontend Developer exploring React and 3D web. Current mentee under Sister Fatimah.",
    skills: ["React", "Three.js", "Figma"],
    projects: 6,
    certs: 2,
    status: "Mentee",
    avatar: "https://picsum.photos/seed/omar/150/150"
  }
];

export const CommunityPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black mb-6">SHI'ERA Community</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          The Halal professional network. Connect with undergraduate peers, postgraduate mentors, and industry experts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_PROFILES.map((profile, i) => (
          <div key={i} className="glass rounded-3xl p-8 border border-white/5 hover:border-purple-500/30 transition-all group">
            <div className="flex items-center gap-6 mb-8">
              <div className="relative">
                <img src={profile.avatar} alt={profile.name} className="w-20 h-20 rounded-2xl object-cover border-2 border-purple-500/30 group-hover:rotate-6 transition-transform" />
                <div className="absolute -bottom-2 -right-2 bg-green-500 p-1.5 rounded-full border-2 border-black">
                   <CheckCircle2 size={12} className="text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">{profile.name}</h3>
                <p className="text-purple-400 text-sm font-medium">{profile.role}</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3">
              {profile.bio}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/5 rounded-2xl p-4 text-center">
                 <div className="text-white font-bold text-xl">{profile.projects}</div>
                 <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">Projects</div>
              </div>
              <div className="bg-white/5 rounded-2xl p-4 text-center">
                 <div className="text-white font-bold text-xl">{profile.certs}</div>
                 <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">Certs</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {profile.skills.map(skill => (
                <span key={skill} className="bg-purple-500/10 text-purple-300 text-[10px] font-bold px-3 py-1 rounded-full border border-purple-500/10">
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-white/5">
              <div className="flex gap-4">
                 <Github size={20} className="text-gray-500 hover:text-white cursor-pointer transition-colors" />
                 <Linkedin size={20} className="text-gray-500 hover:text-white cursor-pointer transition-colors" />
              </div>
              <button className="text-sm font-bold bg-white text-black px-4 py-2 rounded-xl hover:bg-purple-500 hover:text-white transition-all">
                View Profile
              </button>
            </div>
          </div>
        ))}

        {/* Add more profile placeholder */}
        <div className="glass rounded-3xl p-8 border border-dashed border-white/10 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-white/5 transition-colors">
           <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <GraduationCap size={32} className="text-gray-500" />
           </div>
           <h3 className="text-xl font-bold mb-2">Build Your Identity</h3>
           <p className="text-gray-500 text-sm">Create your professional profile and start your tech journey with us.</p>
        </div>
      </div>
    </div>
  );
};
