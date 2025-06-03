import { TouchableOpacity } from 'react-native';
import styled, { css } from '@emotion/native';
import { LinearGradient } from 'expo-linear-gradient';

import { Text } from '@/components';

export const Gradient = styled(LinearGradient)`
  flex: 1;
  padding: 5%;
`;

export const Social = styled(Text)`
  ${({ theme }) => css`
    color: white;
    flex: 1;
    margin-horizontal: ${theme.rwvalue(20)}px;
    text-align: center;
  `}
`;

export const ButtonLogin = styled(TouchableOpacity)`
  ${({ theme }) => css`
    align-items: center;
    background-color: #ffffff6b;
    border-color: white;
    border-radius: ${theme.rfvalue(30)}px;
    border-width: 1px;
    justify-content: center;
    min-height: ${theme.rhvalue(50)}px;
    padding-horizontal: 10px;
    padding-vertical: 10px;
    width: 100%;
  `}
`;

export const Footer = styled.View`
  ${({ theme }) => css`
    align-items: baseline;
    flex-direction: row;
    height: 8%;
    justify-content: center;
    padding-top: ${theme.rhvalue(10)}px;
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

// export const Subtitle = styled(Text).attrs({ size: 'xlarge' })`
//   ${({ theme }) => css`
//     color: #cdd7f8;
//     line-height: ${theme.rfvalue(30)}px;
//     margin-top: ${theme.rhvalue(15)}px;
//   `}
// `;

// export const TextSocial = styled(Text).attrs({
//   adjustsFontSizeToFit: true,
//   numberOfLines: 1,
//   size: 'large',
//   weight: 'medium',
// })`
//   ${({ theme }) => css`
//     color: ${theme.colors.default.white.main};
//     flex: 1;
//     margin-horizontal: ${theme.rwvalue(20)}px;
//     text-align: center;
//   `}
// `;

// export const ButtonLogin = styled(TouchableOpacity)`
//   ${({ theme }) => css`
//     align-items: center;
//     background-color: #ffffff6b;
//     border-color: ${theme.colors.default.white.main};
//     border-radius: ${theme.rfvalue(30)}px;
//     border-width: 1px;
//     justify-content: center;
//     min-height: ${theme.rhvalue(50)}px;
//     padding-horizontal: ${theme.rhvalue(10)}px;
//     padding-vertical: ${theme.rhvalue(10)}px;
//     width: 100%;
//   `}
// `;

// export const TextLogin = styled(Text).attrs({ size: 'large' })`
//   color: white;
// `;
