/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        boyer: {
          bg: '#1f2235',
          card: '#313552',
          social: '#2c304a',
          dark: '#181a29',
          yellow: '#ffc576',
          'yellow-hover': '#fdbb60',
          muted: '#9899a8',
          text: '#ffffff',
          border: 'rgba(255, 197, 118, 0.4)',
          'border-light': 'rgba(255, 197, 118, 0.2)',
        },
        primary: 'rgb(var(--color-primary) / <alpha-value>)',   
        secondary: '#000000',
        accent: '#ffffff',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'boyer-sm': '0 1px rgba(255, 197, 118, 0.75)',
        'boyer': '0 5px rgba(255, 197, 118, 0.75)',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};