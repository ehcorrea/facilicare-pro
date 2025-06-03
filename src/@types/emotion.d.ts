// src/@types/emotion.d.ts
import '@emotion/react';
import { ThemeType } from '@/constants/theme';

declare module '@emotion/react' {
  export type Theme = ThemeType;
}

declare module '@emotion/native' {
  export function css(...args: unknown[]): string;
}
