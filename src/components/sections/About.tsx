import React from 'react';

const About: React.FC = () => {
  const stats = [
    {
      number: '14+',
      label: 'AÑOS DE EXPERIENCIA',
      description: 'Más de una década creando experiencias digitales excepcionales que convierten.',
    },
    {
      number: '32KM',
      label: 'USUARIOS ALCANZADOS',
      description:
        'Proyectos que han impactado a millones de personas en todo el mundo con resultados comprobados.',
    },
    {
      number: '1,460%',
      label: 'CRECIMIENTO PROMEDIO',
      description:
        'Incremento promedio en conversiones que nuestros clientes experimentan año tras año.',
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-black overflow-hidden z-20 font-manrope"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Lado Izquierdo: Mockup de Instagram Feed */}
          <div className="relative group">
            {/* Container del mockup */}
            <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-3xl p-6 border border-white/10 shadow-2xl backdrop-blur-sm hover:border-white/20 transition-all duration-500">
              {/* Header con avatares */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-white/10">
                <span className="text-xs font-bold text-white/50 uppercase tracking-wider">
                  Últimos
                </span>
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-2 border-black"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 border-2 border-black"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-teal-500 border-2 border-black"></div>
                </div>
              </div>

              {/* Imagen principal del feed */}
              <div className="relative rounded-2xl overflow-hidden mb-4 aspect-[4/5] group/image">
                <img
                  src="https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=800&q=80"
                  alt="Instagram Feed"
                  className="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-700"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Interacciones */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-6 h-6 text-white/70"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <span className="text-sm text-white/70">2.4K</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-6 h-6 text-white/70"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <span className="text-sm text-white/70">340</span>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none rounded-3xl"></div>
            </div>
          </div>

          {/* Lado Derecho: Contenido */}
          <div className="space-y-8">
            {/* Título Principal */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Historias sociales que
                <br />
                convierten visitantes en
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  proyectos cerrados.
                </span>
              </h2>
              <p className="text-base text-white/50 leading-relaxed max-w-xl">
                Creamos contenido visual que captura la atención y genera resultados reales para tu
                negocio.
              </p>
            </div>

            {/* Estadísticas */}
            <div className="space-y-6 pt-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex gap-4 group/stat hover:translate-x-2 transition-transform duration-300"
                >
                  {/* Número grande */}
                  <div className="flex-shrink-0">
                    <div className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                      {stat.number}
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="flex-1 pt-2">
                    <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">
                      {stat.label}
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed">{stat.description}</p>
                  </div>

                  {/* Indicator line */}
                  <div className="w-1 h-full bg-gradient-to-b from-white/20 to-transparent group-hover/stat:from-blue-500 group-hover/stat:to-purple-500 transition-all duration-300 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
