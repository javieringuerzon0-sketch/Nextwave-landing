import React from 'react';
import { MessageSquare, Mail, ArrowRight, Clock3, Route, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 md:py-20 relative overflow-hidden bg-transparent z-20 font-manrope">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden ring-1 ring-white/10 bg-neutral-900 rounded-[40px] animate-on-scroll">
          {/* Background Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <img
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/60668e31-2150-424e-b292-05bfdda254e0_1600w.jpg"
              alt="Abstract background"
              className="h-full w-full object-cover opacity-30 brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/95 via-black/60 to-transparent"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 p-6 sm:p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

              {/* Left Side: Form Card */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="rounded-[32px] bg-white/95 backdrop-blur-xl ring-1 ring-black/5 shadow-2xl p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1">Contacto Directo</p>
                      <h3 className="text-3xl font-bold tracking-tight text-neutral-900">¿Tienes dudas?</h3>
                    </div>
                    <div className="h-10 w-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center shadow-lg">
                      <MessageSquare size={18} />
                    </div>
                  </div>

                  <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-2 ml-1">Tu Nombre *</label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Ej. Juan Pérez"
                        className="w-full px-5 py-3.5 text-sm rounded-2xl ring-1 ring-black/5 border-none bg-neutral-50 text-neutral-900 placeholder:text-neutral-300 focus:ring-2 focus:ring-neutral-900 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-2 ml-1">Email Corporativo *</label>
                      <div className="relative">
                        <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-300" size={16} />
                        <input
                          id="email"
                          type="email"
                          required
                          placeholder="tu@empresa.com"
                          className="w-full pl-12 pr-5 py-3.5 text-sm rounded-2xl ring-1 ring-black/5 border-none bg-neutral-50 text-neutral-900 placeholder:text-neutral-300 focus:ring-2 focus:ring-neutral-900 outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-2 ml-1">Mensaje</label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Háblanos de tu proyecto o desafío..."
                        className="w-full px-5 py-3.5 text-sm rounded-2xl ring-1 ring-black/5 border-none bg-neutral-50 text-neutral-900 placeholder:text-neutral-300 focus:ring-2 focus:ring-neutral-900 outline-none transition-all resize-none"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="group w-full flex items-center justify-center gap-2 rounded-2xl bg-neutral-900 text-white px-6 py-4 text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all shadow-xl active:scale-[0.98]"
                    >
                      Enviar Mensaje
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-[9px] text-center text-neutral-400 mt-4 leading-relaxed tracking-tight">
                      Al enviar, aceptas nuestros <span className="underline cursor-pointer">Términos</span> y <span className="underline cursor-pointer">Política de Privacidad</span>.
                    </p>
                  </form>
                </div>
              </div>

              {/* Right Side: Copy + Highlights */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-10">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white leading-tight">
                    Hablemos de tu <br />
                    vanguardia digital.
                  </h2>
                  <p className="text-base md:text-lg text-neutral-300 max-w-xl leading-relaxed">
                    Cuéntanos sobre tu visión: soporte, automatizaciones con IA o alianzas estratégicas. Respondemos en menos de un día hábil.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4 group">
                    <div className="h-12 w-12 rounded-2xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/10 transition-colors">
                      <Clock3 size={20} />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm mb-1">Respuesta Ágil</p>
                      <p className="text-neutral-400 text-xs leading-relaxed">La mayoría de nuestros mensajes se responden en menos de 24 horas.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="h-12 w-12 rounded-2xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/10 transition-colors">
                      <Route size={20} />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm mb-1">Ruta de Éxito</p>
                      <p className="text-neutral-400 text-xs leading-relaxed">Te daremos un plan conciso y un cronograma detallado para tu implementación.</p>
                    </div>
                  </div>
                </div>

                {/* Direct Contact Person Card */}
                <div className="pt-6">
                  <div className="inline-flex items-center gap-4 rounded-[28px] bg-white/95 backdrop-blur-xl ring-1 ring-black/5 shadow-2xl p-3 pr-6 group">
                    <div className="relative">
                      <img
                        src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a44deb57-f322-4fc8-9184-d05e21080cb2_3840w.jpg"
                        alt="Javier Inguerzon"
                        className="h-14 w-14 rounded-2xl object-cover transition-all duration-500 saturate-0 group-hover:saturate-100 group-hover:scale-105"
                      />
                      <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-blue-500 border-2 border-white"></div>
                    </div>
                    <div className="min-w-0 pr-4">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-0.5">Fundador & Líder</p>
                      <p className="text-neutral-900 font-bold tracking-tight truncate">Javier Inguerzon</p>
                    </div>
                    <a
                      href="mailto:hola@nextwave.ia"
                      className="flex items-center gap-2 rounded-2xl bg-neutral-900 text-white px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all active:scale-95 shadow-lg"
                    >
                      Consultar
                      <MessageCircle size={14} />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
