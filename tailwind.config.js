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
        paper: 'oklch(14% 0.02 260 / <alpha-value>)',
        'paper-2': 'oklch(18% 0.025 260 / <alpha-value>)',
        'paper-3': 'oklch(22% 0.03 260 / <alpha-value>)',
        ink: 'oklch(96% 0.01 90 / <alpha-value>)',
        'ink-2': 'oklch(72% 0.02 260 / <alpha-value>)',
        'ink-3': 'oklch(58% 0.02 260 / <alpha-value>)',
        rule: 'oklch(28% 0.02 260 / <alpha-value>)',
        accent: 'oklch(62% 0.14 265 / <alpha-value>)',
        'accent-hover': 'oklch(68% 0.16 265 / <alpha-value>)',
        'accent-muted': 'oklch(62% 0.14 265 / 0.12)',
        focus: 'oklch(70% 0.16 265 / <alpha-value>)',
        success: 'oklch(72% 0.14 145 / <alpha-value>)',
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
