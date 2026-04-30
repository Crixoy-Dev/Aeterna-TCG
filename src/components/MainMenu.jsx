import React from 'react';

const MainMenu = ({ onNavigate }) => {
  return (
    <div className="screen items-center justify-center p-8 bg-black/60 backdrop-blur-sm">
      <h1 className="orbitron text-8xl font-black text-sky-400 mb-2 tracking-tighter drop-shadow-[0_0_30px_rgba(14,165,233,0.6)]">
        AETERNA
      </h1>
      <p className="text-white/20 tracking-[1em] mb-20 uppercase text-sm font-light">
        Nexo de todas las Frecuencias
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
        {/* Play Button */}
        <div 
          onClick={() => onNavigate('battlegrounds')}
          className="glass p-10 rounded-[40px] border-emerald-500/30 hover:border-emerald-500 hover:bg-emerald-500/5 transition-all cursor-pointer group"
        >
          <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-500">🛡️</div>
          <h2 className="orbitron text-3xl font-bold mb-3 tracking-tight text-emerald-400">JUGAR</h2>
          <p className="text-white/40 text-sm mb-10 leading-relaxed">
            Entra en los Campos de Guerra. Recluta, fusiona y sintoniza tu ejército.
          </p>
          <div className="flex gap-4">
            <button className="flex-1 py-4 bg-emerald-600 rounded-2xl font-bold uppercase tracking-widest text-xs shadow-xl hover:bg-emerald-500 transition-colors">
              CAMPOS DE GUERRA
            </button>
          </div>
        </div>

        {/* Gallery Button */}
        <div 
          onClick={() => onNavigate('gallery')}
          className="glass p-10 rounded-[40px] border-sky-500/30 hover:border-sky-500 hover:bg-sky-500/5 transition-all cursor-pointer group"
        >
          <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-500">🎴</div>
          <h2 className="orbitron text-3xl font-bold mb-3 tracking-tight text-sky-400">GALERÍA</h2>
          <p className="text-white/40 text-sm mb-10 leading-relaxed">
            Explora el Nexo. Consulta los atributos y efectos de todas las unidades.
          </p>
          <div className="flex gap-4">
            <button className="flex-1 py-4 bg-sky-600 rounded-2xl font-bold uppercase tracking-widest text-xs shadow-xl hover:bg-sky-500 transition-colors">
              VER CARTAS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
