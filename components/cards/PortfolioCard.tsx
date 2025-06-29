import React from 'react';
import { ListBulletIcon, WorldMapIcon } from '../icons';

interface PortfolioCardProps {
    title?: string;
    subtitle?: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
    title = "Por A'izou",
    subtitle = "Operations & Development"
}) => {
    return (
        <div
            className="relative transition-transform duration-500 ease-in-out group [transform-style:preserve-3d]"
        >
            <div className="oscillate-me relative bg-black/50 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl transition-all duration-500 ease-in-out group-hover:border-white/20 group-hover:bg-black/60">
                <div className="relative z-10">
                    <div className="flex items-start justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-white">{title}</h3>
                            <p className="text-sm text-slate-400">{subtitle}</p>
                        </div>
                        <div className="flex items-center space-x-2 text-slate-300">
                            <ListBulletIcon className="w-5 h-5" />
                            <span className="font-semibold text-sm">Gauge</span>
                        </div>
                    </div>
                </div>
                
                <div className="absolute top-0 right-0 w-[85%] h-[110%] opacity-80" style={{ transform: 'translateZ(-20px) translateX(20px) translateY(-10px)'}}>
                    <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-3xl"></div>
                    <WorldMapIcon 
                        className="w-full h-full text-white/80" 
                        style={{ filter: 'drop-shadow(0 0 0.75rem rgba(56, 189, 248, 0.6))' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;