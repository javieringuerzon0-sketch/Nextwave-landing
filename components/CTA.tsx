
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-32 md:py-48 flex items-center justify-center relative">
      <a href="#contact" 
         className="relative group inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-semibold text-white tracking-tight bg-white/5 ring-1 ring-white/30 rounded-full transition-all duration-500 hover:ring-white/60 hover:shadow-[0_0_80px_rgba(255,255,255,0.15)] overflow-hidden">
        
        <span className="relative z-10 flex items-center gap-3">
          Comienza Ahora
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>

        {/* Outer Glow Effect */}
        <div className="absolute inset-0 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" 
             style={{ 
               boxShadow: '0 0 40px 10px rgba(255,255,255,0.1)',
               background: 'radial-gradient(140% 160% at 50% -20%, rgba(255,255,255,0.15) 0%, transparent 60%)' 
             }}></div>
        
        {/* Inner highlights */}
        <div className="absolute inset-[1px] rounded-full pointer-events-none"
             style={{
               background: 'radial-gradient(120% 80% at 50% -20%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(90% 80% at 50% 120%, rgba(255,255,255,0.05) 0%, transparent 50%)'
             }}></div>
      </a>
    </section>
  );
};

export default CTA;
