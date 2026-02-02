import React from 'react';

const Testimonials: React.FC = () => {
  const secondaryTestimonials = [
    {
      text: 'Nuestra tasa de conversión aumentó un 40% tras el rediseño. La estética y la funcionalidad son simplemente superiores.',
      name: 'Michael Chen',
      role: 'CTO @ TechFlow',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    },
    {
      text: 'El profesionalismo y la velocidad de entrega de NextWave están en otro nivel. Un socio tecnológico indispensable.',
      name: 'Emily Roberts',
      role: 'CEO @ DataSync',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
    {
      text: 'La mejor inversión que hemos hecho este año. La landing page no solo se ve bien, sino que vende sola.',
      name: 'David Park',
      role: 'Founder @ Studio X',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 relative bg-transparent z-10 font-manrope">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl font-light text-white/20 uppercase">04</span>
            <div className="w-px h-8 bg-white/10"></div>
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/50">
              Testimonios
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Confianza basada en resultados
          </h2>
        </div>

        {/* Featured Testimonial */}
        <div className="grid lg:grid-cols-2 gap-6 items-stretch mb-6">
          <div className="overflow-hidden h-[400px] glass-card rounded-[40px] border-white/10 group/image">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80"
              className="w-full h-full object-cover grayscale opacity-80 group-hover/image:grayscale-0 group-hover/image:opacity-100 transition-all duration-700"
              alt="Cliente Destacado"
            />
          </div>

          <div className="glass-card rounded-[40px] p-10 md:p-14 flex flex-col justify-center border-white/10 relative overflow-hidden bg-white/[0.01]">
            <p className="text-2xl md:text-3xl font-medium tracking-tight text-white/90 leading-snug mb-10 relative z-10">
              "La capacidad de NextWave para entender nuestra visión y transformarla en una
              plataforma de ventas masivas fue impresionante."
            </p>
            <div>
              <div className="text-lg font-bold text-white uppercase tracking-tight">
                Tom Sullivan
              </div>
              <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
                Director Estratégico, Nova Agency
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Testimonials - Grid de 3 */}
        <div className="grid lg:grid-cols-3 gap-6">
          {secondaryTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-[32px] p-8 border-white/10 flex flex-col justify-between bg-white/[0.01] group hover:bg-white/[0.03] transition-all duration-300"
            >
              <p className="text-white/60 text-sm leading-relaxed mb-8 flex-1 italic group-hover:text-white/80 transition-colors">
                "{item.text}"
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <img
                  src={item.image}
                  className="w-10 h-10 rounded-full grayscale group-hover:grayscale-0 transition-all duration-500 border border-white/10"
                  alt={item.name}
                />
                <div>
                  <div className="text-sm font-bold text-white uppercase">{item.name}</div>
                  <div className="text-[9px] text-white/40 tracking-widest uppercase font-bold">
                    {item.role}
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
