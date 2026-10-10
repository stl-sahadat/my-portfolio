import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        deepBlack: '#050505',
        charcoal: '#0F0F12',
        darkCard: '#121217',
        darkBorder: '#202028',
        crimson: '#dc2626',
        crimsonDark: '#991b1b',
        amberGlow: '#facc15',
        zincMuted: '#71717A',
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        script: ['Caveat', 'cursive'],
        signature: ['"Alex Brush"', '"Great Vibes"', 'cursive'],
        syne: ['Syne', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('light', ['html.light &', 'html:not(.dark) &']);
    }),
  ],
}
