
import React, { useState } from 'react';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Básico",
      monthly: 899,
      annual: 719,
      description: "Ideal para emprendedores que inician su viaje digital con IA.",
      features: [
        "1 Sitio Web optimizado",
        "Integración básica de Chatbot",
        "Certificado SSL Gratuito",
        "Soporte vía Email",
        "10GB de Almacenamiento"
      ],
      cta: "Comenzar Gratis",
      popular: false
    },
    {
      name: "Intermedio",
      monthly: 2450,
      annual: 1960,
      description: "Nuestra solución más equilibrada para negocios en crecimiento.",
      features: [
        "Hasta 3 Sitios Web",
        "IA Avanzada de Atención",
        "SEO Automatizado",
        "Soporte 24/7 Prioritario",
        "Analítica Predictiva",
        "Dominio .mx Incluido"
      ],
      cta: "Elegir Plan Pro",
      popular: true
    },
    {
      name: "Web Pro Plus",
      monthly: 5900,
      annual: 4720,
      description: "Máximo rendimiento y personalización total para empresas.",
      features: [
        "Sitios Ilimitados",
        "Entrenamiento de IA propia",
        "Seguridad de Grado Bancario",
        "Consultoría Mensual",
        "API Personalizada",
        "Servidor Dedicado MX"
      ],
      cta: "Contactar a un Experto",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 relative bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white animate-on-scroll">
            Inversión Inteligente
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto animate-on-scroll">
            Planes diseñados para escalar. Sin letras chiquitas, solo resultados.
          </p>
          
          <div className="flex items-center justify-center gap-6 pt-6 animate-on-scroll">
            <span className={`text-xs font-bold uppercase tracking-widest transition-colors ${!isAnnual ? 'text-white' : 'text-white/30'}`}>Mensual</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-7 w-14 items-center rounded-full bg-white/10 p-1 transition-all ring-1 ring-white/10"
            >
              <div className={`h-5 w-5 rounded-full bg-white shadow-xl transition-transform duration-500 ${isAnnual ? 'translate-x-7' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-xs font-bold uppercase tracking-widest transition-colors ${isAnnual ? 'text-white' : 'text-white/30'}`}>
              Anual <span className="ml-2 text-[10px] text-green-400">-20% Ahorro</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`animate-on-scroll group relative glass-card rounded-[40px] p-10 flex flex-col transition-all duration-500 hover:bg-white/10 ${plan.popular ? 'bg-white/5 ring-1 ring-white/20' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-[0.2em]">
                  Recomendado
                </div>
              )}

              <div className="mb-10">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-xs text-white/40 leading-relaxed min-h-[40px]">{plan.description}</p>
              </div>

              <div className="mb-10 flex items-baseline gap-1">
                <span className="text-xs font-bold text-white/40">MXN</span>
                <span className="text-5xl font-black text-white tracking-tighter">
                  ${isAnnual ? plan.annual.toLocaleString() : plan.monthly.toLocaleString()}
                </span>
                <span className="text-sm text-white/30 font-medium">/mes</span>
              </div>

              <div className="space-y-5 mb-12 flex-1">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-white/60 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-5 rounded-2xl text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 ${plan.popular ? 'bg-white text-black hover:scale-[1.02]' : 'bg-transparent text-white border border-white/20 hover:bg-white/5'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center animate-on-scroll">
          <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold">
            Precios sujetos a IVA. Facturación disponible en México.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
