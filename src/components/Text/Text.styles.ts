import styled, { css } from '@emotion/native';
import { Color, FontSize, FontWeight, Palette } from '@/types/theme';

export type TextProps = {
  color?: Color;
  palette?: Palette;
  size?: FontSize | number;
  weight?: FontWeight;
};

export const Text = styled.Text<TextProps>`
  ${({
    theme,
    color = 'main',
    palette = 'primary',
    size = 'medium',
    weight = 'regular',
    ...props
  }) => css`
    color: ${theme.colors[palette][color]};
    font-family: ${theme.fonts.weight[weight]};
    font-size: ${theme.fonts.size[size as FontSize] ||
    theme.rfvalue(size as number)}px;
  `}
`;
