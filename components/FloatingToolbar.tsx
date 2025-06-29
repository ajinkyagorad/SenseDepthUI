import React from 'react';
import { ListBulletIcon, SquareIcon } from './icons';

const FloatingToolbar: React.FC = () => {
    return (
        <div 
            className="relative w-full h-24 transition-transform duration-500 ease-in-out group [transform-style:preserve-3d]"
        >
            {/* Back Card */}
            <div className="oscillate-me absolute top-0 left-0 w-[65%] h-[80%] bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-3 flex items-center justify-center transition-all duration-500 ease-in-out group-hover:bg-black/50" style={{ transform: 'rotateZ(-10deg) '}}>
                <div className="text-center">
                    <ListBulletIcon className="w-7 h-7 mx-auto text-slate-300" />
                    <p className="text-xs font-semibold text-slate-300 mt-1">Summarize</p>
                </div>
            </div>
            {/* Front Card */}
            <div className="oscillate-me absolute bottom-0 right-0 w-[65%] h-[80%] bg-black/60 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-3 flex items-center justify-center transition-all duration-500 ease-in-out group-hover:bg-black/70" style={{ transform: 'rotateZ(10deg)'}}>
                 <div className="text-center">
                    <SquareIcon className="w-7 h-7 mx-auto text-white" />
                    <p className="text-xs font-semibold text-white mt-1">Create</p>
                </div>
            </div>
        </div>
    );
};

export default FloatingToolbar;