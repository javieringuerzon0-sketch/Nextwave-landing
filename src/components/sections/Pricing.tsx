import React from 'react';

const Pricing: React.FC = () => {
  const plans = [
    {
      id: '1',
      name: 'ECONÓMICO',
      price: '5,550',
      time: '5-7 días',
      description: 'Ideal para: Emprendedores y startups',
      features: [
        'Hasta 2 secciones de información',
        'Diseño Web 100% responsivo',
        'Certificado SSL incluido',
        'Hosting por 1 año',
        'Dominio .com por 1 año',
      ],
      featured: false,
      accentColor: 'rgba(92,225,230,0.1)',
      stripeUrl: 'https://buy.stripe.com/test_4gM3cv04R7vg4sXdGE83C06',
    },
    {
      id: '3',
      name: 'NEGOCIOS',
      price: '8,800',
      time: '7-10 días',
      description: 'Ideal para: Negocios establecidos',
      features: [
        'Hasta 6 secciones profesionales',
        'Diseño responsive avanzado',
        'Compatibilidad total móviles',
        'Certificado SSL Premium',
        'Hosting + Dominio 1 año',
        'Imagen profesional de marca',
      ],
      featured: false,
      accentColor: 'rgba(129,140,248,0.1)',
      stripeUrl: 'https://buy.stripe.com/test_eVqeVd2cZ3f08Jd5a883C07',
    },
    {
      id: '8',
      name: 'WEB PRO PLUS',
      price: '17,799',
      time: '+20 días',
      isPremium: true,
      description: 'Ideal para: Empresas enfocadas en ventas',
      features: [
        'Todo de WEB PRO incluido',
        'Landing Page adicional',
        'Estructura 100% enfocada a ventas',
        'Sistema de captación de leads',
        'Auditoría completa de ventas',
        'Estrategia de conversión',
        'Soporte premium 6 meses',
      ],
      featured: true,
      accentColor: 'rgba(251,191,36,0.15)',
      stripeUrl: 'https://buy.stripe.com/test_5kQ28rbNzeXI8Jd32083C09',
    },
  ];

  return (
    <section id="pricing" className="relative py-24 bg-transparent overflow-hidden font-manrope">
      {/* Sutiles resplandores de fondo */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold tracking-[0.2em] text-cyan-400 uppercase">
            <span className="w-1 h-1 rounded-full bg-cyan-400" />
            Inversión Inteligente
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white font-manrope">
            Planes de Desarrollo
          </h2>
          <p className="text-sm text-white/40 max-w-xl mx-auto tracking-wide leading-relaxed">
            Soluciones web de alto impacto diseñadas para escalar tu negocio digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map(plan => (
            <div
              key={plan.id}
              className={`group relative flex flex-col h-full overflow-hidden rounded-[28px] border p-7 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 ${
                plan.featured
                  ? 'border-amber-500/30 bg-white/[0.04] shadow-[0_20px_40px_-15px_rgba(251,191,36,0.1)]'
                  : 'border-white/5 bg-white/[0.02] hover:border-white/10'
              }`}
            >
              {/* Efecto de luz interna en hover */}
              <div
                className="absolute -right-10 -top-10 w-40 h-40 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ backgroundColor: plan.accentColor }}
              />

              <div className="relative flex justify-between items-start mb-8">
                <div className="space-y-3">
                  <div
                    className={`flex items-center justify-center w-7 h-7 rounded-full border text-[10px] font-bold ${
                      plan.featured
                        ? 'border-amber-500/50 text-amber-400 bg-amber-500/10'
                        : 'border-white/20 text-white/60 bg-white/5'
                    }`}
                  >
                    {plan.id}
                  </div>
                  <h3
                    className={`text-lg font-bold tracking-wide ${plan.featured ? 'text-amber-400' : 'text-white'}`}
                  >
                    {plan.name}
                    {plan.isPremium && <span className="ml-1 text-xs">⭐⭐</span>}
                  </h3>
                </div>

                <div className="text-right">
                  <div className="text-3xl font-bold text-white tracking-tighter">
                    ${plan.price}
                  </div>
                  <div className="text-[9px] font-bold text-white/30 tracking-widest mt-0.5">
                    MXN
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                <span
                  className={`px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider border ${
                    plan.featured
                      ? 'border-amber-500/20 text-amber-500 bg-amber-500/5'
                      : 'border-white/10 text-white/40 bg-white/5'
                  }`}
                >
                  • {plan.time}
                </span>
                {plan.isPremium && (
                  <span className="px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-500 border border-amber-500/20">
                    PREMIUM
                  </span>
                )}
              </div>

              <ul className="flex-1 space-y-3.5 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className={`mt-1 h-3.5 w-3.5 flex items-center justify-center shrink-0 ${
                        plan.featured ? 'text-amber-400' : 'text-cyan-400'
                      }`}
                    >
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-white/60 font-medium leading-tight">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="space-y-5">
                <a
                  href={plan.stripeUrl}
                  className={`block w-full py-4 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 text-center ${
                    plan.featured
                      ? 'bg-amber-400 text-black hover:bg-amber-300 shadow-lg shadow-amber-500/20'
                      : 'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  Comenzar ahora
                </a>
                <div
                  className={`text-[10px] text-center font-bold tracking-widest uppercase ${
                    plan.featured ? 'text-amber-500/40' : 'text-white/20'
                  }`}
                >
                  {plan.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-[10px] text-white/10 uppercase tracking-[0.4em] font-black transition-all duration-500 hover:text-white/80 hover:tracking-[0.6em] cursor-default">
            NextWave IA • No hay cuotas ocultas • Facturación disponible
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
