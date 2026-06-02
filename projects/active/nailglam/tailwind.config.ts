import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FEF2F6',
          100: '#FCE7EF',
          200: '#F9CFE0',
          300: '#F4B0CA',
          400: '#E8A0BF',
          500: '#DA84A9',
          600: '#C47A9D',
          700: '#A85D80',
          800: '#8C4868',
          900: '#703855',
        },
        accent: {
          50: '#FDF8F4',
          100: '#FBF0E8',
          200: '#F5E1D0',
          300: '#EEC9A8',
          400: '#D4A574',
          500: '#C28E58',
          600: '#A87543',
          700: '#8C5E33',
          800: '#704928',
          900: '#54361D',
        },
        warm: '#FDF8F7',
        blush: '#F9E4E9',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(135deg, #FDF8F7 0%, #FCE7EF 30%, #F9CFE0 60%, #FDF8F7 100%)',
        'card-gradient':
          'linear-gradient(180deg, transparent 0%, rgba(196, 122, 157, 0.03) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
