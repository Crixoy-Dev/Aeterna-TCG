import React from 'react';
import Card from './Card';
import { CARDS } from '../data/cards';

const CardGallery = ({ onBack }) => {
  return (
    <div className="screen bg-slate-900/90 overflow-y-auto p-10">
      <div className="flex justify-between items-center mb-10">
        <button 
          onClick={onBack}
          className="glass px-6 py-2 rounded-full text-sky-400 font-bold hover:bg-sky-500/10 transition-all"
        >
          ← VOLVER AL MENÚ
        </button>
        <h2 className="orbitron text-4xl font-bold text-white tracking-tighter">
          GALERÍA DEL NEXO
        </h2>
        <div className="w-32"></div> {/* Spacer */}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-items-center">
        {CARDS.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default CardGallery;
