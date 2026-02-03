import { useState, useEffect } from 'react';
import { ArrowRight, Globe, Smartphone, TrendingUp } from 'lucide-react';

const PlanesPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Progress bar tracking
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const webPlans = [
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
      stripeUrl: 'https://buy.stripe.com/test_dRm6oH5pb6rc7F9fOM83C08',
    },
  ];

  const additionalServices = [
    {
      id: '10',
      name: 'APLICACIÓN WEB',
      icon: Globe,
      description: 'Ideal para: Plataformas y SaaS',
      features: [
        'Arquitectura escalable',
        'Autenticación de usuarios',
        'Panel de administración',
        'Base de datos personalizada',
        'APIs RESTful',
      ],
      accentColor: 'rgba(168,85,247,0.1)',
    },
    {
      id: '11',
      name: 'APP MÓVIL',
      icon: Smartphone,
      description: 'Ideal para: Negocios móviles',
      features: [
        'Desarrollo iOS & Android',
        'UI/UX nativa',
        'Notificaciones push',
        'Integración con APIs',
        'Optimización de rendimiento',
      ],
      accentColor: 'rgba(34,197,94,0.1)',
    },
    {
      id: '12',
      name: 'MARKETING DIGITAL',
      icon: TrendingUp,
      description: 'Ideal para: Crecimiento digital',
      features: [
        'Estrategia SEO avanzada',
        'Campañas SEM (Google Ads)',
        'Gestión de redes sociales',
        'Email marketing',
        'Análisis de conversión',
      ],
      accentColor: 'rgba(239,68,68,0.1)',
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-manrope overflow-x-hidden">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-0.5 bg-white/5 z-50">
        <div
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-lime-400/30 bg-lime-500/10 backdrop-blur-sm mb-6 animate-badge-glow shadow-lg shadow-lime-500/20">
            <div className="w-2 h-2 rounded-full bg-lime-400 animate-pulse shadow-lg shadow-lime-400/50" />
            <span className="text-xs text-lime-300 font-semibold">Planes Profesionales</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 max-w-3xl">
            Soluciones Digitales{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              A Tu Medida
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg text-white/60 mb-10 max-w-2xl">
            Desde sitios web profesionales hasta aplicaciones móviles y estrategias de marketing
            digital
          </p>
        </div>
      </section>

      {/* Sección 1: Desarrollo Web */}
      <section className="relative py-16 px-6 border-t border-white/5">
        {/* Sutiles resplandores de fondo */}
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Desarrollo Web
            </h2>
            <p className="text-sm text-white/40 max-w-xl mx-auto">
              Sitios web modernos y responsivos que convierten visitantes en clientes
            </p>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webPlans.map(plan => (
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
        </div>
      </section>

      {/* Sección 2: Otros Servicios Digitales */}
      <section className="relative py-16 px-6 border-t border-white/5">
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Otros Servicios Digitales
            </h2>
            <p className="text-sm text-white/40 max-w-xl mx-auto">
              Soluciones integrales para llevar tu negocio al siguiente nivel
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map(service => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative flex flex-col h-full overflow-hidden rounded-[28px] border border-white/5 bg-white/[0.02] p-7 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:border-white/10"
                >
                  {/* Efecto de luz interna en hover */}
                  <div
                    className="absolute -right-10 -top-10 w-40 h-40 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ backgroundColor: service.accentColor }}
                  />

                  <div className="relative flex justify-between items-start mb-8">
                    <div className="space-y-3">
                      <div className="flex items-center justify-center w-7 h-7 rounded-full border border-white/20 text-white/60 bg-white/5 text-[10px] font-bold">
                        {service.id}
                      </div>
                      <h3 className="text-lg font-bold tracking-wide text-white">{service.name}</h3>
                    </div>

                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white/60" />
                    </div>
                  </div>

                  <ul className="flex-1 space-y-3.5 mb-10">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 h-3.5 w-3.5 flex items-center justify-center shrink-0 text-cyan-400">
                          <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
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
                      href="/#project-inquiry"
                      className="block w-full py-4 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 text-center bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20"
                    >
                      Mayor información
                    </a>
                    <div className="text-[10px] text-center font-bold tracking-widest uppercase text-white/20">
                      {service.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sección 3: CTA Banner */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Glass Container */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 backdrop-blur-xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-12 md:p-16">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                ¿Buscas más opciones?
              </h2>
              <p className="text-base md:text-lg text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
                Explora nuestra lista completa de planes y servicios personalizados para encontrar
                la solución perfecta.
              </p>

              <div className="flex justify-center">
                <a
                  href="https://nextwave-ia-info.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-cta-primary group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-black rounded-full font-semibold text-sm transition-all duration-500"
                >
                  <span>Ver Todos los Planes</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Badge Animation */
        @keyframes badge-glow {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 20px rgba(132, 204, 22, 0.2);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 30px rgba(132, 204, 22, 0.4);
          }
        }
        .animate-badge-glow {
          animation: badge-glow 3s ease-in-out infinite;
        }

        /* Apple-Style CTA Primary */
        .apple-cta-primary {
          box-shadow:
            0 1px 2px 0 rgba(0, 0, 0, 0.05),
            0 8px 16px -4px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(8px);
        }
        .apple-cta-primary:hover {
          transform: translateY(-2px);
          box-shadow:
            0 4px 8px 0 rgba(0, 0, 0, 0.08),
            0 12px 24px -8px rgba(0, 0, 0, 0.15);
          background: rgba(255, 255, 255, 0.95);
        }
        .apple-cta-primary:active {
          transform: translateY(0);
          box-shadow:
            0 1px 2px 0 rgba(0, 0, 0, 0.05),
            0 4px 8px -2px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default PlanesPage;
