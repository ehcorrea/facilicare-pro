import { ImageBackground } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { TouchableOpacity, View } from 'react-native';

import { Button, Line, Spancing, Text } from '@/components';

import * as S from './InitialScreen.styles';

export function InitialScreen() {
  const handleSignup = () => {
    router.push('/signup');
  };

  const handleSignin = () => {
    router.push('/signin');
  };

  return (
    <ImageBackground
      className="flex-1"
      contentFit="cover"
      source={require('@/assets/images/initial.png')}
    >
      <LinearGradient
        className="flex-1 p-[5%]"
        colors={['#00000080', '#1e21312f', '#2d35656f']}
      >
        <View className="flex-1">
          <View className="flex-2 items-start mt-[15%]">
            <Text.Title
              adjustsFontSizeToFit
              color={80}
              numberOfLines={1}
              palette="gray"
              customSize={90}
              height={50}
            >
              Bem-vindo ao
            </Text.Title>
            <Text.Title
              adjustsFontSizeToFit
              color="main"
              numberOfLines={1}
              palette="primary"
              customSize={50}
              height={50}
            >
              Facilicare
            </Text.Title>
            <Spancing y="6" />
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
              <Text
                adjustsFontSizeToFit
                numberOfLines={1}
                size="large"
                className="text-white flex-1 text-center"
              >
                entrar com
              </Text>
              <Line color="#ffffffa6" />
            </View>
            <Spancing y="15" />
            <View className="flex-row">
              <Button.Account variant="facebook" />
              <Spancing x="10" />
              <Button.Account variant="google" />
            </View>
            <Spancing y="5" />
            <S.ButtonLogin onPress={handleSignin}>
              <Text size="large" palette="white">
                Começar com email
              </Text>
            </S.ButtonLogin>
            <Spancing y="5" />
            <View className="flex-row justify-center w-full">
              <S.TextSignUp>Não possui uma conta?</S.TextSignUp>
              <Spancing x="2" />
              <TouchableOpacity onPress={handleSignup}>
                <S.TextSignUp
                  textDecoration="underline"
                  className="text-tertiary-50"
                >
                  Criar
                </S.TextSignUp>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}
