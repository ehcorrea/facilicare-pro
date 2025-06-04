import { rfvalue, rhvalue, rwvalue } from '@/utils/responsive/responsive';

const colorScheme = {
  light: {
    primary: {
      main: '#0A6E9E',
      80: '#2980A8',
      50: '#5BA3C2',
      20: '#A3D0E4',
    },
    secondary: {
      main: '#F16A00',
      80: '#f48f3a',
      50: '#f7b87a',
      20: '#fbe3cc',
    },
    tertiary: {
      main: '#FEAC00',
      80: '#feb82e',
      50: '#fed46e',
      20: '#fff2cc',
    },
    quaternary: {
      main: '#C1A000',
      80: '#d1b833',
      50: '#e2cf66',
      20: '#f3e799',
    },
    error: {
      main: '#F30000',
      80: '#F34C4C',
      50: '#F38585',
      20: '#F3BEBE',
    },
    gray: {
      main: '#9A9FAE',
      80: '#A8ACB9',
      50: '#C4C7D0',
      20: '#EBEBEB',
    },
  },
};

export const THEME = {
  colors: {
    black: {
      main: '#1A1D26',
      80: '#2A2F3D',
      50: '#4D5364',
      20: '#6E7489',
    },
    white: {
      main: '#FFFFFF',
      80: '#FFFFFF',
      50: '#FFFFFF',
      20: '#FFFFFF',
    },
    transparent: {
      main: 'transparent',
      80: 'transparent',
      50: 'transparent',
      20: 'transparent',
    },
    ...colorScheme.light,
  },
  fonts: {
    weight: {
      regular: 'SofiaPro-Regular',
      medium: 'SofiaPro-Medium',
      semibold: 'SofiaPro-SemiBold',
      bold: 'SofiaPro-Bold',
    },
    size: {
      small: rfvalue(12),
      medium: rfvalue(15),
      large: rfvalue(18),
      xlarge: rfvalue(24),
      huge: rfvalue(30),
      xhuge: rfvalue(36),
    },
    height: {
      small: rfvalue(12),
      medium: rfvalue(18),
      large: rfvalue(20),
      xlarge: rfvalue(30),
      huge: rfvalue(50),
      xhuge: rfvalue(60),
    },
  },
  rfvalue,
  rwvalue,
  rhvalue,
} as const;

export type ThemeType = typeof THEME;
