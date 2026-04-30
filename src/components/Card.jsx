import React from 'react';

const Card = ({ card, scale = 1, onClick }) => {
  const { name, race, cost, atk, def, text, art, tier } = card;

  return (
    <div 
      onClick={onClick}
      className={`aeterna-card relative cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95`}
      style={{
        width: '180px',
        height: '260px',
        transform: `scale(${scale})`,
        backgroundImage: `url('/assets/cards/card-back.jpeg')`, // Fallback or template
        backgroundSize: 'cover',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        border: '2px solid rgba(255,255,255,0.1)'
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]">
        {/* Card Header: Tier/Cost */}
        <div className="absolute top-2 left-2 w-8 h-8 flex items-center justify-center bg-amber-500 rounded-full font-bold shadow-lg text-sm border border-white/20">
          {tier || cost}
        </div>

        {/* Card Name */}
        <div className="absolute top-3 left-10 right-2 text-[10px] font-black uppercase tracking-tighter text-white drop-shadow-md">
          {name}
        </div>

        {/* Card Art Area */}
        <div className="absolute top-10 left-3 right-3 h-28 bg-slate-800 rounded-lg overflow-hidden border border-white/5">
          {art ? (
            <img src={art} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-2xl opacity-20">🎴</div>
          )}
        </div>

        {/* Card Race */}
        <div className="absolute top-40 left-0 right-0 text-center text-[8px] font-bold text-amber-400 uppercase tracking-widest">
          {race}
        </div>

        {/* Card Text */}
        <div className="absolute bottom-12 left-3 right-3 h-14 flex items-center justify-center text-center text-[9px] leading-tight text-white/90 px-1">
          {text}
        </div>

        {/* Stats */}
        <div className="absolute bottom-2 left-3 w-8 h-8 flex items-center justify-center bg-blue-600 rounded-lg font-black text-lg border border-white/20">
          {atk}
        </div>
        <div className="absolute bottom-2 right-3 w-8 h-8 flex items-center justify-center bg-red-600 rounded-lg font-black text-lg border border-white/20">
          {def}
        </div>
      </div>
    </div>
  );
};

export default Card;
