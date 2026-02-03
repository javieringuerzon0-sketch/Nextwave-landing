import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'NextWave IA - Desarrollo Web con Inteligencia Artificial en México',
  description = 'Agencia líder en desarrollo web con IA en México. Creamos páginas web, aplicaciones móviles y estrategias de marketing digital que transforman tu negocio. Especialistas en React, Next.js y soluciones personalizadas.',
  image = 'https://nextwave-ia-landing.vercel.app/og-image.png',
  url = 'https://nextwave-ia-landing.vercel.app',
  type = 'website',
  keywords = 'desarrollo web, inteligencia artificial, IA, México, páginas web, aplicaciones móviles, marketing digital, React, Next.js, diseño web, agencia digital, transformación digital',
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang="es" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph Meta Tags (Facebook, LinkedIn) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="NextWave IA" />
      <meta property="og:locale" content="es_MX" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@nextwaveia" />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="NextWave IA" />
      <meta name="language" content="Spanish" />
      <meta name="geo.region" content="MX" />
      <meta name="geo.placename" content="México" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Favicon */}
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Theme Color */}
      <meta name="theme-color" content="#000000" />
    </Helmet>
  );
};

export default SEO;
