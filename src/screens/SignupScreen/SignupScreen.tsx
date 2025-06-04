import { ScrollView, View } from 'react-native';

import { Spancing, Text, Input, Button, Line } from '@/components';

import * as S from './SignupScreen.styles';

export function SignupScreen() {
  return (
    <>
      <S.Header
        contentFit="cover"
        source={require('@/assets/images/elipses.svg')}
      >
        <Button.Back />
      </S.Header>
      <ScrollView
        bounces={false}
        className="flex-1"
        contentContainerStyle={{ padding: '5%' }}
        showsVerticalScrollIndicator={false}
      >
        <Text.Title size="xhuge">Criar Conta</Text.Title>
        <Spancing y="15" />
        <Input label="Nome" placeholder="Nome Completo" />
        <Spancing y="5" />
        <Input label="Email" placeholder="exemplo@email.com" />
        <Spancing y="5" />
        <Input label="Senha" variant="password" placeholder="••••••" />
        <Spancing y="5" />
        <Input label="Repetir senha" variant="password" placeholder="•••••••" />
        <Spancing y="15" />
        <Button elevation className="w-[60%] self-center">
          CRIAR CONTA
        </Button>
        <Spancing y="5" />
        <View className="flex-row self-center">
          <S.Label>Já tem um conta?</S.Label>
          <Spancing x="3" />
          <Text palette="primary">Entrar</Text>
        </View>
        <Spancing y="15" />
        <View className="flex-row flex-1 items-center">
          <Line />
          <Spancing x="10" />
          <S.Label size="large">criar com</S.Label>
          <Spancing x="10" />
          <Line />
        </View>
        <Spancing y="15" />
        <View className="flex-row">
          <Button.Account variant="facebook" />
          <Spancing x="10" />
          <Button.Account variant="google" />
        </View>
      </ScrollView>
    </>
  );
}
