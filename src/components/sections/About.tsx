import React from 'react';

const About: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Diseño Inicial',
      description: 'Creamos el diseño visual y la estructura de tu proyecto.',
    },
    {
      number: '02',
      title: 'Desarrollo',
      description: 'Programamos y construimos tu sitio con las últimas tecnologías.',
    },
    {
      number: '03',
      title: 'Lanzamiento',
      description: 'Publicamos tu proyecto y lo ponemos en marcha.',
    },
  ];

  const services = [
    {
      title: 'Web Design',
      image:
        'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dc799a20-da2f-49ee-98ee-cf54fdb35126_3840w.jpg',
      gradient: 'from-blue-500/40 to-cyan-500/40',
    },
    {
      title: 'Ads',
      image:
        'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2fc6b2a5-39fc-4917-b025-be93fdf03f5a_3840w.webp',
      gradient: 'from-orange-500/40 to-pink-500/40',
    },
    {
      title: 'E-commerce',
      image:
        'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f037a5c1-c949-4343-8431-bea96e16a9ed_3840w.webp',
      gradient: 'from-purple-500/40 to-pink-500/40',
    },
    {
      title: 'Automatización',
      image:
        'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/769698c4-33dc-42f0-a44e-8873b54ee68d_3840w.webp',
      gradient: 'from-emerald-500/40 to-teal-500/40',
    },
  ];

  return (
    <section
      id="about"
      className="py-24 md:py-32 relative overflow-hidden bg-black z-20 font-manrope"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Lado Izquierdo: Timeline */}
          <div className="space-y-8">
            {/* Título Principal */}
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Un proceso diseñado
                <br />
                para velocidad y enfoque.
              </h2>
              <p className="text-base text-white/50 leading-relaxed max-w-xl">
                Transformamos tus ideas en realidad digital siguiendo un proceso optimizado que
                garantiza resultados excepcionales.
              </p>
            </div>

            {/* Timeline Steps */}
            <div className="space-y-6 pt-4">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4 group">
                  {/* Checkbox Icon */}
                  <div className="flex-shrink-0 w-6 h-6 rounded-md bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                    <svg
                      className="w-4 h-4 text-emerald-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-black rounded-lg text-sm font-bold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30"
              >
                Ver Precios
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Lado Derecho: Grid de Servicios */}
          <div className="grid grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br ${service.gradient} backdrop-blur-xl group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:border-white/20 hover:shadow-2xl hover:shadow-white/10 ${
                  index === 0 ? 'row-span-2' : ''
                }`}
                style={{ minHeight: index === 0 ? '400px' : '190px' }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-transparent" />

                {/* Title */}
                <div className="relative h-full p-6 flex items-end">
                  <h3 className="text-xl font-bold text-white tracking-tight">{service.title}</h3>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
