/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primaryFont': 'var(--primaryFont)',
        'primaryBg': 'var(--primaryBg)',
        'accentOrange': 'var(--accentOrange)',
        'accentGreen': 'var(--accentGreen)',
        'accentGold': 'var(--accentGold)',
        'accentRed': 'var(--accentRed)',
      },
      maxWidth: {
        'cutoff': '850px',
      }
    },
  },
  plugins: [],
}

