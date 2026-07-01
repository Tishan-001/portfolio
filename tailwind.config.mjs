/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--c-bg)',
        'bg-2': 'var(--c-bg-2)',
        panel: 'var(--c-panel)',
        line: 'var(--c-line)',
        ink: 'var(--c-ink)',
        muted: 'var(--c-muted)',
        dim: 'var(--c-dim)',
        accent: '#22d3ee',
        'accent-2': '#34e0a8',
        warn: '#f7b955',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: { content: '1080px' },
    },
  },
  plugins: [],
};
