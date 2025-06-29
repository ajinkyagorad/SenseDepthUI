import React from 'react';

interface ServicePersonalCardProps {
    name?: string;
    title?: string;
    avatarUrl?: string;
}

const ServicePersonalCard: React.FC<ServicePersonalCardProps> = ({
    name = 'Noer Nook',
    title = 'UX/UI Designer',
    avatarUrl = 'https://i.pravatar.cc/150?u=noernook'
}) => {
    return (
        <div
          className="relative transition-transform duration-500 ease-in-out group [transform-style:preserve-3d]"
        >
            <div className="oscillate-me relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-5 transition-all duration-500 ease-in-out group-hover:border-white/20 group-hover:bg-black/50">
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <div className="absolute -bottom-1/2 -left-1/4 w-full h-full bg-gradient-to-r from-cyan-500/10 via-blue-500/0 to-blue-500/0 rounded-full blur-3xl opacity-80"></div>
                </div>
                <div className="relative flex items-center space-x-4">
                    <img className="w-16 h-16 rounded-full border-2 border-slate-600/50" src={avatarUrl} alt={name} />
                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-white">{name}</h3>
                        <p className="text-sm text-slate-400">{title}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicePersonalCard;