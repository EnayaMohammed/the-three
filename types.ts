
export enum CourseCategory {
  DESIGN = 'Graphic Design',
  FRONTEND = 'Frontend Development',
  BACKEND = 'Backend Development',
  MOBILE = 'Mobile App Development',
  CYBER = 'Cyber Security',
  AI = 'AI',
  LANGUAGES = 'Languages'
}

export interface Course {
  id: string;
  title: string;
  category: CourseCategory;
  description: string;
  mentor: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  thumbnail: string;
}

export interface Event {
  id: string;
  title: string;
  type: 'Podcast' | 'Habit-Sharing' | 'Tech Talk' | 'Islamic Discussion' | 'Campus Event';
  date: string;
  venue: string;
  countdown: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Internship' | 'Freelance' | 'Full-time';
  skills: string[];
}

export interface UserProfile {
  id: string;
  name: string;
  role: 'Student' | 'Mentor' | 'Admin';
  skills: string[];
  projects: string[];
  certificates: string[];
  links: { github?: string; linkedin?: string };
}
