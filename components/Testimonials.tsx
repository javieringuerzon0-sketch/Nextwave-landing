
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 relative isolate">
      <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(255,255,255,0.03),transparent_60%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="animate-on-scroll max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl font-light text-white/30">04</span>
            <div className="w-px h-8 bg-white/10"></div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/60">Testimonios</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
            Despliegue en tres simples pasos
          </h2>
          <p className="text-lg text-white/50 leading-relaxed">
            Del código a producción en segundos. Nuestro flujo de trabajo optimizado hace que el despliegue sea sin esfuerzo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-stretch mb-6">
          <div className="animate-on-scroll overflow-hidden h-[400px] glass-card rounded-3xl border-white/5">
            <img 
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              alt="Cliente" 
            />
          </div>

          <div className="animate-on-scroll glass-card rounded-3xl p-10 md:p-14 flex flex-col justify-center">
            <svg className="w-10 h-10 text-white/30 mb-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
            <p className="text-3xl md:text-4xl font-medium tracking-tight text-white leading-snug mb-10">
              "Ahorramos en hosting y aumentamos conversiones solo por usar Nebula."
            </p>
            <div>
              <div className="text-xl font-semibold text-white">Tom Sullivan</div>
              <div className="text-sm text-white/40">Director de Agencia</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {[
            {
              text: "Cambiar a Nebula fue un punto de inflexión. Nuestro tiempo de despliegue bajó de horas a segundos.",
              name: "Michael Chen",
              role: "CTO @ TechFlow",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
            },
            {
              text: "El escalado automático y el SSL sin configuración nos ahorraron incontables horas de trabajo manual.",
              name: "Emily Roberts",
              role: "Ingeniera Principal @ DataSync",
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
            },
            {
              text: "Migramos más de 50 proyectos de clientes a Nebula. Las mejoras de rendimiento fueron inmediatas.",
              name: "David Park",
              role: "Director Creativo @ Studio X",
              image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
            }
          ].map((item, idx) => (
            <div key={idx} className="animate-on-scroll glass-card rounded-3xl p-8 overflow-hidden h-fit">
              <div className={`animate-slide-up`} style={{ animationDelay: `${idx * 0.5}s` }}>
                <p className="text-white/70 text-base leading-relaxed mb-8">"{item.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={item.image} className="w-10 h-10 rounded-full grayscale" alt={item.name} />
                  <div>
                    <div className="text-sm font-semibold text-white">{item.name}</div>
                    <div className="text-[10px] text-white/40 tracking-wider uppercase">{item.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
