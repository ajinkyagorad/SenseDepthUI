import React from 'react';
import SmartAssistantCard from './cards/SmartAssistantCard';
import ServicePersonalCard from './cards/ServicePersonalCard';
import PortfolioCard from './cards/PortfolioCard';
import VoiceCommand from './VoiceCommand';
import FloatingToolbar from './FloatingToolbar';
import AnimatedCardWrapper from './AnimatedCardWrapper';

const cardData = [
  { Component: VoiceCommand, props: {}, align: 'center' },
  { Component: ServicePersonalCard, props: { name: 'Noer Nook', title: 'UX/UI Designer', avatarUrl: 'https://i.pravatar.cc/150?u=noernook' }, align: 'left' },
  { Component: PortfolioCard, props: {}, align: 'right' },
  { Component: SmartAssistantCard, props: {}, align: 'center' },
  { Component: FloatingToolbar, props: {}, align: 'right' },
  { Component: ServicePersonalCard, props: { name: 'Alex Ray', title: 'Data Scientist', avatarUrl: 'https://i.pravatar.cc/150?u=alexray' }, align: 'left' },
  { Component: PortfolioCard, props: { title: 'Project Titan', subtitle: 'AI & Robotics' }, align: 'center'},
  { Component: VoiceCommand, props: { title: 'System Status', subtitle: 'All systems operational' }, align: 'right' },
  { Component: ServicePersonalCard, props: { name: 'Jenna Orton', title: 'Lead Engineer', avatarUrl: 'https://i.pravatar.cc/150?u=jennaorton' }, align: 'center' },
];

const MainBoard: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-48" style={{ transformStyle: 'preserve-3d' }}>
      <div className="text-center mb-48">
          <AnimatedCardWrapper>
            <h1 className="text-5xl font-bold text-slate-700 tracking-widest">2025AD</h1>
          </AnimatedCardWrapper>
      </div>

      <div className="space-y-48">
        {cardData.map(({ Component, props, align }, index) => {
          const alignmentClass = 
              align === 'left' ? 'items-start' 
            : align === 'right' ? 'items-end' 
            : 'items-center';
          
          return (
            <div key={index} className={`flex flex-col ${alignmentClass}`}>
              <div className="w-full sm:w-3/4 md:w-2/3 lg:w-[65%]">
                <AnimatedCardWrapper>
                  <Component {...props} />
                </AnimatedCardWrapper>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-48">
          <AnimatedCardWrapper>
            <h2 className="text-3xl font-bold text-slate-400 tracking-widest">The journey continues...</h2>
          </AnimatedCardWrapper>
      </div>
    </div>
  );
};

export default MainBoard;