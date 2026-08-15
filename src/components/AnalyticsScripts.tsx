/**
 * GA4 / Meta Pixel loaders, gated by vanilla-cookieconsent.
 *
 * These render as type="text/plain" with data-category set — vanilla-cookieconsent
 * scans the DOM for that pattern and only flips them to executable scripts
 * once the visitor accepts the matching category (or already had before, on
 * repeat visits). Nothing loads until NEXT_PUBLIC_GA_MEASUREMENT_ID /
 * NEXT_PUBLIC_META_PIXEL_ID are set, so this is inert today.
 */
export function AnalyticsScripts() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <>
      {gaId ? (
        <>
          <script
            type="text/plain"
            data-category="analytics"
            data-service="Google Analytics"
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          />
          <script
            type="text/plain"
            data-category="analytics"
            data-service="Google Analytics"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}', { anonymize_ip: true });`,
            }}
          />
        </>
      ) : null}

      {metaPixelId ? (
        <script
          type="text/plain"
          data-category="marketing"
          data-service="Meta Pixel"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${metaPixelId}');
fbq('track', 'PageView');`,
          }}
        />
      ) : null}
    </>
  );
}
