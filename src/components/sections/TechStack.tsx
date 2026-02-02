import React, { useEffect, useRef } from 'react';

const TechStack: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const toolRefsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    updateSize();
    window.addEventListener('resize', updateSize);

    let animationFrame: number;
    let flowOffset = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      const canvasRect = canvas.getBoundingClientRect();

      // Get actual positions from DOM elements
      toolRefsRef.current.forEach((toolRef, i) => {
        if (!toolRef) return;

        const toolRect = toolRef.getBoundingClientRect();
        // Calculate center X of the tool relative to canvas
        const toolCenterX = toolRect.left + toolRect.width / 2 - canvasRect.left;
        // Fixed Y position below tool names
        const connectionY = 105;

        // Main line with gradient
        const gradient = ctx.createLinearGradient(centerX, centerY, toolCenterX, connectionY);
        gradient.addColorStop(0, 'rgba(132, 204, 22, 0.3)');
        gradient.addColorStop(0.5, 'rgba(234, 179, 8, 0.4)');
        gradient.addColorStop(1, 'rgba(132, 204, 22, 0.3)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.setLineDash([]);

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(toolCenterX, connectionY);
        ctx.stroke();

        // Animated flowing gradient overlay
        const length = Math.sqrt(
          Math.pow(toolCenterX - centerX, 2) + Math.pow(connectionY - centerY, 2)
        );
        const angle = Math.atan2(connectionY - centerY, toolCenterX - centerX);

        const flowGradient = ctx.createLinearGradient(
          centerX + Math.cos(angle) * (flowOffset % length),
          centerY + Math.sin(angle) * (flowOffset % length),
          centerX + Math.cos(angle) * ((flowOffset + 60) % length),
          centerY + Math.sin(angle) * ((flowOffset + 60) % length)
        );

        flowGradient.addColorStop(0, 'rgba(132, 204, 22, 0)');
        flowGradient.addColorStop(0.5, 'rgba(234, 179, 8, 0.8)');
        flowGradient.addColorStop(1, 'rgba(132, 204, 22, 0)');

        ctx.strokeStyle = flowGradient;
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(toolCenterX, connectionY);
        ctx.stroke();

        // Connection point dot with strong glow
        const outerGlow = ctx.createRadialGradient(
          toolCenterX,
          connectionY,
          0,
          toolCenterX,
          connectionY,
          12
        );
        outerGlow.addColorStop(0, 'rgba(132, 204, 22, 0.6)');
        outerGlow.addColorStop(0.5, 'rgba(234, 179, 8, 0.4)');
        outerGlow.addColorStop(1, 'rgba(132, 204, 22, 0)');
        ctx.fillStyle = outerGlow;
        ctx.beginPath();
        ctx.arc(toolCenterX, connectionY, 12, 0, Math.PI * 2);
        ctx.fill();

        // Inner bright dot
        const innerGlow = ctx.createRadialGradient(
          toolCenterX,
          connectionY,
          0,
          toolCenterX,
          connectionY,
          4
        );
        innerGlow.addColorStop(0, 'rgba(234, 179, 8, 1)');
        innerGlow.addColorStop(0.7, 'rgba(132, 204, 22, 0.8)');
        innerGlow.addColorStop(1, 'rgba(132, 204, 22, 0)');
        ctx.fillStyle = innerGlow;
        ctx.beginPath();
        ctx.arc(toolCenterX, connectionY, 4, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.beginPath();
        ctx.arc(toolCenterX, connectionY, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      flowOffset += 2;
      if (flowOffset > 1000) flowOffset = 0;

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateSize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  const tools = [
    {
      name: 'HTML/CSS',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M3 3L5 21L12 23L19 21L21 3H3Z" stroke="currentColor" strokeWidth="2" />
          <path
            d="M7 7H17L16 13L12 14.5L8 13L7.5 9H10.5L10.7 11L12 11.5L13.3 11L13.5 9H7.5L7 7Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      name: 'React',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 10.11C13.03 10.11 13.87 10.95 13.87 12C13.87 13.05 13.03 13.89 12 13.89C10.97 13.89 10.13 13.05 10.13 12C10.13 10.95 10.97 10.11 12 10.11M7.37 20C8.07 20.95 9.5 21.35 11.29 21.35C13.07 21.35 14.5 20.95 15.2 20C15.55 19.54 15.71 19 15.71 18.43C15.71 17.66 15.42 16.85 14.84 16.03C15.42 15.21 15.71 14.4 15.71 13.63C15.71 13.06 15.55 12.5 15.2 12.04C14.5 11.09 13.07 10.69 11.29 10.69C9.5 10.69 8.07 11.09 7.37 12.04C7 12.5 6.85 13.06 6.85 13.63C6.85 14.4 7.14 15.21 7.72 16.03C7.14 16.85 6.85 17.66 6.85 18.43C6.85 19 7 19.54 7.37 20M8.08 13.63C8.08 13.4 8.13 13.19 8.23 13C8.67 12.28 9.71 11.91 11.29 11.91C12.86 11.91 13.9 12.28 14.34 13C14.44 13.19 14.5 13.4 14.5 13.63C14.5 14.09 14.29 14.59 13.88 15.12C13.23 14.45 12.65 13.89 12 13.89C11.35 13.89 10.77 14.45 10.12 15.12C9.71 14.59 9.5 14.09 9.5 13.63H8.08M8.08 18.43C8.08 18.2 8.13 17.97 8.23 17.78C8.67 17.06 9.71 16.69 11.29 16.69C12.86 16.69 13.9 17.06 14.34 17.78C14.44 17.97 14.5 18.2 14.5 18.43C14.5 18.89 14.29 19.39 13.88 19.92C13.23 19.25 12.65 18.69 12 18.69C11.35 18.69 10.77 19.25 10.12 19.92C9.71 19.39 9.5 18.89 9.5 18.43H8.08Z" />
        </svg>
      ),
    },
    {
      name: 'Vue.js',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2,3H5.5L12,15L18.5,3H22L12,21L2,3M6.5,3H9.5L12,7.58L14.5,3H17.5L12,13.08L6.5,3Z" />
        </svg>
      ),
    },
    {
      name: 'Angular',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,2.5L3.5,6.5L5,17.5L12,21.5L19,17.5L20.5,6.5L12,2.5M12,4.7L18.3,7.5L17.1,16.5L12,19.2L6.9,16.5L5.7,7.5L12,4.7M12,6.4L9.5,13H11.3L11.8,11.6H14.2L14.7,13H16.5L14,6.4H12M12.9,8.8L13.9,10.8H11.1L12.1,8.8H12.9Z" />
        </svg>
      ),
    },
    {
      name: 'Flutter',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.5 2L3.5 13L7.5 17L21.5 3H14.5M14.5 9.5L10.5 13.5L14.5 17.5L18.5 13.5L14.5 9.5Z" />
        </svg>
      ),
    },
    {
      name: 'Node.js',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,1.85C11.73,1.85 11.45,1.92 11.22,2.05L3.78,6.35C3.3,6.63 3,7.15 3,7.71V16.29C3,16.85 3.3,17.37 3.78,17.65L5.73,18.77C6.68,19.23 7.17,19.23 7.58,19.23C8.86,19.23 9.6,18.44 9.6,17.12V8.58C9.6,8.42 9.47,8.29 9.31,8.29H8.38C8.22,8.29 8.09,8.42 8.09,8.58V17.12C8.09,17.69 7.53,18.23 6.5,17.76L4.5,16.61C4.45,16.58 4.41,16.53 4.41,16.47V7.71C4.41,7.65 4.45,7.6 4.5,7.57L11.94,3.27C12,3.24 12.05,3.24 12.11,3.27L19.55,7.57C19.6,7.6 19.64,7.65 19.64,7.71V16.29C19.64,16.35 19.6,16.4 19.55,16.43L12.11,20.73C12.05,20.76 12,20.76 11.94,20.73L10.05,19.67C10,19.64 9.95,19.63 9.9,19.65C9.46,19.87 9.37,19.9 8.94,20.05C8.83,20.09 8.66,20.15 9.05,20.38L11.22,21.64C11.45,21.77 11.73,21.85 12,21.85C12.27,21.85 12.55,21.77 12.78,21.64L20.22,17.34C20.7,17.06 21,16.54 21,15.98V7.71C21,7.15 20.7,6.63 20.22,6.35L12.78,2.05C12.55,1.92 12.27,1.85 12,1.85Z" />
        </svg>
      ),
    },
  ];

  const features = [
    {
      label: 'Desarrollo Ágil',
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      label: 'Código Seguro',
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
    {
      label: 'Deploy Continuo',
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
      ),
    },
    {
      label: 'Innovación Constante',
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="techstack" className="relative py-24 md:py-32 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur">
            <svg
              className="h-4 w-4 text-lime-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
              />
              <circle cx="12" cy="12" r="4" />
            </svg>
            <span className="text-sm text-lime-200/90">INTEGRATIONS</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-center text-4xl md:text-6xl font-semibold tracking-tight text-white">
          Conecta todo tu stack tecnológico
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-center text-base md:text-lg text-white/70 font-normal">
          Una plataforma, infinitas posibilidades. Sincroniza con todas tus herramientas favoritas.
        </p>

        {/* Main visualization container */}
        <div className="relative mt-16 md:mt-20" style={{ height: '450px' }}>
          {/* Canvas for animated lines */}
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

          {/* Tool icons positioned at top */}
          <div className="absolute top-0 left-0 right-0 flex justify-center items-start">
            <div className="flex justify-between items-center w-full max-w-[800px] px-4">
              {tools.map((tool, idx) => (
                <div
                  key={idx}
                  ref={el => (toolRefsRef.current[idx] = el)}
                  className="flex flex-col items-center gap-2 group cursor-pointer"
                >
                  <div className="w-14 h-14 bg-white/[0.04] rounded-2xl flex items-center justify-center ring-1 ring-white/10 backdrop-blur-sm text-white/80 hover:ring-lime-500/40 hover:bg-white/[0.08] transition-all duration-300 hover:scale-110 relative">
                    {tool.icon}
                    <div className="absolute inset-0 rounded-2xl bg-lime-500/0 group-hover:bg-lime-500/10 blur-xl transition-all duration-300"></div>
                  </div>
                  <span className="text-xs text-white/60 group-hover:text-white/90 transition-colors font-medium text-center">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Center bolt icon with glow */}
          <div className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 z-20">
            {/* Animated glow layers */}
            <div className="absolute inset-0 w-24 h-24 bg-lime-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute inset-0 w-20 h-20 bg-yellow-500/30 rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: '0.5s' }}
            ></div>

            {/* Icon container */}
            <div className="relative w-16 h-16 bg-gradient-to-br from-lime-500/20 to-yellow-500/20 rounded-2xl flex items-center justify-center ring-2 ring-lime-500/50 backdrop-blur-md shadow-2xl shadow-lime-500/30">
              <svg
                className="w-8 h-8 text-lime-400"
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

        {/* Features timeline */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {features.map((item, idx) => (
            <React.Fragment key={idx}>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center text-lime-400">{item.icon}</div>
                <span className="text-sm text-white/70 font-normal">{item.label}</span>
              </div>
              {idx < features.length - 1 && (
                <div className="hidden md:block w-px h-4 bg-white/10"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
