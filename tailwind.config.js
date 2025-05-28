/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F7FB',
          100: '#CCF0F7',
          200: '#99E0EF',
          300: '#66D1E7',
          400: '#33C1DF',
          500: '#3099BC', // Main primary from logo
          600: '#267A97',
          700: '#1D5C71',
          800: '#133D4C',
          900: '#0A1F26',
        },
        secondary: {
          50: '#FEF9ED',
          100: '#FDF3DB',
          200: '#FBE7B7',
          300: '#F9DB93',
          400: '#F7CF6F',
          500: '#F0BC5E', // Main secondary from logo
          600: '#C0964B',
          700: '#907138',
          800: '#604B26',
          900: '#302613',
        },
        dark: '#1A202C',
        light: '#F7FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'soft': '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
        'hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};