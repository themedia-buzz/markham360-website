/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      // Design tokens are defined as CSS custom properties in
      // src/styles/globals.css so a single swap of --colour-accent
      // (Alan Ho's red) recolours the whole site. Tailwind maps to them here.
      colors: {
        ink: 'var(--colour-ink)',
        paper: 'var(--colour-paper)',
        surface: 'var(--colour-white)',
        rule: 'var(--colour-rule)',
        muted: 'var(--colour-muted)',
        accent: 'var(--colour-accent)',
        'accent-ink': 'var(--colour-accent-ink)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '1120px',
        measure: '680px',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
      },
    },
  },
  plugins: [],
};
