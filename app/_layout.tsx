import '../global.css';
import { Stack } from 'expo-router';

import { Provider } from '@/components';

export default function RootLayout() {
  return (
    <Provider>
      <Stack>
        <Stack.Screen name="index" />
      </Stack>
    </Provider>
  );
}
