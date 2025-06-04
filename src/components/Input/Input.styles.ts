import { TextInput } from 'react-native';
import styled, { css, Theme } from '@emotion/native';

export type InputState = 'error' | 'focused' | 'default';

export type ContainerProps = {
  state: 'error' | 'focused' | 'default';
  size: 'small' | 'medium';
};

const containerModifiders = {
  error: (theme: Theme) => css`
    border-color: ${theme.colors.error.main};
  `,
  focused: (theme: Theme) => css`
    border-color: ${theme.colors.primary.main};
  `,
  default: (theme: Theme) => css`
    border-color: ${theme.colors.gray.main};
  `,
  small: () => css`
    height: 540px;
  `,
  medium: () => css`
    height: 50px;
  `,
};

const inputModifiders = {
  small: (theme: Theme) => css`
    font-size: ${theme.fonts.size.medium}px;
  `,
  medium: (theme: Theme) => css`
    font-size: ${theme.fonts.size.large}px;
  `,
};

export const Container = styled.View<ContainerProps>`
  ${({ theme, state, size }) => css`
    align-items: center;
    border-radius: 10px;
    border-width: 1px;
    flex-direction: row;
    min-height: 30px;
    padding-horizontal: 5px;

    ${containerModifiders[state](theme)}
    ${containerModifiders[size]()}
  `}
`;

export const Input = styled(TextInput)<Pick<ContainerProps, 'size'>>`
  ${({ theme, size }) => css`
    flex: 1;
    font-family: ${theme.fonts.weight.regular};
    font-size: ${theme.fonts.size.large}px;
    color: ${theme.colors.black.main};
    align-items: center;
    ${inputModifiders[size](theme)};
    padding-vertical: 13px;
  `}
`;
