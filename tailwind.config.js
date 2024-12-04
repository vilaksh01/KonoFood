/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./src/popup/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        // Add nutrition-specific color scales if needed
        'nutrition': {
          good: '#22c55e',
          warning: '#eab308',
          alert: '#ef4444',
        }
      },
      spacing: {
        '18': '4.5rem',
        '112': '28rem',
        '128': '32rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
  // Don't purge classes in development for better debugging
  ...(process.env.NODE_ENV === 'development' ? { safelist: [{ pattern: /.*/ }] } : {})
};