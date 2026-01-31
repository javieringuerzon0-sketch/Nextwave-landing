
import React, { useState, useEffect, useRef } from 'react';
import { Bolt, BarChart3, Globe2, Repeat, Boxes, Workflow, Inbox, MessageSquare, Calendar, Database, UserPlus, Clock, BellRing, BarChart, Sparkles, Activity, Radar, Star, ShieldCheck, BadgeCheck, Languages, Code2, Palette, Cpu, AreaChart } from 'lucide-react';

const FeatureStats: React.FC = () => {
    // Animation state for Card 1 (Software Engineering)
    const [animated, setAnimated] = useState(false);
    const [progress, setProgress] = useState({ backend: 0, frontend: 0 });
    const card1Ref = useRef<HTMLDivElement>(null);

    // Animation for Card 2 (Web Design)
    const listRef = useRef<HTMLUListElement>(null);
    const [scrollY, setScrollY] = useState(0);

    // Animation for Card 3 (Digital Transformation)
    const [shimmerX, setShimmerX] = useState(-96);
    const collabCardRef = useRef<HTMLDivElement>(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    // State for Card 4 (Data Science)
    const [members, setMembers] = useState([
        { name: 'Dr. Elena S.', role: 'AI Specialist', icon: <Clock size={14} />, detail: 'Auto‑Análisis', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=80&auto=format&fit=crop' },
        { name: 'Marcus J.', role: 'ML Engineer', icon: <BellRing size={14} />, detail: 'Optimización', img: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=80&auto=format&fit=crop' },
        { name: 'Zoe Park', role: 'Data Architect', icon: <BarChart size={14} />, detail: 'Escalado', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=80&auto=format&fit=crop' },
    ]);

    // Card 1 Animation Logic
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !animated) {
                setAnimated(true);
                let start: number;
                const duration = 1000;
                const targets = { backend: 92, frontend: 88 };

                const step = (timestamp: number) => {
                    if (!start) start = timestamp;
                    const t = Math.min(1, (timestamp - start) / duration);
                    const ease = (x: number) => 1 - Math.pow(1 - x, 3);
                    const e = ease(t);

                    setProgress({
                        backend: Math.round(targets.backend * e),
                        frontend: Math.round(targets.frontend * e)
                    });

                    if (t < 1) requestAnimationFrame(step);
                };
                requestAnimationFrame(step);
            }
        }, { threshold: 0.4 });

        if (card1Ref.current) observer.observe(card1Ref.current);
        return () => observer.disconnect();
    }, [animated]);

    // Card 2 Animation Logic (Infinite Scroll)
    useEffect(() => {
        let frame: number;
        const step = () => {
            setScrollY(prev => {
                const next = prev + 0.25;
                // Approximation for loop
                return next > 200 ? 0 : next;
            });
            frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
        return () => cancelAnimationFrame(frame);
    }, []);

    // Card 3 Shimmer Logic
    useEffect(() => {
        let frame: number;
        const move = () => {
            setShimmerX(prev => {
                const next = prev + 1.2;
                return next > 400 ? -96 : next;
            });
            frame = requestAnimationFrame(move);
        };
        frame = requestAnimationFrame(move);
        return () => cancelAnimationFrame(frame);
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!collabCardRef.current) return;
        const rect = collabCardRef.current.getBoundingClientRect();
        const x = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
        const y = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
        setTilt({ x: y * -2, y: x * 2 });
    };

    const addMember = () => {
        const newMember = {
            name: 'Nuevo Analista',
            role: 'Sistemas Ops',
            icon: <Sparkles size={14} />,
            detail: 'Auto‑asignado',
            img: 'https://i.pravatar.cc/100?u=new'
        };
        setMembers([newMember, ...members]);
    };

    return (
        <section id="stats" className="md:px-10 md:pt-32 max-w-7xl mx-auto pt-20 px-6 mb-32 font-manrope">

            {/* Top Section: Lógica y Creatividad */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                <div className="animate-on-scroll">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"></div>
                        <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/30">Nuestra Filosofía</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-white leading-[0.95] mb-8">
                        La Lógica se une a la <br />
                        <span className="text-blue-500">Creatividad.</span>
                    </h2>
                    <p className="text-sm md:text-base text-white/40 max-w-lg leading-relaxed mb-10">
                        No solo escribimos código; diseñamos mentalidades. En NextWave IA fusionamos la precisión técnica con la libertad creativa para implementar soluciones digitales que no solo funcionan, sino que impactan.
                    </p>
                    <div className="flex flex-wrap gap-6 items-center">
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-white tracking-tighter">94%</span>
                            <span className="text-[9px] uppercase font-bold tracking-widest text-white/20">Tasa de Éxito</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-white tracking-tighter">1.2k+</span>
                            <span className="text-[9px] uppercase font-bold tracking-widest text-white/20">Proyectos IA</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-white tracking-tighter">$85k</span>
                            <span className="text-[9px] uppercase font-bold tracking-widest text-white/20">ROI Promedio</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-white tracking-tighter">500+</span>
                            <span className="text-[9px] uppercase font-bold tracking-widest text-white/20">Asociados</span>
                        </div>
                    </div>
                </div>

                <div className="animate-on-scroll relative">
                    <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
                    <div className="rounded-[32px] overflow-hidden border border-white/10 glass-card p-2">
                        <img
                            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/edf1b89d-547d-4a02-8464-40e6bd363b8a_3840w.jpg"
                            alt="Creatividad y Lógica"
                            className="w-full h-full object-cover rounded-[24px] opacity-90"
                        />
                    </div>
                </div>
            </div>

            {/* Grid: 4 Interactive Cards (Más compactas) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">

                {/* Card 1: Software Engineering */}
                <div ref={card1Ref} className="group relative overflow-hidden rounded-[32px] bg-white/[0.03] border border-white/10 p-5 md:p-8 hover:bg-white/[0.05] transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent pointer-events-none"></div>

                    <div className="rounded-2xl bg-black/40 p-4 border border-white/10 backdrop-blur-xl mb-6">
                        <div className="flex items-center gap-2 text-white/80 text-sm mb-6">
                            <Code2 className="h-4 w-4 text-blue-400" />
                            <span className="font-bold tracking-tight uppercase text-[10px] tracking-[0.2em] text-white/60">Ingeniería de Software</span>
                        </div>

                        <div className="space-y-4">
                            <div className="rounded-xl bg-white/[0.02] p-4 border border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 ring-1 ring-blue-500/30">
                                        <Cpu size={14} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <p className="text-sm font-bold text-white/90">Sistemas IA Backend</p>
                                            <p className="text-xs text-white/30">{progress.backend}%</p>
                                        </div>
                                        <div className="mt-2.5 h-1 w-full rounded-full bg-white/5 overflow-hidden">
                                            <div className="h-full rounded-full bg-blue-500 transition-all duration-300" style={{ width: `${progress.backend}%` }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-xl bg-white/[0.02] p-4 border border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 ring-1 ring-indigo-500/30">
                                        <Star size={14} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <p className="text-sm font-bold text-white/90">Interfaces Modernas</p>
                                            <p className="text-xs text-white/30">{progress.frontend}%</p>
                                        </div>
                                        <div className="mt-2.5 h-1 w-full rounded-full bg-white/5 overflow-hidden">
                                            <div className="h-full rounded-full bg-indigo-500 transition-all duration-300" style={{ width: `${progress.frontend}%` }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-white mb-2">Ingeniería Full-Stack</h3>
                    <p className="text-xs text-white/40 leading-relaxed font-medium">
                        Dominio total del desarrollo desde la base de datos hasta la interfaz del usuario, optimizado para alto tráfico.
                    </p>
                </div>

                {/* Card 2: Web Design */}
                <div className="group relative overflow-hidden rounded-[32px] bg-white/[0.03] border border-white/10 p-5 md:p-8 hover:bg-white/[0.05] transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent pointer-events-none"></div>

                    <div className="rounded-2xl bg-black/40 p-4 border border-white/10 backdrop-blur-xl h-[240px] flex flex-col mb-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2 text-white/80 text-sm">
                                <Palette className="h-4 w-4 text-indigo-400" />
                                <span className="font-bold tracking-tight uppercase text-[10px] tracking-[0.2em] text-white/60">Diseño Web</span>
                            </div>
                            <Activity className="h-3.5 w-3.5 text-blue-500" />
                        </div>

                        <div className="flex-1 overflow-hidden relative">
                            <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/20 to-transparent z-10 pointer-events-none"></div>
                            <ul className="space-y-2" style={{ transform: `translateY(-${scrollY}px)` }}>
                                {[1, 2, 3, 4, 5, 6].map((_, i) => (
                                    <li key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                                        <div className="flex items-center gap-2.5">
                                            <div className="h-5 w-5 rounded-md bg-white/5 border border-white/10 overflow-hidden text-[7px] flex items-center justify-center font-bold text-white/20">UI{i}</div>
                                            <p className="text-[11px] font-bold text-white/70">Diseño Responsivo {i}</p>
                                        </div>
                                        <BadgeCheck className="h-3 w-3 text-blue-400" />
                                    </li>
                                ))}
                            </ul>
                            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none"></div>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-white mb-2">Diseño Web UI/UX</h3>
                    <p className="text-xs text-white/40 leading-relaxed font-medium">
                        Interfaces intuitivas centradas en la conversión y la experiencia del usuario final en cualquier dispositivo.
                    </p>
                </div>

                {/* Card 3: Digital Transformation */}
                <div
                    ref={collabCardRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => setTilt({ x: 0, y: 0 })}
                    style={{ transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`, transition: 'transform 0.1s ease-out' }}
                    className="group relative overflow-hidden rounded-[32px] bg-white/[0.03] border border-white/10 p-5 md:p-8 hover:bg-white/[0.05] transition-all duration-500"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent pointer-events-none"></div>

                    <div className="rounded-2xl bg-black/40 p-4 border border-white/10 backdrop-blur-xl mb-6">
                        <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
                            <Boxes className="h-4 w-4 text-emerald-400" />
                            <span className="font-bold tracking-tight uppercase text-[10px] tracking-[0.2em] text-white/60">Transformación Digital</span>
                        </div>

                        <div className="grid grid-cols-4 gap-2">
                            {[Inbox, MessageSquare, Calendar, Database].map((Icon, i) => (
                                <div key={i} className="flex flex-col items-center gap-2 rounded-xl bg-white/[0.02] p-3 border border-white/5 hover:bg-blue-500/20 transition-all duration-300">
                                    <Icon size={16} className="text-white/40 group-hover:text-blue-400" />
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 overflow-hidden rounded-xl bg-black/20 border border-white/5">
                            <div className="relative p-3 flex flex-col gap-1.5">
                                <div className="h-1 w-3/4 rounded-full bg-white/5 overflow-hidden">
                                    <div className="h-full w-full bg-blue-500/50" style={{ transform: `translateX(${shimmerX}%)` }}></div>
                                </div>
                                <div className="h-1 w-1/2 rounded-full bg-white/5"></div>
                                <div className="flex items-center gap-2 mt-1.5">
                                    <div className="flex -space-x-1.5">
                                        <div className="h-4 w-4 rounded-full bg-blue-500/20 border border-black"></div>
                                        <div className="h-4 w-4 rounded-full bg-indigo-500/20 border border-black"></div>
                                        <div className="h-4 w-4 rounded-full bg-emerald-500/20 border border-black"></div>
                                    </div>
                                    <span className="text-[9px] font-bold text-white/20 uppercase tracking-widest">Sincronización Total</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-white mb-2">Transformación Digital</h3>
                    <p className="text-xs text-white/40 leading-relaxed font-medium">
                        Modernizamos tu infraestructura con sistemas escalables y flujos de trabajo automatizados de alto nivel.
                    </p>
                </div>

                {/* Card 4: Data Science */}
                <div className="group relative overflow-hidden rounded-[32px] bg-white/[0.03] border border-white/10 p-5 md:p-8 hover:bg-white/[0.05] transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 via-transparent to-transparent pointer-events-none"></div>

                    <div className="rounded-2xl bg-black/40 p-4 border border-white/10 backdrop-blur-xl mb-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2 text-white/80 text-sm">
                                <AreaChart className="h-4 w-4 text-fuchsia-400" />
                                <span className="font-bold tracking-tight uppercase text-[10px] tracking-[0.2em] text-white/60">Data Science & IA</span>
                            </div>
                            <button
                                onClick={addMember}
                                className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2 py-0.5 text-[8px] font-black uppercase tracking-widest text-white/40 border border-white/10 hover:bg-white/10 transition-all active:scale-95"
                            >
                                <UserPlus size={9} /> Añadir
                            </button>
                        </div>

                        <div className="space-y-1.5 h-[130px] overflow-hidden">
                            {members.map((m, i) => (
                                <div key={i} className="flex items-center justify-between rounded-xl bg-white/[0.02] p-2.5 border border-white/5 animate-slideUp">
                                    <div className="flex items-center gap-2.5">
                                        <img src={m.img} className="h-6 w-6 rounded-full border border-white/10 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" alt="member" />
                                        <div>
                                            <p className="text-[11px] font-bold text-white/80">{m.name}</p>
                                            <p className="text-[8px] font-bold text-white/20 uppercase">{m.role}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 text-[8px] font-bold text-white/20 uppercase tracking-widest">
                                        {m.icon}
                                        <span>Enfoque en IA</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-white mb-2">Ciencia de Datos e IA</h3>
                    <p className="text-xs text-white/40 leading-relaxed font-medium">
                        Extraemos valor de tus datos mediante algoritmos avanzados de aprendizaje automático y visión computacional.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default FeatureStats;
