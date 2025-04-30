/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1E1E1E', // Black background
        'secondary': '#1a1a1a', // Dark gray for secondary elements
        'accent': '#646cff',
        'accent-light': '#818cf8',
        'success': '#4ade80',
        'neon-purple': '#a78bfa',
        'neon-blue': '#60a5fa',
        'neon-cyan': '#67e8f9',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Default sans-serif
        orbitron: ['Orbitron', 'sans-serif'],
        bungee: ['Bungee', 'cursive'],
        luckiest: ['Luckiest Guy', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'gradient-x': 'gradient-x 15s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'gradient-x': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      boxShadow: {
        'neon': '0 0 20px rgba(255, 255, 255, 0.5)',
        'neon-strong': '0 0 30px rgba(100, 108, 255, 0.7)',
      },
    },
  },
  plugins: [],
}