import { defineConfig } from 'vite';

export default (config: any) => {
  return defineConfig({
    ...config,
    server: {
      ...config.server,
      allowedHosts: [
        'nasa-quarter-occupations-chrome.trycloudflare.com',
        'spdesignstudio.vercel.app'
      ],
    },
  });
};