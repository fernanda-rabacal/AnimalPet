import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        headline: '#1A1A1A',
        paragraph: '#404040',
        'green-primary': '#2FBF71',
        'green-primary-dark': '#219b5e',
        'bg-dark': '#222222',
        'brand-beige': '#fffaf0', 
        'bg-light': '#f0fef8', 
        'brand-greenlight': '#c9fddf',
        'bg-green-light': '#ebfff3',
        "base-blue" : '#0006C1', 
        "base-blue-light" : '#007dc5', 
        "base-button": "#D1D1D1",
        "base-background": "#FAFAFA",
        "base-card": "#E9E9E9",
        "base-input": "#E1E1E1",
        "base-hover": "#D7D5D5",
        "base-label": "#8D8686",
        "base-text": "#574F4D",
        "base-subtitle": "#403937",
        "base-title": "#272221",
        "base-error": "#f84747",
      },
      fontSize: {
        'title-s': '1.8rem',
        'title-m': '2.4rem',
        'title-l': '3.2rem',
        'regular-m': '1.6rem',
        'regular-l': '1.8rem',
        'regular-xl': '2.0rem',
        "button-g": "1.875rem",
      },
      lineHeight: {
        relaxed: '150%',
        normal: '130%',
      }
    },
  },
  plugins: [],
} satisfies Config;
