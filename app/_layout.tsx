import { Stack } from 'expo-router';

import { Provider } from '@/components';

export default function RootLayout() {
  return (
    <Provider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="signup" />
      </Stack>
    </Provider>
  );
}
