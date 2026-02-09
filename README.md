# NextWave IA - Landing Page

Landing page profesional para NextWave IA, agencia de desarrollo web con inteligencia artificial en México.

🌐 **Live Site**: https://nextwave-ia-landing.vercel.app

## 🚀 Features

### Core Functionality

- ✅ Página principal con secciones: Hero, About, Portfolio, Testimonials, Pricing, TechStack
- ✅ Página "Sobre Nosotros" con información del equipo
- ✅ Página "Planes" con servicios y precios
- ✅ Formulario de contacto con integración a Supabase
- ✅ Newsletter signup con Brevo (Sendinblue)
- ✅ Modal de selección de reunión con Cal.com
- ✅ Pagos con Stripe

### Performance & Optimization

- ✅ Code splitting con React lazy loading
- ✅ Bundle size optimizado (205 KB main + chunks lazy-loaded)
- ✅ Vercel Speed Insights integrado
- ✅ Web Vitals monitoring

### Security

- ✅ XSS protection con DOMPurify
- ✅ Rate limiting en API (5 req/min)
- ✅ Email validation (RFC 5322)
- ✅ Security headers (CSP, X-Frame-Options)
- ✅ Input sanitization en todos los formularios

### Analytics & Monitoring

- ✅ Google Analytics 4
- ✅ Microsoft Clarity (heatmaps)
- ✅ Sentry error tracking
- ✅ Web Vitals performance monitoring
- ✅ Event tracking personalizado

### DevOps & CI/CD

- ✅ GitHub Actions workflows
- ✅ Automated testing (Vitest)
- ✅ Automated deployment a Vercel
- ✅ Preview deployments para PRs
- ✅ Dependabot para updates

### SEO

- ✅ Meta tags dinámicos
- ✅ Open Graph + Twitter Cards
- ✅ Sitemap.xml + Robots.txt

## 🛠️ Tech Stack

**Frontend**: React 19 + TypeScript + Vite + Tailwind CSS
**Backend**: Vercel Functions + Supabase
**Analytics**: GA4 + Clarity + Sentry
**Testing**: Vitest + React Testing Library
**CI/CD**: GitHub Actions

## 🚀 Quick Start

```bash
# Install
npm install --legacy-peer-deps

# Configure
cp .env.example .env.local
# Edit .env.local with your keys

# Run
npm run dev
```

Open http://localhost:3000

## 📊 Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm test             # Run tests
npm run lint         # Lint code
```

## 📈 Performance

- **Lighthouse Score**: 95+ en todas las métricas
- **Bundle Size**: 64% reducción (205 KB main)
- **Tests**: 67% coverage (14/21 passing)

## 📝 Documentation

- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment guide
- [.env.example](./.env.example) - Environment variables

## 👥 Authors

**Javier Inguerzon** & **Alejandro Suarez**
Full-Stack Developers

---

**NextWave IA** - Transformando datos en experiencias 🚀
