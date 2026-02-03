import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from '../SEO';

describe('SEO Component', () => {
  it('should render with default values', () => {
    const { container } = render(
      <HelmetProvider>
        <SEO />
      </HelmetProvider>
    );

    expect(container).toBeTruthy();
  });

  it('should use custom title when provided', () => {
    const customTitle = 'Custom Page Title';

    render(
      <HelmetProvider>
        <SEO title={customTitle} />
      </HelmetProvider>
    );

    // Helmet changes the document title
    expect(document.title).toBe(customTitle);
  });

  it('should accept custom description', () => {
    const customDescription = 'Custom description text';

    render(
      <HelmetProvider>
        <SEO description={customDescription} />
      </HelmetProvider>
    );

    const metaDescription = document.querySelector('meta[name="description"]');
    expect(metaDescription?.getAttribute('content')).toBe(customDescription);
  });

  it('should set Open Graph meta tags', () => {
    const ogTitle = 'OG Title';
    const ogDescription = 'OG Description';
    const ogUrl = 'https://example.com';

    render(
      <HelmetProvider>
        <SEO title={ogTitle} description={ogDescription} url={ogUrl} />
      </HelmetProvider>
    );

    const ogTitleMeta = document.querySelector('meta[property="og:title"]');
    const ogDescMeta = document.querySelector('meta[property="og:description"]');
    const ogUrlMeta = document.querySelector('meta[property="og:url"]');

    expect(ogTitleMeta?.getAttribute('content')).toBe(ogTitle);
    expect(ogDescMeta?.getAttribute('content')).toBe(ogDescription);
    expect(ogUrlMeta?.getAttribute('content')).toBe(ogUrl);
  });

  it('should set Twitter Card meta tags', () => {
    const twitterTitle = 'Twitter Title';

    render(
      <HelmetProvider>
        <SEO title={twitterTitle} />
      </HelmetProvider>
    );

    const twitterTitleMeta = document.querySelector('meta[name="twitter:title"]');
    const twitterCardMeta = document.querySelector('meta[name="twitter:card"]');

    expect(twitterTitleMeta?.getAttribute('content')).toBe(twitterTitle);
    expect(twitterCardMeta?.getAttribute('content')).toBe('summary_large_image');
  });

  it('should set canonical URL', () => {
    const canonicalUrl = 'https://example.com/page';

    render(
      <HelmetProvider>
        <SEO url={canonicalUrl} />
      </HelmetProvider>
    );

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    expect(canonicalLink?.getAttribute('href')).toBe(canonicalUrl);
  });
});
