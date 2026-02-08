import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  Code2,
  Database,
  Palette,
  Rocket,
  Users,
  Zap,
  CheckCircle2,
  GitBranch,
  Server,
  Smartphone,
  Globe,
  Shield,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const AboutPage: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activePhase, setActivePhase] = useState(0);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const founders = [
    {
      name: 'Javier Inguerzon',
      role: 'Co-Fundador & Full-Stack Developer',
      image: '/assets/team/javier-inguerzon.jpg',
      specialties: ['Frontend Architecture', 'UI/UX Design', 'React Ecosystem'],
    },
    {
      name: 'Alejandro Suarez',
      role: 'Co-Fundador & Full-Stack Developer',
      image: '/assets/team/alejandro-suarez.jpg',
      specialties: ['Backend Systems', 'API Design', 'Database Optimization'],
    },
  ];

  const techStack = [
    { icon: Code2, label: 'Frontend', tech: 'React, Vue, Angular' },
    { icon: Server, label: 'Backend', tech: 'Node.js, Express' },
    { icon: Database, label: 'Database', tech: 'SQL, NoSQL' },
    { icon: Smartphone, label: 'Mobile', tech: 'Flutter, React Native' },
    { icon: Globe, label: 'Cloud', tech: 'AWS, Vercel, Supabase' },
    { icon: Shield, label: 'Security', tech: 'Auth, Encryption' },
  ];

  const developmentPhases = [
    {
      phase: '01',
      title: 'Descubrimiento & Planificación',
      description: 'Análisis de requerimientos, arquitectura técnica y roadmap del proyecto',
      icon: Users,
      tasks: ['Análisis de Requisitos', 'Selección de Stack', 'Alcance del Proyecto'],
    },
    {
      phase: '02',
      title: 'Diseño & Prototipado',
      description: 'Wireframes, diseño UI/UX y prototipo interactivo para validación',
      icon: Palette,
      tasks: ['Wireframing', 'Diseño UI/UX', 'Prototipo Interactivo'],
    },
    {
      phase: '03',
      title: 'Desarrollo',
      description: 'Desarrollo full-stack con código limpio, escalable y optimizado',
      icon: Code2,
      tasks: ['Desarrollo Frontend', 'APIs Backend', 'Diseño de Base de Datos'],
    },
    {
      phase: '04',
      title: 'Testing & QA',
      description: 'Testing exhaustivo, optimización de performance y seguridad',
      icon: CheckCircle2,
      tasks: ['Testing Unitario', 'Testing de Integración', 'Auditoría de Performance'],
    },
    {
      phase: '05',
      title: 'Deploy & Soporte',
      description: 'Deploy en producción, CI/CD y soporte continuo post-lanzamiento',
      icon: Rocket,
      tasks: ['Deploy en Producción', 'Configuración CI/CD', 'Monitoreo & Soporte'],
    },
  ];

  const stats = [
    { value: '2', label: 'Desarrolladores Senior' },
    { value: '100%', label: 'Código Personalizado' },
    { value: '24/7', label: 'Soporte Dedicado' },
  ];

  return (
    <>
      <SEO
        title="Sobre Nosotros - NextWave IA | Agencia de Desarrollo Web"
        description="Conoce al equipo de NextWave IA. Somos desarrolladores full-stack especializados en React, Node.js e inteligencia artificial. Descubre nuestra filosofía y proceso de trabajo."
        url="https://nextwave-ia-landing.vercel.app/about"
        keywords="equipo NextWave IA, desarrolladores web, agencia digital México, React developers, full-stack developers"
      />
      <div className="bg-black text-white min-h-screen font-manrope overflow-x-hidden">
        {/* Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-0.5 bg-white/5 z-50">
          <div
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Hero - Professional & Clean */}
        <section className="relative pt-32 pb-20 px-6">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-lime-400/30 bg-lime-500/10 backdrop-blur-sm mb-6 animate-badge-glow shadow-lg shadow-lime-500/20">
              <div className="w-2 h-2 rounded-full bg-lime-400 animate-pulse shadow-lg shadow-lime-400/50" />
              <span className="text-xs text-lime-300 font-semibold">Sobre NextWave IA</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 max-w-3xl">
              Desarrollo Full-Stack con{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                Pasión y Profesionalismo
              </span>
            </h1>

            <p className="text-lg text-white/60 mb-10 max-w-2xl">
              Dos desarrolladores senior unidos por la pasión del código, el diseño y la adrenalina.
              Creamos soluciones web únicas, adaptadas a cada necesidad.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-4 rounded-xl border border-white/10 bg-white/[0.02]"
                >
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story - Compact Timeline */}
        <section className="relative py-16 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-3">Nuestra Historia</h2>
              <p className="text-white/60 max-w-2xl">
                NextWave IA nació de la unión de dos amigos apasionados por el desarrollo web y los
                deportes extremos. Lo que comenzó como una loca idea entre sesiones de snowboard, se
                transformó en una realidad profesional.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02]">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
                  <Users className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">2024 - El Inicio</h3>
                <p className="text-sm text-white/60">
                  Dos amigos, una visión compartida: crear proyectos web que realmente marquen la
                  diferencia.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02]">
                <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-4">
                  <Code2 className="w-5 h-5 text-pink-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">La Filosofía</h3>
                <p className="text-sm text-white/60">
                  Pasión por el código limpio, diseño elegante y soluciones personalizadas para cada
                  cliente.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02]">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4">
                  <Rocket className="w-5 h-5 text-orange-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">Hoy</h3>
                <p className="text-sm text-white/60">
                  Proyectos únicos, clientes satisfechos y la misma pasión del primer día por cada
                  línea de código.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founders - Professional Cards */}
        <section className="relative py-16 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-3">El Equipo</h2>
              <p className="text-white/60">
                Desarrolladores full-stack con años de experiencia, amantes del snowboard y la
                adrenalina.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {founders.map((founder, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-all duration-500"
                >
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold mb-1">{founder.name}</h3>
                    <p className="text-sm text-white/60 mb-4">{founder.role}</p>

                    <div className="flex flex-wrap gap-2">
                      {founder.specialties.map((spec, j) => (
                        <span
                          key={j}
                          className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack - Grid */}
        <section className="relative py-16 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-3">Stack Tecnológico</h2>
              <p className="text-white/60">
                Tecnologías que dominamos para crear soluciones completas.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {techStack.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 group"
                  >
                    <Icon className="w-6 h-6 text-white/40 mb-3 group-hover:text-white/70 transition-colors" />
                    <h4 className="text-sm font-bold mb-1">{item.label}</h4>
                    <p className="text-xs text-white/50">{item.tech}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Development Process - Professional Flow */}
        <section className="relative py-16 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-3">Proceso de Desarrollo</h2>
              <p className="text-white/60">
                Metodología profesional en 5 fases para garantizar resultados excepcionales.
              </p>
            </div>

            <div className="space-y-4">
              {developmentPhases.map((phase, i) => {
                const Icon = phase.icon;
                return (
                  <div key={i} className="relative group" onMouseEnter={() => setActivePhase(i)}>
                    <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300">
                      <div className="flex items-start gap-6">
                        {/* Phase Number & Icon */}
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center mb-2">
                            <Icon className="w-6 h-6 text-white/70" />
                          </div>
                          <div className="text-xs text-white/40 text-center font-mono">
                            {phase.phase}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold mb-2">{phase.title}</h3>
                          <p className="text-sm text-white/60 mb-4">{phase.description}</p>

                          {/* Tasks */}
                          <div className="flex flex-wrap gap-2">
                            {phase.tasks.map((task, j) => (
                              <div
                                key={j}
                                className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-white/5 text-white/60"
                              >
                                <CheckCircle2 className="w-3 h-3" />
                                {task}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Connection Line */}
                        {i < developmentPhases.length - 1 && (
                          <div className="absolute left-[36px] top-[72px] w-px h-8 bg-white/10" />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA - Apple-Style Premium */}
        <section className="relative py-24 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Glass Container */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 backdrop-blur-xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-12 md:p-16">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none" />

              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                  Listo para innovar
                </h2>
                <p className="text-base md:text-lg text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
                  Transformamos ideas en productos digitales excepcionales. Comienza tu proyecto
                  hoy.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <a
                    href="/#project-inquiry"
                    className="apple-cta-primary group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-black rounded-full font-semibold text-sm transition-all duration-500"
                  >
                    <span>Iniciar Proyecto</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </a>

                  <a
                    href="/#hero"
                    className="apple-cta-secondary group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white/90 transition-all duration-500"
                  >
                    <span>Volver al Home</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <style>{`
        .grayscale {
          filter: grayscale(100%);
        }
        .grayscale-0 {
          filter: grayscale(0%);
        }

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

        /* Apple-Style CTA Secondary */
        .apple-cta-secondary {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(20px);
        }
        .apple-cta-secondary:hover {
          background: rgba(255, 255, 255, 0.14);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
          box-shadow:
            0 4px 12px 0 rgba(0, 0, 0, 0.1),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
        }
        .apple-cta-secondary:active {
          transform: translateY(0);
          background: rgba(255, 255, 255, 0.1);
        }
      `}</style>
      </div>
    </>
  );
};

export default AboutPage;
