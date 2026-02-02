import React from 'react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'LuxeHub',
      category: 'E-commerce Platform',
      description: 'Tienda online de lujo con carrito inteligente y checkout optimizado',
      color: 'from-violet-500/40 via-purple-500/40 to-fuchsia-500/40',
      size: 'col-span-1 md:col-span-2 row-span-1 md:row-span-2',
      image:
        'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dc799a20-da2f-49ee-98ee-cf54fdb35126_3840w.jpg',
      features: ['Carrito de compras', 'Pasarela de pago', 'Gestión de inventario'],
    },
    {
      id: 2,
      title: 'DriveSync',
      category: 'Automotive Platform',
      description: 'Plataforma digital para concesionarios con inventario inteligente',
      color: 'from-slate-500/40 via-gray-500/40 to-zinc-500/40',
      size: 'col-span-1 row-span-1',
      image:
        'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/73cec214-1f3d-4c96-a480-b22ce84b98e8_3840w.jpg',
    },
    {
      id: 3,
      title: 'AromaLux',
      category: 'Tienda Online',
      description: 'Venta de perfumes de lujo con catálogo de marcas exclusivas',
      color: 'from-rose-500/40 via-pink-500/40 to-purple-500/40',
      size: 'col-span-1 row-span-1',
      image:
        'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f037a5c1-c949-4343-8431-bea96e16a9ed_3840w.webp',
    },
    {
      id: 4,
      title: 'AdsPro',
      category: 'Publicidad Digital',
      description: 'Creamos anuncios publicitarios para tus redes sociales y web',
      color: 'from-orange-500/40 via-red-500/40 to-pink-500/40',
      size: 'col-span-1 row-span-1 md:row-span-2',
      image:
        'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2fc6b2a5-39fc-4917-b025-be93fdf03f5a_3840w.webp',
    },
    {
      id: 5,
      title: 'DashBoard Pro',
      category: 'Panel de Control',
      description: 'Creamos tu panel de control personalizado para gestionar tu negocio',
      color: 'from-cyan-500/40 via-blue-500/40 to-indigo-500/40',
      size: 'col-span-1 md:col-span-2 row-span-1',
      image:
        'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/769698c4-33dc-42f0-a44e-8873b54ee68d_3840w.webp',
    },
    {
      id: 6,
      title: 'AppBuilder Pro',
      category: 'Desarrollo de Apps',
      description: 'Creamos aplicaciones móviles personalizadas para tu negocio',
      color: 'from-indigo-500/40 via-violet-500/40 to-purple-500/40',
      size: 'col-span-1 md:col-span-2 row-span-1',
      image:
        'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0bf9f8f8-206e-43d2-ab1c-9c978e5dcb8c_3840w.webp',
    },
  ];

  return (
    <section id="portfolio" className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs tracking-widest uppercase font-bold text-white/70">
              Proyectos Destacados
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-tight">
            Creando el{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
              Futuro Digital
            </span>
          </h2>

          <p className="text-lg text-white/60 max-w-2xl">
            Cada proyecto es una oportunidad para redefinir estándares y crear experiencias que
            trascienden.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[280px]">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative ${project.size} rounded-3xl bg-gradient-to-br ${project.color} backdrop-blur-xl border border-white/10 overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:border-white/20 hover:shadow-2xl hover:shadow-white/10`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Image (only for LuxeHub) */}
              {project.image && (
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700"
                  />
                </div>
              )}

              {/* Gradient Overlay - Lighter for more vibrant colors */}
              {project.id !== 6 && (
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-transparent" />
              )}

              {/* Content */}
              <div className="relative h-full p-8 flex flex-col justify-between">
                {/* Top Badge */}
                <div className="flex items-start justify-between">
                  <span className="relative text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/70 backdrop-blur-sm cursor-pointer overflow-hidden group/cat hover:scale-110 hover:border-white/40 hover:bg-white/20 hover:text-white transition-all duration-300">
                    <span className="relative z-10 group-hover/cat:animate-pulse">
                      {project.category}
                    </span>
                    {/* Shine effect on category badge */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/cat:translate-x-full transition-transform duration-700"></span>
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-45">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>

                {/* Bottom Info */}
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">{project.description}</p>

                  {/* Features (only for LuxeHub) */}
                  {project.features && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="relative text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 backdrop-blur-sm cursor-pointer overflow-hidden group/badge hover:scale-110 hover:border-white/40 hover:bg-white/20 hover:text-white transition-all duration-300"
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          <span className="relative z-10 group-hover/badge:animate-pulse">
                            {feature}
                          </span>
                          {/* Shine effect on badge */}
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/badge:translate-x-full transition-transform duration-700"></span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/526122893294"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-cta-primary group inline-flex items-center gap-2 px-7 py-3.5 bg-white text-black rounded-full text-sm font-semibold transition-all duration-500"
          >
            Contactar a un profesional
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .portfolio-gradient-btn {
          position: relative;
          overflow: visible;
          border: 2px solid transparent;
          background:
            linear-gradient(#000, #000) padding-box,
            linear-gradient(90deg,
              #a855f7,
              #ec4899,
              #f59e0b,
              #10b981,
              #3b82f6,
              #8b5cf6,
              #a855f7
            ) border-box;
          box-shadow:
            0 0 20px rgba(168, 85, 247, 0.4),
            0 0 40px rgba(236, 72, 153, 0.3),
            0 0 60px rgba(59, 130, 246, 0.2);
        }

        .portfolio-gradient-btn::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 9999px;
          padding: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          background-size: 200% 100%;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: shimmer 3s ease-in-out infinite;
          opacity: 0.6;
          z-index: -1;
        }

        .portfolio-gradient-btn:hover {
          box-shadow:
            0 0 30px rgba(168, 85, 247, 0.6),
            0 0 60px rgba(236, 72, 153, 0.5),
            0 0 90px rgba(59, 130, 246, 0.4);
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
