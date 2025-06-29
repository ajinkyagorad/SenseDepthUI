import React from 'react';
import { MicrophoneIcon } from './icons';

interface VoiceCommandProps {
  title?: string;
  subtitle?: string;
}

const VoiceCommand: React.FC<VoiceCommandProps> = ({ 
  title = "Voin Command", 
  subtitle = "The future of interaction" 
}) => {
  return (
    <div
      className="relative transition-transform duration-500 ease-in-out group [transform-style:preserve-3d]"
    >
      <div className="oscillate-me bg-black/20 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-4 transition-all duration-300 group-hover:border-white/20 group-hover:bg-black/30">
        <div className="flex items-center space-x-4">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-12 h-12 bg-cyan-400/20 rounded-full blur-lg animate-pulse group-hover:blur-xl transition-all duration-500"></div>
            <div className="p-3 bg-slate-900/80 rounded-full shadow-inner">
              <MicrophoneIcon className="w-6 h-6 text-white" />
            </div>
          </div>
          <div>
            <p className="font-semibold text-white">{title}</p>
            <p className="text-xs text-slate-400">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceCommand;