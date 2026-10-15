/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          bg: '#090611',
          surface: '#110C1F',
          raised: '#1B122D',
          line: '#302141',
        },
        ink: {
          DEFAULT: '#E7ECF3',
          muted: '#B3A9C6',
          faint: '#8F819F',
        },
        signal: {
          blue: '#A78BFA',
          blueDim: '#6D28D9',
          amber: '#F0A84E',
          green: '#5FD8A6',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, #1A2130 1px, transparent 1px), linear-gradient(to bottom, #1A2130 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        rise: 'rise 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
