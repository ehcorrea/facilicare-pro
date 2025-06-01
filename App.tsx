import { ExpoRoot } from 'expo-router';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'SofiaPro-Regular': require('./src/assets/fonts/SofiaPro-Regular.ttf'),
    'SofiaPro-Medium': require('./src/assets/fonts/SofiaPro-Medium.ttf'),
    'SofiaPro-SemiBold': require('./src/assets/fonts/SofiaPro-SemiBold.ttf'),
    'SofiaPro-Bold': require('./src/assets/fonts/SofiaPro-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <ExpoRoot context={require.context('./app')} />;
}
