import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      colors: {
        brand: {
          dark: '#1a1a1a',
          gray: '#f5f5f7',
          text: '#4b5563',
        },
      },
      backgroundImage: {
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #E2E8F0 0deg, #F3E8FF 180deg, #E0F2FE 360deg)',
      },
    },
  },
  plugins: [],
};
export default config;