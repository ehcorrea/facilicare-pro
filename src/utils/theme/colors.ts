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
    }),
  },
};

export type themes = keyof typeof theme;
export type colorSchemes = keyof typeof theme.brand;
