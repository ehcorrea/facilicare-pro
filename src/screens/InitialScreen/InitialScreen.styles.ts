import { TouchableOpacity } from 'react-native';
import styled, { css } from '@emotion/native';

import { Text } from '@/components';

export const ButtonLogin = styled(TouchableOpacity)`
  ${({ theme }) => css`
    align-items: center;
    background-color: #ffffff6b;
    border-color: white;
    border-radius: ${theme.rfvalue(30)}px;
    border-width: 1px;
    height: 50px;
    justify-content: center;
    padding: 10px;
    width: 100%;
  `}
`;

type TextSignUpProps = {
  textDecoration?: 'underline';
};

export const TextSignUp = styled(Text)<TextSignUpProps>`
  ${({ theme, textDecoration = 'none' }) => css`
    color: ${theme.colors.white.main};
    font-family: ${theme.fonts.weight.medium};
    font-size: ${theme.fonts.size.large}px;
    text-decoration-line: ${textDecoration};
  `}
`;
