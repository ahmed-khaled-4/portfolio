/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        paper: 'oklch(11% 0.018 48 / <alpha-value>)',
        'paper-2': 'oklch(15% 0.022 46 / <alpha-value>)',
        'paper-3': 'oklch(19% 0.026 44 / <alpha-value>)',
        ink: 'oklch(97% 0.012 88 / <alpha-value>)',
        'ink-2': 'oklch(74% 0.025 75 / <alpha-value>)',
        'ink-3': 'oklch(58% 0.02 70 / <alpha-value>)',
        rule: 'oklch(27% 0.025 48 / <alpha-value>)',
        accent: 'oklch(73% 0.11 58 / <alpha-value>)',
        'accent-hover': 'oklch(78% 0.12 62 / <alpha-value>)',
        'accent-muted': 'oklch(73% 0.11 58 / 0.14)',
        focus: 'oklch(76% 0.12 58 / <alpha-value>)',
        success: 'oklch(68% 0.11 155 / <alpha-value>)',
        glow: 'oklch(58% 0.09 190 / <alpha-value>)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s var(--ease-out) forwards',
        'slide-up': 'slideUp 0.5s var(--ease-out) forwards',
        'pulse-soft': 'pulseSoft 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.55' },
        },
      },
      transitionTimingFunction: {
        hallmark: 'var(--ease-out)',
      },
    },
  },
  plugins: [],
};
