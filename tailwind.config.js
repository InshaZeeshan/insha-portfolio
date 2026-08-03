/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFF9F5',
        berry: '#420D19',
        milkshake: '#F6BAD6',
        sorbet: '#F1D3DF',
        cherry: '#2F020C',
        smoothie: '#741E31',
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        paper: '0 1px 2px rgba(66,13,25,0.06), 0 8px 20px rgba(66,13,25,0.08)',
        folder: '0 10px 30px rgba(66,13,25,0.18), 0 2px 6px rgba(66,13,25,0.10)',
        sticky: '2px 3px 0 rgba(66,13,25,0.12)',
      },
      borderRadius: {
        blob: '42% 58% 61% 39% / 45% 41% 59% 55%',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(var(--rot, 0deg))' },
          '50%': { transform: 'translateY(-8px) rotate(var(--rot, 0deg))' },
        },
        sparkle: {
          '0%, 100%': { opacity: 0.4, transform: 'scale(0.9)' },
          '50%': { opacity: 1, transform: 'scale(1.15)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        sparkle: 'sparkle 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
