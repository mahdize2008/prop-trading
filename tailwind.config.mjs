/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Default for App Router
    './app/*.{js,ts,jsx,tsx}', // Default for App Router
    './components/**/*.{js,ts,jsx,tsx}', // Your components
    './styles/**/*.css' // Include the folder where `globals.css` is located
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
    },
    container: {
      padding: '16px',
      center: true,
    },
    fontFamily: {
      'peyda': 'peyda',
    },
    fontWeight: {
      thin: '100',
      extralight: '100',
      light: '100',
      normal: 'normal',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      md: '18px',
      lg: '20px',
      xl: '22px',
      '2xl': '24px',
      '3xl': '26px',
      '4xl': '28px',
      '5xl': '30px',
      '6xl': '32px',
      '7xl': '34px',
      '8xl': '36px',
      '9xl': '38px',
      '10xl': '40px',
    },
    colors: {
      transparent: 'transparent',
      white: 'rgb(var(--color-white) / <alpha-value>)',
      black: 'rgb(var(--color-black) / <alpha-value>)',
      primary: {
        DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
        light: 'rgb(var(--color-primary-light) / <alpha-value>)',
        dark: 'rgb(var(--color-primary-dark) / <alpha-value>)',
      },
      secondary: {
        DEFAULT: 'rgb(var(--color-secondary) / <alpha-value>)',
        light: 'rgb(var(--color-secondary-light) / <alpha-value>)',
        dark: 'rgb(var(--color-secondary-dark) / <alpha-value>)',
      },
      dim: {
        DEFAULT: 'rgb(var(--color-dim) / <alpha-value>)',
        light: 'rgb(var(--color-dim-light) / <alpha-value>)',
        dark: 'rgb(var(--color-dim-dark) / <alpha-value>)',
      },
      info: {
        DEFAULT: 'rgb(var(--color-info) / <alpha-value>)',
        light: 'rgb(var(--color-info-light) / <alpha-value>)',
        dark: 'rgb(var(--color-info-dark) / <alpha-value>)',
      },
      danger: {
        DEFAULT: 'rgb(var(--color-danger) / <alpha-value>)',
        light: 'rgb(var(--color-danger-light) / <alpha-value>)',
        dark: 'rgb(var(--color-danger-dark) / <alpha-value>)',
      },
      warning: {
        DEFAULT: 'rgb(var(--color-warning) / <alpha-value>)',
        light: 'rgb(var(--color-warning-light) / <alpha-value>)',
        dark: 'rgb(var(--color-warning-dark) / <alpha-value>)',
      },
      success: {
        DEFAULT: 'rgb(var(--color-success) / <alpha-value>)',
        light: 'rgb(var(--color-success-light) / <alpha-value>)',
        dark: 'rgb(var(--color-success-dark) / <alpha-value>)',
      },
      neutral: {
        DEFAULT: 'rgb(var(--color-neutral) / <alpha-value>)',
        light: 'rgb(var(--color-neutral-light) / <alpha-value>)',
        dark: 'rgb(var(--color-neutral-dark) / <alpha-value>)',
      },
      
    },
    borderRadius: {
      none : '0',
      xs : '4px',
      sm : '6px',
      base : '8px',
      md : '10px',
      lg : '12px',
      xl : '14px',
      '2xl' : '16px',
      '3xl' : '18px',
      circle : '50%',
      full : '1000px',
    }

  },
};