
import React from 'react';
import { JOBS } from '../constants';
import { MapPin, Briefcase, DollarSign, ExternalLink, Filter } from 'lucide-react';

export const BoardPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8">
        <div>
          <h1 className="text-5xl font-black mb-4">Job & Opportunity Board</h1>
          <p className="text-gray-400 text-lg">Connecting SHI'ERA talent with world-class opportunities.</p>
        </div>
        <button className="purple-gradient px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-transform">
          <Briefcase size={20} />
          Post Opportunity
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Sidebar Filters */}
        <div className="lg:col-span-1 space-y-8">
          <div className="glass p-8 rounded-3xl border border-white/5">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-xl">Filters</h3>
              <Filter size={18} className="text-purple-400" />
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-3">Type</label>
                <div className="space-y-2">
                  {['Internship', 'Full-time', 'Freelance', 'Referral'].map(type => (
                    <label key={type} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-5 h-5 rounded border-white/10 bg-white/5 text-purple-600 focus:ring-purple-500" />
                      <span className="text-gray-400 group-hover:text-white transition-colors">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-3">Skill Department</label>
                <div className="space-y-2">
                  {['Development', 'Design', 'Cyber Security', 'AI & Data'].map(dept => (
                    <label key={dept} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-5 h-5 rounded border-white/10 bg-white/5 text-purple-600 focus:ring-purple-500" />
                      <span className="text-gray-400 group-hover:text-white transition-colors">{dept}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Listings */}
        <div className="lg:col-span-3 space-y-6">
          {JOBS.map((job) => (
            <div key={job.id} className="glass p-8 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-all group">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex gap-6 items-start">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-2xl border border-white/10 shrink-0">
                    {job.company.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4">
                      <span className="flex items-center gap-1.5"><Briefcase size={16} className="text-purple-500" /> {job.company}</span>
                      <span className="flex items-center gap-1.5"><MapPin size={16} className="text-blue-500" /> {job.location}</span>
                      <span className="flex items-center gap-1.5"><DollarSign size={16} className="text-green-500" /> Entry Level</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map(skill => (
                        <span key={skill} className="px-3 py-1 rounded-full bg-white/5 text-white text-[10px] font-bold uppercase tracking-widest border border-white/5">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-purple-500 hover:text-white transition-all flex items-center gap-2 shrink-0">
                  Apply Now
                  <ExternalLink size={18} />
                </button>
              </div>
            </div>
          ))}
          
          <div className="bg-purple-900/10 border border-purple-500/20 p-12 rounded-3xl text-center">
             <h3 className="text-2xl font-bold mb-4">Want specialized referrals?</h3>
             <p className="text-gray-400 mb-8 max-w-xl mx-auto">Our community referrals program helps students find jobs through our extensive network of Muslim professionals in tech.</p>
             <button className="text-purple-400 font-bold hover:underline">Learn more about Community Referrals →</button>
          </div>
        </div>
      </div>
    </div>
  );
};
