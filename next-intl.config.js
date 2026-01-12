/** @type {import('next-intl').NextIntlConfig} */
const config = {
  locales: ['en', 'bg', 'el'],
  defaultLocale: 'en',
  messages: {
    en: () => import('./messages/en.json').then(m => m.default),
    bg: () => import('./messages/bg.json').then(m => m.default),
    el: () => import('./messages/el.json').then(m => m.default),
  },
};

module.exports = config;