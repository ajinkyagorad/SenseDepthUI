import React from 'react';
import MainBoard from './components/MainBoard';

const App: React.FC = () => {
  return (
    <div 
      className="min-h-screen w-full bg-gradient-to-br from-[#dce1f0] to-[#f0f2f9] flex justify-center p-4 sm:p-6 lg:p-8 font-sans"
      style={{ perspective: '1000px' }}
    >
      <MainBoard />
    </div>
  );
};

export default App;