import React from 'react';
import { CheckCircleIcon, ChatBubbleOvalLeftIcon, PlusCircleIcon, MoreIcon } from '../icons';

const SmartAssistantCard: React.FC = () => {
    return (
        <div
            className="relative transition-transform duration-500 ease-in-out group [transform-style:preserve-3d]"
        >
            <div className="oscillate-me relative bg-white/60 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl transition-all duration-500 ease-in-out group-hover:border-white/40 group-hover:bg-white/70">
                <div className="p-5">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg font-bold text-slate-800">Smart Personal Assistant</h3>
                        <button className="text-slate-400 hover:text-slate-600">
                            <MoreIcon className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="flex items-center space-x-4 mb-4">
                        <img className="w-16 h-16 rounded-full shadow-md border-2 border-white" src="https://i.pravatar.cc/150?u=meixlgeorga" alt="Meixl Georga" />
                        <div>
                            <h4 className="font-bold text-slate-900">Meixl Georga</h4>
                            <p className="text-sm text-slate-600">UX/UI Designer</p>
                        </div>
                    </div>
                    
                    <div className="bg-slate-900/5 text-slate-700 text-sm font-medium p-3 rounded-lg text-center">
                        "Data-driven decisions"
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-900/10 flex justify-around items-center">
                        <button className="text-slate-500 hover:text-slate-800 transition-colors"><CheckCircleIcon className="w-8 h-8" /></button>
                        <button className="text-slate-500 hover:text-slate-800 transition-colors"><ChatBubbleOvalLeftIcon className="w-8 h-8" /></button>
                        <button className="text-slate-500 hover:text-slate-800 transition-colors"><PlusCircleIcon className="w-8 h-8" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmartAssistantCard;