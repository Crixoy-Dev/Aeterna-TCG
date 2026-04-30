import React, { useState, useEffect } from 'react';
import Card from './Card';
import { CARDS } from '../data/cards';

const Battlegrounds = ({ onBack }) => {
  const [gold, setGold] = useState(3);
  const [tavernTier, setTavernTier] = useState(1);
  const [tavernCards, setTavernCards] = useState([]);
  const [boardCards, setBoardCards] = useState([]);
  const [isFrozen, setIsFrozen] = useState(false);

  // Refresh Tavern
  const refreshTavern = () => {
    const pool = CARDS.filter(c => c.tier <= tavernTier);
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    setTavernCards(shuffled.slice(0, 3 + Math.floor(tavernTier / 2)));
  };

  useEffect(() => {
    refreshTavern();
  }, []);

  const buyCard = (card) => {
    if (gold >= 3 && boardCards.length < 7) {
      setGold(prev => prev - 3);
      setBoardCards(prev => [...prev, { ...card, boardId: Date.now() }]);
      setTavernCards(prev => prev.filter(c => c.id !== card.id));
    }
  };

  const sellCard = (boardId) => {
    setGold(prev => Math.min(10, prev + 1));
    setBoardCards(prev => prev.filter(c => c.boardId !== boardId));
  };

  const upgradeTavern = () => {
    const cost = tavernTier === 1 ? 5 : tavernTier === 2 ? 7 : 9;
    if (gold >= cost && tavernTier < 6) {
      setGold(prev => prev - cost);
      setTavernTier(prev => prev + 1);
    }
  };

  return (
    <div className="screen bg-[url('/assets/campo/arena-bg.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Header UI */}
      <div className="relative z-10 p-6 flex justify-between items-center bg-black/60 border-b border-white/10">
        <button onClick={onBack} className="glass px-4 py-2 rounded-lg text-white/50 hover:text-white">🏠</button>
        <div className="flex gap-8 items-center">
          <div className="orbitron text-2xl text-amber-400 font-bold drop-shadow-lg">💰 {gold}</div>
          <div className="orbitron text-2xl text-sky-400 font-bold drop-shadow-lg">⭐ NIVEL {tavernTier}</div>
        </div>
        <button 
          onClick={upgradeTavern}
          className="glass px-6 py-2 rounded-xl text-xs font-bold text-sky-300 border-sky-500/30 hover:bg-sky-500/20"
        >
          MEJORAR TABERNA
        </button>
      </div>

      {/* Tavern Area */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-4">
        <h3 className="orbitron text-xl text-white/40 mb-6 uppercase tracking-widest">Taberna del Nexo</h3>
        <div className="flex gap-6 items-center justify-center">
          {tavernCards.map((card, i) => (
            <Card key={i} card={card} scale={0.8} onClick={() => buyCard(card)} />
          ))}
        </div>
      </div>

      {/* Player Board */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-start p-4">
        <h3 className="orbitron text-xl text-white/40 mb-6 uppercase tracking-widest">Tu Ejército</h3>
        <div className="flex gap-4 items-center justify-center min-h-[200px] w-full max-w-6xl glass rounded-[40px] p-6 border-white/5">
          {boardCards.map((card) => (
            <div key={card.boardId} className="relative group">
              <Card card={card} scale={0.7} />
              <button 
                onClick={() => sellCard(card.boardId)}
                className="absolute -top-2 -right-2 bg-red-600 w-8 h-8 rounded-full hidden group-hover:flex items-center justify-center font-bold shadow-xl"
              >
                $
              </button>
            </div>
          ))}
          {boardCards.length === 0 && (
            <p className="text-white/10 orbitron uppercase tracking-widest text-sm">Arrastra o compra unidades para comenzar</p>
          )}
        </div>
      </div>

      {/* Footer Controls */}
      <div className="relative z-10 h-24 glass rounded-t-[40px] flex justify-between items-center px-12 border-t border-white/10">
        <div className="flex gap-4">
          <button 
            onClick={() => { if(gold >= 1) { setGold(g => g-1); refreshTavern(); } }}
            className="bg-slate-700 px-8 py-3 rounded-2xl font-bold text-xs hover:bg-slate-600 transition-all shadow-xl"
          >
            REFRESCAR (1💰)
          </button>
          <button 
            onClick={() => setIsFrozen(!isFrozen)}
            className={`${isFrozen ? 'bg-sky-600' : 'bg-slate-800'} px-8 py-3 rounded-2xl font-bold text-xs transition-all shadow-xl`}
          >
            {isFrozen ? 'CONGELADO' : 'CONGELAR'}
          </button>
        </div>
        <button className="bg-emerald-600 px-12 py-4 rounded-2xl font-black orbitron text-sm tracking-widest shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:bg-emerald-500 hover:scale-105 transition-all">
          ¡A BATALLAR!
        </button>
      </div>
    </div>
  );
};

export default Battlegrounds;
