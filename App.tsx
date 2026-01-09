
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { HomePage } from './pages/Home';
import { AcademyPage } from './pages/Academy';
import { BoardPage } from './pages/Board';
import { CommunityPage } from './pages/Community';
import { HackathonPage } from './pages/Hackathon';
import { EventsPage } from './pages/Events';

const UnderConstruction: React.FC<{ title: string }> = ({ title }) => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8">
    <div className="w-24 h-24 rounded-3xl purple-gradient flex items-center justify-center mb-8 animate-float shadow-2xl shadow-purple-900/20">
       <span className="text-4xl">🚀</span>
    </div>
    <h2 className="text-4xl font-black mb-4 tracking-tighter uppercase">{title} is Coming Soon</h2>
    <p className="text-gray-400 text-lg max-w-lg font-light">Our engineering team at <span className="text-purple-400 font-bold italic">ثلاثية النور</span> is working hard to bring this feature to life.</p>
  </div>
);

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage onExplore={() => setActiveTab('courses')} onJoin={() => setActiveTab('community')} />;
      case 'courses':
        return <AcademyPage />;
      case 'events':
        return <EventsPage />;
      case 'jobs':
        return <BoardPage />;
      case 'hackathon':
        return <HackathonPage />;
      case 'community':
        return <CommunityPage />;
      default:
        return <HomePage onExplore={() => setActiveTab('courses')} onJoin={() => setActiveTab('community')} />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      <div className="animate-in fade-in duration-700">
        {renderContent()}
      </div>
    </Layout>
  );
};

export default App;
