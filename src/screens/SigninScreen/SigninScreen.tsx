import { ScrollView, View } from 'react-native';

import {
  Button,
  HeaderPublic,
  Input,
  Line,
  Spancing,
  Text,
} from '@/components';

export function SigninScreen() {
  return (
    <>
      <HeaderPublic>
        <Button.Back />
      </HeaderPublic>
      <ScrollView
        bounces={false}
        className="flex-1"
        contentContainerStyle={{ padding: '5%' }}
        showsVerticalScrollIndicator={false}
      >
        <Text.Title size="xhuge">Entrar</Text.Title>
        <Spancing y="15" />
        <Input label="Email" placeholder="exemplo@email.com" />
        <Input label="Senha" variant="password" placeholder="••••••" />
        <Spancing y="5" />
        <Text palette="primary" size="medium">
          Esqueceu sua senha?
        </Text>
        <Spancing y="15" />
        <Button elevation className="w-[60%] self-center">
          ENTRAR
        </Button>
        <Spancing y="5" />
        <View className="flex-row self-center items-center">
          <Text size="large" className="text-[#5b5b5e]">
            Não tem uma conta?
          </Text>
          <Spancing x="3" />
          <Text palette="primary">Criar</Text>
        </View>
        <Spancing y="15" />
        <View className="flex-row flex-1 items-center">
          <Line />
          <Spancing x="13" />
          <Text size="large" className="text-[#5b5b5e]">
            entrar com
          </Text>
          <Spancing x="13" />
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
