import type { Config } from "tailwindcss";

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'primary-10': 'var(--color-primary-10)',
        'primary-20': 'var(--color-primary-20)',
        'primary-30': 'var(--color-primary-30)',
        'primary-40': 'var(--color-primary-40)',
        'primary-50': 'var(--color-primary-50)',
        'primary-60': 'var(--color-primary-60)',
        'primary-70': 'var(--color-primary-70)',
        'primary-80': 'var(--color-primary-80)',
        'primary-90': 'var(--color-primary-90)',
        secondary: 'var(--color-secondary)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;
