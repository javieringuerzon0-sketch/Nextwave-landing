import React from 'react';
import { supabase } from '../../lib/supabase';
import { sanitizeInput, isValidEmail } from '../../lib/sanitize';
import { trackFormSubmit } from '../../lib/analytics';

const ProjectInquiry: React.FC = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [selectedServices, setSelectedServices] = React.useState<string[]>([]);
  const [selectedGoals, setSelectedGoals] = React.useState<string[]>([]);
  const [details, setDetails] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const toggleService = React.useCallback((service: string) => {
    setSelectedServices(prev =>
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  }, []);

  const toggleGoal = React.useCallback((goal: string) => {
    setSelectedGoals(prev =>
      prev.includes(goal) ? prev.filter(g => g !== goal) : [...prev, goal]
    );
  }, []);

  const handleNameChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  const handleEmailChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const handleDetailsChange = React.useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDetails(e.target.value);
  }, []);

  const handleMeetingSelect = React.useCallback((url: string) => {
    window.open(url, '_blank');
    setShowModal(false);
  }, []);

  const handleCloseModal = React.useCallback(() => {
    setShowModal(false);
  }, []);

  const goalsOptions = React.useMemo(
    () => [
      'Aumentar Ingresos',
      'Mejorar Conversión',
      'Rediseño de Marca',
      'Lanzar Producto',
      'Nuevo Mercado',
    ],
    []
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación de campos requeridos
    if (!name.trim()) {
      alert('Por favor ingresa tu nombre');
      return;
    }

    if (!email.trim()) {
      alert('Por favor ingresa tu email');
      return;
    }

    // Validación de email
    if (!isValidEmail(email)) {
      alert('Por favor ingresa un email válido');
      return;
    }

    if (selectedServices.length === 0) {
      alert('Por favor selecciona al menos un servicio');
      return;
    }

    if (selectedGoals.length === 0) {
      alert('Por favor selecciona al menos un objetivo');
      return;
    }

    setIsSubmitting(true);

    try {
      // Sanitizar datos antes de enviar
      const sanitizedData = {
        name: sanitizeInput(name),
        email: sanitizeInput(email),
        services: selectedServices, // Arrays no necesitan sanitización
        goals: selectedGoals,
        details: sanitizeInput(details),
        metadata: {
          timestamp: new Date().toISOString(),
          user_agent: navigator.userAgent,
        },
      };

      // Guardar en Supabase
      const { data, error } = await supabase.from('project_inquiries').insert([sanitizedData]);

      if (error) {
        // Track failed submission
        trackFormSubmit('project_inquiry', false);
        alert(
          `Hubo un error al enviar tu consulta: ${error.message}\n\nPor favor intenta nuevamente o contáctanos directamente.`
        );
        return;
      }

      // Track successful submission
      trackFormSubmit('project_inquiry', true);

      // Si se guardó exitosamente, mostrar modal de selección de reunión
      setShowModal(true);

      // Limpiar formulario
      setName('');
      setEmail('');
      setSelectedServices([]);
      setSelectedGoals([]);
      setDetails('');
    } catch (err) {
      // Track unexpected error
      trackFormSubmit('project_inquiry', false);
      alert('Hubo un error inesperado. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="project-inquiry"
      className="min-h-screen flex sm:p-6 lg:p-8 pt-4 pr-4 pb-4 pl-4 items-center justify-center bg-black"
    >
      {/* Main Card Container */}
      <div className="w-full max-w-4xl rounded-[2.5rem] backdrop-blur-xl relative shadow-2xl bg-slate-950/50 shadow-black/80 border border-white/10">
        {/* Radial Gradient Overlay inside card */}
        <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_50%)] pointer-events-none"></div>

        <form onSubmit={handleSubmit} className="relative p-8 sm:p-12 z-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div className="flex items-center gap-5">
              <div className="relative w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group shadow-lg bg-slate-900/80 shadow-black/50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7 text-sky-200"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M15.252 10.689c-.987-1.18-1.48-1.77-2.048-1.68c-.567.091-.832.803-1.362 2.227l-.138.368c-.15.405-.226.607-.373.756c-.146.149-.348.228-.75.386l-.367.143c-1.417.555-2.126.833-2.207 1.4s.52 1.049 1.721 2.011l.31.25c.342.273.513.41.611.597c.1.187.115.404.146.837l.029.394c.11 1.523.166 2.285.683 2.545s1.154-.155 2.427-.983l.329-.215c.362-.235.543-.353.75-.387c.208-.033.42.022.841.132l.385.1c1.485.386 2.228.58 2.629.173s.193-1.144-.221-2.62l-.108-.38c-.117-.42-.176-.63-.147-.837c.03-.208.145-.39.374-.756l.21-.332c.807-1.285 1.21-1.927.94-2.438c-.269-.511-1.033-.553-2.562-.635l-.396-.022c-.434-.023-.652-.035-.841-.13c-.19-.095-.33-.263-.61-.599z" />
                  <path
                    d="M10.331 4.252c1.316-1.574 1.974-2.361 2.73-2.24s1.11 1.07 1.817 2.969l.183.491c.201.54.302.81.497 1.008c.196.199.464.304 1.001.514l.489.192c1.89.74 2.835 1.11 2.942 1.866c.108.757-.693 1.398-2.294 2.682l-.414.332c-.455.365-.683.547-.815.797s-.152.538-.194 1.115l-.038.526c-.148 2.031-.222 3.047-.911 3.393c-.69.347-1.538-.206-3.236-1.311l-.439-.286c-.482-.314-.723-.47-1-.515s-.558.028-1.121.175l-.513.133c-1.98.516-2.971.773-3.505.231s-.258-1.526.295-3.492l.142-.509c.157-.559.236-.838.197-1.115c-.04-.277-.193-.52-.499-1.008l-.278-.443C4.29 8.044 3.752 7.187 4.11 6.507c.36-.682 1.379-.737 3.418-.848l.527-.028c.58-.031.869-.047 1.122-.174c.252-.127.439-.35.813-.798z"
                    opacity="0.5"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-semibold tracking-tight text-white">
                  Consulta de Proyecto
                </h1>
                <p className="text-sm mt-1 font-light tracking-wide text-sky-100/60">
                  Orquestando tu próximo avance digital.
                </p>
              </div>
            </div>

            {/* Status Pill */}
            <div className="relative inline-flex items-center gap-2 rounded-full ring-1 px-3 py-1.5 shadow-lg bg-slate-900/90 ring-slate-700/70 animate-pulse-glow">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
              </span>
              <span className="text-xs font-medium tracking-widest uppercase text-sky-100/90">
                Aceptando Clientes
              </span>
            </div>
          </div>

          {/* Input Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {/* Name Input */}
            <div className="group relative rounded-2xl transition-all duration-300 bg-slate-900/40 border border-white/10 hover:border-white/20">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-sky-300 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <circle cx="12" cy="6" r="4" />
                  <path
                    d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5"
                    opacity="0.5"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={handleNameChange}
                required
                className="w-full bg-transparent text-sm placeholder-slate-500 py-4 pl-14 pr-4 rounded-2xl focus:outline-none focus:bg-slate-900/60 transition-all text-slate-200"
              />
            </div>

            {/* Email Input */}
            <div className="group relative rounded-2xl transition-all duration-300 bg-slate-900/40 border border-white/10 hover:border-white/20">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-sky-300 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M14.2 3H9.8C5.652 3 3.577 3 2.289 4.318S1 7.758 1 12s0 6.364 1.289 7.682S5.652 21 9.8 21h4.4c4.148 0 6.223 0 7.511-1.318S23 16.242 23 12s0-6.364-1.289-7.682S18.348 3 14.2 3"
                    opacity="0.5"
                  />
                  <path d="M19.128 8.033a.825.825 0 0 0-1.056-1.268l-2.375 1.98c-1.026.855-1.738 1.447-2.34 1.833c-.582.375-.977.5-1.357.5s-.774-.125-1.357-.5c-.601-.386-1.314-.978-2.34-1.834L5.928 6.765a.825.825 0 0 0-1.056 1.268l2.416 2.014c.975.812 1.765 1.47 2.463 1.92c.726.466 1.434.762 2.25.762c.814 0 1.522-.296 2.249-.763c.697-.448 1.487-1.107 2.462-1.92z" />
                </svg>
              </div>
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={handleEmailChange}
                required
                className="w-full bg-transparent text-sm placeholder-slate-500 py-4 pl-14 pr-4 rounded-2xl focus:outline-none focus:bg-slate-900/60 transition-all text-slate-200"
              />
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-10">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-5 flex items-center gap-2 pl-1 text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-sky-200/50"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
              </svg>
              Servicios Requeridos
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Creación de página web */}
              <button
                type="button"
                onClick={() => toggleService('Creación de Página Web')}
                className={`group relative flex flex-col items-start justify-between gap-3 p-5 rounded-2xl text-left transition-all duration-300 h-full ${
                  selectedServices.includes('Creación de Página Web')
                    ? 'bg-sky-900/40 border-sky-500/50'
                    : 'bg-slate-900/40 hover:bg-slate-800/60 border-white/5'
                } border`}
              >
                <div className="flex group-hover:scale-110 transition-transform duration-300 text-sky-200 bg-slate-800/50 w-10 h-10 border-white/5 border rounded-xl mb-1 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-sm font-medium block mb-1 text-slate-100">
                    Creación de Página Web
                  </span>
                  <span className="text-xs font-light text-slate-400">
                    Sitios web profesionales y responsivos
                  </span>
                </div>
              </button>

              {/* Marketing */}
              <button
                type="button"
                onClick={() => toggleService('Marketing')}
                className={`group relative flex flex-col items-start justify-between gap-3 p-5 rounded-2xl text-left transition-all duration-300 h-full ${
                  selectedServices.includes('Marketing')
                    ? 'bg-sky-900/40 border-sky-500/50'
                    : 'bg-slate-900/40 hover:bg-slate-800/60 border-white/5'
                } border`}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:text-sky-200 transition-colors mb-1 group-hover:scale-110 duration-300 border bg-slate-800/50 text-slate-400 border-white/5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"
                      opacity="0.5"
                    />
                    <path d="M9.25 12a.75.75 0 0 1 .75-.75h1.25V10a.75.75 0 0 1 1.5 0v1.25H14a.75.75 0 0 1 0 1.5h-1.25V14a.75.75 0 0 1-1.5 0v-1.25H10a.75.75 0 0 1-.75-.75m-7.222.75a10 10 0 0 1 0-1.5H5a.75.75 0 0 1 0 1.5zm10.722 9.222a10 10 0 0 1-1.5 0V19a.75.75 0 0 1 1.5 0zm9.222-10.722a10 10 0 0 1 0 1.5H19a.75.75 0 0 1 0-1.5zM12.75 2.028V5a.75.75 0 0 1-1.5 0V2.028a10 10 0 0 1 1.5 0" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm font-medium block mb-1 group-hover:text-slate-100 text-slate-300">
                    Marketing
                  </span>
                  <span className="text-xs text-slate-500 font-light group-hover:text-sky-100/70">
                    SEO & Publicidad Digital
                  </span>
                </div>
              </button>

              {/* Diseño de App Web */}
              <button
                type="button"
                onClick={() => toggleService('Diseño de App Web')}
                className={`group relative flex flex-col items-start justify-between gap-3 p-5 rounded-2xl text-left transition-all duration-300 h-full ${
                  selectedServices.includes('Diseño de App Web')
                    ? 'bg-sky-900/40 border-sky-500/50'
                    : 'bg-slate-900/40 hover:bg-slate-800/60 border-white/5'
                } border`}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:text-sky-200 transition-colors mb-1 group-hover:scale-110 duration-300 border bg-slate-800/50 text-slate-400 border-white/5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"
                      opacity="0.5"
                    />
                    <path d="M13.488 6.446a.75.75 0 0 1 .53.918l-2.588 9.66a.75.75 0 0 1-1.449-.389l2.589-9.659a.75.75 0 0 1 .918-.53M14.97 8.47a.75.75 0 0 1 1.06 0l.209.208c.635.635 1.165 1.165 1.529 1.642c.384.504.654 1.036.654 1.68s-.27 1.176-.654 1.68c-.364.477-.894 1.007-1.53 1.642l-.208.208a.75.75 0 1 1-1.06-1.06l.171-.172c.682-.682 1.139-1.14 1.434-1.528c.283-.37.347-.586.347-.77s-.064-.4-.347-.77c-.295-.387-.752-.846-1.434-1.528l-.171-.172a.75.75 0 0 1 0-1.06m-7 0a.75.75 0 0 1 1.06 1.06l-.171.172c-.682.682-1.138 1.14-1.434 1.528c-.283.37-.346.586-.346.77s.063.4.346.77c.296.387.752.846 1.434 1.528l.172.172a.75.75 0 1 1-1.061 1.06l-.208-.208c-.636-.635-1.166-1.165-1.53-1.642c-.384-.504-.653-1.036-.653-1.68s.27-1.176.653-1.68c.364-.477.894-1.007 1.53-1.642z" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm font-medium block mb-1 group-hover:text-slate-100 text-slate-300">
                    Diseño de App Web
                  </span>
                  <span className="text-xs text-slate-500 font-light group-hover:text-sky-100/70">
                    Aplicaciones web modernas
                  </span>
                </div>
              </button>

              {/* Diseño de App Móviles */}
              <button
                type="button"
                onClick={() => toggleService('Diseño de App Móviles')}
                className={`group relative flex flex-col items-start justify-between gap-3 p-5 rounded-2xl text-left transition-all duration-300 h-full ${
                  selectedServices.includes('Diseño de App Móviles')
                    ? 'bg-sky-900/40 border-sky-500/50'
                    : 'bg-slate-900/40 hover:bg-slate-800/60 border-white/5'
                } border`}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:text-sky-200 transition-colors mb-1 group-hover:scale-110 duration-300 border bg-slate-800/50 text-slate-400 border-white/5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-sm font-medium block mb-1 group-hover:text-slate-100 text-slate-300">
                    Diseño de App Móviles
                  </span>
                  <span className="text-xs text-slate-500 font-light group-hover:text-sky-100/70">
                    Apps iOS & Android
                  </span>
                </div>
              </button>

              {/* Pregunta Personalizada */}
              <button
                type="button"
                onClick={() => toggleService('Consulta Personalizada')}
                className={`sm:col-span-2 group relative flex flex-row items-center justify-start gap-4 p-5 rounded-2xl text-left transition-all duration-300 h-full ${
                  selectedServices.includes('Consulta Personalizada')
                    ? 'bg-sky-900/40 border-sky-500/50'
                    : 'bg-slate-900/40 hover:bg-slate-800/60 border-white/5'
                } border`}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:text-sky-200 transition-colors border bg-slate-800/50 text-slate-400 border-white/5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"
                      opacity="0.5"
                    />
                    <path d="M12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z" />
                  </svg>
                </div>
                <span className="text-sm font-medium group-hover:text-slate-100 text-slate-300">
                  Otro / Consulta Personalizada
                </span>
              </button>
            </div>
          </div>

          {/* Goals Section */}
          <div className="mb-10">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-5 flex items-center gap-2 pl-1 text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-sky-200/50"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6.5 1.75a.75.75 0 0 0-1.5 0v20a.75.75 0 0 0 1.5 0z"
                  clipRule="evenodd"
                  opacity="0.5"
                />
                <path d="m13.349 3.79l-.204-.082a8.7 8.7 0 0 0-4.924-.452L6.5 3.6v10l1.72-.344a8.7 8.7 0 0 1 4.925.452a8.68 8.68 0 0 0 5.327.361l.214-.053a1.404 1.404 0 0 0 1.064-1.362V5.287a1.2 1.2 0 0 0-1.49-1.164a8 8 0 0 1-4.911-.334" />
              </svg>
              Objetivos Principales
            </h3>
            <div className="flex flex-wrap gap-3">
              {goalsOptions.map(goal => (
                <button
                  key={goal}
                  type="button"
                  onClick={() => toggleGoal(goal)}
                  className={`group flex items-center gap-2 py-2.5 px-5 rounded-full text-left transition-all ${
                    selectedGoals.includes(goal)
                      ? 'bg-sky-900/40 border border-sky-500/50'
                      : 'bg-slate-900/40 hover:bg-slate-800/60'
                  }`}
                >
                  <span
                    className={`text-xs font-medium ${
                      selectedGoals.includes(goal)
                        ? 'text-sky-100'
                        : 'text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    {goal}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Text Area */}
          <div className="mb-10 group relative">
            <div className="absolute -top-3 left-6 bg-[#0B1221] px-3 text-[10px] tracking-widest font-bold uppercase rounded-full border z-10 text-sky-300/80 border-sky-900/30">
              Detalles Adicionales
            </div>
            <div className="rounded-2xl transition-all duration-300 bg-slate-900/40 border border-white/10 hover:border-white/20">
              <textarea
                placeholder="Describe tu proyecto, cronograma y expectativas de presupuesto..."
                value={details}
                onChange={handleDetailsChange}
                className="w-full h-36 bg-transparent text-sm placeholder-slate-500 p-6 rounded-2xl focus:outline-none focus:bg-slate-900/60 resize-none transition-all text-slate-200"
              ></textarea>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="flex flex-col sm:flex-row gap-8 border-white/5 border-t pt-8 items-center justify-between">
            <p className="text-xs text-slate-500 text-center sm:text-left flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 text-sky-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"
                  opacity="0.5"
                />
                <path
                  fillRule="evenodd"
                  d="M12 7.25a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1-.22-.53V8a.75.75 0 0 1 .75-.75"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                Respuesta promedio: <span className="font-medium text-slate-300">Menos de 24h</span>
              </span>
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="apple-cta-primary group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-black rounded-full text-sm font-semibold transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{isSubmitting ? 'Enviando...' : 'Enviar Consulta'}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </form>
      </div>

      {/* Modal de Selección de Reunión */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={handleCloseModal}
          />

          {/* Modal Content */}
          <div className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/95 to-black/95 p-8 shadow-2xl animate-slideUp">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-200 group"
            >
              <svg
                className="w-4 h-4 text-white/60 group-hover:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                ¡Consulta Recibida!
              </h2>
              <p className="text-sm text-white/60">
                Ahora agenda una reunión para discutir tu proyecto en detalle
              </p>
            </div>

            {/* Meeting Options */}
            <div className="space-y-3 mb-6">
              {/* 15 min - Diagnóstico Rápido */}
              <button
                onClick={() =>
                  handleMeetingSelect(
                    'https://cal.com/javier-inguerzon-infante-hjcp55/15min-diagnostico-rapido'
                  )
                }
                className="w-full group relative flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-base font-semibold text-white">Diagnóstico Rápido</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      15 min
                    </span>
                  </div>
                  <p className="text-xs text-white/50">Revisión inicial de tu idea o proyecto</p>
                </div>
                <svg
                  className="w-5 h-5 text-white/40 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* 30 min - Inicio del Proyecto Web */}
              <button
                onClick={() =>
                  handleMeetingSelect(
                    'https://cal.com/javier-inguerzon-infante-hjcp55/30min-inicio-del-proyecto-web'
                  )
                }
                className="w-full group relative flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-amber-500/30 hover:border-amber-500/50 hover:bg-amber-500/5 transition-all duration-300"
              >
                {/* Recommended Badge */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-amber-500 text-black font-bold uppercase tracking-wider">
                    Recomendado
                  </span>
                </div>

                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-amber-400"
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
                </div>
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-base font-semibold text-white">
                      Inicio del Proyecto Web
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      30 min
                    </span>
                  </div>
                  <p className="text-xs text-white/50">Planificación completa de tu sitio web</p>
                </div>
                <svg
                  className="w-5 h-5 text-white/40 group-hover:text-amber-400 group-hover:translate-x-1 transition-all"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* 60 min - Proyectos App Web/Móvil/Marketing */}
              <button
                onClick={() =>
                  handleMeetingSelect(
                    'https://cal.com/javier-inguerzon-infante-hjcp55/60-minutos-proyectos-app-web-movil-marketing'
                  )
                }
                className="w-full group relative flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-base font-semibold text-white">
                      App Web/Móvil/Marketing
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      60 min
                    </span>
                  </div>
                  <p className="text-xs text-white/50">Análisis profundo de proyectos complejos</p>
                </div>
                <svg
                  className="w-5 h-5 text-white/40 group-hover:text-purple-400 group-hover:translate-x-1 transition-all"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Footer */}
            <div className="text-center pt-6 border-t border-white/5">
              <button
                onClick={handleCloseModal}
                className="text-sm text-white/50 hover:text-white/80 transition-colors"
              >
                Agendar más tarde
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 15px rgba(52, 211, 153, 0.3);
          }
          50% {
            box-shadow: 0 0 25px rgba(52, 211, 153, 0.5);
          }
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .inquiry-gradient-btn {
          position: relative;
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

        .inquiry-gradient-btn::before {
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
          z-index: 0;
        }

        .inquiry-gradient-btn:hover {
          box-shadow:
            0 0 30px rgba(168, 85, 247, 0.6),
            0 0 60px rgba(236, 72, 153, 0.5),
            0 0 90px rgba(59, 130, 246, 0.4);
        }

        .inquiry-gradient-btn:disabled {
          opacity: 0.5;
          box-shadow: none;
        }

        .inquiry-gradient-btn:disabled::before {
          animation: none;
          opacity: 0.3;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ProjectInquiry;
