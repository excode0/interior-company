import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background-rgb) / <alpha-value>)',
        backgroundSecond: 'rgb(var(--backgroundSecond-rgb) / <alpha-value>)',
        foreground: 'rgb(var(--foreground-rgb) / <alpha-value>)',
        primary: 'rgb(var(--primary-rgb) / <alpha-value>)',
        secondary: 'rgb(var(--secondary-rgb) / <alpha-value>)',
        text: 'rgb(var(--text-rgb) / <alpha-value>)',
        textSecondary: 'rgb(var(--textSecondary-rgb) / <alpha-value>)',
        textThird: 'rgb(var(--textThird-rgb) / <alpha-value>)',
      },
      fontFamily: {
        primaryTitle: ['PrimaryTitleFont', 'sans-serif'],
        secondaryTitle: ['SecondaryTitleFont', 'serif'],
        bodyText: ['BodyTextFont', 'sans-serif'],
        display: ['DisplayFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
