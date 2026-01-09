
import { Course, CourseCategory, Event, Job } from './types';

export const COLORS = {
  primary: '#7c3aed', // Vibrant Purple
  secondary: '#4c1d95', // Dark Purple
  background: '#050505', // Deep Black
  accent: '#a78bfa', // Light Purple
};

export const COURSES: Course[] = [
  {
    id: '1',
    title: 'Modern UI/UX Design',
    category: CourseCategory.DESIGN,
    description: 'Master Figma and design principles with a focus on modern aesthetic, accessible interfaces, and premium user experiences.',
    mentor: 'Sister Aisha',
    duration: '8 Weeks',
    level: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&h=600&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'React & Tailwind Mastery',
    category: CourseCategory.FRONTEND,
    description: 'Build fast, responsive web applications using the latest stack.',
    mentor: 'Brother Yusuf',
    duration: '12 Weeks',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=400&h=250&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Scalable Node.js APIs',
    category: CourseCategory.BACKEND,
    description: 'Learn to build secure and scalable backend systems with Node.js.',
    mentor: 'Sister Fatimah',
    duration: '10 Weeks',
    level: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&h=250&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'Flutter Mobile App Dev',
    category: CourseCategory.MOBILE,
    description: 'Create beautiful cross-platform mobile applications for iOS and Android.',
    mentor: 'Brother Khalid',
    duration: '10 Weeks',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=400&h=250&auto=format&fit=crop'
  },
  {
    id: '5',
    title: 'Professional English for Tech',
    category: CourseCategory.LANGUAGES,
    description: 'Enhance your communication skills for global tech environments and interviews.',
    mentor: 'Sister Zahra',
    duration: '6 Weeks',
    level: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=400&h=250&auto=format&fit=crop'
  },
  {
    id: '6',
    title: 'Afaan Oromo for Beginners',
    category: CourseCategory.LANGUAGES,
    description: 'Learn the fundamentals of Afaan Oromo language and culture.',
    mentor: 'Brother Abdi',
    duration: '8 Weeks',
    level: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=400&h=250&auto=format&fit=crop'
  },
  {
    id: '7',
    title: 'Ethical Hacking Essentials',
    category: CourseCategory.CYBER,
    description: 'Secure your applications and learn common attack vectors.',
    mentor: 'Brother Hamza',
    duration: '14 Weeks',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&h=250&auto=format&fit=crop'
  },
  {
    id: '8',
    title: 'Machine Learning with Python',
    category: CourseCategory.AI,
    description: 'Introduction to data science and neural networks.',
    mentor: 'Sister Amina',
    duration: '16 Weeks',
    level: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=400&h=250&auto=format&fit=crop'
  }
];

export const EVENTS: Event[] = [
  {
    id: 'e1',
    title: 'Tech & Deen Podcast: Ep 12',
    type: 'Podcast',
    date: 'Oct 25, 2023',
    venue: 'Twitter Spaces',
    countdown: '2 Days left'
  },
  {
    id: 'e2',
    title: 'Weekly Habit-Sharing Session',
    type: 'Habit-Sharing',
    date: 'Oct 28, 2023',
    venue: 'Zoom / Physical Hub',
    countdown: '5 Days left'
  }
];

export const JOBS: Job[] = [
  {
    id: 'j1',
    title: 'Frontend Intern',
    company: 'TechHalal Solutions',
    location: 'Remote',
    type: 'Internship',
    skills: ['React', 'Tailwind']
  },
  {
    id: 'j2',
    title: 'Graphic Designer',
    company: 'Nur Media',
    location: 'Addis Ababa',
    type: 'Freelance',
    skills: ['Photoshop', 'Figma']
  }
];
