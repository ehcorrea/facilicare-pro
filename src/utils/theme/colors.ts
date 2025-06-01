import { vars } from 'nativewind';

export const theme = {
  brand: {
    light: vars({
      '--color-primary-main': '#0A6E9E',
      '--color-primary-80': '#2980A8',
      '--color-primary-50': '#5BA3C2',
      '--color-primary-20': '#A3D0E4',
      '--color-secondary-main': '#F16A00',
      '--color-secondary-80': '#f48f3a',
      '--color-secondary-50': '#f7b87a',
      '--color-secondary-20': '#fbe3cc',
      '--color-tertiary-main': '#FEAC00',
      '--color-tertiary-80': '#feb82e',
      '--color-tertiary-50': '#fed46e',
      '--color-tertiary-20': '#fff2cc',
      '--color-quaternary-main': '#C1A000',
      '--color-quaternary-80': '#d1b833',
      '--color-quaternary-50': '#e2cf66',
      '--color-quaternary-20': '#f3e799',
      '--color-error-main': '#F30000',
      '--color-error-80': '#F34C4C',
      '--color-error-50': '#F38585',
      '--color-error-20': '#F3BEBE',
      '--color-gray-main': '#9A9FAE',
      '--color-gray-80': '#A8ACB9',
      '--color-gray-50': '#C4C7D0',
      '--color-gray-20': '#EBEBEB',
    }),
  },
};

export type themes = keyof typeof theme;
export type colorSchemes = keyof typeof theme.brand;
