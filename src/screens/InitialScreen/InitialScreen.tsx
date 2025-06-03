import { TouchableOpacity, View } from 'react-native';
import { ImageBackground } from 'expo-image';

import { Button, Line, Spancing, Text } from '@/components';

import * as S from './InitialScreen.styles';

export function InitialScreen() {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      contentFit="cover"
      source={require('@/assets/images/initial.png')}
    >
      <S.Gradient colors={['#00000080', '#1e21312f', '#2d35656f']}>
        <View className="flex-1">
          <View className="flex-2 items-start mt-[15%]">
            <Text.Title
              adjustsFontSizeToFit
              color={80}
              numberOfLines={1}
              palette="gray"
              size={90}
            >
              Bem-vindo ao
            </Text.Title>
            <Text.Title
              adjustsFontSizeToFit
              color="main"
              numberOfLines={1}
              palette="primary"
              size={50}
              className="leading-[55px]"
            >
              Facilicare
            </Text.Title>
            <Spancing y={6} />
            <Text.Subtitle
              color={50}
              palette="gray"
              size="xlarge"
              className="text-subtitle"
            >
              Seu parceiro em cuidados diários.
            </Text.Subtitle>
          </View>
          <View className="flex-1 items-center justify-center">
            <View className="flex-row w-full items-center">
              <Line color="#ffffffa6" />
              <S.Social
                adjustsFontSizeToFit
                numberOfLines={1}
                size="large"
                className="text-tertiary-50"
              >
                entrar com
              </S.Social>
              <Line color="#ffffffa6" />
            </View>
            <Spancing y={10} />
            <View className="flex-row">
              <Button.Account variant="facebook" />
              <Spancing x={10} />
              <Button.Account variant="google" />
            </View>
            <Spancing y={10} />
            <S.ButtonLogin>
              <Text size="large" palette="white" className="leading-[30px]">
                Começar com email
              </Text>
            </S.ButtonLogin>
          </View>
        </View>
        <S.Footer>
          <S.TextSignUp>Não possui uma conta?</S.TextSignUp>
          <Spancing x={2} />
          <TouchableOpacity>
            <S.TextSignUp
              textDecoration="underline"
              className="text-tertiary-50"
            >
              Criar
            </S.TextSignUp>
          </TouchableOpacity>
        </S.Footer>
      </S.Gradient>
    </ImageBackground>
  );
}
