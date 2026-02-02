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
          {/* Lado Izquierdo: Mockup de Celular con Instagram Feed */}
          <div className="relative group flex justify-center">
            {/* Glow Effect detrás del teléfono */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Frame del Celular */}
            <div className="relative w-[340px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden transform group-hover:scale-105 transition-all duration-500">
              {/* Notch del iPhone */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20"></div>

              {/* Pantalla del teléfono */}
              <div className="relative bg-black">
                {/* Header de Instagram */}
                <div className="px-4 py-3 flex items-center justify-between bg-black border-b border-gray-800">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-500"></div>
                    <span className="text-sm font-semibold text-white">nextwave_ia</span>
                  </div>
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </div>

                {/* Imagen del Feed */}
                <div className="relative w-full aspect-square overflow-hidden">
                  <img
                    src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d50f4a31-1a94-4495-b28b-7fb99a6f6730_3840w.jpg"
                    alt="Instagram Feed"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Botones de interacción */}
                <div className="px-4 py-3 bg-black">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-4">
                      {/* Like */}
                      <button className="transform hover:scale-110 transition-transform duration-200 group/like">
                        <svg
                          className="w-7 h-7 text-white group-hover/like:text-red-500 transition-colors"
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
                      </button>
                      {/* Comment */}
                      <button className="transform hover:scale-110 transition-transform duration-200 group/comment">
                        <svg
                          className="w-7 h-7 text-white group-hover/comment:text-blue-500 transition-colors"
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
                      </button>
                      {/* Share */}
                      <button className="transform hover:scale-110 transition-transform duration-200">
                        <svg
                          className="w-7 h-7 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      </button>
                    </div>
                    {/* Bookmark */}
                    <button className="transform hover:scale-110 transition-transform duration-200">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Likes count */}
                  <div className="text-sm font-semibold text-white mb-1">2,847 Me gusta</div>

                  {/* Caption */}
                  <div className="text-sm text-white">
                    <span className="font-semibold">nextwave_ia</span> Creando el futuro digital ✨
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Derecho: Contenido */}
          <div className="space-y-8">
            {/* Título Principal - Reducido */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
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

            {/* Estadísticas - Mejores animaciones */}
            <div className="space-y-6 pt-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex gap-4 group/stat hover:translate-x-3 transition-all duration-300 cursor-pointer"
                >
                  {/* Número grande */}
                  <div className="flex-shrink-0">
                    <div className="text-4xl md:text-5xl font-bold text-white tracking-tight group-hover/stat:scale-110 group-hover/stat:text-transparent group-hover/stat:bg-clip-text group-hover/stat:bg-gradient-to-r group-hover/stat:from-blue-400 group-hover/stat:via-purple-400 group-hover/stat:to-pink-400 transition-all duration-300">
                      {stat.number}
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="flex-1 pt-2">
                    <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1 group-hover/stat:text-white/60 transition-colors duration-300">
                      {stat.label}
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed group-hover/stat:text-white/80 transition-colors duration-300">
                      {stat.description}
                    </p>
                  </div>

                  {/* Indicator line - Más animado */}
                  <div className="w-1 h-full bg-gradient-to-b from-white/20 to-transparent group-hover/stat:from-blue-500 group-hover/stat:via-purple-500 group-hover/stat:to-pink-500 group-hover/stat:w-2 transition-all duration-300 rounded-full group-hover/stat:shadow-lg group-hover/stat:shadow-purple-500/50"></div>
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
