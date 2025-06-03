import styled, { css } from '@emotion/native';
import { Image } from 'expo-image';

import { Color, FontSize, Palette } from '@/types/theme';

import { Text } from '../Text/Text';

export type ButtonProps = {
  color?: Color;
  palette?: Palette;
  size?: FontSize;
  elevation?: boolean;
};

const buttonModifiers = {
  elevation: () => css`
    elevation: 2;
    shadow-color: #000;
    shadow-offset: 0px 3px;
    shadow-opacity: 0.1;
    shadow-radius: 5px;
  `,
};

export const Button = styled.TouchableOpacity<ButtonProps>`
  ${({ theme, elevation = false, palette = 'primary', color = 'main' }) => css`
    align-items: center;
    background-color: ${theme.colors[palette][color]};
    border-radius: ${theme.rfvalue(30)}px;
    flex-direction: row;
    height: 50px;
    justify-content: center;
    justify-content: space-evenly;
    width: 100%;

    ${elevation && buttonModifiers.elevation()}
  `}
`;

export const Label = styled(Text.Subtitle)`
  ${({ theme, palette = 'white' }) => css`
    color: ${theme.colors[palette].main};
    font-size: ${theme.fonts.size.medium}px;
    letter-spacing: ${theme.rfvalue(1)}px;
    text-align: center;
    line-height: ${theme.rfvalue(55)}px;
  `}
`;

export const IconAccount = styled(Image)`
  ${({ theme }) => css`
    height: ${theme.rfvalue(33)}px;
    width: ${theme.rfvalue(33)}px;
  `}
`;

export const ButtonIcon = styled(Button)`
  ${({ theme }) => css`
    border-radius: ${theme.rfvalue(10)}px;
    height: ${theme.rwvalue(38)}px;
    width: ${theme.rwvalue(38)}px;
  `}
`;
