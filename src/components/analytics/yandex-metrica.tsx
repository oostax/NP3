'use client';

import Script from 'next/script';
import React from 'react';

interface YandexMetricaProps {
  id: string;
}

export function YandexMetrica({ id }: YandexMetricaProps) {
  const [enabled, setEnabled] = React.useState(false);
  const prevEnabledRef = React.useRef<boolean>(false);

  React.useEffect(() => {
    // Read stored map
    try {
      const mapRaw = typeof window !== 'undefined' ? localStorage.getItem('cookie_preferences_map') : null;
      if (mapRaw) {
        const map = JSON.parse(mapRaw) as Record<string, boolean>;
        setEnabled(!!map.analytics);
        prevEnabledRef.current = !!map.analytics;
      }
    } catch {}

    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as Record<string, boolean> | undefined;
      if (detail && typeof detail.analytics === 'boolean') {
        const next = !!detail.analytics;
        const prev = prevEnabledRef.current;
        // If turning analytics off after it was on, reload to drop already loaded script
        if (prev && !next) {
          prevEnabledRef.current = next;
          try { sessionStorage.setItem('analytics_disabled_at', String(Date.now())); } catch {}
          window.location.reload();
          return;
        }
        prevEnabledRef.current = next;
        setEnabled(next);
      }
    };
    window.addEventListener('cookie-preferences-changed', handler as EventListener);
    return () => window.removeEventListener('cookie-preferences-changed', handler as EventListener);
  }, []);

  // If not enabled, don’t load script at all
  if (!enabled) return null;

  return (
    <>
      <Script
        id="yandex-metrica"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${id}', 'ym');

            ym(${id}, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
          `,
        }}
      />
      <noscript>
        <div>
          <img
            src={`https://mc.yandex.ru/watch/${id}`}
            style={{ position: 'absolute', left: '-9999px' }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
}

