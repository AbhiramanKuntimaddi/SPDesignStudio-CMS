export default [
  'strapi::logger',
  'strapi::errors',
  // 'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https://nasa-quarter-occupations-chrome.trycloudflare.com', 'spdesignstudio.vercel.app'],
          'media-src': ["'self'", 'data:', 'blob:', 'https://nasa-quarter-occupations-chrome.trycloudflare.com', 'spdesignstudio.vercel.app'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
    {
    name: 'strapi::cors',
    config: {
      origin: ['https://spdesignstudio.vercel.app', 'http://localhost:3000'],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },
];
