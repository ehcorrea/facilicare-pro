/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    colors: {
      primary: {
        main: 'var(--color-primary-main)',
        80: 'var(--color-primary-80)',
        50: 'var(--color-primary-50)',
        20: 'var(--color-primary-20)',
      },
      secondary: {
        main: 'var(--color-secondary-main)',
        80: 'var(--color-secondary-80)',
        50: 'var(--color-secondary-50)',
        20: 'var(--color-secondary-20)',
      },
      tertiary: {
        main: 'var(--color-tertiary-main)',
        80: 'var(--color-tertiary-80)',
        50: 'var(--color-tertiary-50)',
        20: 'var(--color-tertiary-20)',
      },
      quaternary: {
        main: 'var(--color-quaternary-main)',
        80: 'var(--color-quaternary-80)',
        50: 'var(--color-quaternary-50)',
        20: 'var(--color-quaternary-20)',
      },
      error: {
        main: 'var(--color-error-main)',
        80: 'var(--color-error-80)',
        50: 'var(--color-error-50)',
        20: 'var(--color-error-20)',
      },
      gray: {
        main: 'var(--color-gray-main)',
        80: 'var(--color-gray-80)',
        50: 'var(--color-gray-50)',
        20: 'var(--color-gray-20)',
      },
    },
    extend: {
      flex: {
        2: '2',
        3: '3',
        4: '4',
      },
      fontFamily: {
        normal: ['SofiaPro-Regular'],
        medium: ['SofiaPro-Medium'],
        semibold: ['SofiaPro-SemiBold'],
        bold: ['SofiaPro-Bold'],
      },
    },
  },
  plugins: [],
};
