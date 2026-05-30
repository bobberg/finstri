import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#08111f',
        graphite: '#111827',
        cloud: '#f7fafc',
        line: '#dbe4ee',
        ocean: '#0b5cff',
        mint: '#16c784',
      },
      boxShadow: {
        'soft-xl': '0 24px 80px -36px rgba(8, 17, 31, 0.45)',
        'focus-ring': '0 0 0 4px rgba(11, 92, 255, 0.16)',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(rgba(8,17,31,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(8,17,31,0.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
} satisfies Config;