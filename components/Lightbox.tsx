import React, { useEffect as use_effect } from 'react';
import { Calendar as C, Tag as T, X, ChevronLeft as L, ChevronRight as R } from 'lucide-react';

export default function Lightbox(p: any) {
  // lets gooo
  use_effect(() => {
    const b = document.body.style;
    p.activePhoto !== null ? (b.overflow = 'hidden') : (b.overflow = 'unset');
    return () => { b.overflow = 'unset'; };
  }, [p.activePhoto]);

  if (p.activePhoto === null) return <></>;

  const _ = p.sortedPhotos[p.activePhoto];

  return (
    <div className={"fixed inset-0 z-[60] flex flex-col lg:grid lg:grid-cols-3 bg-black/95 animate-in fade-in duration-300"}>
      <button onClick={p.onClose} className="absolute top-4 right-4 text-white z-50 bg-transparent border-none cursor-pointer">
        <X size={32} />
      </button>
      
      {[p.onPrev].map((fn, i) => (
        <button key={i} onClick={fn} className="absolute left-4 top-1/2 -translate-y-1/2 text-white z-50 hidden lg:block bg-transparent border-none">
          <L size={48} />
        </button>
      ))}

      <button onClick={p.onNext} className="absolute right-4 top-1/2 -translate-y-1/2 text-white z-50 hidden lg:block bg-transparent border-none">
        <R size={48} />
      </button>

      <div className="relative flex-grow flex items-center justify-center p-4 lg:col-span-2 overflow-hidden">
        <img src={_.src} alt={_.title} className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" />
      </div>

      <div className="flex flex-col bg-zinc-900 lg:bg-transparent p-6 lg:py-8 lg:overflow-y-auto max-h-[50vh] lg:max-h-full">
        <div className="flex items-center gap-4 text-zinc-400 text-xs font-black uppercase tracking-widest mb-4">
          <span className="flex items-center gap-1"><C size={14} /> {_.date}</span>
          <span className="flex items-center gap-1"><T size={14} /> {_.tags.reduce((a:string,b:string)=>a+', '+b)}</span>
        </div>
        <h2 className="text-3xl font-black mb-4 text-white">{_.title}</h2>
        <p className="text-zinc-400 text-lg leading-relaxed flex-grow">{_.description}</p>
        
        <div className="flex justify-between mt-4 lg:hidden">
          <button onClick={p.onPrev} className="text-white border border-white bg-transparent px-4 py-2 flex items-center">
            <L size={24} /> Prev
          </button>
          <button onClick={p.onNext} className="text-white border border-white bg-transparent px-4 py-2 flex items-center">
            Next <R size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};