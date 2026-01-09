
import React, { useState } from 'react';
import { COURSES } from '../constants';
import { CourseCategory, Course } from '../types';
import { Search, BookOpen, Clock, BarChart, ChevronRight, X, ArrowLeft } from 'lucide-react';

export const AcademyPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const filteredCourses = COURSES.filter(course => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (selectedCourse) {
    return (
      <div className="pb-32 animate-in slide-in-from-bottom-4 duration-500">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-16">
          <button 
            onClick={() => setSelectedCourse(null)}
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-12 group transition-colors"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Academy
          </button>

          <div className="glass rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
            <div className="h-96 relative">
              <img src={selectedCourse.thumbnail} alt={selectedCourse.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-12 left-12 right-12">
                <span className="bg-purple-600 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">
                  {selectedCourse.category}
                </span>
                <h1 className="text-5xl font-black text-white leading-tight">{selectedCourse.title}</h1>
              </div>
            </div>

            <div className="p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5 text-center">
                   <Clock className="mx-auto mb-3 text-purple-400" size={24} />
                   <div className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Duration</div>
                   <div className="text-white font-bold">{selectedCourse.duration}</div>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5 text-center">
                   <BarChart className="mx-auto mb-3 text-blue-400" size={24} />
                   <div className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Level</div>
                   <div className="text-white font-bold">{selectedCourse.level}</div>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5 text-center">
                   <Users className="mx-auto mb-3 text-green-400" size={24} />
                   <div className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Mentor</div>
                   <div className="text-white font-bold">{selectedCourse.mentor}</div>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold mb-6">Course Description</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  {selectedCourse.description}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                
                <h3 className="text-xl font-bold mb-6 text-purple-400">What you'll learn</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                    Industry standard workflows
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                    Advanced problem solving
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                    Collaborative development
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                    Final capstone project
                  </li>
                </ul>
              </div>

              <button className="w-full mt-16 purple-gradient py-6 rounded-2xl font-black text-xl hover:scale-[1.02] transition-all shadow-xl shadow-purple-500/20 uppercase tracking-wider">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-32 animate-in fade-in duration-700">
      {/* Header */}
      <section className="py-24 bg-gradient-to-b from-purple-900/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tighter">SHI'ERA Academy</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl leading-relaxed font-light">
            Master the tools of tomorrow. Join over 500+ students learning high-demand tech skills guided by professional mentors.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-16 items-center">
          <div className="relative flex-grow w-full group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-400 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search skills, languages, or mentors..."
              className="w-full bg-white/5 border border-white/10 rounded-[1.5rem] py-5 pl-14 pr-6 text-white focus:outline-none focus:border-purple-500 focus:bg-white/[0.08] transition-all text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto w-full lg:w-auto pb-4 lg:pb-0 scrollbar-hide no-scrollbar">
            {['All', ...Object.values(CourseCategory)].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat as any)}
                className={`px-8 py-4 rounded-[1.2rem] whitespace-nowrap font-bold text-sm uppercase tracking-wider transition-all border ${
                  selectedCategory === cat 
                  ? 'purple-gradient text-white border-purple-500 shadow-lg shadow-purple-500/20' 
                  : 'bg-white/5 text-gray-400 border-white/5 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Centered Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCourses.map((course) => (
            <div 
              key={course.id} 
              onClick={() => setSelectedCourse(course)}
              className="group glass rounded-[2.5rem] overflow-hidden flex flex-col hover:translate-y-[-10px] hover:shadow-3xl hover:shadow-purple-500/10 transition-all duration-700 border border-white/5 cursor-pointer"
            >
              <div className="h-64 relative overflow-hidden">
                <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-6 right-6">
                  <span className="bg-black/60 backdrop-blur-xl px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
                    {course.level}
                  </span>
                </div>
              </div>
              
              <div className="p-10 flex-grow flex flex-col">
                <div className="text-purple-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                  {course.category}
                </div>
                <h3 className="text-3xl font-black mb-6 group-hover:text-purple-400 transition-colors leading-tight">
                  {course.title}
                </h3>
                <p className="text-gray-400 text-sm mb-10 leading-relaxed line-clamp-3 font-light">
                  {course.description}
                </p>
                
                <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl purple-gradient flex items-center justify-center text-xs font-bold text-white shadow-lg">
                      {course.mentor.charAt(0)}
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Mentor</div>
                      <div className="text-xs text-white font-bold">{course.mentor}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Duration</div>
                    <div className="text-xs text-white font-bold">{course.duration}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="py-32 text-center bg-white/5 rounded-[3rem] border border-dashed border-white/10 max-w-3xl mx-auto">
            <BookOpen size={80} className="mx-auto text-gray-700 mb-8" />
            <h3 className="text-3xl font-black mb-4">No courses available yet</h3>
            <p className="text-gray-500 text-lg max-w-sm mx-auto">
              Our curriculum team is currently updating {selectedCategory} modules. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// Internal icon for Users not imported from lucide-react in previous versions
const Users = ({ className, size }: { className?: string, size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
