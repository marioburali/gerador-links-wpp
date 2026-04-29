/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066CC',
      },
      boxShadow: {
        card: '0 18px 50px rgba(27,42,59,0.12)',
      },
    },
  },
};
