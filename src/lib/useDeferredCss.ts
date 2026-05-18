'use client';

import { useEffect } from 'react';

/**
 * Ensure non-critical CSS media attributes are restored after parallel loading
 * The layout.tsx script handles preloading in parallel, this hook ensures proper state
 */
export function useDeferredCss() {
  useEffect(() => {
    // On component mount, restore any deferred CSS to proper media state
    const restoreCss = () => {
      const links = document.querySelectorAll('link[rel=stylesheet]');
      links.forEach((linkElement) => {
        const link = linkElement as HTMLLinkElement;
        const href = link.getAttribute('href') || '';
        
        // Critical CSS patterns that should stay loaded
        const criticalPatterns = [
          'Hero', 
          'Navbar',
          'navbar',
          'hero',
          'layout',
          'globals',
        ];
        
        const isCritical = criticalPatterns.some(pattern => href.includes(pattern));
        
        // Restore non-critical CSS from print media to all
        if (!isCritical && link.media === 'print') {
          link.media = 'all';
        }
      });
    };

    // Run immediately
    restoreCss();

    // Also run on next interaction to catch any delayed CSS
    const events = ['click', 'scroll', 'touchstart'];
    events.forEach(event => {
      document.addEventListener(event, restoreCss, { once: true });
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, restoreCss);
      });
    };
  }, []);
}

/**
 * Preload critical CSS to reduce render-blocking time
 */
export function preloadCriticalCss(href: string) {
  if (typeof window !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = href;
    document.head.appendChild(link);
  }
}
