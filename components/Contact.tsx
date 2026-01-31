
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 relative bg-black overflow-hidden">
      {/* Decorative Image Background with Mask */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 contact-mask"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')` }}
      />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-white/10 text-xs text-white mb-6 animate-on-scroll">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Trabajemos Juntos
          </span>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6 animate-on-scroll">
            ¿Listo para <span className="italic font-light text-white/70">colaborar?</span>
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto animate-on-scroll">
            Ya sea que necesites ayuda con diseño de producto, estrategia o formación, estamos aquí para dar vida a tu visión.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3 animate-on-scroll">
            <div className="glass-card rounded-3xl p-8 md:p-10 border-white/5 shadow-2xl">
              <h3 className="text-xl font-semibold text-white mb-8">Envíanos un mensaje</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-white/50 uppercase tracking-widest mb-3">Nombre</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all" placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/50 uppercase tracking-widest mb-3">Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all" placeholder="tu@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/50 uppercase tracking-widest mb-3">Presupuesto Estimado (MXN)</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-1 focus:ring-white/30 transition-all appearance-none cursor-pointer">
                    <option className="bg-neutral-900">$50,000 - $100,000 MXN</option>
                    <option className="bg-neutral-900">$100,000 - $250,000 MXN</option>
                    <option className="bg-neutral-900">$250,000 - $500,000 MXN</option>
                    <option className="bg-neutral-900">$500,000+ MXN</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/50 uppercase tracking-widest mb-3">Mensaje</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
                </div>
                <button className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-zinc-200 transition-all flex items-center justify-center gap-3">
                  Enviar Mensaje
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            <div className="animate-on-scroll glass-card rounded-3xl p-8 border-white/5">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center ring-1 ring-white/10">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Email</h4>
                  <p className="text-sm text-white/40">hola@nebula.mx</p>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll glass-card rounded-3xl p-8 border-white/5">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center ring-1 ring-white/10">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Agendar Llamada</h4>
                  <p className="text-sm text-white/40">Reserva una consulta gratuita</p>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll glass-card rounded-3xl p-8 border-white/5">
              <h4 className="text-sm font-semibold text-white mb-6 tracking-tight">Síguenos</h4>
              <div className="flex gap-4">
                {['twitter', 'instagram', 'linkedin', 'github'].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all ring-1 ring-white/10 capitalize">
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
