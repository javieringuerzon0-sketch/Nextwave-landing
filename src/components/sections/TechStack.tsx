import React, { useEffect, useRef } from 'react';

const TechStack: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    updateSize();
    window.addEventListener('resize', updateSize);

    // Animation state
    let animationFrame: number;
    let offset = 0;

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Calculate tool positions (6 tools in a row at top)
      const toolCount = 6;
      const spacing = Math.min(canvas.width / (toolCount + 1), 120);
      const startX = (canvas.width - spacing * (toolCount - 1)) / 2;
      const toolY = 40;

      // Draw animated lines from center to each tool
      for (let i = 0; i < toolCount; i++) {
        const toolX = startX + i * spacing;

        // Create gradient line
        const gradient = ctx.createLinearGradient(centerX, centerY, toolX, toolY);
        gradient.addColorStop(0, 'rgba(132, 204, 22, 0.8)'); // lime-500
        gradient.addColorStop(1, 'rgba(234, 179, 8, 0.8)'); // yellow-500

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.setLineDash([8, 8]);
        ctx.lineDashOffset = -offset;

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(toolX, toolY);
        ctx.stroke();

        // Draw small dots at tool position
        ctx.fillStyle = 'rgba(132, 204, 22, 0.6)';
        ctx.beginPath();
        ctx.arc(toolX, toolY, 4, 0, Math.PI * 2);
        ctx.fill();
      }

      // Animate dash offset
      offset += 0.5;
      if (offset > 16) offset = 0;

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateSize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  const tools = [
    { name: 'CSS + JavaScript', icon: '{ }' },
    { name: 'React', icon: '⚛' },
    { name: 'Vue.js', icon: 'V' },
    { name: 'Angular', icon: 'A' },
    { name: 'Flutter', icon: 'F' },
    { name: 'Node.js', icon: 'N' },
  ];

  const timeline = [
    { icon: '⚡', label: 'Desarrollo Ágil' },
    { icon: '🔒', label: 'Código Seguro' },
    { icon: '🚀', label: 'Deploy Continuo' },
    { icon: '✨', label: 'Innovación Constante' },
  ];

  return (
    <section
      id="techstack"
      className="relative py-24 md:py-32 bg-black overflow-hidden font-manrope"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-lime-500/20 bg-lime-500/5 px-4 py-2 shadow-[inset_0_1px_0_rgba(132,204,22,0.1)] backdrop-blur">
            <svg
              className="h-4 w-4 text-lime-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
              />
              <circle cx="12" cy="12" r="4" />
            </svg>
            <span className="text-sm text-lime-200/90 font-semibold tracking-wide">
              INTEGRATIONS
            </span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
          Conecta todo tu stack tecnológico
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-center text-base md:text-lg text-white/70 font-normal">
          Una plataforma, infinitas posibilidades. Trabajamos con las mejores herramientas del
          mercado.
        </p>

        {/* Tools + Animation Container */}
        <div className="relative mt-16 md:mt-20">
          {/* Tools Icons */}
          <div className="relative z-10 flex justify-center items-center gap-4 md:gap-8 lg:gap-12 mb-32">
            {tools.map((tool, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-3 group cursor-pointer"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center ring-1 ring-white/10 backdrop-blur-sm group-hover:ring-lime-500/50 group-hover:bg-lime-500/10 transition-all duration-300 group-hover:scale-110">
                  <span className="text-2xl font-bold text-white/80 group-hover:text-lime-400 transition-colors">
                    {tool.icon}
                  </span>
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-lime-500/0 group-hover:bg-lime-500/20 blur-xl transition-all duration-300"></div>
                </div>
                <span className="text-xs md:text-sm text-white/60 group-hover:text-white/90 transition-colors font-medium text-center max-w-[80px]">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>

          {/* Canvas for animated lines */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ height: '280px', top: '20px' }}
          />

          {/* Center Icon with Glow */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            {/* Animated glow */}
            <div className="absolute inset-0 w-24 h-24 bg-lime-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute inset-0 w-32 h-32 bg-yellow-500/20 rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: '1s' }}
            ></div>

            {/* Icon container */}
            <div className="relative w-20 h-20 bg-gradient-to-br from-lime-500/20 to-yellow-500/20 rounded-2xl flex items-center justify-center ring-2 ring-lime-500/50 backdrop-blur-md shadow-2xl shadow-lime-500/50">
              <svg
                className="w-10 h-10 text-lime-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8">
          {timeline.map((item, idx) => (
            <React.Fragment key={idx}>
              <div className="flex items-center gap-2 group cursor-pointer">
                <div className="w-8 h-8 bg-lime-500/10 rounded-full flex items-center justify-center ring-1 ring-lime-500/30 group-hover:ring-lime-500/50 group-hover:bg-lime-500/20 transition-all duration-300">
                  <span className="text-lg">{item.icon}</span>
                </div>
                <span className="text-sm md:text-base text-white/70 group-hover:text-white/90 transition-colors font-medium">
                  {item.label}
                </span>
              </div>
              {idx < timeline.length - 1 && (
                <div className="hidden md:block w-16 lg:w-24 h-px bg-gradient-to-r from-lime-500/30 via-lime-500/50 to-lime-500/30"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
